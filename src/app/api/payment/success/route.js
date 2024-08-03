import { NextResponse } from "next/server";
import paypal from "paypal-rest-sdk";
import { Payment } from "../model";
import { promisify } from "util";
import { Connect } from "../../Connect";
import { SendPerchesMail } from "../../SendMail";

paypal.configure({
  mode: process.env.NEXT_PUBLIC_PAYPAL_MODE,
  client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_PAYPAL_SECRET,
});

const executePaymentAsync = promisify(
  paypal.payment.execute.bind(paypal.payment)
);

const success_redirect_URL = process.env.NEXT_PUBLIC_SUCCESS_REDIRECT;
const failed_redirect_URL = process.env.NEXT_PUBLIC_FAILED_REDIRECT;
export async function GET(req) {
  await Connect();

  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("paymentId");
    const payerId = searchParams.get("PayerID");

    if (!paymentId || !payerId) {
      return NextResponse.json(
        { message: "Missing paymentId or payerId" },
        { status: 400 }
      );
    }

    const paymentDetails = await executePaymentAsync(paymentId, {
      payer_id: payerId,
    });

    if (paymentDetails.state === "approved") {
      const { payer, transactions } = paymentDetails;
      const { payer_info } = payer;
      const { item_list } = transactions[0];

      const paymentData = {
        payer_Info: {
          first_name: payer_info.first_name || "",
          last_name: payer_info.last_name || "",
          country: payer_info.country_code || "",
          town_Ci: payer_info.shipping_address?.city || "",

          email: payer_info.email || "",
        },
        items: item_list.items.map((item) => ({
          productId: item.sku || "",
          name: item.name || "",
          description: item.description || "",
          price: parseFloat(item.price) || 0,
          quantity: parseInt(item.quantity) || 0,
          image: item.image_url || "",
        })),
        subTotal: parseFloat(transactions[0].amount.total) || 0,
      };

      const payment = new Payment(paymentData);
      const newPayment = await payment.save();

      const courses = item_list?.items?.map((e) => {
        return `${e.name} `;
      });
      SendPerchesMail(
        courses,
        payer_info?.first_name + " " + payer_info?.last_name
      );

      return NextResponse.redirect("https://easy-forex.vercel.app/payment/success");
    } else {
      return NextResponse.redirect("https://easy-forex.vercel.app/payment/failed");
    }
  } catch (error) {
    console.error("Error executing payment:", error);
    return NextResponse.json(
      { message: "Error executing payment", error },
      { status: 500 }
    );
  }
}

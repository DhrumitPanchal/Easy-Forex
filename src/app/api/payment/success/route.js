import paypal from "paypal-rest-sdk";
import { NextResponse } from "next/server";
import { promisify } from "util";
import { Payment } from "../model";
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
    const paymentId = searchParams?.get("paymentId");
    const payerId = searchParams?.get("PayerID");

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

      // Update the payment status to "success"
      await Payment.findOneAndUpdate(
        { paymentId },
        { $set: { status: "success" } }
      );

      const courses = item_list.items.map((e) => `${e.name} `);
      SendPerchesMail(
        courses,
        `${payer_info.first_name} ${payer_info.last_name}`
      );

      return NextResponse.redirect(success_redirect_URL);
    } else {
      // Delete the payment data from the database if the payment failed
      await Payment.findOneAndDelete({ paymentId });
      return NextResponse.redirect(failed_redirect_URL);
    }
  } catch (error) {
    console.error("Error executing payment:", error);
    await Payment.findOneAndDelete({ paymentId });
    return NextResponse.json(
      { message: "Error executing payment", error },
      { status: 500 }
    );
  }
}

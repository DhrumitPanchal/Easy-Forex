import { NextResponse } from "next/server";
import paypal from "paypal-rest-sdk";
import { Payment } from "../model"; // Adjust the path as needed
import { promisify } from "util";
import { Connect } from "../../Connect";
// Configure PayPal
paypal.configure({
  mode: process.env.NEXT_PUBLIC_PAYPAL_MODE,
  client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_PAYPAL_SECRET,
});

// Convert the execute method to return a promise
const executePaymentAsync = promisify(
  paypal.payment.execute.bind(paypal.payment)
);

export async function GET(req) {
  await Connect(); // Ensure DB connection

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

    // Execute the payment
    const paymentDetails = await executePaymentAsync(paymentId, {
      payer_id: payerId,
    });

    // Check payment status
    if (paymentDetails.state === "approved") {
      const { payer, transactions } = paymentDetails;
      const { payer_info } = payer;
      const { item_list } = transactions[0];
      console.log("check payer : ");
      console.table(payer);
      console.log(payer);
      const paymentData = {
        payer_Info: {
          first_name: payer_info.first_name || "",
          last_name: payer_info.last_name || "",
          country: payer_info.country_code || "",
          town_Ci: payer_info.shipping_address?.city || "", // Adjust field as needed
          //   phone: payer_info.shipping_address?.phone || "", // Remove non-digits or set as empty string
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

      // Store payment details in the database
      const payment = new Payment(paymentData);
      await payment.save();

      // Redirect based on success
      return NextResponse.redirect(
        "http://localhost:3000/payment/?status=success"
      );
    } else {
      return NextResponse.redirect(
        "http://localhost:3000/payment/?status=failed"
      );
    }
  } catch (error) {
    console.error("Error executing payment:", error);
    return NextResponse.json(
      { message: "Error executing payment", error },
      { status: 500 }
    );
  }
}

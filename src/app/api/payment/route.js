import paypal from "paypal-rest-sdk";
import { NextResponse } from "next/server";
import { promisify } from "util";

// Configure PayPal
paypal.configure({
  mode: process.env.NEXT_PUBLIC_PAYPAL_MODE, //sandbox or live
  client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_PAYPAL_SECRET,
});

// Convert the create method to return a promise
const createPaymentAsync = promisify(
  paypal.payment.create.bind(paypal.payment)
);

export async function POST(req) {
  try {
    const { payer_Info, items, subTotal } = await req.json();

    if (!payer_Info || !items || !subTotal) {
      return NextResponse.json(
        { message: "Missing required payment information" },
        { status: 400 }
      );
    }

    // Map and filter payer_Info fields to match PayPal requirements
    const validPayerInfo = {
      email: payer_Info.email,
      first_name: payer_Info.first_name,
      last_name: payer_Info.last_name,
      shipping_address: {
        recipient_name: `${payer_Info.first_name} ${payer_Info.last_name}`,
        line1: payer_Info.line1,
        line2: payer_Info.line2,
        city: payer_Info.city,
        country_code: payer_Info.country_code,
        postal_code: payer_Info.postal_code,
        state: payer_Info.state,
      },
    };

    const create_payment = {
      intent: "sale", // Required
      payer: {
        payment_method: "paypal",
        payer_info: validPayerInfo,
      },
      redirect_urls: {
        return_url: "http://localhost:3000/api/payment/success",
        cancel_url: "http://localhost:3000/api/payment/failed",
      },
      transactions: [
        {
          item_list: {
            items: items.map((e) => ({
              name: e.name,
              sku: e.productId,
              price: e.price.toString(), // Ensure price is a string
              currency: "USD",
              quantity: e.quantity,
            })),
          },
          amount: {
            currency: "USD",
            total: subTotal.toString(), // Ensure total is a string
          },
          description: "This is the payment description.",
        },
      ],
    };

    const payment = await createPaymentAsync(create_payment);

    const approvalUrl = payment.links.find(
      (link) => link.rel === "approval_url"
    ).href;

    return NextResponse.json({ approvalUrl }, { status: 200 });
  } catch (error) {
    console.error("PayPal error details:", error.response?.details);
    if (error.response?.details) {
      return NextResponse.json(
        { message: "Validation Error", details: error.response.details },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

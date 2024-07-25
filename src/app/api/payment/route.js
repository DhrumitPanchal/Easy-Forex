import paypal from "paypal-rest-sdk";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";

// Configure PayPal
paypal.configure({
  mode: process.env.NEXT_PUBLIC_PAYPAL_MODE, //sandbox or live
  client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_PAYPAL_SECRET,
});

// Create payment object
const create_payment = {
  intent: "sale",
  payer: {
    payment_method: "paypal",
    payer_info: {
      first_name: "dhrumit",
      last_name: "panchal",
      email: "dhrumit678@gmail.com",
    },
  },
  redirect_urls: {
    return_url: "http://localhost:3000/api/payment/success",
    cancel_url: "http://localhost:3000/api/payment/failed",
  },
  transactions: [
    {
      item_list: {
        items: [
          {
            name: "cup",
            sku: "001",
            price: "25",
            currency: "USD",
            quantity: 1,
          },
        ],
      },
      amount: {
        currency: "USD",
        total: "25.00",
      },
      description: "This is the payment description.",
    },
  ],
};

// Convert the create method to return a promise
const createPaymentAsync = promisify(
  paypal.payment.create.bind(paypal.payment)
);

export async function POST(req) {
  try {
    const payment = await createPaymentAsync(create_payment);

    const approvalUrl = payment.links.find(
      (link) => link.rel === "approval_url"
    ).href;

    return NextResponse.json({ approvalUrl }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

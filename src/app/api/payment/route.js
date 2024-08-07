import paypal from "paypal-rest-sdk";
import { NextResponse } from "next/server";
import { promisify } from "util";
import { Payment } from "./model";
import { Connect } from "../Connect";

// Configure PayPal
paypal.configure({
  mode: process.env.NEXT_PUBLIC_PAYPAL_MODE, //sandbox or live
  client_id: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
  client_secret: process.env.NEXT_PUBLIC_PAYPAL_SECRET,
});

const createPaymentAsync = promisify(
  paypal.payment.create.bind(paypal.payment)
);

const Base_redirect_URL = process.env.NEXT_PUBLIC_BACK_END_URL;

export async function GET(req) {
  await Connect();
  try {
    const payments = await Payment.find({ status: "success" });
    return NextResponse.json(payments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server Error", error },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  await Connect();
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
        city: payer_Info.country,
        country_code: payer_Info.country_code,
        postal_code: payer_Info.postal_code,
        state: payer_Info.town_Ci,
      },
    };

    const create_payment = {
      intent: "sale",
      payer: {
        payment_method: "paypal",
        payer_info: validPayerInfo,
      },
      redirect_urls: {
        return_url: Base_redirect_URL + "/payment/success",
        cancel_url: Base_redirect_URL + "/payment/cancel",
      },
      transactions: [
        {
          item_list: {
            items: items.map((e) => ({
              name: e.name,
              sku: e.productId,
              price: e.price.toString(),
              currency: "USD",
              quantity: e.quantity,
            })),
          },
          amount: {
            currency: "USD",
            total: subTotal.toString(),
          },
          description: "This is the payment description.",
        },
      ],
    };

    const payment = await createPaymentAsync(create_payment);
    const approvalUrl = payment.links.find(
      (link) => link.rel === "approval_url"
    ).href;

    // Store the initial payment info in the database with status "pending"
    const newPayment = new Payment({
      payer_Info: {
        first_name: payer_Info?.first_name,
        last_name: payer_Info?.last_name,
        country: payer_Info?.country,
        town_Ci: payer_Info?.town_Ci,
        phone: payer_Info?.phone,
        email: payer_Info?.email,
      },
      items: items.map((item) => ({
        productId: item.productId,
        name: item.name,
        price: parseFloat(item.price),
        quantity: parseInt(item.quantity),
      })),
      subTotal: parseFloat(subTotal),
      status: "pending",
      paymentId: payment?.id,
    });
    await newPayment.save();

    return NextResponse.json({ approvalUrl }, { status: 200 });
  } catch (error) {
    console.error("PayPal error details:", error);
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

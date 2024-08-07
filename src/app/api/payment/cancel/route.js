import { NextResponse } from "next/server";
import { Payment } from "../model";
import { Connect } from "../../Connect";

const failed_redirect_URL = process.env.NEXT_PUBLIC_FAILED_REDIRECT;

export async function GET(req) {
  await Connect();
  try {
    const { searchParams } = new URL(req.url);
    const paymentId = searchParams.get("paymentId");

    console.log("paymentId for delete : " + paymentId);

    if (paymentId) {
      // Delete the payment data from the database if the payment was canceled
      await Payment.findOneAndDelete({ paymentId });
    }

    return NextResponse.redirect(failed_redirect_URL);
  } catch (error) {
    console.error("Error handling payment cancellation:", error);
    return NextResponse.json(
      { message: "Error handling payment cancellation", error },
      { status: 500 }
    );
  }
}

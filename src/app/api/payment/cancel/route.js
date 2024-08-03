import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // Inform the user that the payment was canceled
    return NextResponse.redirect(
      "https://easy-forex.vercel.app/payment/failed"
    );
  } catch (error) {
    console.error("Error handling payment cancellation:", error);
    return NextResponse.json(
      { message: "Error handling payment cancellation", error },
      { status: 500 }
    );
  }
}

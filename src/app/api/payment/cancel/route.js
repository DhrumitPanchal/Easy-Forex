import { NextResponse } from "next/server";

const failed_redirect_URL = process.env.NEXT_PUBLIC_FAILED_REDIRECT;
export async function GET(req) {
  try {
    // Inform the user that the payment was canceled
    return NextResponse.redirect(failed_redirect_URL);
  } catch (error) {
    console.error("Error handling payment cancellation:", error);
    return NextResponse.json(
      { message: "Error handling payment cancellation", error },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { toast } from "react-toastify";
export async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (
    pathname.includes("/api/auth") ||
    pathname.includes("/api/payment") ||
    pathname.includes("cloudinary")
  ) {
    return NextResponse.next();
  }

  if (req.method === "GET") {
    return NextResponse.next();
  }

  const token = req.cookies.get("access-token");

  if (!token) {
    return NextResponse.json(
      { message: "please login again" },
      { status: 404 }
    );
  }

  try {
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET);
    const { payload } = await jwtVerify(token?.value, secret);

    console.log(payload?._doc?.userType);

    if (payload?._doc.userType !== "admin") {
      return NextResponse.json(
        { message: "you don't have access" },
        { status: 404 }
      );
    }

    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "you don't have access" },
      { status: 404 }
    );
  }
}

export const config = {
  matcher: "/api/:path*",
};

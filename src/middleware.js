import { NextResponse } from "next/server";
import { jwtVerify } from "jose";
export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const frontend_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;

  if (
    pathname.includes("/api/auth") ||
    pathname.includes("/api/payment") ||
    pathname.includes("cloudinary") ||
    pathname === "/admin"
  ) {
    return NextResponse.next();
  }

  if (req.method === "GET" && pathname.includes("/api/")) {
    return NextResponse.next();
  }

  const token = req.cookies.get("access-token");

  if (!token) {
    return NextResponse.redirect(frontend_URL + "/admin");
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
  matcher: ["/admin/:path*", "/api/:path*"],
};

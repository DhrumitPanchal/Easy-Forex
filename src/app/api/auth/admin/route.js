import { NextResponse } from "next/server";
import { Admin } from "../model";
import { Connect } from "../../Connect";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

Connect();

export async function POST(req) {
  const { email, password } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "email is required" }, { status: 404 });
  }
  if (!password) {
    return NextResponse.json(
      { message: "password is required" },
      { status: 404 }
    );
  }

  try {
    const checkUserExist = await Admin.findOne({ email });

    if (!checkUserExist) {
      return NextResponse.json({ message: "Admin not exist" }, { status: 404 });
    }
    console.log("checking data : " + checkUserExist);
    if (checkUserExist?.userType !== "admin") {
      return NextResponse.json(
        { message: "you don't have admin access" },
        { status: 404 }
      );
    }
    const checkPassword = await bcrypt.compare(
      password,
      checkUserExist.password
    );

    if (checkPassword) {
      const Payload = {
        ...checkUserExist,
      };

      const token = await jwt.sign(
        Payload,
        process.env.NEXT_PUBLIC_JWT_SECRET,
        { expiresIn: "2m" }
      );
      const newObject = {
        access_Token: token,
        message: "login successfully",
        user: checkUserExist,
      };
      return NextResponse.json(newObject);
    } else {
      return NextResponse.json(
        { message: "invalid credentials" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.log("error : " + error.message);
    return NextResponse.json(
      { message: "server error", error },
      { status: 500 }
    );
  }
}

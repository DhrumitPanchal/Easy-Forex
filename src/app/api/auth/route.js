import { NextResponse } from "next/server";
import { Admin } from "./model";
import { Connect } from "../Connect";
import bcrypt from "bcryptjs";

Connect();

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name) {
    return NextResponse.json({ message: "name is required" }, { status: 404 });
  }
  if (!email) {
    return NextResponse.json({ message: "email is required" }, { status: 404 });
  }
  if (!password) {
    return NextResponse.json(
      { message: "password is required" },
      { status: 200 }
    );
  }
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    const checkUserExist = await Admin.findOne({ email });

    if (checkUserExist) {
      return NextResponse.json(
        { message: "Admin already exist" },
        { status: 404 }
      );
    }

    const newAdmin = new Admin({
      name,
      email,
      password: hashPassword,
    });
    newAdmin.save();
    return NextResponse.json(
      { message: "Admin added success fully", user: newAdmin },
      { status: 201 }
    );
  } catch (error) {
    console.log("error : " + error.message);
    return NextResponse.json(
      { message: "server error", error },
      { status: 500 }
    );
  }
}

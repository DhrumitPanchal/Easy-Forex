import { NextResponse } from "next/server";
import { Admin } from "../model";
import { Connect } from "../../Connect";
import jwt from "jsonwebtoken";
import { transporter } from "../../payment/nodemailerConfig";
import bcrypt from "bcryptjs";
Connect();
const frontend_URL = process.env.NEXT_PUBLIC_FRONTEND_URL;
export async function POST(req) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ message: "email is required" }, { status: 404 });
  }

  try {
    const checkUserExist = await Admin.findOne({ email });

    if (!checkUserExist) {
      return NextResponse.json({ message: "Admin not exist" }, { status: 404 });
    }

    const token = jwt.sign(
      { id: checkUserExist._id },
      process.env.NEXT_PUBLIC_JWT_SECRET,
      { expiresIn: "5m" }
    );

    const resetLink = `${frontend_URL}/forgotpassword?token=${token}`;

    const mailOptions = {
      from: '"Maddison Foo Koch 👻" dhrumit6789@gmail.com',
      to: email,
      subject: "Password Reset",
      html: `<p>You requested for a password reset, kindly use this <a href="${resetLink}">link</a> to reset your password. This link will expire in 5 minutes.</p>`,
    };

    transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Password reset link sent successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "server error", error },
      { status: 500 }
    );
  }
}

export async function PUT(req) {
  const { token, newPassword, confirmPassword } = await req.json();

  if (!token) {
    return NextResponse.json({ message: "Token is required" }, { status: 400 });
  }
  if (!newPassword || !confirmPassword) {
    return NextResponse.json(
      { message: "Passwords are required" },
      { status: 400 }
    );
  }
  if (newPassword !== confirmPassword) {
    return NextResponse.json(
      { message: "Passwords do not match" },
      { status: 400 }
    );
  }

  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

    const userId = decoded.id;

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const updatedUser = await Admin.findByIdAndUpdate(
      userId,
      { password: hashedPassword },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Password updated successfully" });
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return NextResponse.json(
        { message: "Token has expired" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Invalid token or server error", error },
      { status: 500 }
    );
  }
}

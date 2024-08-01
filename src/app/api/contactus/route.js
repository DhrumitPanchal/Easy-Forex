import { NextResponse } from "next/server";
import { transporter } from "../payment/nodemailerConfig";

export async function POST(req) {
  const { subject, message, name, email } = await req.json();

  try {
    await transporter.sendMail({
      from: '"Easy-Forex ContactUs" dhrumit6789@gmail.com',
      to: "dhrumitpanchal789@gmail.com",
      subject: subject,
      html: `<h4>Subject : <b>${subject}</b></h4> <p>${message}</p> <h4><b>Name : ${name}</b>,<br><b> Email : ${email}</b></h4>`,
    });
    return NextResponse.json({ message: "message sent" }, { status: 200 });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json(
      { message: "server error", error },
      { status: 500 }
    );
  }
}

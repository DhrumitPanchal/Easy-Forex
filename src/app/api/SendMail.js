import { transporter } from "./payment/nodemailerConfig";

export async function SendPerchesMail(course, userName, Email) {
  console.table({ course, userName, Email });
 
  const message = `<p>
    Dear ${userName}, <br /><br />
    Congratulations on purchasing our <b>${course}</b>! We are thrilled to have you
    as a part of our learning community. <br /><br />
    As promised, here are the details you need to get started with your
    course: Course Access: <br /><br />
    You can access the course materials and engage with fellow learners
    through our exclusive Telegram channel. Click the link below to join: 
    <a href="https://proforextrading.vercel.app">channel link</a><br /><br />
    <b>What to Expect:</b><br />
    Comprehensive lessons designed to enhance your trading skills<br />
    Exclusive tips and strategies from industry experts<br />
    Interactive discussions and Q&A sessions<br />
    Regular updates and additional resources<br />
    We are confident that this course will provide you with valuable insights
    and help you achieve your trading goals.<br /><br />
    If you have any questions or need further assistance, please do not
    hesitate to reach out to us at proforextrading.official@gmail.com.<br /><br />
    Thank you for choosing [Your Company Name]. We look forward to
    supporting you on your trading journey!<br /><br />
    Best regards,<br />ProForexTrading Team<br /><a href="https://proforextrading.vercel.app">https://proforextrading.vercel.app</a><br />ProForexTrading<br />Company Contact Information<br />
  </p>`;

  const info = await transporter.sendMail({
    from: '"ProForexTrading" proforextrading.official@gmail.com',
    to: Email,
    subject:
      "Welcome to the course - Here's Your Access to Our Exclusive Content",
    html: message,
  });
}

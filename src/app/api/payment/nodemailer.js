const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: "dhrumit6789@gmail.com",
    pass: "fdho mwcm wyrg ktdd",
  },
});

export async function SendMail(course, userName) {
  console.table({ course, userName });

  const message = `<p>
  Dear ${userName}, <br /><br />
  Congratulations on purchasing our <b>${course}</b>! We are thrilled to have you
  as a part of our learning community. <br /><br />
  As promised, here are the details you need to get started with your
  course: Course Access: <br /><br />
  You can access the course materials and engage with fellow learners
  through our exclusive Telegram channel. Click the link below to join: 
  <a href="https://www.dhrumitpanchal.me">channel link</a><br /><br />
  <b>What to Expect:</b><br />
  Comprehensive lessons designed to enhance your trading skills<br />
  Exclusive tips and strategies from industry experts<br />
  Interactive discussions and Q&A sessions<br />
  Regular updates and additional resources<br />
  We are confident that this course will provide you with valuable insights
  and help you achieve your trading goals.<br /><br />
  If you have any questions or need further assistance, please do not
  hesitate to reach out to us at [Support Email].<br /><br />
  Thank you for choosing [Your Company Name]. We look forward to
  supporting you on your trading journey!<br /><br />
  Best regards,<br />Your Name<br />Your Position<br />Your Company Name<br />Company Contact Information<br />Company Website
</p>`;

  const info = await transporter.sendMail({
    from: '"Maddison Foo Koch 👻" dhrumit6789@gmail.com',
    to: "dhrumitpanchal789@gmail.com",
    subject:
      "Welcome to the course - Here's Your Access to Our Exclusive Content",
    html: message,
  });
}

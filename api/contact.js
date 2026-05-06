import nodemailer from "nodemailer";

const smtpPort = Number(process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    await transporter.sendMail({
      from: `"HelloTax Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `New Lead from ${name}`,
      html: `
        <h2>New Contact Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    await transporter.sendMail({
      from: `"HelloTax Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "We received your request",
      html: `
        <p>Hi ${name},</p>
        <p>We received your enquiry.</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Emails sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Email failed",
      error: error.message,
    });
  }
}
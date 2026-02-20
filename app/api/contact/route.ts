import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    console.log("===== CONTACT API HIT =====");

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log(
      "EMAIL_PASS exists:",
      process.env.EMAIL_PASS ? "YES" : "NO"
    );

    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${name}`,
      replyTo: email,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("EMAIL SENT:", info.messageId);

    return Response.json({ success: true });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

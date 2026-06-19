import nodemailer from "nodemailer";
import { siteConfig } from "@/lib/site-config";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return Response.json({ error: "All fields are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${siteConfig.name} Website" <${process.env.GMAIL_USER}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New safari inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return Response.json({ error: "Failed to send message." }, { status: 500 });
  }

  return Response.json({ ok: true });
}

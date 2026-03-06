// app/api/contact/route.ts
// Handles POST requests from the contact form and sends email via Nodemailer.
//
// Setup:
//   npm install nodemailer
//   npm install --save-dev @types/nodemailer
//
// Add to your .env.local:
//   MAIL_USER=alwinsebastian41@gmail.com
//   MAIL_PASS=your_gmail_app_password   ← generate at myaccount.google.com > Security > App Passwords
//   MAIL_TO=alwinsebastian41@gmail.com  ← where you receive messages (can be same as MAIL_USER)

import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    // --- Basic validation ---
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // --- Nodemailer transporter (Gmail) ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS, // Gmail App Password (not your account password)
      },
    });

    // --- Email to YOU (notification) ---
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      replyTo: email,
      subject: subject
        ? `[Portfolio] ${subject}`
        : `[Portfolio] New message from ${name}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; background: #0a0a0f; color: #e2e8f0; padding: 40px; max-width: 600px; margin: auto; border: 1px solid #1e1e2e;">
          <h1 style="font-size: 28px; color: #a78bfa; margin-bottom: 8px; letter-spacing: 2px;">NEW MESSAGE</h1>
          <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 32px;">via alwinsebastian.dev</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; width: 100px;">From</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #fff; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #a78bfa; font-size: 14px;">${email}</td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 2px;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #1e1e2e; color: #fff; font-size: 14px;">${subject}</td>
            </tr>` : ""}
          </table>

          <div style="margin-top: 32px; padding: 24px; background: #0d0d15; border-left: 3px solid #a78bfa;">
            <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px;">Message</p>
            <p style="color: #e2e8f0; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 32px; color: #374151; font-size: 11px; text-align: center;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    // --- Auto-reply to the sender ---
    await transporter.sendMail({
      from: `"Alwin Sebastian" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Got your message — I'll be in touch soon!",
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; background: #0a0a0f; color: #e2e8f0; padding: 40px; max-width: 600px; margin: auto; border: 1px solid #1e1e2e;">
          <h1 style="font-size: 28px; color: #a78bfa; margin-bottom: 8px; letter-spacing: 2px;">THANKS, ${name.split(" ")[0].toUpperCase()}!</h1>
          <p style="color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 32px;">Message received</p>

          <p style="color: #e2e8f0; font-size: 15px; line-height: 1.8; margin-bottom: 24px;">
            I've received your message and will get back to you as soon as possible — typically within 24–48 hours.
          </p>

          <div style="padding: 20px 24px; background: #0d0d15; border-left: 3px solid #a78bfa; margin-bottom: 32px;">
            <p style="color: #6b7280; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 8px;">Your message</p>
            <p style="color: #9ca3af; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="color: #e2e8f0; font-size: 14px; line-height: 1.7; margin-bottom: 32px;">
            — Alwin Sebastian<br/>
            <span style="color: #a78bfa;">Software Developer · Kochi, Kerala</span>
          </p>

          <div style="border-top: 1px solid #1e1e2e; padding-top: 20px; display: flex; gap: 20px;">
            <a href="mailto:alwinsebastian41@gmail.com" style="color: #6b7280; font-size: 12px; text-decoration: none;">Email</a>
            <a href="https://www.linkedin.com/in/alwin-sebastian42" style="color: #6b7280; font-size: 12px; text-decoration: none;">LinkedIn</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Nodemailer error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
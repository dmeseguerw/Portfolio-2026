import { NextResponse } from "next/server";
import { Resend } from "resend";

const RECIPIENT_EMAIL = "dmeseguerw1599@gmail.com";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot — humans leave this blank
}

function isValidPayload(body: ContactPayload): body is {
  name: string;
  email: string;
  message: string;
  company?: string;
} {
  if (typeof body.name !== "string" || typeof body.email !== "string" || typeof body.message !== "string") {
    return false;
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  if (!name || !email || !message) return false;
  if (name.length > MAX_NAME_LENGTH) return false;
  if (message.length > MAX_MESSAGE_LENGTH) return false;
  if (!EMAIL_REGEX.test(email)) return false;

  return true;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots tend to fill every field, including hidden ones. If this
  // is populated, pretend everything worked without sending an email.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = body.name.trim();
  const email = body.email.trim();
  const message = body.message.trim();

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set — cannot send contact form email.");
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Portfolio contact form: message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) {
      console.error("Resend send failed:", error);
      return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unexpected error sending contact form email:", err);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}

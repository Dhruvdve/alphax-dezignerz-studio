import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";

type Body = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
  website?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add RESEND_API_KEY in Vercel or use WhatsApp.",
      },
      { status: 503 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message, company, phone, service } = body;
  if (!name?.trim() || !email?.trim() || !message?.trim() || !service) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "AlphaX Studio <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const text = [
    `Name: ${name}`,
    company ? `Company: ${company}` : null,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Service: ${service}`,
    "",
    message,
  ]
    .filter(Boolean)
    .join("\n");

  const { error } = await resend.emails.send({
    from,
    to: siteConfig.email,
    replyTo: email,
    subject: `New inquiry from ${name}`,
    text,
  });

  if (error) {
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

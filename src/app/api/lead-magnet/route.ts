import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/content/site";

type Body = { email: string; website?: string };

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const email = body.email?.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Valid email required" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email capture is not configured. Add RESEND_API_KEY in Vercel." },
      { status: 503 },
    );
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "AlphaX Studio <onboarding@resend.dev>";
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: siteConfig.email,
    replyTo: email,
    subject: "Lead magnet: 30-day travel content calendar",
    text: `New lead magnet signup:\nEmail: ${email}\n\nSend the calendar template.`,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

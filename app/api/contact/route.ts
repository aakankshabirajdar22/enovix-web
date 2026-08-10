import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateContactForm, type ContactFormValues } from "@/lib/contact";

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char] ?? char);
}

export async function POST(request: Request) {
  let body: Partial<Record<keyof ContactFormValues, unknown>>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const values: ContactFormValues = {
    firstName: String(body.firstName ?? "").trim(),
    lastName: String(body.lastName ?? "").trim(),
    email: String(body.email ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    businessName: String(body.businessName ?? "").trim(),
    businessType: String(body.businessType ?? "").trim(),
    message: String(body.message ?? "").trim(),
    company: String(body.company ?? "").trim(),
  };

  // Honeypot: bots that fill hidden fields get a fake success with no email sent.
  if (values.company) {
    return NextResponse.json({ message: "Thanks! We'll be in touch soon." }, { status: 200 });
  }

  const errors = validateContactForm(values);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: "Please correct the highlighted fields.", errors }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASSWORD || !CONTACT_TO_EMAIL) {
    console.error("Contact form is missing required SMTP environment variables.");
    return NextResponse.json({ message: "The contact form is temporarily unavailable. Please email us directly." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
  });

  const fullName = `${values.firstName} ${values.lastName}`.trim();
  const submittedAt = new Date().toLocaleString("en-IN", { dateStyle: "full", timeStyle: "short" });

  const rows: [string, string][] = [
    ["Name", fullName],
    ["Email", values.email],
    ["Phone", values.phone],
    ["Business Name", values.businessName],
    ["Business Type", values.businessType],
    ["Submitted", submittedAt],
  ];

  const textBody = [...rows.map(([label, value]) => `${label}: ${value}`), "", "Message:", values.message].join("\n");

  const htmlRows = rows
    .map(([label, value]) => `<tr><td style="padding:8px 16px;border-bottom:1px solid #e5e5e5;color:#6f7678;font-family:Arial,sans-serif;font-size:13px;white-space:nowrap;">${escapeHtml(label)}</td><td style="padding:8px 16px;border-bottom:1px solid #e5e5e5;color:#0a0d0e;font-family:Arial,sans-serif;font-size:13px;font-weight:600;">${escapeHtml(value)}</td></tr>`)
    .join("");

  const htmlBody = `<div style="background:#0a0d0e;padding:32px 16px;font-family:Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:8px;overflow:hidden;">
      <div style="background:#c8ff00;padding:20px 24px;">
        <h1 style="margin:0;font-size:18px;color:#0a0d0e;">New project enquiry &mdash; EnovixWeb</h1>
      </div>
      <table style="width:100%;border-collapse:collapse;">${htmlRows}</table>
      <div style="padding:16px 24px 24px;">
        <p style="margin:0 0 6px;color:#6f7678;font-family:Arial,sans-serif;font-size:13px;">Message</p>
        <p style="margin:0;color:#0a0d0e;font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;">${escapeHtml(values.message)}</p>
      </div>
    </div>
  </div>`;

  try {
    await transporter.sendMail({
      from: `"EnovixWeb Website" <${CONTACT_FROM_EMAIL || SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: values.email,
      subject: `New project enquiry from ${fullName}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (error) {
    console.error("Failed to send contact form email:", error);
    return NextResponse.json({ message: "We couldn't send your message right now. Please try again shortly." }, { status: 502 });
  }

  return NextResponse.json({ message: "Thanks! We'll be in touch soon." }, { status: 200 });
}

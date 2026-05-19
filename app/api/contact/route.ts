import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(50),
  message: z.string().trim().min(3).max(5000),
})

function getSmtpTransport() {
  const host = process.env.SMTP_HOST
  const port = Number(process.env.SMTP_PORT ?? "587")
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS?.replaceAll(" ", "")

  if (!host || !user || !pass) {
    throw new Error("Missing SMTP configuration")
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  })
}

export async function POST(request: Request) {
  try {
    const json = normalizeContactPayload(await request.json())
    const result = contactSchema.safeParse(json)

    if (!result.success) {
      return NextResponse.json(
        {
          error: result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join(", "),
        },
        { status: 400 },
      )
    }

    const { name, email, phone, message } = result.data
    const transporter = getSmtpTransport()
    const from = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER
    const to = process.env.CONTACT_TO_EMAIL || "kontakt@mixpc.pl"

    if (!from) {
      throw new Error("Missing sender email configuration")
    }

    await transporter.verify()

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `Nowe zgłoszenie z formularza od ${name}`,
      text: [
        "Nowe zgłoszenie z formularza kontaktowego MixPC",
        "",
        `Imię i nazwisko: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone || "-"}`,
        "",
        "Wiadomość:",
        message,
      ].join("\n"),
      html: `
        <h2>Nowe zgłoszenie z formularza kontaktowego MixPC</h2>
        <p><strong>Imię i nazwisko:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(phone || "-")}</p>
        <p><strong>Wiadomość:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact form send failed", error)
    const message = error instanceof Error ? error.message : "Failed to send message"

    return NextResponse.json(
      {
        error: process.env.NODE_ENV === "development" ? message : "Failed to send message",
      },
      { status: 500 },
    )
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function normalizeContactPayload(payload: unknown) {
  const data = typeof payload === "object" && payload !== null ? payload as Record<string, unknown> : {}

  return {
    name: toStringValue(data.name),
    email: toStringValue(data.email),
    phone: toStringValue(data.phone),
    message: toStringValue(data.message),
  }
}

function toStringValue(value: unknown) {
  return typeof value === "string" ? value : ""
}

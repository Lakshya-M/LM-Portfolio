import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #e50914;">New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr style="border-color: #222;" />
          <p><strong>Message:</strong></p>
          <p style="color: #555;">${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}

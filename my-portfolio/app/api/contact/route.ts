import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    if (!process.env.WEB3FORMS_ACCESS_KEY) {
      console.error("Missing WEB3FORMS_ACCESS_KEY environment variable")
      return NextResponse.json({ error: "Server Configuration Error" }, { status: 500 })
    }

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_ACCESS_KEY,
        name,
        email,
        message,
      }),
    })

    const text = await res.text()
    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse Web3Forms response:", text);
      return NextResponse.json({ error: "Invalid response from Web3Forms" }, { status: 500 })
    }

    if (!data.success) {
      return NextResponse.json({ error: data.message || "Failed to send message" }, { status: 500 })
    }

    return NextResponse.json({ success: true, message: data.message })
  } catch (error) {
    console.error("API Route Error:", error)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}

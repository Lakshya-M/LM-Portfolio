"use client"
import Link from "next/link"
import { useState } from "react"
import Footer from "@/components/Footer"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMsg, setErrorMsg] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    setErrorMsg("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }

      setStatus("success")
    } catch (err) {
      setStatus("error")
      setErrorMsg(err instanceof Error ? err.message : "Failed to send message")
    }
  }

  return (
    <main className="min-h-screen bg-transparent flex flex-col">
      <header className="w-full border-b border-[#1a1a1a] bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-white font-bold tracking-widest text-sm uppercase"
            style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          >
            LM
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/engineer"
              className="text-[#666] hover:text-white text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Engineer
            </Link>
            <Link
              href="/photography"
              className="text-[#666] hover:text-white text-xs tracking-widest uppercase transition-colors duration-200"
            >
              Photography
            </Link>
          </div>
        </div>
      </header>

      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">
          <p className="text-[#888] text-xs tracking-[0.3em] uppercase mb-3 text-center">Get in touch</p>
          <h1
            className="text-white text-4xl md:text-5xl font-bold text-center mb-3"
            style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.04em" }}
          >
            Contact Me
          </h1>
          <p className="text-[#666] text-sm text-center mb-10 leading-relaxed">
            For photography gigs, engineering collaborations, or just to say hi.
          </p>

          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-[#e50914]/10 border border-[#e50914]/30 flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e50914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-white text-xl font-semibold mb-2">Message Sent</h2>
              <p className="text-[#888] text-sm">Thanks for reaching out. I will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full bg-[#141414] border border-[#2a2a2a] rounded-md px-4 py-3 text-white text-sm placeholder-[#444] outline-none transition-colors duration-200 focus:border-[#e50914]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="w-full bg-[#141414] border border-[#2a2a2a] rounded-md px-4 py-3 text-white text-sm placeholder-[#444] outline-none transition-colors duration-200 focus:border-[#e50914]"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="w-full bg-[#141414] border border-[#2a2a2a] rounded-md px-4 py-3 text-white text-sm placeholder-[#444] outline-none transition-colors duration-200 focus:border-[#e50914] resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#e50914] text-white text-sm font-semibold tracking-wider uppercase py-3 rounded-md transition-colors duration-200 hover:bg-[#b20710] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>
              {status === "error" && <p className="text-[#e50914] text-xs text-center mt-2">{errorMsg}</p>}
            </form>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}

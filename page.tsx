"use client"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1a1a1a_0%,_#0a0a0a_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div
        className={`relative z-10 flex flex-col items-center justify-center flex-1 px-6 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <p className="text-[#888] text-xs tracking-[0.3em] uppercase mb-4 font-light">Welcome to</p>
        <h1
          className="text-white text-5xl md:text-7xl font-bold tracking-tight text-center mb-3 leading-none"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif", letterSpacing: "0.05em" }}
        >
          Lakshya Mehta
        </h1>
        <p className="text-[#555] text-sm tracking-[0.2em] uppercase mb-16">Engineer · Photographer</p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
          <ProfileCard
            href="/engineer"
            label="Engineer"
            description="IoT · Embedded · Cloud"
            accent="#e50914"
            delay={200}
            loaded={loaded}
          />
          <ProfileCard
            href="/photography"
            label="Photographer"
            description="Concert · Street · Events"
            accent="#f5f5f1"
            delay={350}
            loaded={loaded}
          />
        </div>
      </div>

      <Footer />
    </main>
  )
}

function ProfileCard({
  href,
  label,
  description,
  accent,
  delay,
  loaded,
}: {
  href: string
  label: string
  description: string
  accent: string
  delay: number
  loaded: boolean
}) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={href}
      className={`group relative flex-1 rounded-md overflow-hidden cursor-pointer transition-all duration-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative h-64 sm:h-80 bg-[#141414] border border-[#2a2a2a] rounded-md overflow-hidden transition-all duration-300"
        style={{ boxShadow: hovered ? `0 0 40px ${accent}22, 0 20px 40px rgba(0,0,0,0.6)` : "0 4px 20px rgba(0,0,0,0.4)" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#222] border border-[#333] flex items-center justify-center">
            <span className="text-3xl">{label === "Engineer" ? "⚙" : "📷"}</span>
          </div>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.7 }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[#888] text-xs tracking-[0.2em] uppercase mb-1">{description}</p>
          <h2
            className="text-white text-2xl font-bold tracking-wide transition-all duration-300"
            style={{ color: hovered ? accent : "white", fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.8rem" }}
          >
            {label}
          </h2>
        </div>
        <div
          className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300"
          style={{ background: accent, opacity: hovered ? 1 : 0 }}
        />
      </div>
    </Link>
  )
}

function Footer() {
  return (
    <footer className="relative z-10 w-full border-t border-[#1a1a1a] py-6 px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#444] text-xs tracking-widest uppercase">© 2026 Lakshya Mehta</p>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="text-[#666] hover:text-white text-xs tracking-widest uppercase transition-colors duration-200">
            Contact
          </Link>
          <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors duration-200">
            <LinkedInIcon />
          </a>
          <a href="https://instagram.com/YOUR_INSTAGRAM" target="_blank" rel="noopener noreferrer" className="text-[#666] hover:text-white transition-colors duration-200">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  )
}

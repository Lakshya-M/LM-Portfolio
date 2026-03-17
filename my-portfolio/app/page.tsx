"use client"
import Link from "next/link"
import { useEffect, useState, useCallback, useRef } from "react"
import Footer from "@/components/Footer"
import Image from "next/image"
import LandingAmbient from "@/components/LandingAmbient"

export default function LandingPage() {
  const [loaded, setLoaded] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen bg-[#000000] flex flex-col overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <LandingAmbient />

      {/* Cursor spotlight */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 80%)`,
          opacity: loaded ? 1 : 0,
        }}
      />

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
          className="text-white font-bold tracking-tight text-center mb-3 leading-none"
          style={{
            fontFamily: "var(--font-bebas), 'Impact', sans-serif",
            letterSpacing: "0.05em",
            fontSize: "clamp(4rem, 12vw, 9rem)",
          }}
        >
          Lakshya Mehta
        </h1>
        <p className="text-[#555] text-sm tracking-[0.2em] uppercase mb-16">Engineer · Photographer</p>

        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl">
          <ProfileCard href="/engineer" label="Engineer" description="IoT · Embedded · Cloud" accent="#e50914" delay={200} loaded={loaded} />
          <ProfileCard
            href="/photography"
            label="Photographer"
            description="Concert · Street · Events"
            accent="#d4a843"
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
        style={{
          boxShadow: hovered ? `0 0 40px ${accent}22, 0 20px 40px rgba(0,0,0,0.6)` : "0 4px 20px rgba(0,0,0,0.4)",
          transform: hovered ? "scale(1.02)" : "scale(1)",
        }}
      >
        <div className="absolute inset-x-0 top-0 bottom-16 flex items-start justify-center pt-4">
          {label === "Engineer" ? (
            <div className="relative w-[75%] h-full rounded-lg overflow-hidden border border-[#333]" style={{ maxHeight: "calc(100% - 24px)" }}>
              <Image src="/images/engineer.jpg" alt="Lakshya Mehta" fill className="object-cover object-top" sizes="300px" />
            </div>
          ) : (
            <div className="relative w-[90%] h-full flex items-center justify-center">
              <Image src="/images/logo-white.png" alt="LM Visuals" width={240} height={240} className="object-contain opacity-70" />
            </div>
          )}
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0.7 }}
        />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[#888] text-xs tracking-[0.2em] uppercase mb-1">{description}</p>
          <h2
            className="text-white text-2xl font-bold tracking-wide transition-all duration-300"
            style={{
              color: hovered ? accent : "white",
              fontFamily: "var(--font-bebas), sans-serif",
              fontSize: "1.8rem",
            }}
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

"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ScrollRow from "@/components/ScrollRow"
import type { CardItem } from "@/components/ScrollRow"
import { photoCategories, artists, djs, bands } from "@/data/photography"

/* ──────────────────────── Data ──────────────────────── */

const tagPills = ["Concert", "Events", "Street", "Artists", "Product"]

const concertCategories = photoCategories.filter((c) => c.id === "concert" || c.id === "general-events")
const moreCategories = photoCategories.filter((c) => ["street", "product", "others"].includes(c.id))

const concertCards: CardItem[] = concertCategories.map((c) => ({
  id: c.id,
  title: c.title,
  tagline: c.description,
  image: `/images/${c.id}.jpg`,
}))

const moreCards: CardItem[] = moreCategories.map((c) => ({
  id: c.id,
  title: c.title,
  tagline: c.description,
  image: `/images/${c.id}.jpg`,
}))

const artistCards: CardItem[] = artists.map((a) => ({
  id: a.id,
  title: a.name,
  tagline: a.event,
  image: a.image,
}))

const djCards: CardItem[] = djs.map((d) => ({
  id: d.id,
  title: d.name,
  tagline: d.event,
  image: d.image,
}))

const bandCards: CardItem[] = bands.map((b) => ({
  id: b.id,
  title: b.name,
  tagline: b.event,
  image: b.image,
}))

const comingSoonCard: CardItem[] = [
  {
    id: "coming-soon",
    title: "Coming Soon",
    tagline: "Portfolio Growing",
  },
]

/* ──────────────────────── Featured Work Strip Data ──────────────────────── */

const featuredCategories = [
  { name: "Concert", descriptor: "Live music energy captured in frame", bg: "#0f0f0f" },
  { name: "Artists", descriptor: "Solo performers in their element", bg: "#111111" },
  { name: "General Events", descriptor: "Gatherings worth remembering", bg: "#131313" },
  { name: "Street", descriptor: "Candid moments from the city", bg: "#141414" },
  { name: "Product", descriptor: "Clean, intentional visuals", bg: "#161616" },
  { name: "Others", descriptor: "Everything else worth shooting", bg: "#181818" },
]

/* ──────────────────────── Stats ──────────────────────── */

const stats = [
  { value: "10+", label: "Artists Covered" },
  { value: "VP", label: "Photography Club" },
  { value: "Concert", label: "& Event Focus" },
  { value: "Delhi", label: "· Chennai" },
]

/* ──────────────────────── Component ──────────────────────── */

export default function PhotographyContent() {
  return (
    <>
      {/* ═══════ SECTION A — HERO ═══════ */}
      <section className="relative w-full hero-film-grain" style={{ minHeight: "65vh" }}>
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute right-0 top-20 bottom-8 w-full md:w-1/2 flex items-center justify-center px-10">
            <Image
              src="/images/lm-logo-white.png"
              alt="Lakshya Mehta — Photographer"
              fill
              className="object-contain"
              sizes="50vw"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div
          className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-16 flex flex-col justify-end"
          style={{ minHeight: "65vh" }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-2"
            style={{
              color: "#d4a843",
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Photographer
          </p>
          <h1
            className="text-white font-bold mb-4 leading-none"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.04em",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            }}
          >
            Lakshya Mehta Visuals
          </h1>
          <p
            className="text-[#aaa] text-sm md:text-base max-w-lg mb-6"
            style={{ lineHeight: "1.9", letterSpacing: "0.02em" }}
          >
            Concert and live event photographer capturing the raw energy of artists, DJs, and bands on stage.
            Vice President of the Photography Club at VIT Chennai — building a visual portfolio across genres.
          </p>

          {/* Editorial separator */}
          <div className="w-16 h-px bg-[#d4a843]/30 mb-6" />

          <div className="flex flex-wrap gap-3">
            {tagPills.map((pill) => (
              <span
                key={pill}
                className="text-xs px-4 py-1.5 rounded-full border border-[#d4a843]/40 text-[#d4a843] tracking-wider uppercase"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION B — FEATURED WORK STRIP ═══════ */}
      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-0 md:-space-x-6 justify-center">
            {featuredCategories.map((cat, i) => (
              <FeaturedCard key={cat.name} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      {/* ═══════ SECTION C — STATS BAR ═══════ */}
      <section
        className="py-10 px-8"
        style={{
          borderTop: "1px solid #1a1a1a",
          borderBottom: "1px solid #1a1a1a",
          background: "#0c0c0c",
        }}
      >
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-y-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-6 sm:px-10">
                <p
                  className="text-white text-2xl sm:text-3xl font-bold"
                  style={{ fontFamily: "var(--font-bebas), sans-serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-[#666] text-[10px] tracking-[0.15em] uppercase mt-1">
                  {stat.label}
                </p>
              </div>
              {i < stats.length - 1 && (
                <div className="hidden sm:block w-px h-10 bg-[#2a2a2a]" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      {/* ═══════ SECTION D — SCROLL ROWS ═══════ */}
      <div className="py-8">
        <div id="concert">
          <ScrollRow title="Concert & Live Events" items={concertCards} accentColor="#d4a843" disableHover />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="artists">
          <ScrollRow
            title="Artists"
            items={artistCards.length > 0 ? artistCards : comingSoonCard}
            accentColor="#d4a843"
            disableHover
          />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="djs">
          <ScrollRow
            title="DJs"
            items={djCards.length > 0 ? djCards : comingSoonCard}
            accentColor="#d4a843"
            disableHover
          />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="bands">
          <ScrollRow
            title="Bands"
            items={bandCards.length > 0 ? bandCards : comingSoonCard}
            accentColor="#d4a843"
            disableHover
          />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="more">
          <ScrollRow title="More" items={moreCards} accentColor="#d4a843" disableHover />
        </div>
      </div>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      {/* ═══════ SECTION E — ABOUT AS A PHOTOGRAPHER ═══════ */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left — Pull quote */}
          <div className="flex-1 flex items-start">
            <blockquote
              className="text-white leading-none"
              style={{
                fontFamily: "var(--font-bebas), sans-serif",
                fontSize: "clamp(3rem, 6vw, 5.5rem)",
                letterSpacing: "0.03em",
              }}
            >
              Every frame
              <br />
              is a decision.
            </blockquote>
          </div>

          {/* Right — Text + CTA */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[#aaa] text-sm leading-relaxed mb-4" style={{ letterSpacing: "0.02em" }}>
              Specialising in concert and live event photography, I chase the moments between moments —
              the anticipation before a drop, the blur of motion mid-performance.
            </p>
            <p className="text-[#aaa] text-sm leading-relaxed mb-4" style={{ letterSpacing: "0.02em" }}>
              Based in Delhi, currently building a portfolio across artists, DJs, and cultural events.
              VP of the Photography Club at VIT Chennai.
            </p>
            <p className="text-[#aaa] text-sm leading-relaxed mb-8" style={{ letterSpacing: "0.02em" }}>
              Available for concert coverage, artist portfolios, and live events.
            </p>
            <Link
              href="/contact"
              className="inline-block self-start px-8 py-3 border border-[#d4a843]/40 text-[#d4a843] text-xs tracking-[0.2em] uppercase rounded-sm transition-all duration-300 hover:bg-[#d4a843] hover:text-[#0a0a0a]"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ──────────────────────── Featured Card Component ──────────────────────── */

function FeaturedCard({
  category,
  index,
}: {
  category: { name: string; descriptor: string; bg: string }
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const number = String(index + 1).padStart(2, "0")

  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer w-full md:w-44 flex-shrink-0"
      style={{
        aspectRatio: "2/3",
        backgroundColor: category.bg,
        border: "1px solid #222",
        transform: hovered ? "translateY(-8px)" : "translateY(0)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.6)"
          : "0 4px 16px rgba(0,0,0,0.3)",
        zIndex: hovered ? 10 : 1,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Faint oversized number */}
      <span
        className="absolute top-3 left-4 font-bold select-none"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "120px",
          lineHeight: 1,
          color: "rgba(212, 168, 67, 0.08)",
        }}
      >
        {number}
      </span>

      {/* Category name */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <p
          className="text-white text-center text-xl"
          style={{
            fontFamily: "var(--font-bebas), sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          {category.name}
        </p>
      </div>

      {/* Descriptor — fades in on hover */}
      <div
        className="absolute bottom-12 left-0 right-0 px-4 text-center"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <p className="text-[#aaa] text-[10px] tracking-wider">{category.descriptor}</p>
      </div>

      {/* Bottom accent border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: "#d4a843",
          opacity: hovered ? 0.6 : 0.15,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  )
}

"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import ScrollRow from "@/components/ScrollRow"
import type { CardItem } from "@/components/ScrollRow"
import { photoCategories, artists } from "@/data/photography"

const tagPills = ["Concert", "Events", "Street", "Product"]

const moreCategories = photoCategories.filter((c) => ["street", "product", "others"].includes(c.id))

const artistCards: CardItem[] = artists.map((a) => ({
  id: a.id,
  title: a.name,
  tagline: a.event || "Artist",
  image: a.image || `/images/02-Artist.jpg`,
}))

const moreCards: CardItem[] = moreCategories.map((c) => ({
  id: c.id,
  title: c.title,
  tagline: c.description,
  image: `/images/${c.id}.jpg`,
}))

const featuredCategories = [
  { name: "Concert", descriptor: "Live music energy captured in frame", bg: "#0f0f0f", image: "/images/01-Concerts.jpg", dominant: true },
  { name: "Artists", descriptor: "Solo performers in their element", bg: "#111111", image: "/images/02-Artist.jpg", dominant: false },
  { name: "Events", descriptor: "Gatherings worth remembering", bg: "#131313", image: "/images/03-Events.jpg", dominant: false },
  { name: "Street", descriptor: "Candid moments from the city", bg: "#141414", image: "/images/04-Street.jpg", dominant: false },
  { name: "Product", descriptor: "Clean, intentional visuals", bg: "#161616", image: "/images/05-Product.jpg", dominant: false },
  { name: "Others", descriptor: "Everything else worth shooting", bg: "#181818", image: "/images/06-Others.jpg", dominant: false },
]

const stats = [
  { value: "40+", label: "Events" },
  { value: "Pan India", label: "Coverage" },
  { value: "Concert", label: "& Event Focus" },
]

export default function PhotographyContent() {
  return (
    <>
      <section className="relative w-full hero-film-grain" style={{ minHeight: "65vh" }}>
        <div className="absolute inset-0 bg-[#0a0a0a]">
          <div className="absolute right-0 top-20 bottom-8 w-full md:w-1/2 flex items-center justify-center px-10">
            <Image
              src="/images/Logo_New.png"
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
            I shoot live events and concerts — the unscripted moments between performers
            and their audience that don&apos;t happen twice. My work leans toward high contrast,
            raw light, and the kind of frames that feel like you were there. I&apos;m building
            toward full artist coverage, working directly with musicians to document their
            performances and presence the way they deserve to be seen.
          </p>

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

      <section className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-0 md:-space-x-6 justify-center">
            {featuredCategories.map((cat, i) => (
              <FeaturedCard key={cat.name} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

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

      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      <div className="py-8">
        <div id="concert">
          <ScrollRow title="Artists" items={artistCards} accentColor="#d4a843" disableHover showGearLine />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="more">
          <ScrollRow title="More" items={moreCards} accentColor="#d4a843" disableHover streetGreyscale />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20">
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

          <div className="flex-1 flex flex-col justify-center">
            <p className="text-[#aaa] text-sm leading-relaxed mb-8" style={{ letterSpacing: "0.02em" }}>
              Based in Delhi. Specialising in concert and live event photography —
              chasing the moments between moments. The anticipation before a drop,
              the blur of motion mid-performance. Available for concert coverage,
              artist portfolios, and live events.
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

function FeaturedCard({
  category,
  index,
}: {
  category: { name: string; descriptor: string; bg: string; image?: string; dominant: boolean }
  index: number
}) {
  const [hovered, setHovered] = useState(false)
  const number = String(index + 1).padStart(2, "0")

  return (
    <div
      className="relative rounded-md overflow-hidden cursor-pointer w-full md:w-44 flex-shrink-0 group"
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
      <div className="absolute inset-0 z-0 bg-black">
        {category.image && (
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-700 ease-out"
            style={{
              transform: hovered ? "scale(1.05)" : "scale(1)",
              opacity: hovered ? 0.6 : 0.35,
            }}
            sizes="(max-width: 768px) 100vw, 20vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />
      </div>

      <span
        className="absolute top-3 left-4 font-bold select-none z-10 drop-shadow-md"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "120px",
          lineHeight: 1,
          color: "rgba(212, 168, 67, 0.12)",
        }}
      >
        {number}
      </span>

      <div className="absolute inset-0 flex items-center justify-center px-4 z-10 drop-shadow-lg">
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

      <div
        className="absolute bottom-12 left-0 right-0 px-4 text-center z-10"
        style={{
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(6px)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
        }}
      >
        <p className="text-[#ccc] text-[10px] tracking-wider drop-shadow-md">{category.descriptor}</p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{
          background: "#d4a843",
          opacity: hovered ? 0.6 : 0.15,
          transition: "opacity 0.3s ease",
        }}
      />
    </div>
  )
}

"use client"
import { useRef, useState } from "react"

export interface CardItem {
  id: string
  title: string
  tagline?: string
  detail1Label?: string
  detail1?: string
  detail2Label?: string
  detail2?: string
  tags?: string[]
  image?: string
}

interface ScrollRowProps {
  title: string
  items: CardItem[]
  accentColor?: string
}

export default function ScrollRow({ title, items, accentColor = "#e50914" }: ScrollRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return
    rowRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" })
  }

  return (
    <section className="mb-10">
      <h2
        className="text-white text-xl font-bold mb-4 px-8 tracking-wide uppercase"
        style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.4rem", letterSpacing: "0.08em" }}
      >
        {title}
      </h2>
      <div className="relative group/row">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-black to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200"
          aria-label="Scroll left"
        >
          <ChevronLeft />
        </button>
        <div
          ref={rowRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-8 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <Card key={item.id} item={item} accentColor={accentColor} />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-black to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200"
          aria-label="Scroll right"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  )
}

function Card({ item, accentColor }: { item: CardItem; accentColor: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative flex-shrink-0 w-56 h-36 rounded-sm cursor-pointer transition-all duration-300 bg-[#141414] border border-[#222]"
      style={{
        transform: hovered ? "scale(1.08)" : "scale(1)",
        zIndex: hovered ? 10 : 1,
        boxShadow: hovered ? `0 8px 32px rgba(0,0,0,0.8), 0 0 0 1px ${accentColor}44` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {item.image ? (
        <img src={item.image} alt={item.title} className="w-full h-full object-cover rounded-sm" />
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-[#222] border border-[#333]" />
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent rounded-sm" />

      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white text-xs font-semibold truncate">{item.title}</p>
        {item.tagline && <p className="text-[#888] text-[10px] truncate mt-0.5">{item.tagline}</p>}
      </div>

      {hovered && (
        <div
          className="absolute top-full left-0 right-0 bg-[#181818] border border-[#2a2a2a] rounded-b-md p-4 shadow-2xl"
          style={{ zIndex: 20, minWidth: "220px", borderTop: `2px solid ${accentColor}` }}
        >
          <p className="text-white text-sm font-semibold mb-2">{item.title}</p>
          {item.tagline && <p className="text-[#aaa] text-xs mb-3 italic">{item.tagline}</p>}
          {item.detail1 && (
            <div className="mb-2">
              {item.detail1Label && <p className="text-[#e50914] text-[10px] uppercase tracking-widest mb-1">{item.detail1Label}</p>}
              <p className="text-[#ccc] text-xs leading-relaxed">{item.detail1}</p>
            </div>
          )}
          {item.detail2 && (
            <div className="mb-2">
              {item.detail2Label && <p className="text-[#e50914] text-[10px] uppercase tracking-widest mb-1">{item.detail2Label}</p>}
              <p className="text-[#ccc] text-xs leading-relaxed">{item.detail2}</p>
            </div>
          )}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {item.tags.map((tag) => (
                <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-[#222] text-[#888] border border-[#333]">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  )
}

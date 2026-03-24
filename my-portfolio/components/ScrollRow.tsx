"use client"
import { useRef, useState, useCallback, type ReactNode } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

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
  icon?: ReactNode
  href?: string
}

interface ScrollRowProps {
  title: string
  items: CardItem[]
  accentColor?: string
  cardSize?: "sm" | "default"
  disableHover?: boolean
  showGearLine?: boolean
  streetGreyscale?: boolean
}

export default function ScrollRow({ title, items, accentColor = "#e50914", cardSize = "default", disableHover = false, showGearLine = false, streetGreyscale = false }: ScrollRowProps) {
  const rowRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!rowRef.current) return
    rowRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" })
  }

  return (
    <section className="mb-10">
      <h2
        className="text-white font-bold mb-4 px-8 tracking-wide uppercase"
        style={{
          fontFamily: "var(--font-bebas), sans-serif",
          fontSize: "1.6rem",
          letterSpacing: "0.08em",
        }}
      >
        {title}
      </h2>
      <div className="relative group/row">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-r from-black to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Scroll left"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <div
          ref={rowRef}
          className="flex gap-3 overflow-x-auto scrollbar-hide px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            paddingBottom: "100px",
            marginBottom: "-100px",
          }}
        >
          {items.map((item) => (
            <Card
              key={item.id}
              item={item}
              accentColor={accentColor}
              containerRef={rowRef}
              cardSize={cardSize}
              disableHover={disableHover}
              showGearLine={showGearLine}
              streetGreyscale={streetGreyscale && item.id === "street"}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-0 bottom-0 z-20 w-12 bg-gradient-to-l from-black to-transparent flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
          aria-label="Scroll right"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </section>
  )
}

function Card({
  item,
  accentColor,
  containerRef,
  cardSize = "default",
  disableHover = false,
  showGearLine = false,
  streetGreyscale = false,
}: {
  item: CardItem
  accentColor: string
  containerRef: React.RefObject<HTMLDivElement | null>
  cardSize?: "sm" | "default"
  disableHover?: boolean
  showGearLine?: boolean
  streetGreyscale?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const effectiveHover = disableHover ? false : hovered

  const baseW = cardSize === "sm" ? 180 : 224
  const baseH = cardSize === "sm" ? 110 : 144
  const hoverH = cardSize === "sm" ? 140 : 210

  const getExpandOrigin = useCallback((): string => {
    if (!wrapperRef.current || !containerRef.current) return "center top"
    const wrapper = wrapperRef.current
    const container = containerRef.current
    const wrapperRect = wrapper.getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    const cardCenter = wrapperRect.left + wrapperRect.width / 2
    const leftEdge = cardCenter - containerRect.left
    const rightEdge = containerRect.right - cardCenter
    const threshold = 160

    if (leftEdge < threshold) return "left top"
    if (rightEdge < threshold) return "right top"
    return "center top"
  }, [containerRef])

  const streetClass = streetGreyscale ? "street-card" : ""

  return (
    <div
      ref={wrapperRef}
      className={`flex-shrink-0 ${streetClass}`}
      style={{
        width: baseW,
        height: baseH,
        position: "relative",
      }}
    >
      <div
        className={`rounded-sm bg-[#141414] border border-[#222] ${item.href ? "cursor-pointer" : ""}`}
        onClick={() => {
          if (item.href) {
            router.push(item.href)
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: baseW,
          height: effectiveHover ? hoverH : baseH,
          zIndex: effectiveHover ? 30 : 1,
          transform: effectiveHover ? "scale(1.2)" : "scale(1)",
          transformOrigin: getExpandOrigin(),
          boxShadow: effectiveHover
            ? `0 12px 40px rgba(0,0,0,0.9), 0 0 0 1px ${accentColor}44`
            : "inset 0 0 20px rgba(0,0,0,0.3)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.3s ease",
          overflow: "hidden",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="absolute top-0 left-0 right-0"
          style={{
            height: baseH,
            opacity: effectiveHover ? 0 : 1,
            transition: "opacity 0.25s ease",
            pointerEvents: effectiveHover ? "none" : "auto",
          }}
        >
          {item.image ? (
            <Image src={item.image} alt={item.title} fill className="object-cover" sizes="280px" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {item.icon ? (
                <div style={{ color: accentColor, width: 32, height: 32 }}>
                  {item.icon}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-[#222] border border-[#333]" />
              )}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3">
            <p className="text-white text-xs font-semibold truncate">{item.title}</p>
            {item.tagline && (
              <p className="text-[#888] text-[10px] truncate mt-0.5">{item.tagline}</p>
            )}
          </div>
        </div>

        <div
          className="absolute inset-0 bg-black flex flex-col overflow-hidden"
          style={{
            opacity: effectiveHover ? 1 : 0,
            transition: "opacity 0.25s ease",
            pointerEvents: effectiveHover ? "auto" : "none",
          }}
        >
          <div className="h-[2px] flex-shrink-0" style={{ background: accentColor }} />
          <div className="flex-1 overflow-y-auto p-3 flex flex-col justify-between gap-2">
            <div>
              <p className="text-white text-[13px] font-bold leading-tight">{item.title}</p>
              {item.tagline && (
                <p className="text-[#888] text-[10px] italic mt-0.5 line-clamp-1">{item.tagline}</p>
              )}
              {item.detail1 && (
                <div className="mt-1.5">
                  {item.detail1Label && (
                    <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: accentColor }}>
                      {item.detail1Label}
                    </p>
                  )}
                  <p className="text-white/80 text-[10px] leading-snug mt-0.5 line-clamp-3">{item.detail1}</p>
                </div>
              )}
              {item.detail2 && (
                <div className="mt-1.5">
                  {item.detail2Label && (
                    <p className="text-[9px] uppercase tracking-widest font-semibold" style={{ color: accentColor }}>
                      {item.detail2Label}
                    </p>
                  )}
                  <p className="text-white/80 text-[10px] leading-snug mt-0.5 line-clamp-2">{item.detail2}</p>
                </div>
              )}
            </div>
            {item.tags && item.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 flex-shrink-0">
                {item.tags.slice(0, 5).map((tag) => (
                  <span
                    key={tag}
                    className="text-[8px] px-1.5 py-0.5 rounded-full border"
                    style={{ borderColor: `${accentColor}44`, color: accentColor }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            {showGearLine && (
              <p className="text-[#555] text-[9px] italic mt-auto pt-1 flex-shrink-0">
                Shot on — Sony A6700 · 28-75mm f/2.8
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

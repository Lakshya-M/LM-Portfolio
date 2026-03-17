"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface HeaderProps {
  variant: "engineer" | "photography"
}

const engineerNav = [
  { label: "Projects", href: "/engineer#projects" },
  { label: "Skills", href: "/engineer#skills" },
  { label: "Education", href: "/engineer#education" },
  { label: "Experience", href: "/engineer#experience" },
  { label: "Contact", href: "/contact" },
]

const photographyNav = [
  { label: "Concert", href: "/photography#concert" },
  { label: "Artists", href: "/photography#artists" },
  { label: "Events", href: "/photography#events" },
  { label: "Contact", href: "/contact" },
]

export default function Header({ variant }: HeaderProps) {
  const pathname = usePathname()
  const nav = variant === "engineer" ? engineerNav : photographyNav
  const accent = variant === "engineer" ? "#e50914" : "#d4a843"
  const name = variant === "engineer" ? "LM · Engineer" : "LM · Photography"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href={variant === "engineer" ? "/engineer" : "/photography"}
          className="text-white font-bold tracking-widest text-sm uppercase transition-colors duration-200"
          style={{ fontFamily: "var(--font-bebas), sans-serif" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
        >
          {name}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const isActive = pathname === item.href || (item.href.includes("#") && pathname === item.href.split("#")[0])
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs tracking-widest uppercase transition-colors duration-200"
                style={{ color: isActive ? "#fff" : "#aaa" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = isActive ? "#fff" : "#aaa")}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <Link
          href="/"
          className="text-[#555] text-xs tracking-widest uppercase transition-colors duration-200"
          onMouseEnter={(e) => (e.currentTarget.style.color = "#aaa")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
        >
          ← All Profiles
        </Link>
      </div>
    </header>
  )
}

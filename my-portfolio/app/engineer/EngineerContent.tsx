"use client"
import Image from "next/image"
import ScrollRow from "@/components/ScrollRow"
import type { CardItem } from "@/components/ScrollRow"
import { projects } from "@/data/projects"
import { skills, education, certifications, positions } from "@/data/engineer"

const techPills = ["ESP32", "Python", "Cloud", "ML", "Azure"]

/* ──────────────────────── SVG Icon Helpers ──────────────────────── */

const iconGradCap = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
    <path d="M22 10v6" />
  </svg>
)

const iconScroll = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h12a2 2 0 002-2v-2H10v2a2 2 0 01-2 2z" />
    <path d="M12 17V3a2 2 0 00-2-2H4a2 2 0 00-2 2v14a4 4 0 004 4h12" />
    <path d="M2 15h8" />
  </svg>
)

const iconBook = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
  </svg>
)

const iconCloud = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
  </svg>
)

const iconBarChart = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
)

const iconShield = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
)

const iconCode = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const iconChip = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
)

const iconWrench = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
)

const iconBrush = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 19l7-7 3 3-7 7-3-3z" />
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
    <path d="M2 2l7.586 7.586" />
    <circle cx="11" cy="11" r="2" />
  </svg>
)

const iconCamera = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
)

const iconStar = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const iconLightning = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
)

/* ──────────────────────── Icon Maps ──────────────────────── */

const eduIconMap: Record<string, React.ReactNode> = {
  vit: iconGradCap,
  school: iconScroll,
  "school-10": iconBook,
}

const certIconMap: Record<string, React.ReactNode> = {
  azure: iconCloud,
  "deloitte-data": iconBarChart,
  "deloitte-cyber": iconShield,
}

const skillIconMap: Record<string, React.ReactNode> = {
  languages: iconCode,
  iot: iconChip,
  cloud: iconCloud,
  tools: iconWrench,
  design: iconBrush,
}

const positionIconMap: Record<string, React.ReactNode> = {
  "vp-photo": iconCamera,
  "co-organizer": iconStar,
  hackathon: iconLightning,
}

/* ──────────────────────── Project Icons ──────────────────────── */

const iconDroplet = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
  </svg>
)

const iconSun = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
)

const iconBuilding = (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="18" />
    <line x1="15" y1="22" x2="15" y2="18" />
    <line x1="8" y1="6" x2="8" y2="6" />
    <line x1="12" y1="6" x2="12" y2="6" />
    <line x1="16" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="8" y2="10" />
    <line x1="12" y1="10" x2="12" y2="10" />
    <line x1="16" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="8" y2="14" />
    <line x1="12" y1="14" x2="12" y2="14" />
    <line x1="16" y1="14" x2="16" y2="14" />
  </svg>
)

const projectIconMap: Record<string, React.ReactNode> = {
  "smart-irrigation": iconDroplet,
  "solar-vehicle": iconSun,
  "digital-twin": iconBuilding,
}

/* ──────────────────────── Card Data ──────────────────────── */

const projectCards: CardItem[] = projects.map((p) => ({
  id: p.id,
  title: p.title,
  tagline: p.tagline,
  detail1Label: "Problem",
  detail1: p.problem,
  detail2Label: "Solution",
  detail2: p.solution,
  tags: p.techStack,
  image: p.image,
  icon: projectIconMap[p.id],
}))

const skillCards: CardItem[] = skills.map((s) => ({
  id: s.id,
  title: s.category,
  tagline: `${s.items.length} skills`,
  detail1Label: s.category,
  detail1: s.items.join(", "),
  icon: skillIconMap[s.id],
}))

const eduCertCards: CardItem[] = [
  ...education.map((e) => ({
    id: e.id,
    title: e.institution,
    tagline: e.degree,
    detail1Label: "Degree",
    detail1: e.degree,
    detail2Label: "Period",
    detail2: e.period,
    icon: eduIconMap[e.id],
  })),
  ...certifications.map((c) => ({
    id: c.id,
    title: c.title,
    tagline: c.issuer,
    detail1Label: "Issuer",
    detail1: c.issuer,
    detail2Label: "Date",
    detail2: c.date,
    icon: certIconMap[c.id],
  })),
]

const positionCards: CardItem[] = positions.map((p) => ({
  id: p.id,
  title: p.title,
  tagline: p.organization,
  detail1Label: "Organization",
  detail1: p.organization,
  detail2Label: "Description",
  detail2: p.description,
  icon: positionIconMap[p.id],
}))

/* ──────────────────────── Component ──────────────────────── */

export default function EngineerContent() {
  return (
    <>
      {/* Hero with scan-line effect */}
      <section className="relative w-full hero-scanlines" style={{ minHeight: "65vh" }}>
        <div className="absolute inset-0 bg-[#0a0a0a]" />


        <div
          className="relative z-10 max-w-6xl mx-auto px-8 pt-28 pb-16 flex flex-col justify-end"
          style={{ minHeight: "65vh" }}
        >
          <p
            className="text-xs tracking-[0.2em] uppercase mb-2"
            style={{
              color: "#e50914",
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.15em",
            }}
          >
            Engineer
          </p>
          <h1
            className="text-white font-bold mb-4 leading-none"
            style={{
              fontFamily: "var(--font-bebas), sans-serif",
              letterSpacing: "0.04em",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
            }}
          >
            Lakshya Mehta
          </h1>
          <p
            className="text-[#aaa] text-sm md:text-base max-w-lg mb-6"
            style={{ lineHeight: "1.9", letterSpacing: "0.02em" }}
          >
            Building at the intersection of hardware and cloud — from IoT sensor networks and embedded systems to
            ML-powered dashboards and digital twins. Currently pursuing B.Tech at VIT Chennai.
          </p>
          <div className="flex flex-wrap gap-2">
            {techPills.map((pill) => (
              <span
                key={pill}
                className="text-[11px] px-3 py-1 rounded-full border border-[#e50914]/30 text-[#e50914] tracking-wider uppercase"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-6xl mx-auto px-8">
        <hr className="border-0 h-px bg-[#1a1a1a]" />
      </div>

      <div className="py-8">
        <div id="projects">
          <ScrollRow title="Projects" items={projectCards} accentColor="#e50914" />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="skills">
          <ScrollRow title="Skills" items={skillCards} accentColor="#e50914" />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="education">
          <ScrollRow title="Education & Certifications" items={eduCertCards} accentColor="#e50914" />
        </div>

        <div className="max-w-6xl mx-auto px-8">
          <hr className="border-0 h-px bg-[#1a1a1a] my-2" />
        </div>

        <div id="experience">
          <ScrollRow title="Positions of Responsibility" items={positionCards} accentColor="#e50914" />
        </div>
      </div>
    </>
  )
}

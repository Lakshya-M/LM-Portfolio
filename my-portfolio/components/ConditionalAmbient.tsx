"use client"
import { usePathname } from "next/navigation"
import AmbientBackground from "./AmbientBackground"

export default function ConditionalAmbient() {
  const pathname = usePathname()
  if (pathname === "/") return null
  return <AmbientBackground />
}

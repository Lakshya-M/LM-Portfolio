import type { Metadata } from "next"
import { Bebas_Neue, DM_Sans } from "next/font/google"
import "./globals.css"
import ConditionalAmbient from "@/components/ConditionalAmbient"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lakshya Mehta — Engineer & Photographer",
  description:
    "Portfolio of Lakshya Mehta — IoT Engineer, Cloud Developer, and Concert Photographer based in India.",
  icons: {
    icon: "/images/Logo_New.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <body className="antialiased relative min-h-screen bg-[#0a0a0a]">
        <ConditionalAmbient />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
}


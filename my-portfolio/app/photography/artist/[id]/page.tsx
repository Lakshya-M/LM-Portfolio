import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { artists } from "@/data/photography"
import { notFound } from "next/navigation"
import Link from "next/link"

export default function ArtistPage({ params }: { params: { id: string } }) {
  const artist = artists.find((a) => a.id === params.id)

  if (!artist || !artist.behanceEmbed) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header variant="photography" />
      <div className="max-w-6xl mx-auto px-8 py-24 min-h-[80vh] flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-12 mt-16">
          <Link
            href="/photography#concert"
            className="text-[#d4a843] text-xs uppercase tracking-widest hover:text-white transition-colors"
          >
            ← Back to Photography
          </Link>
          <h1
            className="text-4xl md:text-5xl font-bold uppercase"
            style={{ fontFamily: "var(--font-bebas), sans-serif", letterSpacing: "0.05em" }}
          >
            {artist.name}
          </h1>
        </div>

        <div className="w-full h-px bg-[#1a1a1a] mb-12" />

        <div className="flex-1 flex flex-col items-center justify-center w-full">
          <div
            className="w-full max-w-4xl bg-black border border-[#222] rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-4 md:p-8"
            style={{ minHeight: "500px" }}
          >
            <div
              className="w-full h-full flex flex-col items-center justify-center [&>iframe]:w-full [&>iframe]:max-w-[800px] [&>iframe]:rounded-lg shadow-inner"
              dangerouslySetInnerHTML={{ __html: artist.behanceEmbed }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export function generateStaticParams() {
  return artists.filter(a => a.behanceEmbed).map((a) => ({
    id: a.id,
  }))
}

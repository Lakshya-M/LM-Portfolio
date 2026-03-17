import Header from "@/components/Header"
import Footer from "@/components/Footer"
import PhotographyContent from "./PhotographyContent"

export const metadata = {
  title: "Photography — Lakshya Mehta",
  description: "Concert, street, and event photography by Lakshya Mehta.",
}

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header variant="photography" />
      <PhotographyContent />
      <Footer />
    </main>
  )
}

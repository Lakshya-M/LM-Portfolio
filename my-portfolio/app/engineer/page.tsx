import Header from "@/components/Header"
import Footer from "@/components/Footer"
import EngineerContent from "./EngineerContent"

export const metadata = {
  title: "Engineer — Lakshya Mehta",
  description: "IoT, Embedded Systems, Cloud, and ML projects by Lakshya Mehta.",
}

export default function EngineerPage() {
  return (
    <main className="min-h-screen bg-transparent">
      <Header variant="engineer" />
      <EngineerContent />
      <Footer />
    </main>
  )
}

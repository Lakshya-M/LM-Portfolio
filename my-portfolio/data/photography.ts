export interface PhotoCategory {
  id: string
  title: string
  description: string
  coverImage?: string
  photos?: string[]
}

export interface Artist {
  id: string
  name: string
  type: "artist" | "dj" | "band"
  image?: string
  event?: string
  behanceEmbed?: string
}

export const photoCategories: PhotoCategory[] = [
  {
    id: "concert",
    title: "Concert",
    description: "Live music captured in its rawest form — energy, light, and motion.",
  },
  {
    id: "general-events",
    title: "Events",
    description: "Festivals, cultural events, and gatherings worth remembering.",
  },
  {
    id: "street",
    title: "Street",
    description: "Candid moments from the city — unposed, unfiltered.",
  },
  {
    id: "product",
    title: "Product",
    description: "Clean, intentional photography for products and brands.",
  },
  {
    id: "others",
    title: "Others",
    description: "Everything else worth shooting.",
  },
]

export const artists: Artist[] = [
  { id: "raftaar", name: "Raftaar", type: "artist", event: "Live Concert", image: "/images/Raftaar.webp", behanceEmbed: '<iframe src="https://www.behance.net/embed/project/245823313?ilo0=1" height="316" width="404" allowfullscreen lazyload frameborder="0" allow="clipboard-write" refererPolicy="strict-origin-when-cross-origin"></iframe>' },
  { id: "aastha-gill", name: "Aastha Gill", type: "artist", event: "Live Concert", image: "/images/Aastha Gill.webp" },
  { id: "armaan-malik", name: "Armaan Malik", type: "artist", event: "Live Concert", image: "/images/Armaan Malik.webp" },
  { id: "gini", name: "Gini", type: "artist", event: "Live Event", image: "/images/Gini.webp" },
  { id: "progressive-brothers", name: "Progressive Brothers", type: "dj", event: "Live Event", image: "/images/Progressive Brothers.webp" },
  { id: "camilla-lynkx", name: "Camilla Lynkx", type: "artist", event: "Live Event", image: "/images/Camilla Lynkx.webp" },
  { id: "ankit-tiwari", name: "Ankit Tiwari", type: "artist", event: "Live Concert", image: "/images/Ankit Tiwari.webp" },
  { id: "makka-band", name: "Makka Band", type: "band", event: "Live Concert", image: "/images/Makka Band.webp" },
  { id: "priyanka-nk", name: "Priyanka NK", type: "artist", event: "Live Event", image: "/images/Priyanka NK.webp" },
  { id: "santosh-n", name: "Santosh N", type: "artist", event: "Live Event", image: "/images/Santosh N.webp" },
  { id: "pineapple-express", name: "Pineapple Express", type: "band", event: "Live Concert", image: "/images/Pineapple Express.webp" },
]

export const djs: Artist[] = [
  // { id: "dj-1", name: "DJ Name", type: "dj", event: "Event Name", image: "/images/dj-1.webp" }
]

export const bands: Artist[] = [
  // { id: "band-1", name: "Band Name", type: "band", event: "Event Name", image: "/images/band-1.webp" }
]

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
  { id: "raftaar", name: "Raftaar", type: "artist", event: "Live Concert", image: "/images/Raftaar.jpg" },
  { id: "aastha-gill", name: "Aastha Gill", type: "artist", event: "Live Concert", image: "/images/Aastha Gill.jpg" },
  { id: "armaan-malik", name: "Armaan Malik", type: "artist", event: "Live Concert", image: "/images/Armaan Malik.jpg" },
  { id: "gini", name: "Gini", type: "artist", event: "Live Event", image: "/images/Gini.jpg" },
  { id: "progressive-brothers", name: "Progressive Brothers", type: "dj", event: "Live Event", image: "/images/Progressive Brothers.jpg" },
  { id: "camilla-lynkx", name: "Camilla Lynkx", type: "artist", event: "Live Event", image: "/images/Camilla Lynkx.jpg" },
  { id: "ankit-tiwari", name: "Ankit Tiwari", type: "artist", event: "Live Concert", image: "/images/Ankit Tiwari.jpg" },
  { id: "makka-band", name: "Makka Band", type: "band", event: "Live Concert", image: "/images/Makka Band.jpg" },
  { id: "priyanka-nk", name: "Priyanka NK", type: "artist", event: "Live Event", image: "/images/Priyanka NK.jpg" },
  { id: "santosh-n", name: "Santosh N", type: "artist", event: "Live Event", image: "/images/Santosh N.jpg" },
  { id: "pineapple-express", name: "Pineapple Express", type: "band", event: "Live Concert", image: "/images/Pineapple Express.jpg" },
]

export const djs: Artist[] = [
  // { id: "dj-1", name: "DJ Name", type: "dj", event: "Event Name", image: "/images/dj-1.jpg" }
]

export const bands: Artist[] = [
  // { id: "band-1", name: "Band Name", type: "band", event: "Event Name", image: "/images/band-1.jpg" }
]

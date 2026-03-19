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
  // { id: "artist-1", name: "Artist Name", type: "artist", event: "Event Name", image: "/images/artist-1.jpg" }
]

export const djs: Artist[] = [
  // { id: "dj-1", name: "DJ Name", type: "dj", event: "Event Name", image: "/images/dj-1.jpg" }
]

export const bands: Artist[] = [
  // { id: "band-1", name: "Band Name", type: "band", event: "Event Name", image: "/images/band-1.jpg" }
]

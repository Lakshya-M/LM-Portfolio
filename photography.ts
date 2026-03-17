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
    title: "General Events",
    description: "Festivals, college events, and gatherings worth remembering.",
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
  // Add your artists here as you shoot them
  // { id: "artist-1", name: "Artist Name", type: "artist", event: "Event Name" },
]

export const djs: Artist[] = [
  // Add DJs here
]

export const bands: Artist[] = [
  // Add bands here
]

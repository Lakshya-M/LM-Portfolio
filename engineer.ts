export interface Skill {
  id: string
  category: string
  items: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  period: string
  detail?: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  date: string
}

export interface Position {
  id: string
  title: string
  organization: string
  description: string
}

export const skills: Skill[] = [
  { id: "languages", category: "Languages", items: ["Python", "C/C++", "Java", "SQL", "JavaScript"] },
  { id: "iot", category: "IoT & Embedded", items: ["Arduino", "Raspberry Pi", "ESP32", "Node-RED", "Blynk IoT", "Tinkercad"] },
  { id: "cloud", category: "Cloud & Web", items: ["AWS", "Azure", "Firebase", "REST APIs", "HTML/CSS", "React"] },
  { id: "tools", category: "Tools", items: ["Git", "Docker", "Postman", "Tableau", "Hadoop"] },
  { id: "design", category: "Design", items: ["Photoshop", "Color Grading"] },
]

export const education: Education[] = [
  {
    id: "vit",
    institution: "VIT Chennai",
    degree: "B.Tech CSE — Cyber Physical Systems",
    period: "Sept 2022 – July 2026",
  },
  {
    id: "school",
    institution: "St. Cecilia's Public School, Delhi",
    degree: "Senior Secondary (Class 12)",
    period: "2022",
  },
]

export const certifications: Certification[] = [
  { id: "azure", title: "Azure AI Engineer Associate", issuer: "Microsoft", date: "July 2025" },
  { id: "deloitte-data", title: "Data Analytics Virtual Program", issuer: "Deloitte", date: "June 2025" },
  { id: "deloitte-cyber", title: "Cyber Security Virtual Program", issuer: "Deloitte", date: "June 2025" },
]

export const positions: Position[] = [
  {
    id: "vp-photo",
    title: "Vice President",
    organization: "Photography Club, VIT Chennai",
    description: "Leading the photography club, organizing shoots, workshops, and events across campus.",
  },
  {
    id: "co-organizer",
    title: "Co-Organizer",
    organization: "Annual Technical & Cultural Event — 3 Years",
    description: "Co-organized the college's flagship tech and cultural fest for three consecutive years.",
  },
  {
    id: "hackathon",
    title: "Event Organizer",
    organization: "Inter-College Hackathons",
    description: "Organized multiple inter-college level hackathons and technical events.",
  },
]

export interface Project {
  id: string
  title: string
  tagline: string
  problem: string
  solution: string
  techStack: string[]
  category: string
  image?: string
}

export const projects: Project[] = [
  {
    id: "smart-irrigation",
    title: "Smart Irrigation System",
    tagline: "Edge-driven water intelligence",
    problem: "Manual irrigation leads to water wastage and inefficiency in farms.",
    solution: "Automated system using soil sensors and weather API to regulate watering and sync data to the cloud.",
    techStack: ["ESP32", "Python", "Firebase", "MQTT", "OpenWeatherMap API", "HTML/CSS/JS"],
    category: "IoT",
  },
  {
    id: "solar-vehicle",
    title: "Solar-Powered Smart Vehicle",
    tagline: "Predictive maintenance for solar transport",
    problem: "Solar vehicles suffer from unnoticed degradation leading to energy loss.",
    solution: "Built a prototype using predictive models to monitor performance and trigger alerts before failures.",
    techStack: ["Solar Panels", "Microcontrollers", "LSTM", "Python", "Bluetooth", "Embedded C"],
    category: "Embedded",
  },
  {
    id: "digital-twin",
    title: "Digital Twin Building Monitor",
    tagline: "Real-time anomaly detection at scale",
    problem: "Traditional building monitoring lacks real-time fault detection, causing energy inefficiency.",
    solution: "Digital Twin system monitoring IoT sensor data in real time, detecting anomalies using ML.",
    techStack: ["ESP32", "IoT Sensors", "Python", "Machine Learning", "REST API", "Web Dashboard"],
    category: "ML + IoT",
  },
]

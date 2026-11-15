/**
 * Projects Data Configuration
 * Easy to update: simply add, edit, or remove project objects in this array.
 */
const projectsData = [
  {
    id: "sujal-portfolio",
    title: "Sujal Patel Personal Portfolio",
    category: "Web Development",
    featured: true,
    badge: "Featured Project",
    shortDescription: "A modern, high-performance, dark-themed personal portfolio engineered with responsive Neuform aesthetics, interactive canvas physics, and smooth section transitions.",
    technologies: ["HTML5", "CSS3 / Neuform", "JavaScript (ES6+)", "HTML5 Canvas", "Git & GitHub"],
    githubUrl: "https://github.com/sujalpatel2728/sujalportfolio",
    liveUrl: "#",
    metrics: "100% Responsive • Dark Neuform UI",
    gradient: "from-[#2B44D1] to-[#435EF0]"
  },
  {
    id: "harmful-gas-detector",
    title: "Harmful Gas Detector",
    category: "IoT & Hardware",
    featured: true,
    badge: "Hardware & IoT",
    shortDescription: "An intelligent harmful gas detection and alert system engineered to monitor hazardous atmospheric gases (such as LPG, smoke, CO, and toxic fumes) in real-time with automated sensor thresholds and alert triggers.",
    technologies: ["IoT / Microcontroller", "MQ Gas Sensors", "Python / C++", "Hardware Interfacing", "Safety Automation"],
    githubUrl: "https://github.com/cyberidfc9/HARMFUL-GAS-DETECTER",
    liveUrl: "https://github.com/cyberidfc9/HARMFUL-GAS-DETECTER",
    metrics: "Real-time Telemetry • Automatic Hazard Alert",
    gradient: "from-[#10B981] to-[#3B82F6]"
  },
  {
    id: "student-portal",
    title: "IT Student Attendance & Academic Portal",
    category: "Full Stack / Python",
    featured: true,
    badge: "Academic Project",
    shortDescription: "A comprehensive student management web application allowing faculty to record attendance, manage student profiles, calculate semester grades, and export reports.",
    technologies: ["Python", "Flask / SQLite", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/sujalpatel2728",
    liveUrl: "#",
    metrics: "Automated Grade & Attendance Calculator",
    gradient: "from-[#1E3A8A] to-[#2563EB]"
  },
  {
    id: "weather-pulse",
    title: "WeatherPulse - Realtime Forecast App",
    category: "Web Development",
    featured: false,
    badge: "Web App",
    shortDescription: "An interactive weather dashboard fetching real-time atmospheric data, 5-day forecasts, wind patterns, and UV indices using OpenWeatherMap REST API with dynamic UI cards.",
    technologies: ["JavaScript (Async/Fetch)", "CSS Grid", "REST API", "Geolocation API"],
    githubUrl: "https://github.com/sujalpatel2728",
    liveUrl: "#",
    metrics: "Live Geolocation & Weather Alerts",
    gradient: "from-[#0F172A] to-[#3B82F6]"
  },
  {
    id: "dev-task-tracker",
    title: "DevSprint - Interactive Task Manager",
    category: "Tools & Utilities",
    featured: false,
    badge: "Productivity",
    shortDescription: "A lightweight Kanban and checklist tool with local storage persistence, drag-and-drop mechanics, priority sorting, and dark mode interface designed for IT developers.",
    technologies: ["HTML5 Drag & Drop", "JavaScript", "LocalStorage API", "Modern CSS"],
    githubUrl: "https://github.com/sujalpatel2728",
    liveUrl: "#",
    metrics: "Zero Latency • Local Data Persistence",
    gradient: "from-[#1E1B4B] to-[#4338CA]"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = projectsData;
}

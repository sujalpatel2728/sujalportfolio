/**
 * Skills Data Configuration
 * Easy to update: simply add, edit, or remove items in the array below.
 */
const skillsData = [
  {
    category: "Frontend Development",
    description: "Building responsive, modern, and high-performance user interfaces.",
    skills: [
      {
        name: "HTML5",
        level: "Semantic & Accessible",
        tag: "Core",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 3 1.8 15.2L12 21l6.2-2.8L20 3H4z"/><path d="M16.5 7.5H7.5l.5 4.5h8l-.5 4.5-3.5 1-3.5-1-.2-2"/></svg>`
      },
      {
        name: "CSS3 / Modern Styling",
        level: "Flexbox, Grid, Animations",
        tag: "Styling",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16l-1.8 15.2L12 21l-6.2-2.8L4 3z"/><path d="m8.5 7.5 7 0-.5 4.5H9l.5 4.5 2.5.7 2.5-.7.3-2.5"/></svg>`
      },
      {
        name: "JavaScript (ES6+)",
        level: "DOM, Async/Await, Web APIs",
        tag: "Language",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="4"/><path d="M8 17v-4c0-.6.4-1 1-1h1v5"/><path d="M14 17v-4.5c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v1.5a1.5 1.5 0 0 1-3 0"/></svg>`
      },
      {
        name: "Responsive Web Design",
        level: "Mobile-First & Cross-Browser",
        tag: "UX/UI",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`
      }
    ]
  },
  {
    category: "Programming & Backend Basics",
    description: "Core algorithms, data handling, and backend logic.",
    skills: [
      {
        name: "Python",
        level: "Object-Oriented & Scripting",
        tag: "Core",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>`
      },
      {
        name: "Database Concepts (SQL)",
        level: "Queries, Relational Design",
        tag: "Database",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>`
      },
      {
        name: "REST API Integration",
        level: "Fetch API & JSON handling",
        tag: "Architecture",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>`
      }
    ]
  },
  {
    category: "Development Tools & Workflow",
    description: "Version control, modern editors, and team collaboration tools.",
    skills: [
      {
        name: "Git",
        level: "Branching, Merging, History",
        tag: "VCS",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9a9 9 0 0 0 9 9"/><path d="M18 15V9"/></svg>`
      },
      {
        name: "GitHub",
        level: "Repositories & Open Source",
        tag: "Collaboration",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`
      },
      {
        name: "Visual Studio Code",
        level: "Extensions, Debugging, Emmet",
        tag: "Editor",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`
      },
      {
        name: "Terminal & Command Line",
        level: "PowerShell & Bash Scripting",
        tag: "CLI",
        icon: `<svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/></svg>`
      }
    ]
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = skillsData;
}

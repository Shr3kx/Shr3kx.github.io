// ============================================================
// GLOBAL PORTFOLIO CONFIGURATION
// Edit this file to update all content across the portfolio.
// ============================================================

// ------------------------------------------------------------
// PERSONAL INFO
// ------------------------------------------------------------
export const PERSONAL = {
  name: "Shrey",
  lastName: "Kuvera",
  fullName: "Shrey Kuvera",
  role: "Front-End Engineer",
  email: "shrey.kuvera@gmail.com",
  github: "https://github.com/Shr3kx",
  githubUsername: "Shr3kx",
  /** Short tagline shown in the status badge on the hero window */
  statusBadge: "Front-End Engineer",
  /** One-liner description used in the hero section */
  bio: "Focused on building efficient, maintainable and user-friendly web applications.",
  /** Specializations highlighted (bold) in the bio paragraph */
  specializations: ["React", "Next.js", "AI integration"],
  /** Currently-working-on blurb shown in the hero code card */
  currentWork: "Developing Node.js/AI solutions",
};

// ------------------------------------------------------------
// HERO CODE SNIPPET
// Appears in the dark code-preview card inside the Hero window.
// ------------------------------------------------------------
export const HERO_CODE_SNIPPET = {
  constName: "Profile",
  focus: "Efficient/User-friendly UI",
  experience: "Enterprise/HealthCare/ERP",
  goals: ["Workflow Optimization", "Real-time Insights"],
  tech: ["React", "Next.js", "TypeScript"],
  comment: "// Building scalable solutions",
};

// ------------------------------------------------------------
// NOW BUILDING WIDGET
// The floating "currently working on" widget on the desktop.
// ------------------------------------------------------------
export const NOW_BUILDING = {
  title: "CodePocket",
  description: "Building a modern code snippet manager for developers",
  link: "https://codepocket.vercel.app/",
  /** Progress percentage 0–100 */
  progress: 30,
};

// ------------------------------------------------------------
// PROJECTS
// ------------------------------------------------------------
export const PROJECTS = [
  {
    id: "socialping",
    title: "SocialPing",
    description:
      "Full-stack social platform with real-time posts, likes, and notifications via Socket.io, backed by JWT auth and optimized MongoDB/Express data handling.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "JWT"],
    image: "/socialPing.png",
    link: "https://social-ping.vercel.app/",
  },
  {
    id: "codepocket",
    title: "CodePocket",
    description:
      "Modern web-based code snippet manager that helps developers save, organize, search, and reuse code efficiently with tags, collections, and fast interactions.",
    tags: ["Next.js", "TypeScript", "Shadcn", "Supabase", "Gemini GenAI SDK"],
    image: "/codepocket.png",
    link: "https://codepocket.vercel.app/",
  },
  {
    id: "projectmap",
    title: "ProjectMap",
    description:
      "AI-powered web app that generates project roadmaps through an interactive chatbot, enabling idea discovery, milestone planning, and visualization with React Flow.",
    tags: ["Next.js", "TypeScript", "Supabase", "React Flow"],
    image: "/projectmap.png",
    video: "/projectmap-demo.mp4",
    link: "https://projectmapio.vercel.app/",
  },
  {
    id: "ninjasketch",
    title: "Ninja Sketch",
    description:
      "Next.js and Canvas API collaborative whiteboard supporting drawing, text, shapes, export, and a smooth UX.",
    tags: ["Next.js", "Canvas API", "TypeScript", "TailwindCSS"],
    image: "/ninjasketch.png",
    link: "https://ninsketch.vercel.app/",
  },
  {
    id: "scribo",
    title: "Scribo",
    description:
      "Note-taking web app with real-time markdown editing, image uploads, fast sync, persistent storage, and a minimal Notion-inspired UI.",
    tags: ["Next.js", "TypeScript", "ConvexDB", "Edgestore", "Clerk"],
    image: "/scribo.png",
    link: "https://scribo-v1.vercel.app/",
  },
];

// ------------------------------------------------------------
// TECH STACK / SKILLS
// Shown in the "Capabilities / Stack" window grid.
// ------------------------------------------------------------
export const TECH_STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
];

// ------------------------------------------------------------
// EDUCATION
// Each entry is one card in the Education window.
// ------------------------------------------------------------
export const EDUCATION = [
  {
    institution: "Bennett University",
    degree: "Master of Computer Applications (MCA)",
    period: "2024 – Present",
  },
  {
    institution: "Bennett University",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Sept 2021 – May 2024",
  },
];

// ------------------------------------------------------------
// WORK EXPERIENCE
// Each entry maps to one timeline block in the Experience window.
// ------------------------------------------------------------
export const EXPERIENCE = [
  {
    company: "Excellent Softwares",
    role: "Front-End Developer Intern",
    period: "Aug 2023 – Dec 2024",
    bullets: [
      "Developed secure web applications for healthcare and ERP clients using React.js and Next.js.",
      "Automated KYC and scheduling workflows, cutting manual tasks by 50%.",
      "Built Modular Next.js API dashboards and Vendor Portals with operational analytics.",
      "Implemented AES-CBC encryption for secure sessions and data privacy.",
      "Optimized performance using reusable components and Redux state management.",
    ],
  },
];

// ------------------------------------------------------------
// DEMO / SHOWCASE
// Controls the content of the video demo window.
// ------------------------------------------------------------
export const DEMO = {
  videoSrc: "/projectmap-demo.mp4",
  title: "ProjectMap Demo",
  subtitle: "Showcasing: AI-powered roadmap generator and visualization.",
};

// ------------------------------------------------------------
// TERMINAL
// Responses for terminal commands.
// ------------------------------------------------------------
export const TERMINAL_CONFIG = {
  /** User shown in the terminal prompt: <username>@portfolio:~$ */
  username: "shrey",
  welcomeMessages: [
    "Welcome to Shrey's Portfolio OS Terminal",
    'Type "help" for a list of commands.',
  ],
  commands: {
    help: "Available commands: bio, skills, github, clear, contact",
    bio: "Front-end engineer focused on efficient web applications with React and Next.js.",
    skills:
      "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, Node.js, Express.js, MongoDB.",
    contact: "shrey.kuvera@gmail.com",
    github: {
      message: "Opening github.com/Shr3kx...",
      url: "https://github.com/Shr3kx",
    },
  },
};

// ------------------------------------------------------------
// CONTACT
// Data shown inside the Contact window.
// ------------------------------------------------------------
export const CONTACT = {
  email: "shrey.kuvera@gmail.com",
};

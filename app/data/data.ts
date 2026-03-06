// data.ts — Portfolio data for Alwin Sebastian

export const personalInfo = {
  name: "Alwin Sebastian",
  title: "Software Developer",
  tagline: "BCA Graduate · Full-Stack Enthusiast · Problem Solver",
  email: "alwinsebastian41@gmail.com",
  phone: "+91 989 599 7661",
  location: "Kochi, Kerala",
  linkedin: "https://www.linkedin.com/in/alwin-sebastian42",
  github: "https://github.com/alwinsebastian42", // update if different
  about: `Motivated BCA graduate with strong skills in object-oriented programming, data structures, and software development. Proficient in Java, PHP, and C++, with a keen interest in developing efficient, scalable, and user-friendly software solutions. Eager to join an innovative organization as an entry-level software developer to contribute to impactful projects while expanding my technical expertise and growing within a professional team environment.`,
};

export const projects = [
  {
    id: 1,
    title: "Jaggery Logistics System",
    role: "Team Lead",
    duration: "June 2024 – October 2024",
    description:
      "Designed and developed a user-centric platform to facilitate the online sale and distribution of jaggery products. The system integrates key eCommerce features, efficient logistics, and tools for seamless product management, enhancing the overall buying and selling experience.",
    tags: ["eCommerce", "Logistics", "PHP", "MySQL"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Residential Hub",
    role: "Team Lead",
    duration: "November 2024 – Present",
    description:
      "Currently developing a centralized platform to streamline community management by integrating event planning, resource renting, polls, and safety alerts. The system enhances engagement and collaboration through real-time updates, a unified calendar, and transparent communication, fostering a connected and organised community environment.",
    tags: ["Community Platform", "Real-time", "Node.js", "MongoDB"],
    status: "In Progress",
  },
];

export const skills = {
  technical: [
    { name: "Python", level: 85 },
    { name: "PHP", level: 80 },
    { name: "Java", level: 78 },
    { name: "C++", level: 75 },
    { name: "MySQL", level: 82 },
    { name: "JavaScript", level: 70 },
    { name: "Microsoft Excel", level: 72 },
    { name: "Microsoft PowerPoint", level: 70 },
  ],
  soft: [
    "Communication",
    "Problem Solving",
    "Time Management",
    "Critical Thinking",
    "Team Leadership",
  ],
};

export const languages = [
  { name: "English", proficiency: "Fluent" },
  { name: "Hindi", proficiency: "Conversational" },
  { name: "Malayalam", proficiency: "Native" },
];

export const education = [
  {
    degree: "Bachelor of Computer Applications",
    institution: "Nirmala College, Muvattupuzha",
    duration: "2022 – 2025",
    status: "Pursuing",
  },
];

export const certifications = [
  {
    name: "Python",
    issuer: "GTECH",
    date: "August 2022",
  },
  {
    name: "Programming in C",
    issuer: "GTECH",
    date: "September 2022",
  },
  {
    name: "MERN Stack",
    issuer: "Skill India, NSDC",
    date: "November 2024",
  },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
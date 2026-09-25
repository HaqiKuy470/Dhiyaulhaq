export const CONTACT = {
  email: "haqikuy470@gmail.com",
  whatsapp: "6285111422715",
  whatsappDisplay: "+62 851 1142 2715",
  location: "Malang, East Java, Indonesia",
};

export const SOCIALS = [
  { name: "LinkedIn", handle: "moh-dhiyaulhaq", href: "https://www.linkedin.com/in/moh-dhiyaulhaq/" },
  { name: "GitHub", handle: "haqikuy470", href: "https://github.com/haqikuy470" },
  { name: "Instagram", handle: "@haqikuy", href: "https://instagram.com/haqikuy" },
  { name: "YouTube", handle: "@haqikuy", href: "https://youtube.com/@haqikuy" },
  { name: "TikTok", handle: "@haqikuy", href: "https://tiktok.com/@haqikuy" },
];

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/projects" },
  { name: "Certificates", href: "/certificates" },
  { name: "Documentation", href: "/documentation" },
  { name: "CV", href: "/cv" },
];

export interface Product {
  name: string;
  domain: string;
  url: string;
  category: string;
  tagline: string;
  tags: string[];
  // Cover treatment: "ink" is the dark cover, "accent" the red one.
  cover: "ink" | "accent";
}

export const PRODUCTS: Product[] = [
  {
    name: "Shaka Studio",
    domain: "shakastudio.net",
    url: "https://shakastudio.net",
    category: "Game development · Roblox",
    tagline: "A Roblox game development studio building experiences, systems, and assets for the Roblox platform.",
    tags: ["Roblox", "Game Development", "Lua"],
    cover: "ink",
  },
  {
    name: "Compile Daily",
    domain: "compiledaily.net",
    url: "https://compiledaily.net",
    category: "Publishing · Developer media",
    tagline: "Daily dev insights, tutorials, and tech news for developers who want to stay up to date.",
    tags: ["Tech News", "Tutorials", "Developer Content"],
    cover: "accent",
  },
];

export const SERVICES = [
  {
    numeral: "i.",
    title: "Web Development",
    desc: "Building modern, responsive, and fast web ecosystems using Next.js and React.",
    tools: "Next.js · React · Node.js · Express · PostgreSQL",
  },
  {
    numeral: "ii.",
    title: "AI & Machine Learning",
    desc: "Exploring and implementing artificial intelligence for automation and data analysis.",
    tools: "Python · Gemini API · OpenCV · n8n",
  },
  {
    numeral: "iii.",
    title: "Mobile Development",
    desc: "Developing cross-platform mobile applications with Flutter for efficient business solutions.",
    tools: "Flutter · Figma",
  },
];

export const SKILLS = [
  { name: "Cursor", category: "Tools" },
  { name: "Docker", category: "Ops" },
  { name: "Express", category: "Backend" },
  { name: "Figma", category: "Design" },
  { name: "Flutter", category: "Mobile" },
  { name: "Gemini API", category: "AI" },
  { name: "Git", category: "Tools" },
  { name: "Linux", category: "Ops" },
  { name: "MySQL", category: "Data" },
  { name: "n8n", category: "Automation" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "OpenCV", category: "AI" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Prisma", category: "Data" },
  { name: "Python", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
];

export const RECORD = [
  {
    year: "2025 to now",
    title: "Informatics Engineering Education",
    desc: "Universitas Negeri Malang (UM). Specializing in AI integration and software architecture.",
  },
  {
    year: "2025 to now",
    title: "Arshaka Ecosystem",
    desc: "Building and managing an ecosystem of tech companies.",
  },
  {
    year: "2026",
    title: "Digdaya × Hackathon · Bank Indonesia",
    desc: "Team lead. Completed the Essential Training Program, 2 May to 23 June 2026.",
  },
  {
    year: "2026",
    title: "Hackathon Refactory × UNAIR",
    desc: "Team lead and finalist.",
  },
  {
    year: "2026",
    title: "Google · Juara Vibe Coding",
    desc: "Built a digital lab website for Chemistry, Physics, and Biology.",
  },
  {
    year: "2022 to 2025",
    title: "MAN 1 Lamongan",
    desc: "Secondary education in Mathematics & Natural Science (MIPA).",
  },
];

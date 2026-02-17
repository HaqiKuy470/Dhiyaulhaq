"use client";
import { motion } from "framer-motion";

const skillsRow1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion", "JavaScript", "HTML5", "CSS3"];
const skillsRow2 = ["Python", "C++", "Lua", "Arduino", "Linux (Ubuntu)", "Git", "Binance API", "Solana", "Google Gemini", "Android Dev"];

const Marquee = ({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap mask-image-linear-gradient select-none">
      <motion.div
        initial={{ x: direction === "left" ? "0%" : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : "0%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="flex gap-12 py-6"
      >
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <span 
            key={idx} 
            className="text-xl md:text-2xl font-bold text-slate-700 uppercase tracking-widest transition-all duration-300 hover:text-blue-400 hover:scale-110 cursor-default"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="py-10 bg-slate-950 border-y border-slate-900/50 relative overflow-hidden">
      
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="relative z-0 space-y-2">
        <Marquee items={skillsRow1} direction="left" />
        <Marquee items={skillsRow2} direction="right" />
      </div>

    </section>
  );
}
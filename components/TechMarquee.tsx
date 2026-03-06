"use client";
import Marquee from "react-fast-marquee"; 

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", 
  "Python", "PostgreSQL", "Docker", "Git", "Framer Motion", "GSAP", "AI"
];

export default function TechMarquee() {
  return (
    <div className="py-10 bg-slate-950 border-y border-slate-900 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10" />

      <Marquee gradient={false} speed={40}>
        {skills.map((skill, index) => (
          <div key={index} className="mx-4 md:mx-8 flex items-center gap-2 group cursor-default">
            <span className="text-lg md:text-2xl font-bold text-slate-500 group-hover:text-blue-400 transition-colors uppercase tracking-widest opacity-50 group-hover:opacity-100">
              {skill}
            </span>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-800" />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
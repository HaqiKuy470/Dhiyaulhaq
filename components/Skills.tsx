import Marquee from "react-fast-marquee";

const skillsRow1 = ["Next.js", "React", "Flutter", "Node.js", "Express", "Python", "PostgreSQL", "MySQL", "TypeScript"];
const skillsRow2 = ["n8n", "OpenCV", "Docker", "Gemini API", "Prisma", "Figma", "Git", "Linux", "Antigravity", "Cursor"];

export default function Skills() {
  return (
    <section className="py-12 bg-white border-b-8 border-black font-mono overflow-hidden flex flex-col gap-6">
      
      <div className="bg-pink-400 border-y-4 border-black flex items-center">
        <Marquee speed={70} gradient={false} direction="left" autoFill={true}>
          {skillsRow1.map((item, idx) => (
            <div key={idx} className="flex items-center px-4 py-6">
              <span className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter border-4 border-black bg-white px-4 py-2 shadow-[6px_6px_0px_0px_#000] whitespace-nowrap hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
                {item}
              </span>
              <span className="text-black font-black text-3xl ml-8">*</span>
            </div>
          ))}
        </Marquee>
      </div>

      <div className="bg-cyan-400 border-y-4 border-black flex items-center">
        <Marquee speed={60} gradient={false} direction="right" autoFill={true}>
          {skillsRow2.map((item, idx) => (
            <div key={idx} className="flex items-center px-4 py-6">
              <span className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter border-4 border-black bg-yellow-400 px-4 py-2 shadow-[6px_6px_0px_0px_#000] whitespace-nowrap hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
                {item}
              </span>
              <span className="text-black font-black text-3xl ml-8">+</span>
            </div>
          ))}
        </Marquee>
      </div>

    </section>
  );
}
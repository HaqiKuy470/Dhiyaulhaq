import Marquee from "react-fast-marquee";

const skillsRow1 = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "JavaScript", "HTML5", "CSS3"];
const skillsRow2 = ["Python", "C++", "Lua", "Arduino", "Linux (Ubuntu)", "Git", "Binance API", "Solana", "Gemini AI", "Android Dev"];

export default function Skills() {
  return (
    <section className="py-12 bg-white border-b-8 border-black font-mono overflow-hidden flex flex-col gap-6">
      
      {/* Row 1 - Bergerak ke Kiri dengan tema Pink */}
      <div className="bg-pink-400 border-y-4 border-black flex items-center">
        {/* Tambahkan autoFill agar list digandakan otomatis menutupi layar (tidak patah/kosong) */}
        <Marquee speed={70} gradient={false} direction="left" autoFill={true}>
          {skillsRow1.map((item, idx) => (
            // PERBAIKAN: Gunakan px-4 dan py-6 (padding) BUKAN margin, agar shadow punya ruang fisik
            <div key={idx} className="flex items-center px-4 py-6">
              <span className="text-xl md:text-3xl font-black text-black uppercase tracking-tighter border-4 border-black bg-white px-4 py-2 shadow-[6px_6px_0px_0px_#000] whitespace-nowrap hover:bg-black hover:text-white hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-crosshair">
                {item}
              </span>
              {/* Pembatas diletakkan dengan margin kiri saja agar lebih rapi */}
              <span className="text-black font-black text-3xl ml-8">*</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Row 2 - Bergerak ke Kanan dengan tema Cyan */}
      <div className="bg-cyan-400 border-y-4 border-black flex items-center">
        {/* autoFill wajib untuk looping yang mulus */}
        <Marquee speed={60} gradient={false} direction="right" autoFill={true}>
          {skillsRow2.map((item, idx) => (
            // PERBAIKAN: py-6 ditambahkan agar shadow bawah 6px tidak terpotong
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
import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b-8 border-black bg-[#f4f4f0] font-mono">
      <div className="container mx-auto px-6">
        
        <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 inline-block bg-green-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
          Our Product
        </h2>

        <div className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] flex flex-col md:flex-row overflow-hidden hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all">
          
          <div className="md:w-1/2 h-64 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black bg-purple-500 flex flex-col items-center justify-center p-8 relative overflow-hidden">
            <span className="text-6xl md:text-8xl font-black opacity-20 uppercase tracking-tighter absolute -right-4 -bottom-4 rotate-6">
              ARSHAKA
            </span>
            
            <div className="relative z-10 bg-yellow-400 px-6 py-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] transform -rotate-2">
              <span className="text-3xl md:text-5xl font-black text-black uppercase tracking-tighter">
                ARSHAKA
              </span>
            </div>
          </div>
          
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="text-xs font-black uppercase border-2 border-black px-2 py-1 bg-cyan-400 shadow-[2px_2px_0px_0px_#000]">
                Superweb Ecosystem
              </span>
              <span className="text-xs font-black uppercase border-2 border-black px-2 py-1 bg-gray-100 shadow-[2px_2px_0px_0px_#000]">
                In-Development
              </span>
            </div>
            
            <h3 className="text-3xl font-black uppercase mb-4">Arshaka Project</h3>
            
            <p className="font-bold text-sm md:text-base mb-8 leading-relaxed text-black bg-pink-200 border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
              An integrated digital ecosystem to help your business grow and succeed.
            </p>
            
            <div className="flex gap-4">
              <Link href="https://company.heyhaqi.my.id/" className="flex-1 px-4 py-3 border-4 border-black font-black uppercase bg-white text-xs md:text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center">
                Details
              </Link>
              <Link href="https://company.heyhaqi.my.id/" className="flex-1 px-4 py-3 border-4 border-black font-black uppercase bg-black text-white text-xs md:text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center">
                Launch
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
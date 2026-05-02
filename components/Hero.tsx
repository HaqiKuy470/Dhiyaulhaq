import { Github, Linkedin, Instagram, Youtube, Music, Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="min-h-[100dvh] flex items-center pt-24 md:pt-20 bg-[#f4f4f0] text-black font-mono border-b-8 border-black overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="space-y-6 md:space-y-8 z-10">
          
          <div className="inline-block px-4 py-2 bg-yellow-400 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-black text-xs font-bold uppercase tracking-widest">
              State University of Malang
            </span>
          </div>

          <div className="py-2">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-tight tracking-tighter">
              Hi, I'm <br />
              <span className="bg-cyan-400 px-2 mt-2 inline-block border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                Dhiyaulhaq Ulumuddin
              </span>
            </h1>
          </div>

          <p className="text-black font-bold text-sm md:text-lg max-w-lg leading-relaxed bg-pink-400 p-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            Informatics Engineering student specializing in AI integration and software architecture. Expert in building SaaS ecosystems and automated digital solutions.
          </p>

          <div className="flex flex-wrap gap-4 items-center pt-2">
            <Link 
              href="/cv" 
              className="px-8 py-3 bg-green-400 text-black font-black uppercase border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
            >
              <Download className="w-6 h-6" /> View CV
            </Link>

            <div className="flex items-center gap-2 bg-white p-2 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <SocialIcon href="https://github.com/haqikuy470" icon={<Github className="w-6 h-6" />} />
              <SocialIcon href="https://www.linkedin.com/in/moh-dhiyaulhaq-ulumuddin-98b9022a1" icon={<Linkedin className="w-6 h-6" />} />
              <SocialIcon href="https://instagram.com/haqikuy" icon={<Instagram className="w-6 h-6" />} />
              <SocialIcon href="https://youtube.com/@heyhaqi" icon={<Youtube className="w-6 h-6" />} />
              <SocialIcon href="https://tiktok.com/@haqikuy" icon={<Music className="w-6 h-6" />} />
            </div>
          </div>
        </div>

        <div className="relative hidden md:block w-full">
          <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
          
          <div className="w-full relative border-4 border-black bg-white flex flex-col">
            <div className="bg-blue-600 text-white px-4 py-2 border-b-4 border-black flex justify-between items-center">
              <span className="font-bold uppercase tracking-widest text-sm">developer.exe</span>
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-white border-2 border-black hover:bg-black transition-colors cursor-pointer" />
                <div className="w-4 h-4 bg-white border-2 border-black hover:bg-black transition-colors cursor-pointer" />
                <div className="w-4 h-4 bg-red-500 border-2 border-black hover:bg-red-600 transition-colors cursor-pointer" />
              </div>
            </div>
            
            <div className="p-6 font-bold text-sm sm:text-base text-black bg-[#e5e5e5]">
              <p><span className="text-blue-700">const</span> developer = {"{"}</p>
              <p className="pl-6 mt-2">name: <span className="bg-yellow-300 px-1 border border-black">"Dhiyaulhaq"</span>,</p>
              <p className="pl-6 mt-2">role: <span className="bg-yellow-300 px-1 border border-black">"Undergraduate"</span>,</p>
              <p className="pl-6 mt-2">
                skills: [
                  <span className="bg-green-300 px-1 mx-1 border border-black">"Next.js"</span>, 
                  <span className="bg-green-300 px-1 mx-1 border border-black">"Python"</span>, 
                  <span className="bg-green-300 px-1 mx-1 border border-black">"Linux"</span>
                ],
              </p>
              <p className="pl-6 mt-2">status: <span className="bg-pink-400 text-white px-1 border border-black">"Active"</span></p>
              <p className="mt-2">{"}"};</p>
              <div className="w-4 h-6 bg-black mt-4 animate-ping" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      className="text-black bg-transparent hover:bg-black hover:text-white transition-colors p-2 border-2 border-transparent hover:border-black flex items-center justify-center"
      aria-label="Social Media Link"
    >
      {icon}
    </a>
  );
}
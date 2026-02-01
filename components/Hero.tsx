"use client";
import { useRef } from "react";
import { Github, Linkedin, Instagram, Youtube, Download } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef(null);
  
  // Referensi untuk elemen yang mau dianimasikan
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    // 1. Animasi Judul Besar (Muncul dari bawah + Fade In)
    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5, // Tunggu loading sebentar
      skewY: 7, // Efek miring dikit biar artistik
    })
    // 2. Animasi Nama (Staggering)
    .from(subRef.current, {
      y: 50,
      opacity: 0,
      duration: 1.2,
    }, "-=1") // Mulai 1 detik sebelum animasi sebelumnya selesai
    // 3. Deskripsi
    .from(descRef.current, {
      y: 30,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    // 4. Tombol & Sosmed
    .from(btnRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.2, // Tombol muncul satu-satu
    }, "-=0.8");

  }, { scope: container });

  return (
    <section ref={container} className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-8 z-10">
          
          {/* Badge Kampus */}
          <div ref={subRef} className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm">
            <span className="text-blue-400 text-xs font-mono font-bold tracking-widest uppercase">
              State University of Malang
            </span>
          </div>

          {/* Main Title dengan Efek Clipping */}
          <div className="overflow-hidden py-2"> {/* Wrapper ini penting buat efek 'muncul dari tanah' */}
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-[length:200%_auto] animate-gradient">
                Dhiyaulhaq
              </span>
            </h1>
          </div>

          <p ref={descRef} className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed border-l-2 border-blue-500/50 pl-6">
            Mahasiswa PTI yang gemar mengeksplorasi <span className="text-blue-400 font-bold">Web Development</span>, <span className="text-purple-400 font-bold">Automation</span>, dan <span className="text-yellow-400 font-bold">Financial Tech</span>.
          </p>
          
          {/* Buttons Area */}
          <div ref={btnRef} className="flex flex-wrap gap-4 items-center">
            <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2">
              <Download className="w-5 h-5" /> Download CV
            </button>
            
            <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
               <SocialIcon href="https://github.com" icon={<Github className="w-5 h-5"/>} />
               <SocialIcon href="https://linkedin.com" icon={<Linkedin className="w-5 h-5"/>} />
               <SocialIcon href="https://instagram.com" icon={<Instagram className="w-5 h-5"/>} />
            </div>
          </div>

        </div>

        {/* Hero Image / Abstract Visual */}
        <div className="relative hidden md:block h-[500px]">
           {/* Kita ganti gambar statis dengan GSAP Floating Elements nanti */}
           <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" />
           {/* Placeholder untuk Code Editor visual atau 3D Model */}
           <div className="w-full h-full border border-slate-800 bg-slate-950/50 backdrop-blur-md rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"/>
                <div className="w-3 h-3 rounded-full bg-yellow-500"/>
                <div className="w-3 h-3 rounded-full bg-green-500"/>
              </div>
              <div className="space-y-2 font-mono text-sm text-slate-400">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = <span className="text-yellow-400">{"{"}</span></p>
                <p className="pl-4">name: <span className="text-green-400">"Dhiyaulhaq"</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">"Informatics Engineer"</span>,</p>
                <p className="pl-4">skills: [<span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Python"</span>, <span className="text-green-400">"React.js"</span>, <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"TypeScript"</span>,<span className="text-green-400">"Linux"</span>],</p>
                <p className="pl-4">status: <span className="text-green-400">"HighStudent"</span></p>
                <p><span className="text-yellow-400">{"}"}</span>;</p>
                <p className="text-slate-600 mt-4">// Coding the future...</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
    return (
        <a href={href} target="_blank" className="text-slate-400 hover:text-white hover:scale-125 transition-all">
            {icon}
        </a>
    )
}
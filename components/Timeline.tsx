"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Calendar, Code2 } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import FadeIn from "@/components/ui/FadeIn";

const timelineData = [
  {
    year: "2024 - Sekarang",
    title: "Pendidikan Teknik Informatika",
    place: "Universitas Negeri Malang",
    desc: "Mahasiswa aktif semester awal. Fokus mendalami Fundamental Pemrograman, Algoritma, dan Web Development.",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
    color: "blue"
  },
  {
    year: "Jan 2026",
    title: "Founder & Developer",
    place: "Arshaka Bot Platform",
    desc: "Meluncurkan SaaS penyewaan Bot WhatsApp dengan sistem token dan manajemen grup otomatis.",
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
    color: "purple"
  },
  {
    year: "Des 2025",
    title: "Freelance Web Developer",
    place: "Bimbel Edu Asa",
    desc: "Membangun website profil bisnis dan sistem informasi untuk lembaga bimbingan belajar menggunakan Next.js.",
    icon: <Briefcase className="w-5 h-5 text-green-400" />,
    color: "green"
  },
  {
    year: "Okt 2025",
    title: "PKM Proposal Submission",
    place: "Smart POS 'HYDRA'",
    desc: "Mengajukan proposal Program Kreativitas Mahasiswa untuk sistem kasir UMKM berbasis Offline-First Architecture.",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
    color: "yellow"
  },
];

export default function Timeline() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <FadeIn direction="down">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Rekam jejak pengalaman dan pendidikan.
            </p>
          </FadeIn>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* --- GARIS TENGAH (Central Spine) --- */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800/50 z-0">
             <motion.div 
               className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"
               animate={{ top: ["-10%", "110%"] }}
               transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
             />
          </div>

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative grid grid-cols-1 md:grid-cols-2 w-full">
                  
                  {/* --- AREA KIRI (Kartu Genap atau Kosong) --- */}
                  <div className={`md:pr-12 md:text-right ${isEven ? 'block' : 'hidden md:block'}`}>
                    {isEven && (
                      <FadeIn direction="right">
                         <div className="relative">
                            {/* Panah Kanan */}
                            <div className="hidden md:block absolute top-6 -right-[9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-slate-800 z-20" />
                            <TimelineCard item={item} />
                         </div>
                      </FadeIn>
                    )}
                  </div>

                  {/* --- TITIK TENGAH (Node) --- */}
                  {/* Absolute Positioned tepat di tengah Container */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-6 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] relative">
                        <div className="absolute inset-0 bg-blue-500/20 animate-ping rounded-full" />
                    </div>
                  </div>

                  {/* --- AREA KANAN (Kartu Ganjil atau Kosong) --- */}
                  <div className="pl-12 md:pl-12">
                    {!isEven && (
                      <FadeIn direction="left">
                         <div className="relative">
                            {/* Panah Kiri */}
                            <div className="hidden md:block absolute top-6 -left-[9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-slate-800 z-20" />
                            <TimelineCard item={item} />
                         </div>
                      </FadeIn>
                    )}
                    
                    {/* Mode Mobile: Tampilkan semua kartu di kanan */}
                    <div className="block md:hidden">
                       {isEven && <TimelineCard item={item} />}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}

// Komponen Kartu Dipisah Biar Rapi
function TimelineCard({ item }: { item: any }) {
  return (
    <GlowCard className="h-full group hover:-translate-y-1 transition-transform duration-300">
      <div className="flex flex-col h-full relative z-20"> {/* z-20 biar di atas segalanya */}
        
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b border-slate-800/50 pb-3 gap-4">
            <div className={`flex items-center gap-2 text-xs font-mono font-bold px-3 py-1 rounded-full bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20 whitespace-nowrap`}>
              <Calendar className="w-3 h-3" />
              {item.year}
            </div>
            <div className={`p-2 rounded-lg bg-slate-900 text-${item.color}-400 shrink-0`}>
              {item.icon}
            </div>
        </div>

        {/* Content */}
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-blue-500 font-medium mb-3">{item.place}</p>
        <p className="text-slate-400 text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </GlowCard>
  );
}
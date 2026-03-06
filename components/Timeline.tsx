"use client";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, Calendar, Code2 } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import FadeIn from "@/components/ui/FadeIn";

export const timelineData = [
  {
    year: "2022 - 2025",
    title: "Matematika dan Ilmu Pengetahuan Alam",
    place: "MAN 1 Lamongan",
    desc: "Membangun fondasi logika matematika dan analitis yang kuat sebagai dasar pemecahan masalah (Problem Solving) di bidang rekayasa perangkat lunak.",
    icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
  },
  {
    year: "2025 - Now",
    title: "Pendidikan Teknik Informatika",
    place: "Universitas Negeri Malang",
    desc: "Mahasiswa Undergraduate. Fokus mendalami Computational Thinking, Struktur Data, dan Modern Web Architecture.",
    icon: <Code2 className="w-5 h-5 text-purple-400" />,
  },
  {
    year: "Last 2025 - Now",
    title: "Web Developer",
    place: "Multiple Projects & Clients",
    desc: "Mengerjakan berbagai ragam proyek web. Fokus pada skalabilitas, SEO, dan performa tinggi menggunakan Next.js.",
    icon: <Briefcase className="w-5 h-5 text-green-400" />,
  },
  {
    year: "Jan 2026 - Now",
    title: "AI & Automation Developer",
    place: "Arshaka Bot Platform",
    desc: "Mengembangkan Intelligent Conversational Agents (Chatbots) multi-platform dengan integrasi API Gateway.",
    icon: <Trophy className="w-5 h-5 text-yellow-400" />,
  },
];

export default function Timeline() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <div className="text-center mb-16 md:mb-20">
          <FadeIn direction="down">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Journey</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg">
              Rekam jejak pengalaman dan pendidikan.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Garis Vertikal */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-800 z-0">
            <motion.div
              className="absolute top-0 left-0 right-0 h-[150px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"
              animate={{ top: ["-10%", "110%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />
          </div>

          <div className="space-y-8 md:space-y-0">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative flex md:grid md:grid-cols-2 w-full mb-8 md:mb-12">
                  
                  {/* KOLOM KIRI (Hanya Desktop): Ruang akan selalu dipertahankan, konten muncul jika Genap */}
                  <div className="hidden md:block w-full pr-12 text-right">
                    {isEven && (
                      <FadeIn direction="right">
                        <div className="relative">
                          {/* Panah Penunjuk ke Titik Tengah */}
                          <div className="absolute top-6 -right-[9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-slate-800 z-20" />
                          <TimelineCard item={item} isLeft={true} />
                        </div>
                      </FadeIn>
                    )}
                  </div>

                  {/* TITIK TENGAH (Animasi Ping) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 top-6 z-10 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-slate-950 border-2 border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] relative">
                      <div className="absolute inset-0 bg-blue-500/20 animate-ping rounded-full" />
                    </div>
                  </div>

                  {/* KOLOM KANAN (Selalu muncul di HP. Di Desktop, konten muncul jika Ganjil) */}
                  <div className="pl-12 w-full">
                    
                    {/* View Mobile: Tampilkan Semua Card */}
                    <div className="block md:hidden">
                      <FadeIn direction="up">
                        <div className="relative">
                          <div className="absolute top-6 -left-[9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-slate-800 z-20" />
                          <TimelineCard item={item} isLeft={false} />
                        </div>
                      </FadeIn>
                    </div>

                    {/* View Desktop: Tampilkan Card Ganjil */}
                    <div className="hidden md:block w-full">
                      {!isEven && (
                        <FadeIn direction="left">
                          <div className="relative">
                            <div className="absolute top-6 -left-[9px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-slate-800 z-20" />
                            <TimelineCard item={item} isLeft={false} />
                          </div>
                        </FadeIn>
                      )}
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

// Komponen Card yang Teksnya Bisa Menyesuaikan Sisi (Kiri/Kanan)
function TimelineCard({ item, isLeft }: { item: any, isLeft: boolean }) {
  return (
    <GlowCard className="h-full group hover:-translate-y-1 transition-transform duration-300 w-full">
      <div className="flex flex-col h-full relative z-20">
        
        {/* Header: Tahun & Ikon */}
        <div className={`flex items-center mb-4 border-b border-slate-800/50 pb-3 gap-3 ${isLeft ? 'md:justify-end md:flex-row-reverse justify-between' : 'justify-between'}`}>
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
            <Calendar className="w-3 h-3" />
            {item.year}
          </div>
          <div className="p-1.5 rounded-lg bg-slate-900 text-blue-400 shrink-0">
            {item.icon}
          </div>
        </div>
        
        {/* Konten Teks */}
        <div className={isLeft ? 'md:text-right text-left' : 'text-left'}>
          <h3 className="text-base md:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-sm text-blue-500 font-medium mb-2">{item.place}</p>
          <p className="text-slate-400 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

      </div>
    </GlowCard>
  );
}
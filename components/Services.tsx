"use client";
import { Monitor, Bot, ArrowRight, Sparkles, Smartphone } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    desc: "Membangun website modern yang cepat, responsif, dan SEO-friendly menggunakan Next.js dan Tailwind CSS. Cocok untuk Company Profile, Landing Page, atau arsitektur Dashboard kompleks.",
    tags: ["Next.js", "React", "SEO"]
  },
  {
    icon: <Smartphone className="w-8 h-8 text-green-400" />,
    title: "Mobile App Development",
    desc: "Merancang dan mengembangkan aplikasi mobile cross-platform (iOS & Android) berkinerja tinggi menggunakan Flutter. Salah satu produk unggulan yang saya kembangkan adalah HYDRA Smart POS.",
    tags: ["Flutter", "Dart", "Mobile UI", "HYDRA"]
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: "Chatbot & Financial Tech",
    desc: "Mengotomatisasi tugas berulang dan membangun Chatbot cerdas (WhatsApp/Telegram/Discord) terintegrasi API Gateway untuk menghemat waktu dan biaya operasional bisnis Anda.",
    tags: ["Python", "Node.js", "API", "Automation"]
  }
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">

        <div className="mb-16">
          <FadeIn direction="right">

            <div className="flex items-center gap-2 text-blue-500 font-mono mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="tracking-wide">01. Services</span>
            </div>

            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
              Solusi teknologi terintegrasi yang saya tawarkan untuk membantu digitalisasi dan skalabilitas bisnis Anda, dari arsitektur web hingga ekosistem mobile.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => (
            <FadeIn key={idx} delay={idx * 0.2} direction="up" fullWidth>
              <GlowCard className="h-full group hover:-translate-y-2 transition-transform duration-300">
                <div className="flex flex-col h-full">

                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-slate-900 border border-slate-800 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform w-fit">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Fake CTA Link */}
                  <div className="flex items-center gap-2 text-sm font-bold text-blue-500 mt-auto group-hover:gap-3 transition-all">
                    Detail Layanan <ArrowRight className="w-4 h-4" />
                  </div>

                </div>
              </GlowCard>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
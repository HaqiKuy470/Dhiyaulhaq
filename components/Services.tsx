"use client";
import { Monitor, Cpu, Bot, ArrowRight, Sparkles } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";
import FadeIn from "@/components/ui/FadeIn";

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-blue-400" />,
    title: "Web Development",
    desc: "Membangun website modern yang cepat, responsif, dan SEO-friendly menggunakan Next.js dan Tailwind CSS. Cocok untuk Company Profile, Landing Page, atau Dashboard.",
    tags: ["Next.js", "React", "SEO"]
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: "Bot & Automation",
    desc: "Mengotomatisasi tugas berulang atau membangun Chatbot cerdas (WhatsApp/Telegram/Discord). Hemat waktu dan biaya operasional bisnis Anda.",
    tags: ["Python", "WhatsApp API", "Scraping"]
  },
  {
    icon: <Cpu className="w-8 h-8 text-green-400" />,
    title: "Custom Systems",
    desc: "Perancangan sistem informasi kompleks seperti POS (Point of Sales), Manajemen Inventaris, atau SaaS dengan arsitektur database yang efisien.",
    tags: ["System Design", "Database", "SaaS"]
  },
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
              Solusi teknologi yang saya tawarkan untuk membantu bisnis atau proyek Anda berkembang dengan efisien.
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
                    Start Project <ArrowRight className="w-4 h-4" />
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
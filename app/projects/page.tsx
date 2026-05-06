"use client";

import { ArrowLeft, ExternalLink, Github, Terminal, Smartphone, Globe, Bot } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PROJECTS = [
  {
    title: "Web-Based Terminal Manager",
    year: "2026",
    category: "Fullstack / DevOps",
    desc: "A browser-based terminal interface to monitor and manage multi-platform bots in real-time. Integrated with PostgreSQL via Prisma ORM for audit trail and history tracking.",
    icon: <Terminal className="w-8 h-8" />,
    color: "bg-cyan-400",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"]
  },
  {
    title: "PPOB Web Platform (16 Categories)",
    year: "2025",
    category: "Web App / FinTech",
    desc: "Complex Payment Point Online Bank (PPOB) application serving 16 service categories including pulsa, electricity, BPJS, and internet with automated transaction routing.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-pink-400",
    tags: ["React", "API Integration", "Node.js", "MySQL"]
  },
  {
    title: "Multi-Platform Bot Development",
    year: "2025",
    category: "Automation",
    desc: "Automated bots for WhatsApp, Discord, and Telegram tailored for business and educational use cases. Features automated responses, security filters, and role management.",
    icon: <Bot className="w-8 h-8" />,
    color: "bg-yellow-400",
    tags: ["Node.js", "WhatsApp API", "Discord.js", "Telegram API"]
  },
  {
    title: "Point of Sales (POS) Application",
    year: "2025",
    category: "Mobile App",
    desc: "Cross-platform POS mobile application using Flutter for Android and iOS. Integrated with Xendit payment gateway for real-time transaction processing.",
    icon: <Smartphone className="w-8 h-8" />,
    color: "bg-green-400",
    tags: ["Flutter", "Dart", "Xendit", "Firebase"]
  }
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0] font-mono text-black">
      <Navbar />
      <div className="container mx-auto max-w-6xl py-12 px-6 pt-32">
        
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm w-fit"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          
          <div className="bg-yellow-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">My Projects</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col bg-white border-4 border-black shadow-[10px_10px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden"
            >
              <div className={`${project.color} p-6 border-b-4 border-black flex justify-between items-start`}>
                <div className="bg-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                  {project.icon}
                </div>
                <span className="bg-black text-white px-3 py-1 text-sm font-black uppercase">
                  {project.year}
                </span>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-black uppercase text-gray-500 mb-2">{project.category}</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">
                  {project.title}
                </h2>
                <p className="font-bold text-sm leading-relaxed mb-8 text-gray-700">
                  {project.desc}
                </p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 border-2 border-black text-[10px] font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="flex-1 px-4 py-3 bg-white border-4 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" /> Code
                    </button>
                    <button className="flex-1 px-4 py-3 bg-black text-white border-4 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

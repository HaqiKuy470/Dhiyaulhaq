"use client";

import { ArrowLeft, Printer, Mail, MapPin, Github, Linkedin, Phone } from "lucide-react";
import Link from "next/link";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 py-10 px-4 md:px-8 selection:bg-blue-500/30 font-sans">
      
      {/* ACTION BUTTONS (Disembunyikan saat di-print) */}
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-8 print:hidden">
        <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
          <ArrowLeft className="w-5 h-5" /> Kembali ke Portfolio
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-semibold"
        >
          <Printer className="w-4 h-4" /> Print PDF
        </button>
      </div>

      {/* KERTAS CV */}
      <div className="max-w-4xl mx-auto bg-slate-900/50 md:bg-slate-900 border border-slate-800 md:p-12 p-6 rounded-2xl shadow-2xl print:bg-white print:text-black print:shadow-none print:border-none print:p-0">
        
        {/* HEADER */}
        <header className="border-b border-slate-800 print:border-gray-300 pb-8 mb-8 text-center md:text-left flex flex-col md:flex-row md:justify-between items-center md:items-start gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white print:text-black mb-2 tracking-tight">
              Moh. Dhiyaulhaq <span className="text-blue-500 print:text-blue-700">Ulumuddin</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 print:text-gray-600 font-medium">
              Artificial Intelligence Developer
            </h2>
          </div>
          
          <div className="flex flex-col gap-2 text-sm text-slate-400 print:text-gray-600">
            <a href="mailto:haqikuy470@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition-colors justify-center md:justify-end">
              <Mail className="w-4 h-4" /> haqikuy470@gmail.com
            </a>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <Phone className="w-4 h-4" /> 085111422715
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-end">
              <MapPin className="w-4 h-4" /> Malang, Indonesia
            </div>
            <div className="flex items-center gap-4 justify-center md:justify-end mt-2">
              <Link href="https://github.com/haqikuy470" target="_blank" className="hover:text-white print:text-black transition-colors"><Github className="w-5 h-5"/></Link>
              <Link href="https://www.linkedin.com/in/moh-dhiyaulhaq-ulumuddin-98b9022a1" target="_blank" className="hover:text-white print:text-black transition-colors"><Linkedin className="w-5 h-5"/></Link>
            </div>
          </div>
        </header>

        {/* TENTANG SAYA */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white print:text-black mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
            <span className="w-8 h-[1px] bg-blue-500"></span> Professional Summary
          </h3>
          <p className="leading-relaxed text-slate-400 print:text-gray-700 text-justify">
            Mahasiswa Pendidikan Teknik Informatika yang antusias dengan pengembangan perangkat lunak, otomasi, dan teknologi finansial. Memiliki pengalaman praktis dalam membangun arsitektur web modern menggunakan ekosistem Next.js, serta pengembangan bot/otomasi dengan Python dan JavaScript. Berfokus pada penulisan kode yang bersih, efisiensi sistem, dan penyelesaian masalah analitis.
          </p>
        </section>

        {/* PENDIDIKAN */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white print:text-black mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
            <span className="w-8 h-[1px] bg-blue-500"></span> Education
          </h3>
          <div className="space-y-6">
            <div className="relative pl-4 border-l-2 border-slate-800 print:border-gray-300">
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900 print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <h4 className="text-lg font-bold text-slate-200 print:text-black">Universitas Negeri Malang</h4>
                <span className="text-blue-500 font-mono text-sm">2025 - Present</span>
              </div>
              <p className="text-slate-400 print:text-gray-600 font-medium mb-2">S1 Pendidikan Teknik Informatika</p>
            </div>
            
            <div className="relative pl-4 border-l-2 border-slate-800 print:border-gray-300">
              <div className="absolute w-3 h-3 bg-slate-600 print:bg-gray-400 rounded-full -left-[7px] top-1.5 ring-4 ring-slate-900 print:ring-white"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-1">
                <h4 className="text-lg font-bold text-slate-200 print:text-black">MAN 1 Lamongan</h4>
                <span className="text-slate-500 print:text-gray-500 font-mono text-sm">2022 - 2025</span>
              </div>
              <p className="text-slate-400 print:text-gray-600 font-medium">Matematika dan Ilmu Pengetahuan Alam</p>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-8">
          <h3 className="text-xl font-bold text-white print:text-black mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
            <span className="w-8 h-[1px] bg-blue-500"></span> Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* REVISI: Tambahan Dart, Flutter, Java, PostgreSQL, MySQL */}
            <div>
              <h4 className="text-slate-200 print:text-black font-semibold mb-2">Programming & Frameworks</h4>
              <p className="text-slate-400 print:text-gray-700 text-sm leading-relaxed">Next.js, React.js, Dart, Flutter, PHP, Laravel, Node.js, Python, Java, JavaScript, TypeScript, Tailwind CSS, PostgreSQL, MySQL.</p>
            </div>
            
            <div>
              <h4 className="text-slate-200 print:text-black font-semibold mb-2">Tools & Environments</h4>
              <p className="text-slate-400 print:text-gray-700 text-sm leading-relaxed">Linux (Ubuntu), Git, Docker, Framer Motion, GSAP, Godot Engine.</p>
            </div>
            
            {/* REVISI: Tambahan Artificial Intelligence Engineering */}
            <div>
              <h4 className="text-slate-200 print:text-black font-semibold mb-2">Specialized Domains</h4>
              <p className="text-slate-400 print:text-gray-700 text-sm leading-relaxed">Artificial Intelligence Engineering, Chatbot (WhatsApp/Discord/Telegram), Financial Tech (Bandarmology / Stock Market Data).</p>
            </div>
            
            <div>
              <h4 className="text-slate-200 print:text-black font-semibold mb-2">Languages</h4>
              <p className="text-slate-400 print:text-gray-700 text-sm leading-relaxed">Bahasa Indonesia (Native), English (Professional Working).</p>
            </div>
          </div>
        </section>

      </div>
      
      {/* CSS KHUSUS UNTUK PRINT */}
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          body { background-color: white !important; -webkit-print-color-adjust: exact; }
          @page { margin: 1cm; }
        }
      `}} />
    </div>
  );
}
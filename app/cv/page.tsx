"use client";

import { Printer, Mail, MapPin, Globe, Phone, ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6] py-10 px-4 md:px-8 selection:bg-[#8D624F]/30 font-sans flex flex-col items-center">
      
      {/* ACTION BUTTONS */}
      <div className="w-full max-w-[210mm] flex justify-between items-center mb-8 print:hidden">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-800 transition-colors font-medium">
          <ArrowLeft className="w-5 h-5" /> Kembali
        </Link>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#8D624F] hover:bg-[#724e3e] text-white rounded-lg transition-colors font-semibold shadow-md"
        >
          <Printer className="w-4 h-4" /> Print PDF (A4)
        </button>
      </div>

      {/* KERTAS CV (Ukuran A4 standard) */}
      <div className="w-full max-w-[210mm] min-h-[297mm] bg-white shadow-2xl print:shadow-none flex flex-col md:flex-row overflow-hidden text-gray-800">
        
        {/* =========================================
            KOLOM KIRI (SIDEBAR)
            ========================================= */}
        <div className="w-full md:w-[35%] bg-[#E8E8E8] p-8 flex flex-col">
          
          {/* Foto Profil */}
          <div className="flex justify-center mb-10 mt-4 md:mt-0 relative">
            <div className="w-44 h-44 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-300 relative">
              <Image 
                src="/logo.png" 
                alt="Profile" 
                fill 
                className="object-cover" 
              />
            </div>
            {/* Aksen garis vertikal brown */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[2px] h-32 bg-[#8D624F] hidden md:block opacity-50"></div>
          </div>

          {/* KONTAK */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-4 border-b border-[#C0A080] pb-2 tracking-widest">
              CONTACT
            </h2>
            <div className="flex flex-col gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <div className="bg-[#8D624F] p-1.5 rounded-full text-white">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                +62 851 1142 2715
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#8D624F] p-1.5 rounded-full text-white">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                haqikuy470@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#8D624F] p-1.5 rounded-full text-white">
                  <Globe className="w-3.5 h-3.5" />
                </div>
                heyhaqi.my.id
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#8D624F] p-1.5 rounded-full text-white">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                Malang
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#8D624F] p-1.5 rounded-full text-white">
                  <Github className="w-3.5 h-3.5" />
                </div>
                github.com/HaqiKuy470
              </div>
            </div>
          </div>

          {/* STUDY */}
          <div className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-4 border-b border-[#C0A080] pb-2 tracking-widest">
              STUDY
            </h2>
            
            <div className="mb-6">
              <h3 className="font-bold text-gray-800">MAN 1 Lamongan</h3>
              <p className="text-sm text-gray-600 mb-1">Mathematics & Natural Science</p>
              <span className="inline-block bg-[#D1D5DB] text-gray-700 text-xs font-semibold px-2 py-1 rounded">2022 - 2025</span>
            </div>

            <div className="mb-2">
              <p className="text-sm italic text-[#8D624F] mb-1">informatics engineering education</p>
              <h3 className="font-bold text-gray-800">Universitas Negeri Malang</h3>
              <span className="inline-block bg-[#D1D5DB] text-gray-700 text-xs font-semibold px-2 py-1 rounded">2025 - NOW</span>
            </div>
          </div>

          {/* SKILLS */}
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-4 border-b border-[#C0A080] pb-2 tracking-widest">
              SKILLS
            </h2>
            <div className="flex flex-col gap-3 text-[13px] text-gray-700">
              <div>
                <span className="font-bold">Frontend :</span> Next.js · React · Flutter
              </div>
              <div>
                <span className="font-bold">Backend :</span> Node.js · Express · Python
              </div>
              <div>
                <span className="font-bold">Database :</span> PostgreSQL · MySQL
              </div>
              <div>
                <span className="font-bold">Automation :</span> n8n · OpenCV · Docker
              </div>
              <div>
                <span className="font-bold">AI & API :</span> Gemini API · Prisma
              </div>
              <div>
                <span className="font-bold">Design :</span> Figma · Canva · Google Stitch
              </div>
              <div>
                <span className="font-bold">Tools :</span> Git · Cursor · Antigravity · Linux
              </div>
            </div>
          </div>
        </div>

        {/* =========================================
            KOLOM KANAN (MAIN CONTENT)
            ========================================= */}
        <div className="w-full md:w-[65%] p-8 md:p-12 bg-white flex flex-col">
          
          {/* HEADER (NAMA & TITLE) */}
          <header className="mb-12 mt-4">
            <h1 className="text-[40px] md:text-[52px] font-serif font-bold text-[#8D624F] leading-[1.1] mb-4 uppercase tracking-tight">
              MOH DHIYAULHAQ <br />
              ULUMUDDIN
            </h1>
            <h2 className="text-xl md:text-2xl tracking-[0.2em] text-gray-900 font-medium uppercase">
              FULLSTACK DEVELOPER
            </h2>
          </header>

          {/* ABOUT ME */}
          <section className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-4 border-b border-[#E5D7CB] pb-2 tracking-wide uppercase">
              ABOUT ME
            </h2>
            <p className="text-gray-700 leading-relaxed text-justify text-[15px]">
              Informatics Engineering student specializing in AI integration and software architecture. Experienced in building and managing SaaS web application ecosystems integrated with AI to create efficient, automated digital solutions. Proficient in fullstack development with Next.js, Node.js, Python, and Flutter, with hands-on experience in workflow automation, bot infrastructure, and computer vision systems.
            </p>
          </section>

          {/* PROJECTS & EXPERIENCE */}
          <section className="flex-1">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-6 border-b border-[#E5D7CB] pb-2 tracking-wide uppercase">
              PROJECTS & EXPERIENCE
            </h2>
            
            <div className="space-y-8">
              {/* Project 1 */}
              <div>
                <h3 className="text-[#8D624F] font-bold text-lg mb-2">
                  Web-Based Terminal Manager - 2026
                </h3>
                <ul className="list-disc list-outside ml-5 text-[14px] text-gray-700 leading-relaxed space-y-1">
                  <li>Built a browser-based terminal interface to monitor and manage multi-platform bots in real-time.</li>
                  <li>Integrated command execution logging with PostgreSQL via Prisma ORM for audit trail and history tracking.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <h3 className="text-[#8D624F] font-bold text-lg mb-2">
                  PPOB Web Platform (16 Categories) - 2025
                </h3>
                <ul className="list-disc list-outside ml-5 text-[14px] text-gray-700 leading-relaxed space-y-1">
                  <li>Developed a complex Payment Point Online Bank (PPOB) web application serving 16 service categories including pulsa, electricity, BPJS, and internet.</li>
                  <li>Integrated multi-vendor payment APIs with automated transaction routing and real-time status updates.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <h3 className="text-[#8D624F] font-bold text-lg mb-2">
                  Multi-Platform Bot Development - 2025
                </h3>
                <ul className="list-disc list-outside ml-5 text-[14px] text-gray-700 leading-relaxed space-y-1">
                  <li>Built automated bots for WhatsApp, Discord, and Telegram tailored for business and educational use cases.</li>
                  <li>Implemented automated responses, security filters, role management, and third-party API integrations.</li>
                </ul>
              </div>

              {/* Project 4 */}
              <div>
                <h3 className="text-[#8D624F] font-bold text-lg mb-2">
                  Point of Sales (POS) Application - 2025
                </h3>
                <ul className="list-disc list-outside ml-5 text-[14px] text-gray-700 leading-relaxed space-y-1">
                  <li>Built a cross-platform POS mobile application using Flutter for Android and iOS.</li>
                  <li>Integrated Xendit payment gateway for real-time transaction processing.</li>
                  <li>Developed features including inventory management, transaction history, and sales reporting.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* CSS KHUSUS UNTUK PRINT & FONTS */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @media print {
          @page { size: A4; margin: 0; }
          body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .min-h-screen { padding: 0 !important; }
        }
      `}} />
    </div>
  );
}
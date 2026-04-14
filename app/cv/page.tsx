"use client";

import { Printer, Mail, MapPin, Globe, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function CVPage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 md:px-8 selection:bg-[#8D624F]/30 font-sans flex flex-col items-center">
      
      {/* ACTION BUTTONS (Disembunyikan saat di-print) */}
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
            KOLOM KIRI (SIDEBAR PASTEL)
            ========================================= */}
        <div className="w-full md:w-[35%] bg-[#EFECE8] p-8 flex flex-col">
          
          {/* Foto Profil Placeholder */}
          <div className="flex justify-center mb-10 mt-4 md:mt-0 relative">
            <div className="w-40 h-40 rounded-full border-4 border-white shadow-md overflow-hidden bg-gray-300 relative">
              {/* Ganti '/profile.jpg' dengan path foto aslimu di folder public */}
              <Image 
                src="/logo.png" 
                alt="Profile" 
                fill 
                className="object-cover" 
                // Jika gambar belum ada, hapus tag Image ini dan gunakan bg-gray-300 sementara
              />
            </div>
            {/* Aksen garis vertikal di sebelah kanan foto (seperti di gambar) */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[3px] h-20 bg-[#D4C3B3] hidden md:block"></div>
          </div>

          {/* KONTAK */}
          <div className="mb-10">
            <h2 className="text-xl font-serif font-bold text-[#8D624F] mb-4 border-b-2 border-[#D4C3B3] pb-2 tracking-widest">
              KONTAK
            </h2>
            <div className="flex flex-col gap-4 text-sm text-gray-700">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8D624F]" /> +62 857 9228 2715
              </div>
              <div className="flex items-center gap-3 break-all">
                <Mail className="w-4 h-4 text-[#8D624F]" /> haqikuy470@gmail.com
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#8D624F]" /> heyhaqi.my.id
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#8D624F]" /> Malang
              </div>
            </div>
          </div>

          {/* PENDIDIKAN */}
          <div className="mb-10">
            <h2 className="text-xl font-serif font-bold text-[#8D624F] mb-4 border-b-2 border-[#D4C3B3] pb-2 tracking-widest">
              PENDIDIKAN
            </h2>
            
            <div className="mb-5">
              <h3 className="font-serif font-bold text-[#8D624F]">MAN 1 Lamongan</h3>
              <p className="text-sm text-gray-600 mb-1">Matematika dan IPA</p>
              <span className="inline-block bg-[#E5D7CB] text-[#5A4535] text-xs font-semibold px-2 py-1">2022 - 2025</span>
            </div>

            <div>
              <h3 className="font-serif font-bold text-[#8D624F]">Pendidikan Teknik Informatika</h3>
              <p className="text-sm text-gray-600 mb-1">Universitas Negeri Malang</p>
              <span className="inline-block bg-[#E5D7CB] text-[#5A4535] text-xs font-semibold px-2 py-1">2025 - NOW</span>
            </div>
          </div>

          {/* KEAHLIAN */}
          <div className="mb-8">
            <h2 className="text-xl font-serif font-bold text-[#8D624F] mb-4 border-b-2 border-[#D4C3B3] pb-2 tracking-widest">
              KEAHLIAN
            </h2>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>Front-end & Back-end</li>
              <li>Database</li>
              <li>Desain Web</li>
              <li>Mampu bekerja dalam tim</li>
              <li>Aktif bahasa inggris</li>
            </ul>
          </div>
        </div>

        {/* =========================================
            KOLOM KANAN (MAIN CONTENT)
            ========================================= */}
        <div className="w-full md:w-[65%] p-8 md:p-12 md:pt-16 bg-white flex flex-col">
          
          {/* HEADER (NAMA & TITLE) */}
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#8D624F] leading-[1.1] mb-4 uppercase">
              MOH DHIYAULHAQ <br />
              ULUMUDDIN
            </h1>
            <h2 className="text-base md:text-lg tracking-[0.15em] text-gray-800 font-medium uppercase">
              Artificial Intelligence Developer
            </h2>
          </header>

          {/* TENTANG SAYA */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-4 border-b-2 border-[#E5D7CB] pb-2 tracking-wide uppercase">
              Tentang Saya
            </h2>
            <p className="text-gray-600 leading-relaxed text-justify text-sm">
              Mahasiswa Pendidikan Teknik Informatika yang berfokus pada integrasi Artificial Intelligence dan arsitektur software. Berpengalaman dalam membangun dan mengelola ekosistem aplikasi web SaaS yang terintegrasi dengan AI untuk menciptakan solusi digital yang efisien dan otomatis.
            </p>
          </section>

          {/* PROYEK & PENGALAMAN */}
          <section className="mb-8 flex-1">
            <h2 className="text-2xl font-serif font-bold text-[#8D624F] mb-6 border-b-2 border-[#E5D7CB] pb-2 tracking-wide uppercase">
              Proyek & Pengalaman
            </h2>
            
            <div className="space-y-6">
              {/* Item 1 */}
              <div>
                <h3 className="text-[#8D624F] font-serif font-bold text-lg mb-1">
                  n8n Workflow Automation Architect
                </h3>
                <ul className="list-disc list-outside ml-5 text-sm text-gray-600 leading-relaxed space-y-1">
                  <li>Membangun alur otomatisasi sistem (workflow) kompleks berbasis n8n.</li>
                  <li>Menghubungkan API dan webhook untuk mereduksi tugas manual dan meningkatkan efisiensi operasional web.</li>
                </ul>
              </div>

              {/* Item 2 */}
              <div>
                <h3 className="text-[#8D624F] font-serif font-bold text-lg mb-1">
                  Fullstack Web & Mobile Developer
                </h3>
                <ul className="list-disc list-outside ml-5 text-sm text-gray-600 leading-relaxed space-y-1">
                  <li>Mengembangkan arsitektur web Point of Sales (Next.js) yang terintegrasi Midtrans untuk transaksi real-time.</li>
                  <li>Mengeksplorasi pengembangan antarmuka mobile cross-platform dengan ekosistem Flutter.</li>
                </ul>
              </div>

              {/* Item 3 */}
              <div>
                <h3 className="text-[#8D624F] font-serif font-bold text-lg mb-1">
                  Backend Automation Developer
                </h3>
                <ul className="list-disc list-outside ml-5 text-sm text-gray-600 leading-relaxed space-y-1">
                  <li>Membangun infrastruktur bot automasi multi-platform (WhatsApp, Telegram, Discord).</li>
                  <li>Menangani perutean data skala menengah untuk respons otomatis, filter keamanan interaktif, dan integrasi API publik.</li>
                </ul>
              </div>

              {/* Item 4 */}
              <div>
                <h3 className="text-[#8D624F] font-serif font-bold text-lg mb-1">
                  Computer Vision Engineer
                </h3>
                <ul className="list-disc list-outside ml-5 text-sm text-gray-600 leading-relaxed space-y-1">
                  <li>Membangun sistem pelacakan presensi presisi tinggi menggunakan Python dan OpenCV.</li>
                  <li>Mengotomatisasi validasi wajah real-time untuk menggantikan sistem absensi manual yang kurang efisien.</li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
      
      {/* CSS KHUSUS UNTUK PRINT */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&display=swap');
        
        /* Font serif custom untuk CV ini agar mirip gambar */
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        @media print {
          @page { size: A4; margin: 0; }
          body { background-color: white !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}} />
    </div>
  );
}
"use client";

import { useState } from "react";
import { ArrowLeft, ExternalLink, Award, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Cert {
  title: string;
  issuer: string;
  image: string;
  pdf: string;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const CERTIFICATES: Cert[] = [
  // Hackaton
  { title: "Hackathon Refactory UNAIR", issuer: "Hackaton", image: "/Sertif/Hackaton/REFACTORY_UNAIR.png", pdf: "/Sertif/Hackaton/REFACTORY_UNAIR.pdf", color: "bg-purple-400" },
  // Dicoding x Bank Indonesia
  { title: "Back-End with Google Cloud",  issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.png",   pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.pdf",   color: "bg-blue-400" },
  { title: "Back-End with Python",        issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.png",          pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.pdf",          color: "bg-blue-400" },
  { title: "Dasar AI",                    issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.png",                pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.pdf",                color: "bg-blue-400" },
  { title: "Dasar Data Science",          issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.png",       pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.pdf",       color: "bg-blue-400" },
  { title: "Dasar Google Cloud",          issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.png",       pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.pdf",       color: "bg-blue-400" },
  { title: "Dasar Machine Learning",      issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.png",   pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.pdf",   color: "bg-blue-400" },
  { title: "Dasar Python",                issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.png",            pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.pdf",            color: "bg-blue-400" },
  { title: "Prompt Engineering",          issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.png",            pdf: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.pdf",            color: "bg-blue-400" },
  { title: "UX Design",                   issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.png",               pdf: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.pdf",               color: "bg-blue-400" },
  // Dicoding x DBS
  { title: "Dasar Data Science",    issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarDataScience.png",    pdf: "/Sertif/Dicoding/DBS/DasarDataScience.pdf",    color: "bg-red-400" },
  { title: "Dasar Machine Learning",issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarMachineLearning.png",pdf: "/Sertif/Dicoding/DBS/DasarMachineLearning.pdf",color: "bg-red-400" },
  { title: "Dasar Python",          issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarPython.png",         pdf: "/Sertif/Dicoding/DBS/DasarPython.pdf",         color: "bg-red-400" },
  { title: "Dasar SQL",             issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarSQL.png",            pdf: "/Sertif/Dicoding/DBS/DasarSQL.pdf",            color: "bg-red-400" },
  { title: "Financial Literacy",    issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/FinancialLiteracy.png",   pdf: "/Sertif/Dicoding/DBS/FinancialLiteracy.pdf",   color: "bg-red-400" },
  // Dicoding x Microsoft
  { title: "Aplikasi GenAI Microsoft Azure",  issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.png",  pdf: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.pdf",  color: "bg-cyan-400" },
  { title: "Dasar Machine Learning",          issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.png",            pdf: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.pdf",            color: "bg-cyan-400" },
  { title: "Dasar Python",                    issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DasarPython.png",                     pdf: "/Sertif/Dicoding/MICROSOFT/DasarPython.pdf",                     color: "bg-cyan-400" },
  { title: "Data Science Microsoft Fabric",   issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.png",      pdf: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.pdf",      color: "bg-cyan-400" },
  { title: "Fundamental Pemrosesan Data",     issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.png",       pdf: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.pdf",       color: "bg-cyan-400" },
  // Udemy
  { title: "Web 3 Development Essential",                              issuer: "Udemy", image: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.png", pdf: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.pdf", color: "bg-orange-400" },
  { title: "Belajar Web Development Menggunakan Bahasa Pemrograman PHP", issuer: "Udemy", image: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.png", pdf: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.pdf", color: "bg-orange-400" },
  { title: "Complete Web & Mobile UI Designer: UI/UX, Figma, More",   issuer: "Udemy", image: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.png", pdf: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.pdf", color: "bg-orange-400" },
  { title: "Converted Website Into Mobile APPS",                       issuer: "Udemy", image: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.png", pdf: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.pdf", color: "bg-orange-400" },
];

// ─── Category accent colors ────────────────────────────────────────────────────
const CATEGORY_COLORS: Record<string, string> = {
  "Semua":                    "bg-yellow-400",
  "Hackaton":                 "bg-purple-400",
  "Dicoding x Bank Indonesia":"bg-blue-400",
  "Dicoding x DBS":           "bg-red-400",
  "Dicoding x Microsoft":     "bg-cyan-400",
  "Udemy":                    "bg-orange-400",
};

const ALL_CATEGORIES = ["Semua", ...Array.from(new Set(CERTIFICATES.map((c) => c.issuer)))];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function CertificatesPage() {
  const [activeTab, setActiveTab]       = useState("Semua");
  const [lightbox, setLightbox]         = useState<number | null>(null);

  const filtered = activeTab === "Semua" ? CERTIFICATES : CERTIFICATES.filter((c) => c.issuer === activeTab);
  const activeCert = lightbox !== null ? filtered[lightbox] : null;

  const prev = () => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i));
  const next = () => setLightbox((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i));

  return (
    <main className="min-h-screen bg-[#f4f4f0] font-mono text-black">
      <Navbar />

      <div className="container mx-auto max-w-6xl py-12 px-6 pt-32">

        {/* ── Header ── */}
        <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm w-fit"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
          <div className="bg-green-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
              <Award className="w-10 h-10" /> My Certificates
            </h1>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Sertifikat", value: CERTIFICATES.length, color: "bg-yellow-400" },
            { label: "Kategori",         value: ALL_CATEGORIES.length - 1, color: "bg-pink-400" },
            { label: "Ditampilkan",      value: filtered.length, color: "bg-lime-400" },
            { label: "Filter Aktif",     value: activeTab === "Semua" ? "All" : activeTab.split(" ")[0], color: "bg-cyan-400" },
          ].map((s) => (
            <div key={s.label} className={`${s.color} border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]`}>
              <div className="text-2xl md:text-3xl font-black truncate">{s.value}</div>
              <div className="text-[10px] font-bold uppercase mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Tab Filter ── */}
        <div className="flex flex-wrap gap-2 mb-10">
          {ALL_CATEGORIES.map((cat) => {
            const bg = CATEGORY_COLORS[cat] ?? "bg-gray-300";
            const active = activeTab === cat;
            const count = cat === "Semua" ? CERTIFICATES.length : CERTIFICATES.filter((c) => c.issuer === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`
                  flex items-center gap-2 px-4 py-2 border-4 border-black font-black uppercase text-xs transition-all
                  ${active
                    ? `${bg} shadow-none translate-x-0.5 translate-y-0.5`
                    : "bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                  }
                `}
              >
                {cat}
                <span className={`${active ? "bg-black text-white" : "bg-gray-200"} text-[10px] font-black px-1.5 py-0.5 border border-black`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((cert, idx) => (
            <div
              key={`${cert.issuer}-${cert.title}-${idx}`}
              className="group flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className={`relative h-48 w-full border-b-4 border-black overflow-hidden ${cert.color} cursor-zoom-in`}
                onClick={() => setLightbox(idx)}
              >
                <Image src={cert.image} alt={cert.title} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
                {/* Zoom hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all bg-white border-4 border-black p-2 shadow-[4px_4px_0px_0px_#000]">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
                {/* Category chip */}
                <div className={`absolute top-2 left-2 ${cert.color} border-2 border-black px-2 py-0.5`}>
                  <span className="text-[9px] font-black uppercase leading-none">{cert.issuer.split(" ")[0]}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-4 h-4 shrink-0 text-yellow-500" />
                    <span className="text-[10px] font-black uppercase bg-gray-100 border-2 border-black px-2 py-0.5 truncate">
                      {cert.issuer}
                    </span>
                  </div>
                  <h3 className="text-sm font-black uppercase leading-snug line-clamp-3">{cert.title}</h3>
                </div>

                <div className="flex gap-2 mt-4">
                  {/* Preview button */}
                  <button
                    onClick={() => setLightbox(idx)}
                    className="flex-1 px-3 py-2 border-4 border-black bg-white font-black uppercase text-[10px] shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1"
                  >
                    <ZoomIn className="w-3.5 h-3.5" /> Preview
                  </button>
                  {/* PDF button */}
                  <Link
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 bg-black text-white border-4 border-black font-black uppercase text-[10px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-center gap-1"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> PDF
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && activeCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)] w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className={`${activeCert.color} border-b-4 border-black px-5 py-3 flex items-center justify-between gap-4`}>
              <div className="min-w-0">
                <p className="font-black uppercase text-base leading-tight truncate">{activeCert.title}</p>
                <p className="text-xs font-bold opacity-70">{activeCert.issuer}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="shrink-0 bg-black text-white border-2 border-black p-1.5 hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[460px] bg-gray-50">
              <Image src={activeCert.image} alt={activeCert.title} fill className="object-contain p-4" />
            </div>

            {/* Footer nav */}
            <div className="border-t-4 border-black px-5 py-3 flex items-center justify-between bg-white gap-3">
              <button
                onClick={prev}
                disabled={lightbox === 0}
                className="flex items-center gap-1 px-4 py-2 border-4 border-black font-black uppercase text-xs bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <div className="flex items-center gap-3">
                <span className="font-black text-xs">{lightbox + 1} / {filtered.length}</span>
                <Link
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-4 py-2 bg-black text-white border-4 border-black font-black uppercase text-xs hover:bg-white hover:text-black transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" /> Open PDF
                </Link>
              </div>

              <button
                onClick={next}
                disabled={lightbox === filtered.length - 1}
                className="flex items-center gap-1 px-4 py-2 border-4 border-black font-black uppercase text-xs bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:pointer-events-none"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}

"use client";

import { useState, useRef, useCallback } from "react";
import { ArrowLeft, Camera, X, ZoomIn, ChevronLeft, ChevronRight, Filter, Upload, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ─── Type Definitions ─────────────────────────────────────────────────────────
interface EventPhoto {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  src: string;
  color: string; // fallback bg color
}

// ─── Data (tambahkan foto event Anda di sini) ─────────────────────────────────
const EVENT_PHOTOS: EventPhoto[] = [
  // Contoh placeholder — ganti src dengan path foto real Anda di /public/Dokumentasi/
  {
    id: 1,
    title: "Tim Arshaka",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0330.webp",
    color: "bg-purple-400",
  },
  {
    id: 2,
    title: "Coding",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0390.webp",
    color: "bg-purple-400",
  },
  {
    id: 3,
    title: "Finalis Top 5",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0826.webp",
    color: "bg-purple-400",
  },
  {
    id: 4,
    title: "Dokumentacion",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_1076.webp",
    color: "bg-purple-400",
  },
  {
    id: 5,
    title: "Comming Soon",
    event: "College",
    date: "Now",
    location: "Universitas Negeri Malang",
    src: "",
    color: "bg-blue-400",
  },
];

const EVENT_COLORS: Record<string, string> = {
  "Semua Event": "bg-yellow-400",
  "Hackathon Refactory UNAIR": "bg-purple-400",
  "College": "bg-blue-400",
};

// ─── Placeholder Card ─────────────────────────────────────────────────────────
function PlaceholderImage({ color, title }: { color: string; title: string }) {
  return (
    <div className={`${color} w-full h-full flex flex-col items-center justify-center gap-3 border-b-4 border-black`}>
      <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
        <ImageIcon className="w-10 h-10" />
      </div>
      <span className="font-black uppercase text-xs bg-white border-2 border-black px-2 py-1 text-center max-w-[80%]">
        {title}
      </span>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function DocumentationPage() {
  const [activeFilter, setActiveFilter] = useState("Semua Event");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const allEvents = ["Semua Event", ...Array.from(new Set(EVENT_PHOTOS.map((p) => p.event)))];

  const filtered =
    activeFilter === "Semua Event"
      ? EVENT_PHOTOS
      : EVENT_PHOTOS.filter((p) => p.event === activeFilter);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevPhoto = () => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null));
  const nextPhoto = () => setLightboxIndex((i) => (i !== null ? Math.min(filtered.length - 1, i + 1) : null));

  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <main className="min-h-screen bg-[#f4f4f0] font-mono text-black">
      <Navbar />

      {/* ── Header ── */}
      <div className="container mx-auto max-w-6xl py-12 px-6 pt-32">
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm w-fit"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>

          <div className="bg-lime-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter flex items-center gap-3">
              <Camera className="w-10 h-10" />
              Documentation
            </h1>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { label: "Total Foto", value: EVENT_PHOTOS.length, color: "bg-yellow-400" },
            { label: "Event", value: allEvents.length - 1, color: "bg-pink-400" },
            { label: "Tahun", value: "2024", color: "bg-cyan-400" },
            { label: "Kategori", value: "Aktif", color: "bg-lime-400" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`${stat.color} border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000] flex flex-col`}
            >
              <span className="text-3xl font-black">{stat.value}</span>
              <span className="text-xs font-bold uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* ── Filter Bar ── */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Filter className="w-5 h-5" />
            <span className="font-black uppercase text-sm">Filter by Event:</span>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden w-full border-4 border-black bg-white px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center justify-between mb-3"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            {activeFilter}
            <span>{isFilterOpen ? "▲" : "▼"}</span>
          </button>

          <div className={`flex flex-wrap gap-3 ${isFilterOpen ? "flex" : "hidden md:flex"}`}>
            {allEvents.map((ev) => {
              const bgColor = EVENT_COLORS[ev] || "bg-gray-300";
              const isActive = activeFilter === ev;
              return (
                <button
                  key={ev}
                  onClick={() => {
                    setActiveFilter(ev);
                    setIsFilterOpen(false);
                  }}
                  className={`
                    px-4 py-2 border-4 border-black font-black uppercase text-xs transition-all
                    ${isActive
                      ? `${bgColor} shadow-none translate-x-0.5 translate-y-0.5`
                      : "bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5"
                    }
                  `}
                >
                  {ev}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Upload hint ── */}
        {/* <div className="mb-8 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_#000] flex items-start gap-3">
          <Upload className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-xs font-bold">
            <span className="font-black">Cara tambah foto:</span> Letakkan foto di{" "}
            <code className="bg-yellow-200 border border-black px-1">/public/Dokumentasi/[NamaEvent]/foto.webp</code>{" "}
            lalu update array <code className="bg-yellow-200 border border-black px-1">EVENT_PHOTOS</code> di file ini.
          </p>
        </div>

        {/* ── Photo Grid ── */}
        {filtered.length === 0 ? (
          <div className="border-4 border-black bg-white p-16 flex flex-col items-center justify-center shadow-[8px_8px_0px_0px_#000]">
            <Camera className="w-16 h-16 mb-4 opacity-30" />
            <p className="font-black uppercase text-lg text-center opacity-50">Belum ada foto untuk event ini</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((photo, idx) => (
              <div
                key={photo.id}
                className="group relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden cursor-pointer"
                onClick={() => openLightbox(idx)}
              >
                {/* Photo */}
                <div className="relative h-56 w-full overflow-hidden">
                  {photo.src ? (
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <PlaceholderImage color={photo.color} title={photo.title} />
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all bg-white border-4 border-black p-3 shadow-[4px_4px_0px_0px_#000]">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Event badge */}
                  <div className={`absolute top-3 left-3 ${photo.color} border-2 border-black px-2 py-1`}>
                    <span className="text-[10px] font-black uppercase leading-none">{photo.event.split(" ")[0]}</span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 border-t-4 border-black">
                  <h3 className="font-black uppercase text-sm leading-tight mb-1">{photo.title}</h3>
                  <p className="text-xs font-bold opacity-60 mb-1">{photo.event}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold bg-gray-100 border-2 border-black px-2 py-0.5">{photo.date}</span>
                    <span className="text-[10px] font-bold opacity-50">{photo.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Event Sections Summary ── */}
        <div className="mt-16">
          <div className="inline-block bg-black text-white px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] mb-8">
            <h2 className="text-xl font-black uppercase tracking-tighter">Semua Event</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allEvents.filter((e) => e !== "Semua Event").map((eventName) => {
              const photos = EVENT_PHOTOS.filter((p) => p.event === eventName);
              const bgColor = EVENT_COLORS[eventName] || "bg-gray-300";
              return (
                <div
                  key={eventName}
                  className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-hidden"
                >
                  <div className={`${bgColor} border-b-4 border-black px-5 py-3 flex items-center justify-between`}>
                    <h3 className="font-black uppercase text-sm">{eventName}</h3>
                    <span className="bg-white border-2 border-black px-2 py-0.5 text-xs font-black">
                      {photos.length} foto
                    </span>
                  </div>
                  <div className="p-4 flex gap-2 overflow-x-auto">
                    {photos.slice(0, 4).map((p) => (
                      <div
                        key={p.id}
                        className={`shrink-0 w-16 h-16 border-2 border-black overflow-hidden ${p.color} cursor-pointer hover:scale-105 transition-transform`}
                        onClick={() => {
                          setActiveFilter(eventName);
                          openLightbox(EVENT_PHOTOS.filter((ph) => ph.event === eventName).indexOf(p));
                        }}
                      >
                        {p.src ? (
                          <Image src={p.src} alt={p.title} width={64} height={64} className="object-cover w-full h-full" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center ${p.color}`}>
                            <ImageIcon className="w-5 h-5" />
                          </div>
                        )}
                      </div>
                    ))}
                    {photos.length > 4 && (
                      <div
                        className="shrink-0 w-16 h-16 border-2 border-black bg-black text-white flex items-center justify-center font-black text-xs cursor-pointer"
                        onClick={() => setActiveFilter(eventName)}
                      >
                        +{photos.length - 4}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(255,255,255,0.15)] max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header */}
            <div className={`${activePhoto.color} border-b-4 border-black px-5 py-3 flex items-center justify-between`}>
              <div>
                <h3 className="font-black uppercase text-base leading-tight">{activePhoto.title}</h3>
                <p className="text-xs font-bold opacity-70">{activePhoto.event} · {activePhoto.location} · {activePhoto.date}</p>
              </div>
              <button
                onClick={closeLightbox}
                className="bg-black text-white border-2 border-black p-1.5 hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image */}
            <div className="relative flex-1 min-h-[300px] md:min-h-[500px] bg-gray-100">
              {activePhoto.src ? (
                <Image
                  src={activePhoto.src}
                  alt={activePhoto.title}
                  fill
                  className="object-contain"
                />
              ) : (
                <PlaceholderImage color={activePhoto.color} title={activePhoto.title} />
              )}
            </div>

            {/* Nav */}
            <div className="border-t-4 border-black px-5 py-3 flex items-center justify-between bg-white">
              <button
                onClick={prevPhoto}
                disabled={lightboxIndex === 0}
                className="flex items-center gap-2 px-4 py-2 border-4 border-black font-black uppercase text-xs bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_#000] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
              >
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>

              <span className="font-black text-sm">
                {lightboxIndex + 1} / {filtered.length}
              </span>

              <button
                onClick={nextPhoto}
                disabled={lightboxIndex === filtered.length - 1}
                className="flex items-center gap-2 px-4 py-2 border-4 border-black font-black uppercase text-xs bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-[4px_4px_0px_0px_#000] disabled:hover:translate-x-0 disabled:hover:translate-y-0"
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

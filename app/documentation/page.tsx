"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Em, Kicker } from "@/components/editorial";

// ─── Type Definitions ─────────────────────────────────────────────────────────
interface EventPhoto {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  src: string; // empty = photo not added yet
}

// ─── Data (tambahkan foto event Anda di sini, file di /public/Dokumentasi/) ───
const EVENT_PHOTOS: EventPhoto[] = [
  {
    id: 1,
    title: "Tim Arshaka",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0330.webp",
  },
  {
    id: 2,
    title: "Coding",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0390.webp",
  },
  {
    id: 3,
    title: "Finalis Top 5",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_0826.webp",
  },
  {
    id: 4,
    title: "Dokumentasi",
    event: "Hackathon Refactory UNAIR",
    date: "2026",
    location: "Universitas Airlangga, Surabaya",
    src: "/Dokumentasi/DSC_1076.webp",
  },
  {
    id: 5,
    title: "Coming soon",
    event: "College",
    date: "Now",
    location: "Universitas Negeri Malang",
    src: "",
  },
];

const ALL = "All events";
const EVENTS = [ALL, ...Array.from(new Set(EVENT_PHOTOS.map((p) => p.event)))];

function PhotoPlaceholder({ title }: { title: string }) {
  return (
    <div className="label-mono flex h-full w-full items-center justify-center bg-figure !text-xs text-muted">
      [{title}]
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function DocumentationPage() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeFilter === ALL ? EVENT_PHOTOS : EVENT_PHOTOS.filter((p) => p.event === activeFilter);
  const activePhoto = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  const prevPhoto = useCallback(() => setLightboxIndex((i) => (i !== null ? Math.max(0, i - 1) : null)), []);
  const nextPhoto = useCallback(
    () => setLightboxIndex((i) => (i !== null ? Math.min(filtered.length - 1, i + 1) : null)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevPhoto();
      else if (e.key === "ArrowRight") nextPhoto();
      else if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prevPhoto, nextPhoto]);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Header ── */}
        <Container className="flex flex-col gap-5 pt-10 pb-8 md:pt-16 md:pb-12">
          <Kicker data-intro>Documentation · Photo essay</Kicker>
          <h1 data-intro className="font-display text-[3rem] leading-[0.95] font-medium tracking-[-0.035em] md:text-8xl lg:text-[8rem]">
            From the <Em>field.</Em>
          </h1>
          <p data-intro className="max-w-[720px] text-lg leading-[1.45] text-ink-soft md:text-[1.4375rem]">
            Photos from hackathons, events, and campus life. {EVENT_PHOTOS.filter((p) => p.src).length} frames so far.
          </p>
        </Container>

        {/* ── Filters ── */}
        <Container>
          <div role="group" aria-label="Filter by event" className="flex flex-wrap gap-2 border-y border-ink py-4">
            {EVENTS.map((ev) => {
              const active = activeFilter === ev;
              return (
                <button
                  key={ev}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setActiveFilter(ev);
                    setLightboxIndex(null);
                  }}
                  className={`label-mono min-h-11 border border-ink px-4 !text-xs ${active ? "bg-ink text-paper" : "hover:bg-paper-deep"}`}
                >
                  {ev}
                </button>
              );
            })}
          </div>
        </Container>

        {/* ── Photo Grid ── */}
        <Container className="pt-8 pb-16 md:pt-12 md:pb-24">
          <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((photo, idx) => (
              <li key={photo.id}>
                <figure className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Open photo: ${photo.title}`}
                    className="group relative aspect-[3/2] w-full overflow-hidden border border-rule bg-figure"
                  >
                    {photo.src ? (
                      <Image
                        src={photo.src}
                        alt={`${photo.title}, ${photo.event}`}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
                      />
                    ) : (
                      <PhotoPlaceholder title={photo.title} />
                    )}
                  </button>
                  <figcaption className="flex flex-col gap-1 border-t border-ink pt-3">
                    <span className="label-mono !text-[0.6875rem] text-muted">
                      Fig. {idx + 1} · {photo.date}
                    </span>
                    <span className="font-display text-xl font-semibold md:text-2xl">{photo.title}</span>
                    <span className="text-base text-ink-soft italic">
                      {photo.event}, {photo.location}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </main>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="photo-title"
            className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-ink px-5 py-4">
              <div className="min-w-0">
                <p id="photo-title" className="font-display text-xl leading-tight font-semibold md:text-2xl">
                  {activePhoto.title}
                </p>
                <p className="text-base text-ink-soft italic">
                  {activePhoto.event} · {activePhoto.location} · {activePhoto.date}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label="Close photo"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink hover:bg-ink hover:text-paper"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="relative min-h-[300px] flex-1 bg-figure md:min-h-[520px]">
              {activePhoto.src ? (
                <Image
                  src={activePhoto.src}
                  alt={`${activePhoto.title}, ${activePhoto.event}`}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="object-contain"
                />
              ) : (
                <PhotoPlaceholder title={activePhoto.title} />
              )}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-ink px-5 py-3">
              <button
                type="button"
                onClick={prevPhoto}
                disabled={lightboxIndex === 0}
                className="label-mono inline-flex min-h-11 items-center gap-1 !text-xs disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Prev
              </button>
              <span className="font-mono text-xs">
                {lightboxIndex + 1} / {filtered.length}
              </span>
              <button
                type="button"
                onClick={nextPhoto}
                disabled={lightboxIndex === filtered.length - 1}
                className="label-mono inline-flex min-h-11 items-center gap-1 !text-xs disabled:opacity-30"
              >
                Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

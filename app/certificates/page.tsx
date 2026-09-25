"use client";

import { useState, useEffect, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Kicker } from "@/components/editorial";
import { CERTIFICATES, CERTIFICATE_ISSUERS } from "@/data/certificates";

const ALL = "All";
const CATEGORIES = [ALL, ...CERTIFICATE_ISSUERS];

export default function CertificatesPage() {
  const [activeTab, setActiveTab] = useState(ALL);
  const [searchQuery, setSearchQuery] = useState("");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const query = searchQuery.toLowerCase();
  const filtered = CERTIFICATES.filter((c) => {
    const matchesCategory = activeTab === ALL || c.issuer === activeTab;
    const matchesSearch = c.title.toLowerCase().includes(query) || c.issuer.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const activeCert = lightbox !== null ? filtered[lightbox] : null;

  const prev = useCallback(() => setLightbox((i) => (i !== null && i > 0 ? i - 1 : i)), []);
  const next = useCallback(
    () => setLightbox((i) => (i !== null && i < filtered.length - 1 ? i + 1 : i)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  return (
    <>
      <Navbar />
      <main>
        {/* ── Header ── */}
        <Container className="grid grid-cols-1 items-end gap-8 pt-10 pb-8 md:pt-16 md:pb-12 lg:grid-cols-[8fr_4fr] lg:gap-16">
          <div className="flex flex-col gap-5">
            <Kicker data-intro>Credentials · The archive</Kicker>
            <h1 data-intro className="font-display text-[3rem] leading-[0.95] font-medium tracking-[-0.035em] md:text-8xl lg:text-[8rem] lg:leading-[0.92]">
              {CERTIFICATES.length} <span className="font-light italic">certificates,</span> filed.
            </h1>
            <p data-intro className="max-w-[720px] text-lg leading-[1.45] text-ink-soft md:text-[1.4375rem]">
              Every course and competition, from Dicoding learning paths to two hackathons and a Google award. Each
              entry opens a preview and the original PDF.
            </p>
          </div>
          <div className="flex flex-col gap-2 lg:pb-3">
            <label htmlFor="cert-search" className="label-mono !text-xs text-muted">
              Search the archive
            </label>
            <input
              id="cert-search"
              type="search"
              placeholder="Python, Azure, UX…"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setLightbox(null);
              }}
              className="h-13 border border-ink bg-[#fbf8f2] px-4 font-serif text-xl text-ink placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>
        </Container>

        {/* ── Filters ── */}
        <Container>
          <div
            role="group"
            aria-label="Filter by issuer"
            className="flex flex-wrap gap-2 border-y border-ink py-4"
          >
            {CATEGORIES.map((cat) => {
              const active = activeTab === cat;
              const count = cat === ALL ? CERTIFICATES.length : CERTIFICATES.filter((c) => c.issuer === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setActiveTab(cat);
                    setLightbox(null);
                  }}
                  className={`label-mono min-h-11 border border-ink px-4 !text-xs ${active ? "bg-ink text-paper" : "hover:bg-paper-deep"}`}
                >
                  {cat} <span className="opacity-70">{count}</span>
                </button>
              );
            })}
          </div>
        </Container>

        {/* ── List ── */}
        <Container className="pb-16 md:pb-24">
          <div className="label-mono hidden grid-cols-[72px_minmax(0,1fr)_280px_200px] gap-6 border-b border-ink py-4 !text-[0.6875rem] text-muted md:grid">
            <span>No.</span>
            <span>Title</span>
            <span>Issuer</span>
            <span className="text-right">File</span>
          </div>
          {filtered.length === 0 ? (
            <p className="py-12 font-display text-2xl font-light text-muted italic md:text-[2rem]">
              Nothing in the archive matches that search.
            </p>
          ) : (
            <ol>
              {filtered.map((cert, idx) => (
                <li
                  key={cert.pdf}
                  className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-3 gap-y-1 border-b border-rule py-4 md:grid-cols-[72px_minmax(0,1fr)_280px_200px] md:items-baseline md:gap-6 md:py-[1.125rem]"
                >
                  <span className="font-mono text-[0.8125rem] text-muted md:row-auto">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-[1.2] font-medium md:text-[1.625rem]">{cert.title}</span>
                  <span className="col-start-2 text-base text-ink-soft italic md:col-start-auto md:text-[1.1875rem]">
                    {cert.issuer}
                  </span>
                  <span className="col-start-2 flex gap-5 md:col-start-auto md:justify-end">
                    <button
                      type="button"
                      onClick={() => setLightbox(idx)}
                      className="label-mono min-h-11 !text-xs hover:text-accent hover:underline hover:underline-offset-4"
                    >
                      Preview
                    </button>
                    <a
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono inline-flex min-h-11 items-center gap-1.5 !text-xs text-accent hover:underline hover:underline-offset-4"
                    >
                      PDF <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </span>
                </li>
              ))}
            </ol>
          )}
        </Container>
      </main>

      {/* ── Lightbox ── */}
      {lightbox !== null && activeCert && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden bg-paper"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-ink px-5 py-4">
              <div className="min-w-0">
                <p id="lightbox-title" className="font-display text-xl leading-tight font-semibold md:text-2xl">
                  {activeCert.title}
                </p>
                <p className="text-base text-ink-soft italic">{activeCert.issuer}</p>
              </div>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close preview"
                className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink hover:bg-ink hover:text-paper"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>

            <div className="relative min-h-[300px] flex-1 bg-figure md:min-h-[480px]">
              <Image
                src={activeCert.image}
                alt={`${activeCert.title} certificate`}
                fill
                sizes="(min-width: 896px) 896px, 100vw"
                className="object-contain p-4"
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-ink px-5 py-3">
              <button
                type="button"
                onClick={prev}
                disabled={lightbox === 0}
                className="label-mono inline-flex min-h-11 items-center gap-1 !text-xs disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Prev
              </button>
              <div className="flex items-center gap-5">
                <span className="font-mono text-xs">
                  {lightbox + 1} / {filtered.length}
                </span>
                <a
                  href={activeCert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label-mono inline-flex min-h-11 items-center gap-1.5 bg-ink px-4 !text-xs text-paper hover:bg-accent"
                >
                  Open PDF <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
              <button
                type="button"
                onClick={next}
                disabled={lightbox === filtered.length - 1}
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

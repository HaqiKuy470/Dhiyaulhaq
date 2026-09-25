"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { CERTIFICATES, ISSUER_COUNTS } from "@/data/certificates";
import { CONTACT, PRODUCTS, SOCIALS } from "@/data/site";

const EDUCATION = [
  { years: "2025 to now", place: "Universitas Negeri Malang", detail: "Informatics Engineering Education" },
  { years: "2022 to 2025", place: "MAN 1 Lamongan", detail: "Mathematics & Natural Science (MIPA)" },
];

const SKILL_GROUPS = [
  { label: "Frontend", items: "Next.js · React · Flutter · Tailwind CSS" },
  { label: "Backend", items: "Node.js · Express · Laravel · Python · PHP" },
  { label: "Database", items: "PostgreSQL · MySQL · Prisma" },
  { label: "AI & Automation", items: "Gemini API · OpenCV · n8n · Docker" },
  { label: "Design", items: "Figma · Canva · Google Stitch" },
  { label: "Tools", items: "Git · Cursor · Antigravity · Linux" },
];

const EXPERIENCE = [
  {
    title: "Arshaka Ecosystem",
    role: "Founder",
    years: "2025 to now",
    points: ["Building and managing an ecosystem of tech companies."],
  },
  {
    title: "Digdaya × Hackathon, Bank Indonesia",
    role: "Team lead",
    years: "2026",
    points: ["Completed the Essential Training Program, 2 May to 23 June 2026."],
  },
  {
    title: "Hackathon Refactory × UNAIR",
    role: "Team lead · Finalist",
    years: "2026",
    points: ["Led Team Arshaka to the finals at Universitas Airlangga, Surabaya."],
  },
  {
    title: "Google · Juara Vibe Coding",
    role: "Participant",
    years: "2026",
    points: ["Built a digital lab website for Chemistry, Physics, and Biology."],
  },
];

const PROJECTS = [
  {
    title: "Web-Based Terminal Manager",
    years: "2026",
    points: [
      "Built a browser-based terminal interface to monitor and manage multi-platform bots in real time.",
      "Logged command execution to PostgreSQL via Prisma ORM for audit trail and history tracking.",
    ],
  },
  {
    title: "PPOB Web Platform (16 categories)",
    years: "2025",
    points: [
      "Developed a Payment Point Online Bank web application serving 16 service categories, including pulsa, electricity, BPJS, and internet.",
      "Integrated multi-vendor payment APIs with automated transaction routing and real-time status updates.",
    ],
  },
  {
    title: "Multi-Platform Bot Development",
    years: "2025",
    points: [
      "Built automated bots for WhatsApp, Discord, and Telegram for business and educational use cases.",
      "Implemented automated responses, security filters, role management, and third-party API integrations.",
    ],
  },
  {
    title: "Point of Sales (POS) Application",
    years: "2025",
    points: [
      "Built a cross-platform POS app in Flutter for Android and iOS, with Xendit for real-time payments.",
      "Developed inventory management, transaction history, and sales reporting.",
    ],
  },
];

function SideHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2.5 border-b border-ink pb-1.5 font-mono text-[9.5px] tracking-[0.12em] text-accent uppercase">
      {children}
    </h2>
  );
}

function MainHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 border-b-2 border-ink pb-1.5 font-mono text-[10px] tracking-[0.12em] text-accent uppercase">
      {children}
    </h2>
  );
}

export default function CVPage() {
  return (
    <div className="cv-screen flex min-h-screen flex-col items-center bg-paper-deep px-4 py-8 md:px-8">
      <div className="mb-6 flex w-full max-w-[210mm] items-center justify-between print:hidden">
        <Link href="/" className="label-mono inline-flex min-h-11 items-center gap-2 hover:text-accent">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="label-mono inline-flex min-h-11 items-center gap-2 bg-ink px-5 text-paper hover:bg-accent"
        >
          <Printer className="h-4 w-4" aria-hidden="true" /> Print PDF (A4)
        </button>
      </div>

      <article className="cv-sheet w-full max-w-[210mm] bg-paper text-ink shadow-[0_20px_60px_-20px_rgba(27,25,21,0.35)] print:shadow-none md:min-h-[297mm]">
        {/* ── Masthead ── */}
        <header className="flex items-end justify-between gap-6 border-b-4 border-ink px-7 pt-7 pb-4 md:px-10">
          <div>
            <p className="mb-2 font-mono text-[9.5px] tracking-[0.12em] text-accent uppercase">Curriculum vitae</p>
            <h1 className="font-display text-[34px] leading-[0.95] font-semibold tracking-[-0.02em] md:text-[44px]">
              Moh Dhiyaulhaq <span className="font-normal italic">Ulumuddin</span>
            </h1>
            <p className="mt-2 font-mono text-[11px] tracking-[0.16em] uppercase">Fullstack developer</p>
          </div>
          <div className="relative hidden h-[92px] w-[92px] shrink-0 overflow-hidden border border-ink sm:block">
            <Image src="/foto.webp" alt="Portrait of Moh Dhiyaulhaq Ulumuddin" fill sizes="92px" className="object-cover" />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-[34%_66%]">
          {/* ── Sidebar ── */}
          <aside className="flex flex-col gap-4 border-ink bg-paper-deep px-7 py-6 md:border-r md:px-7">
            <section>
              <SideHeading>Contact</SideHeading>
              <ul className="flex flex-col gap-1 text-[11.5px] leading-snug">
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-accent">
                    {CONTACT.email}
                  </a>
                </li>
                <li>{CONTACT.whatsappDisplay}</li>
                <li>heyhaqi.my.id</li>
                <li>{CONTACT.location}</li>
                {SOCIALS.filter((s) => ["LinkedIn", "GitHub"].includes(s.name)).map((s) => (
                  <li key={s.name}>
                    <span className="font-mono text-[9px] tracking-[0.08em] text-muted uppercase">{s.name}</span>{" "}
                    <a href={s.href} className="hover:text-accent">
                      {s.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideHeading>Education</SideHeading>
              <ul className="flex flex-col gap-3">
                {EDUCATION.map((e) => (
                  <li key={e.place}>
                    <p className="font-mono text-[9px] tracking-[0.08em] text-muted uppercase">{e.years}</p>
                    <p className="font-display text-[14px] leading-tight font-semibold">{e.place}</p>
                    <p className="text-[11.5px] text-ink-soft italic">{e.detail}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideHeading>Skills</SideHeading>
              <dl className="flex flex-col gap-2 text-[11.5px] leading-snug">
                {SKILL_GROUPS.map((g) => (
                  <div key={g.label}>
                    <dt className="font-mono text-[9px] tracking-[0.08em] text-muted uppercase">{g.label}</dt>
                    <dd>{g.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section>
              <SideHeading>Certificates</SideHeading>
              <p className="mb-2 text-[11.5px] leading-snug">
                <span className="font-display text-[22px] leading-none font-bold text-accent">{CERTIFICATES.length}</span>{" "}
                verified certificates, including:
              </p>
              <ul className="flex flex-col gap-0.5 text-[11px]">
                {ISSUER_COUNTS.map((i) => (
                  <li key={i.issuer} className="flex items-baseline gap-2">
                    <span>{i.issuer}</span>
                    <span aria-hidden="true" className="flex-1 -translate-y-1 border-b border-dotted border-[#8a8374]" />
                    <span className="font-semibold">{i.count}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SideHeading>Products</SideHeading>
              <ul className="flex flex-col gap-1">
                {PRODUCTS.map((p) => (
                  <li key={p.url} className="flex items-baseline justify-between gap-2">
                    <span className="font-display text-[13.5px] leading-tight font-semibold whitespace-nowrap">
                      {p.name}
                      {p.status === "coming-soon" && (
                        <span className="ml-1 font-mono text-[8.5px] font-normal tracking-[0.06em] text-accent uppercase">
                          soon
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.02em] whitespace-nowrap text-muted">{p.domain}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>

          {/* ── Main column ── */}
          <div className="flex flex-col gap-5 px-7 py-6 md:px-9">
            <section>
              <MainHeading>Profile</MainHeading>
              <p className="text-[12.5px] leading-[1.6]">
                Informatics Engineering student specializing in AI integration and software architecture. I build and
                manage web applications and tech products integrated with AI to create efficient, automated digital
                solutions. Proficient in fullstack development with Next.js, Node.js, Python, and Flutter, with hands-on
                experience in workflow automation, bot infrastructure, and computer vision systems.
              </p>
            </section>

            <section>
              <MainHeading>Experience &amp; achievements</MainHeading>
              <ol className="flex flex-col gap-3">
                {EXPERIENCE.map((x) => (
                  <li key={x.title} className="cv-item">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[14.5px] leading-tight font-semibold">{x.title}</h3>
                      <span className="shrink-0 font-mono text-[9.5px] tracking-[0.06em] text-muted uppercase">
                        {x.years}
                      </span>
                    </div>
                    <p className="font-mono text-[9.5px] tracking-[0.08em] text-accent uppercase">{x.role}</p>
                    {x.points.map((pt) => (
                      <p key={pt} className="mt-0.5 text-[12px] leading-[1.5] text-ink-soft">
                        {pt}
                      </p>
                    ))}
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <MainHeading>Selected projects</MainHeading>
              <ol className="flex flex-col gap-3">
                {PROJECTS.map((p) => (
                  <li key={p.title} className="cv-item">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-[14.5px] leading-tight font-semibold">{p.title}</h3>
                      <span className="shrink-0 font-mono text-[9.5px] tracking-[0.06em] text-muted uppercase">
                        {p.years}
                      </span>
                    </div>
                    <ul className="mt-1 ml-4 list-disc text-[12px] leading-[1.5] text-ink-soft marker:text-accent">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </section>

          </div>
        </div>
      </article>

      <style>{`
        @media print {
          @page { size: A4; margin: 0; }
          html, body { background: #f2ede3 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .cv-screen { padding: 0 !important; background: #f2ede3 !important; }
          .cv-sheet { max-width: none !important; }
          .cv-item { break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}

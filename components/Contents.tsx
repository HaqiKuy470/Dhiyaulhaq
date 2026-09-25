import Link from "next/link";
import { Container } from "@/components/editorial";
import { CERTIFICATES } from "@/data/certificates";

const ENTRIES = [
  { n: "01", title: "About", sub: "From the builder’s desk", href: "#about" },
  { n: "02", title: "Products", sub: "Shaka Studio, Compile Daily & more", href: "#products" },
  { n: "03", title: "Practice", sub: "Web, AI, mobile", href: "#practice" },
  { n: "04", title: "Toolkit", sub: "The index, A to Z", href: "#toolkit" },
  { n: "05", title: "Record", sub: "Study, work, awards", href: "#record" },
  { n: "06", title: "Credentials", sub: `${CERTIFICATES.length} certificates`, href: "#credentials" },
];

export default function Contents() {
  return (
    <Container>
      <nav
        data-reveal-group
        aria-label="In this issue"
        className="grid grid-cols-2 border-t-[3px] border-b border-ink sm:grid-cols-3 md:border-t-4 lg:grid-cols-6"
      >
        {ENTRIES.map((e) => (
          <Link key={e.n} href={e.href} data-reveal-item className="group flex flex-col gap-1.5 py-5 pr-5 md:py-6">
            <span className="font-display text-4xl leading-none font-light text-accent italic md:text-[2.75rem]">{e.n}</span>
            <span className="font-display text-xl font-semibold group-hover:underline group-hover:underline-offset-4 md:text-[1.375rem]">
              {e.title}
            </span>
            <span className="text-base text-muted">{e.sub}</span>
          </Link>
        ))}
      </nav>
    </Container>
  );
}

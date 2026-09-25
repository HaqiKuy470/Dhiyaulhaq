import Link from "next/link";
import { Container } from "@/components/editorial";
import { CONTACT, NAV_ITEMS, SOCIALS } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="flex flex-col gap-10 pt-12 pb-8 md:pt-16">
        <div className="grid grid-cols-1 gap-10 border-t border-paper pt-8 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-3">
            <Link href="/" className="self-start font-display text-4xl leading-none font-extrabold tracking-[-0.04em]">
              Hey<span className="font-normal text-accent-soft italic">Haqi</span>
            </Link>
            <p className="max-w-xs text-lg leading-normal text-[#d8d0c2]">
              Moh Dhiyaulhaq Ulumuddin. Informatics Engineering student at Universitas Negeri Malang.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col">
            <span className="label-mono !text-xs text-[#bdb5a6]">Sitemap</span>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center border-b border-rule-dark text-lg hover:text-accent-soft"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col">
            <span className="label-mono !text-xs text-[#bdb5a6]">Elsewhere</span>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="label-mono flex min-h-11 items-center justify-between gap-4 border-b border-rule-dark !text-xs hover:text-accent-soft"
            >
              <span>WhatsApp</span>
              <span className="text-[#bdb5a6]">{CONTACT.whatsappDisplay}</span>
            </a>
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="label-mono flex min-h-11 items-center justify-between gap-4 border-b border-rule-dark !text-xs hover:text-accent-soft"
              >
                <span>{s.name}</span>
                <span className="text-[#bdb5a6] normal-case">{s.handle}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="label-mono flex flex-col gap-2 border-t border-rule-dark pt-6 !text-[0.6875rem] text-[#bdb5a6] md:flex-row md:justify-between md:!text-xs">
          <span>As professional programmer, designer and developer.</span>
          <span>
            &copy; {new Date().getFullYear()} Moh Dhiyaulhaq Ulumuddin · {CONTACT.location}
          </span>
        </div>
      </Container>
    </footer>
  );
}

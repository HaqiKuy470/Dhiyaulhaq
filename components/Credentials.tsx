import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Kicker } from "@/components/editorial";
import { CERTIFICATES, ISSUER_COUNTS } from "@/data/certificates";

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

export default function Credentials() {
  const issuers = NUMBER_WORDS[ISSUER_COUNTS.length] ?? String(ISSUER_COUNTS.length);

  return (
    <section id="credentials" aria-labelledby="credentials-heading" className="scroll-mt-6 border-t-[3px] border-ink md:border-t-4">
      <Container className="grid grid-cols-1 items-start gap-6 py-12 md:py-20 lg:grid-cols-[5fr_7fr] lg:gap-20 lg:py-24">
        <div className="flex flex-col gap-3">
          <Kicker>06 · Credentials</Kicker>
          <div className="flex items-end gap-4 lg:flex-col lg:items-start">
            <h2
              id="credentials-heading"
              className="font-display text-[8.75rem] leading-[0.82] font-bold tracking-[-0.05em] text-accent lg:text-[17.5rem] lg:leading-[0.85]"
            >
              {CERTIFICATES.length}
              <span className="sr-only"> certificates</span>
            </h2>
            <p className="mb-1.5 font-display text-[1.375rem] leading-[1.2] font-light italic lg:mb-0 lg:text-[2.125rem]">
              verified certificates, from {issuers} issuers.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:gap-8 lg:pt-6">
          <ul className="flex flex-col border-t border-ink">
            {ISSUER_COUNTS.map((i) => (
              <li key={i.issuer} className="flex items-baseline gap-3 border-b border-rule py-3 md:gap-4 md:py-4">
                <span className="text-[1.0625rem] md:text-[1.375rem]">{i.issuer}</span>
                <span aria-hidden="true" className="flex-1 -translate-y-1.5 border-b border-dotted border-[#8a8374]" />
                <span className="font-display text-xl font-semibold md:text-[1.75rem]">{i.count}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/certificates"
            className="label-mono inline-flex min-h-12 items-center justify-between gap-2.5 border border-ink px-5 hover:bg-ink hover:text-paper sm:self-start"
          >
            Browse the full archive <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}

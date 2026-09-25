import { Container, Em, SectionHeading } from "@/components/editorial";
import { RECORD } from "@/data/site";

export default function Timeline() {
  return (
    <section id="record" aria-labelledby="record-heading" className="scroll-mt-6">
      <Container className="flex flex-col gap-8 py-12 md:gap-12 md:py-20 lg:py-24">
        <SectionHeading id="record-heading" kicker="05 · Record">
          Where I&apos;ve <Em>been.</Em>
        </SectionHeading>
        <ol data-reveal-group className="flex flex-col border-t-[3px] border-ink md:border-t-4">
          {RECORD.map((r) => (
            <li
              key={r.title}
              data-reveal-item
              className="grid grid-cols-1 gap-1.5 border-b border-rule py-4 md:grid-cols-[180px_5fr_6fr] md:items-baseline md:gap-10 md:py-7 lg:grid-cols-[220px_5fr_6fr]"
            >
              <span className="label-mono !text-xs md:!text-sm">{r.year}</span>
              <h3 className="font-display text-2xl leading-[1.12] font-semibold md:text-[2rem]">{r.title}</h3>
              <p className="text-[1.0625rem] leading-normal text-ink-soft md:text-xl">{r.desc}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

import { Container, Em, SectionHeading } from "@/components/editorial";
import { SERVICES } from "@/data/site";

export default function Services() {
  return (
    <section id="practice" aria-labelledby="practice-heading" className="scroll-mt-6 border-t-[3px] border-ink md:border-t-4">
      <Container className="flex flex-col gap-8 py-12 md:gap-14 md:py-20 lg:py-24">
        <SectionHeading id="practice-heading" kicker="03 · Practice">
          What I <Em>work on.</Em>
        </SectionHeading>
        <div data-reveal-group className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-0">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              data-reveal-item
              className="flex flex-col gap-3 border-b border-rule pb-6 md:mr-10 md:gap-4 md:border-r md:border-b-0 md:pr-10 md:pb-0 md:last:mr-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="flex items-baseline gap-3 md:flex-col md:gap-4">
                <span className="font-display text-[1.75rem] leading-none font-light text-accent italic md:text-[2.5rem]">
                  {s.numeral}
                </span>
                <h3 className="font-display text-[1.625rem] leading-[1.05] font-semibold md:text-[2.125rem]">{s.title}</h3>
              </div>
              <p className="text-lg leading-[1.55] md:text-xl">{s.desc}</p>
              <span className="label-mono !text-xs text-muted">{s.tools}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

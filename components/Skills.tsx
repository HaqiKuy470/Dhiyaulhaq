import { Container, Em, SectionHeading } from "@/components/editorial";
import { SKILLS } from "@/data/site";

export default function Skills() {
  const sorted = [...SKILLS].sort((a, b) => a.name.localeCompare(b.name, "en", { sensitivity: "base" }));

  return (
    <section id="toolkit" aria-labelledby="toolkit-heading" className="scroll-mt-6 bg-paper-deep">
      <Container className="flex flex-col gap-8 py-12 md:gap-12 md:py-20 lg:py-24">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeading id="toolkit-heading" kicker="04 · Toolkit">
            The <Em>index.</Em>
          </SectionHeading>
          <span className="text-lg text-ink-soft italic">{sorted.length} tools, A to Z.</span>
        </div>
        <ul className="grid grid-cols-1 border-t border-ink sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4">
          {sorted.map((s) => (
            <li key={s.name} className="flex items-baseline justify-between gap-4 border-b border-[#c9c0ae] py-3 md:py-4">
              <span className="font-display text-[1.375rem] font-medium md:text-[1.625rem]">{s.name}</span>
              <span className="label-mono !text-[0.6875rem] text-muted">{s.category}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

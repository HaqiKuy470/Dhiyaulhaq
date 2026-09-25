import { Container, Em, SectionHeading } from "@/components/editorial";
import { CERTIFICATES } from "@/data/certificates";
import { PRODUCTS, SKILLS } from "@/data/site";

export default function About() {
  const stats = [
    { value: CERTIFICATES.length, label: "Verified certificates" },
    { value: PRODUCTS.length, label: "Live products" },
    { value: SKILLS.length, label: "Tools in the kit" },
  ];

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-6">
      <Container className="grid grid-cols-1 gap-8 py-12 md:py-20 lg:grid-cols-[4fr_8fr] lg:gap-16 lg:py-24">
        <SectionHeading id="about-heading" kicker="01 · About">
          From the <Em>builder&apos;s</Em> desk
        </SectionHeading>

        <div className="flex flex-col gap-10 lg:gap-12">
          <div data-reveal className="text-lg leading-[1.6] md:columns-2 md:gap-12 md:text-xl">
            <p className="mb-5">
              <span className="float-left pt-2 pr-3 font-display text-[4.75rem] leading-[0.82] font-semibold text-accent md:text-[6.75rem]">
                I
              </span>
              &apos;m an Informatics Engineering student specializing in AI integration and software architecture. I
              build and manage web applications and tech products integrated with AI, to create efficient, automated
              digital solutions.
            </p>
            <p className="mb-5">
              Since 2025 I&apos;ve been studying Informatics Engineering Education at Universitas Negeri Malang, and
              building the Arshaka Ecosystem alongside it.
            </p>
            <p>
              My day-to-day stack is fullstack: Next.js and Node.js on the web, Python for data and machine learning,
              and Flutter for mobile.
            </p>
          </div>

          <blockquote data-reveal className="border-y border-ink py-5 font-display text-[1.75rem] leading-[1.18] font-light text-accent italic md:py-7 md:text-[2.75rem]">
            &ldquo;Passionate about building automated digital ecosystems.&rdquo;
          </blockquote>

          <dl data-reveal className="grid grid-cols-3 gap-3 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col-reverse gap-1">
                <dt className="label-mono !text-[0.625rem] text-muted md:!text-xs">{s.label}</dt>
                <dd data-count={s.value} className="font-display text-[2.5rem] leading-none font-semibold md:text-6xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}

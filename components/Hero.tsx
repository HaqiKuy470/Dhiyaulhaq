import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Em, Kicker } from "@/components/editorial";

export default function Hero() {
  return (
    <section aria-labelledby="cover-heading">
      <Container className="grid grid-cols-1 items-start gap-10 py-9 md:py-16 lg:grid-cols-[7fr_5fr] lg:gap-16 lg:py-[4.5rem]">
        <div className="flex flex-col gap-5 md:gap-7">
          <Kicker>Cover story · AI integration · Software architecture</Kicker>
          <h1
            id="cover-heading"
            className="font-display text-[2.75rem] leading-[1.02] font-medium tracking-[-0.02em] md:text-7xl lg:text-[5.25rem] lg:leading-none lg:tracking-[-0.025em]"
          >
            Building automated digital ecosystems, <Em>one product at a time.</Em>
          </h1>
          <p className="max-w-[680px] text-lg leading-[1.45] text-ink-soft md:text-2xl">
            An Informatics Engineering student at Universitas Negeri Malang who builds web applications and tech
            products integrated with AI, to create efficient, automated digital solutions.
          </p>
          <div className="mt-1 flex flex-col gap-4 border-t border-rule pt-4 sm:flex-row sm:items-center sm:gap-8">
            <span className="label-mono">Words &amp; code by Moh Dhiyaulhaq Ulumuddin</span>
            <Link
              href="/cv"
              className="label-mono inline-flex min-h-12 items-center justify-between gap-3 bg-ink px-5 text-paper hover:bg-accent sm:justify-start"
            >
              Read the CV <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <figure className="flex flex-col gap-3">
          <div className="relative aspect-[4/3] w-full overflow-hidden border border-rule bg-figure">
            <Image
              src="/foto.webp"
              alt="Dhiyaulhaq and teammates standing in front of the Refactory Hackathon banner at Universitas Airlangga"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <figcaption className="text-sm text-muted italic md:text-base">
            Fig. 1. Dhiyaulhaq. A developer and product builder based in Malang, Indonesia.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}

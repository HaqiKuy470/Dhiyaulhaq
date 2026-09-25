import { ArrowUpRight } from "lucide-react";
import { Container, Em, SectionHeading } from "@/components/editorial";
import { PRODUCTS, type Product } from "@/data/site";

export function ProductFeature({ product, index }: { product: Product; index: number }) {
  const [first, ...rest] = product.name.split(" ");
  return (
    <article data-reveal-item className="flex flex-col gap-3 md:gap-5">
      <div
        className={`flex h-56 flex-col justify-between overflow-hidden p-5 text-paper md:h-[380px] md:p-9 ${product.cover === "ink" ? "bg-ink" : "bg-accent"}`}
      >
        <span className="label-mono !text-[0.625rem] md:!text-xs">
          Feature {String(index + 1).padStart(2, "0")} · {product.domain}
        </span>
        <span
          aria-hidden="true"
          data-parallax-text
          className="font-display text-[3.5rem] leading-[0.95] font-light tracking-[-0.03em] italic md:text-8xl"
        >
          {first}
          <br />
          {rest.join(" ")}
        </span>
      </div>
      <span className="label-mono !text-xs text-muted">{product.category}</span>
      <h3 className="font-display text-[1.75rem] leading-[1.05] font-semibold md:text-[2.5rem]">{product.name}</h3>
      <p className="text-lg leading-[1.55] md:text-xl">{product.tagline}</p>
      <div className="border-t border-rule">
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono inline-flex min-h-11 items-center gap-1.5 hover:text-accent"
        >
          Visit {product.domain} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="products" aria-labelledby="products-heading" className="scroll-mt-6 border-t-[3px] border-ink md:border-t-4">
      <Container className="flex flex-col gap-8 py-12 md:gap-14 md:py-20 lg:py-24">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
          <SectionHeading id="products-heading" kicker="02 · Products">
            Two products, <Em>both live.</Em>
          </SectionHeading>
          <p data-reveal className="max-w-[380px] text-lg leading-normal text-ink-soft">
            Things I&apos;ve built and keep running, from a Roblox game studio to a daily publication for developers.
          </p>
        </div>
        <div data-reveal-group className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {PRODUCTS.map((p, i) => (
            <ProductFeature key={p.url} product={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}

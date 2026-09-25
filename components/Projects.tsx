import { ArrowUpRight } from "lucide-react";
import { Container, Em, SectionHeading, numberWord } from "@/components/editorial";
import { LIVE_PRODUCTS, PRODUCTS, type Product } from "@/data/site";

const COVERS: Record<Product["cover"], string> = {
  ink: "bg-ink text-paper",
  accent: "bg-accent text-paper",
  paper: "border border-dashed border-ink bg-paper-deep text-ink",
};

export function ProductFeature({ product, index }: { product: Product; index: number }) {
  const [first, ...rest] = product.name.split(" ");
  return (
    <article data-reveal-item className="flex flex-col gap-3 md:gap-5">
      <div
        className={`flex h-56 flex-col justify-between overflow-hidden p-5 md:h-[380px] md:p-9 ${COVERS[product.cover]}`}
      >
        <div className="flex items-start justify-between gap-3">
          <span className="label-mono !text-[0.625rem] md:!text-xs">
            Feature {String(index + 1).padStart(2, "0")} · {product.domain}
          </span>
          {product.status === "coming-soon" && (
            <span className="label-mono shrink-0 bg-ink px-2 py-1 !text-[0.625rem] text-paper md:!text-xs">Coming soon</span>
          )}
        </div>
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
        {product.status === "live" ? (
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono inline-flex min-h-11 items-center gap-1.5 hover:text-accent"
          >
            Visit {product.domain} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <span className="label-mono inline-flex min-h-11 items-center text-muted">
            Launching soon at {product.domain}
          </span>
        )}
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
            {numberWord(PRODUCTS.length, true)} products, <Em>{numberWord(LIVE_PRODUCTS.length)} live.</Em>
          </SectionHeading>
          <p data-reveal className="max-w-[380px] text-lg leading-normal text-ink-soft">
            Things I&apos;ve built and keep running, from a Roblox game studio and a daily publication for developers to
            a gift shop, with a 3D animation and game studio on the way.
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

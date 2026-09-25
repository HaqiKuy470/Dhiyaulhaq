import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProductFeature } from "@/components/Projects";
import { Container, Em, Kicker } from "@/components/editorial";
import { PRODUCTS } from "@/data/site";

export const metadata: Metadata = {
  title: "Products | HeyHaqi",
  description: "Products built and run by Moh Dhiyaulhaq Ulumuddin: Shaka Studio and Compile Daily.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main>
        <Container className="flex flex-col gap-5 pt-10 pb-10 md:pt-16 md:pb-14">
          <Kicker>Products · Both live</Kicker>
          <h1 className="font-display text-[3rem] leading-[0.95] font-medium tracking-[-0.035em] md:text-8xl lg:text-[8rem]">
            Things I&apos;ve <Em>built.</Em>
          </h1>
          <p className="max-w-[720px] text-lg leading-[1.45] text-ink-soft md:text-[1.4375rem]">
            A Roblox game studio and a daily publication for developers, each still running today.
          </p>
        </Container>

        <Container className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 gap-12 border-t-[3px] border-ink pt-10 md:grid-cols-2 md:gap-16 md:border-t-4 md:pt-14">
            {PRODUCTS.map((p, i) => (
              <div key={p.url} className="flex flex-col gap-4">
                <ProductFeature product={p} index={i} />
                <ul className="flex flex-wrap gap-2" aria-label={`${p.name} tags`}>
                  {p.tags.map((tag) => (
                    <li key={tag} className="label-mono border border-rule px-2.5 py-1 !text-[0.6875rem] text-muted">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}

import type { ReactNode } from "react";

// Shared building blocks for the editorial layout: section kickers,
// headings, and the page-width container.

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// Small counts read better spelled out in running copy: 4 -> "four".
export function numberWord(n: number, capitalize = false) {
  const word = NUMBER_WORDS[n] ?? String(n);
  return capitalize ? word.charAt(0).toUpperCase() + word.slice(1) : word;
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 md:px-10 xl:px-20 ${className}`}>{children}</div>;
}

export function Kicker({
  children,
  className = "",
  ...rest
}: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={`label-mono text-accent ${className}`} {...rest}>
      {children}
    </span>
  );
}

export function SectionHeading({
  id,
  kicker,
  children,
  as: Tag = "h2",
  className = "",
}: {
  id?: string;
  kicker: ReactNode;
  children: ReactNode;
  as?: "h1" | "h2";
  className?: string;
}) {
  return (
    <div data-reveal className={`flex flex-col gap-3 md:gap-4 ${className}`}>
      <Kicker>{kicker}</Kicker>
      <Tag
        id={id}
        className="font-display text-[2.4rem] leading-[1.02] font-medium tracking-[-0.025em] md:text-6xl lg:text-[4.75rem] lg:leading-none"
      >
        {children}
      </Tag>
    </div>
  );
}

// Italic, lighter half of a two-tone heading: "Two products, <Em>both live.</Em>"
export function Em({ children }: { children: ReactNode }) {
  return <span className="font-normal italic">{children}</span>;
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/editorial";
import { NAV_ITEMS } from "@/data/site";

// The site masthead. "full" is the magazine nameplate on the home page;
// "compact" is the single-row header used on inner pages.
export default function Navbar({ variant = "compact" }: { variant?: "full" | "compact" }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = (
    <>
      {NAV_ITEMS.map((item) => {
        const active = item.href === pathname;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsOpen(false)}
            aria-current={active ? "page" : undefined}
            className={`label-mono flex min-h-11 items-center hover:underline hover:underline-offset-4 ${active ? "text-accent" : ""}`}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );

  const menuButton = (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls="site-menu"
      aria-label={isOpen ? "Close menu" : "Open menu"}
      className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink md:hidden"
    >
      {isOpen ? <X className="h-5 w-5" strokeWidth={1.75} /> : <Menu className="h-5 w-5" strokeWidth={1.75} />}
    </button>
  );

  const mobileMenu = isOpen && (
    <nav id="site-menu" aria-label="Primary" className="flex flex-col border-b border-ink md:hidden [&>a]:border-b [&>a]:border-rule [&>a:last-child]:border-b-0">
      {links}
    </nav>
  );

  const nameplate = (size: string) => (
    <Link
      href="/"
      onClick={() => setIsOpen(false)}
      className={`font-display leading-[0.86] font-extrabold tracking-[-0.045em] ${size}`}
    >
      Hey<span className="font-normal text-accent italic">Haqi</span>
    </Link>
  );

  if (variant === "full") {
    return (
      <header>
        <Container className="pt-4 md:pt-7">
          <div className="flex items-end justify-between gap-4">
            {nameplate("text-[4.5rem] sm:text-[7rem] md:text-[10rem] xl:text-[14.75rem]")}
            {menuButton}
          </div>
          <div className="mt-3 flex items-center justify-between gap-6 border-t-[3px] border-b border-ink py-2.5 md:mt-5 md:border-t-4 md:py-3.5">
            <p className="text-[0.95rem] italic md:text-xl">The working notebook of Moh Dhiyaulhaq Ulumuddin</p>
            <nav aria-label="Primary" className="hidden gap-6 md:flex lg:gap-9">
              {links}
            </nav>
          </div>
          {mobileMenu}
        </Container>
      </header>
    );
  }

  return (
    <header>
      <Container>
        <div className="flex items-center justify-between gap-6 border-b-[3px] border-ink py-4 md:border-b-4 md:py-5">
          {nameplate("text-4xl md:text-5xl")}
          <nav aria-label="Primary" className="hidden gap-6 md:flex lg:gap-9">
            {links}
          </nav>
          {menuButton}
        </div>
        {mobileMenu}
      </Container>
    </header>
  );
}

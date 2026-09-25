"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Scroll and entrance animations, driven by data attributes in the markup:
//   data-intro           plays once on load, in document order
//   data-reveal          fades up when it scrolls into view
//   data-reveal-group    staggers its [data-reveal-item] children into view
//   data-count           counts its number up from 0 when it scrolls into view
//   data-parallax        its <img> drifts slightly while scrolling
//   data-parallax-text   drifts slightly while scrolling
// Animations only run when the inline script in the layout set
// <html data-motion="on">, i.e. JS is on and reduced motion is not requested.
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    if (document.documentElement.dataset.motion !== "on") return;

    const ctx = gsap.context(() => {
      const ease = "power3.out";

      const intro = gsap.utils.toArray<HTMLElement>("[data-intro]");
      if (intro.length) {
        gsap.fromTo(
          intro,
          { autoAlpha: 0, y: 28 },
          { autoAlpha: 1, y: 0, duration: 0.9, ease, stagger: 0.08, delay: 0.05 },
        );
      }

      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 40 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease,
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-reveal-group]").forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-reveal-item]");
        if (!items.length) return;
        gsap.fromTo(
          items,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease,
            stagger: items.length > 8 ? 0.035 : 0.1,
            scrollTrigger: { trigger: group, start: "top 88%", once: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
        const target = Number(el.dataset.count);
        if (!Number.isFinite(target)) return;
        const counter = { value: 0 };
        el.textContent = "0";
        gsap.to(counter, {
          value: target,
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value));
          },
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const img = el.querySelector("img");
        if (!img) return;
        gsap.fromTo(
          img,
          { yPercent: -5, scale: 1.12 },
          {
            yPercent: 5,
            scale: 1.12,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax-text]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40 },
          {
            y: -40,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return null;
}

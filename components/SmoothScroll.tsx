"use client";
import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function SmoothScroll({ children }: { children: ReactNode }) {
  
  useEffect(() => {
    // KODE PERBAIKAN:
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing mantap
      // Hapus 'direction', 'gestureDirection', 'smoothWheel'.
      // Default Lenis sudah Vertical & Smooth, jadi tidak perlu ditulis lagi.
    });

    // Sinkronisasi Lenis dengan GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Loop animasi
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
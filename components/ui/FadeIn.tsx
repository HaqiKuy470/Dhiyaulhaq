"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  fullWidth?: boolean;
}

export default function FadeIn({ children, delay = 0, direction = "up", fullWidth = false }: FadeInProps) {
  const el = useRef(null);

  useGSAP(() => {
    // Kurangi jarak animasi di layar HP agar tidak ada blank hitam yang lama
    const isMobile = window.innerWidth < 768;
    const offset = isMobile ? 50 : 100; 

    const xVal = direction === "left" ? offset : direction === "right" ? -offset : 0;
    const yVal = direction === "up" ? offset : direction === "down" ? -offset : 0;

    gsap.fromTo(
      el.current,
      { 
        x: xVal, 
        y: yVal, 
        opacity: 0 
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top 95%", // REVISI: Dipicu lebih awal agar konten cepat muncul
          toggleActions: "play none none reverse",
        },
      }
    );
  }, { scope: el });

  return (
    <div ref={el} className={`${fullWidth ? "w-full" : "w-auto"}`}>
      {children}
    </div>
  );
}
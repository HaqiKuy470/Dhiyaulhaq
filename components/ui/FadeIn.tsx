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
    const xVal = direction === "left" ? 100 : direction === "right" ? -100 : 0;
    const yVal = direction === "up" ? 100 : direction === "down" ? -100 : 0;

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
        duration: 1.5,
        delay: delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el.current,
          start: "top 85%",
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
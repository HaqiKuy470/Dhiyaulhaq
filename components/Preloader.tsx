"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const container = useRef(null);
  const [show, setShow] = useState(true);

  useGSAP(() => {
    const tl = gsap.timeline();

    // 1. Teks Loading
    tl.to(".loading-text", {
      opacity: 1,
      duration: 0.5,
      stagger: 0.2
    })
    .to(".loading-text", {
      opacity: 0,
      duration: 0.5,
      delay: 1 // Tahan sebentar
    })
    // 2. Layar Hitam Naik ke Atas
    .to(container.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      onComplete: () => setShow(false) // Hapus dari DOM setelah selesai
    });

  }, { scope: container });

  if (!show) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[99999] bg-black flex items-center justify-center">
      <div className="flex gap-2 text-4xl md:text-6xl font-bold font-mono text-white">
        <span className="loading-text opacity-0 text-blue-500">System</span>
        <span className="loading-text opacity-0">Ready.</span>
      </div>
    </div>
  );
}
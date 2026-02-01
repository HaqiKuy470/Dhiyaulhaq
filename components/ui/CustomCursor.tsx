"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    // Supaya posisi awal di tengah (tidak loncat)
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Fungsi pergerakan mouse
    const moveCursor = (e: MouseEvent) => {
      // Titik utama (langsung gerak)
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0, 
      });
      // Lingkaran pengikut (gerak agak lambat/smooth)
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, 
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Deteksi Hover pada Link dan Button
    const handleHover = () => {
      gsap.to(cursor, { scale: 0, duration: 0.1 }); // Titik hilang
      gsap.to(follower, { scale: 3, backgroundColor: "white", mixBlendMode: "difference", duration: 0.2 }); // Lingkaran membesar & invert warna
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1 });
      gsap.to(follower, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.2 });
    };

    // Cari semua elemen interaktif
    const interactiveElements = document.querySelectorAll("a, button, .interactive");
    
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  });

  return (
    <>
      {/* Titik Kecil (Pointer Asli) */}
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999]"
      />
      {/* Lingkaran Luar (Follower) */}
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[9998] transition-colors"
      />
    </>
  );
}
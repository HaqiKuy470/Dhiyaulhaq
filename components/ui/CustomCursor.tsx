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

    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0, 
      });
      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2, 
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const handleHover = () => {
      gsap.to(cursor, { scale: 0, duration: 0.1 });
      gsap.to(follower, { scale: 3, backgroundColor: "white", mixBlendMode: "difference", duration: 0.2 });
    };

    const handleHoverOut = () => {
      gsap.to(cursor, { scale: 1, duration: 0.1 });
      gsap.to(follower, { scale: 1, backgroundColor: "transparent", mixBlendMode: "normal", duration: 0.2 });
    };

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
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999]"
      />
      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-blue-500 rounded-full pointer-events-none z-[9998] transition-colors"
      />
    </>
  );
}
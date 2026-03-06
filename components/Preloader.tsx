"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Preloader() {
  const container = useRef(null);
  const [show, setShow] = useState(true);
  const [text, setText] = useState("");
  
  // Teks final setelah proses "ngehack" selesai
  const fullText = "SYSYTEM START";

  // Efek huruf acak (Scrambled Text Effect)
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    let iteration = 0;
    let interval: any;

    const startScramble = () => {
      interval = setInterval(() => {
        setText(fullText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return fullText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
        );

        if (iteration >= fullText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; // Kecepatan efek acaknya
      }, 30);
    };

    // Jeda sedikit sebelum efek dimulai biar tidak terlalu kaget
    const timeout = setTimeout(startScramble, 400);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Layar terminal ditarik ke atas setelah teks selesai terbaca (sekitar 2.5 detik)
    tl.to(container.current, {
      yPercent: -100,
      duration: 1.2,
      delay: 2.5, 
      ease: "power4.inOut",
      onComplete: () => setShow(false)
    });

  }, { scope: container });

  if (!show) return null;

  return (
    <div ref={container} className="fixed inset-0 z-[99999] bg-[#020617] flex flex-col items-center justify-center font-mono">
      <div className="w-full max-w-2xl px-8">
        
        {/* Simulasi Command Linux */}
        <div className="text-slate-500 text-xs md:text-sm mb-2 opacity-80">
          root@heyhaqi:~$ ./decrypt_portfolio.sh --force
        </div>
        
        {/* Teks Animasi Acak & Kursor Berkedip */}
        <div className="text-green-500 text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest flex items-center flex-wrap">
          <span className="mr-3 text-slate-700">&gt;</span>
          {text}
          <span className="w-3 md:w-5 h-6 md:h-10 bg-green-500 ml-2 animate-pulse"></span>
        </div>
        
        {/* Detail Tambahan ala Hacker */}
        <div className="text-slate-600 text-[10px] md:text-xs mt-4 uppercase tracking-widest opacity-60">
          Bypassing security protocols... [OK]
        </div>

      </div>
    </div>
  );
}
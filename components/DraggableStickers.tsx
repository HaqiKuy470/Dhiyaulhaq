"use client";

import { motion } from "framer-motion";

interface Sticker {
  text: string;
  color: string;
  initialStyle: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    rotate?: string;
  };
}

const STICKERS: Sticker[] = [
  {
    text: "Founder",
    color: "bg-green-400",
    initialStyle: { top: "22dvh", left: "3vw", rotate: "-6deg" }
  },
  {
    text: "AI Integrator 🤖",
    color: "bg-pink-400",
    initialStyle: { top: "50dvh", right: "4vw", rotate: "8deg" }
  },
  {
    text: "Next.js Dev 💻",
    color: "bg-cyan-400",
    initialStyle: { top: "78dvh", left: "2vw", rotate: "-4deg" }
  },
  {
    text: "100% Bug Free 🐛",
    color: "bg-yellow-400",
    initialStyle: { bottom: "15dvh", right: "3vw", rotate: "12deg" }
  }
];

export default function DraggableStickers() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block select-none z-30">
      <div className="relative w-full h-full min-h-[300dvh]">
        {STICKERS.map((sticker, idx) => (
          <motion.div
            key={idx}
            drag
            dragMomentum={false}
            whileHover={{ scale: 1.05, rotate: "0deg" }}
            whileDrag={{ scale: 1.1, cursor: "grabbing" }}
            className={`
              absolute pointer-events-auto cursor-grab border-4 border-black px-4 py-2 
              shadow-[4px_4px_0px_0px_#000] font-black uppercase text-xs md:text-sm tracking-wide ${sticker.color}
            `}
            style={{
              top: sticker.initialStyle.top,
              bottom: sticker.initialStyle.bottom,
              left: sticker.initialStyle.left,
              right: sticker.initialStyle.right,
              rotate: sticker.initialStyle.rotate || "0deg"
            }}
          >
            {sticker.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

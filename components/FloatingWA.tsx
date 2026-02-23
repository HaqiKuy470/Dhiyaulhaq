"use client";
import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  return (
    <a
      href="https://wa.me/message/UMGIRE2RGSX3B1?src=qr"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1 bg-white text-slate-900 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
        Chat via WhatsApp
        <div className="absolute top-1/2 -translate-y-1/2 -right-1 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4 border-l-white"></div>
      </div>

      <div className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.7)] transition-all duration-300 animate-bounce-slow">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
    </a>
  );
}
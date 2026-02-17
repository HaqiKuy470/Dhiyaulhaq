"use client";
import React from "react";

export default function GlowCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative p-[1px] rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 overflow-hidden group ${className}`}>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative h-full bg-slate-950/90 backdrop-blur-sm rounded-2xl p-6 overflow-hidden">
        {children}
      </div>
    </div>
  );
}
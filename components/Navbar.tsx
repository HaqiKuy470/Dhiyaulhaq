"use client";
import { Home, User, Sparkles, FolderGit2, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  const navItems = [
    { name: "Home", href: "#", icon: <Home className="w-5 h-5" /> },
    { name: "Services", href: "#services", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    // UBAH: fixed top-6 (bukan bottom-6)
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div 
        initial={{ y: -100, opacity: 0 }} // Animasi turun dari atas
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-blue-500/10"
      >
        {navItems.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href}
            className="group relative p-3 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            {/* Icon */}
            {item.icon}

            {/* Tooltip (Sekarang Muncul di BAWAH icon) */}
            <span className="absolute top-14 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-800 text-white text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 whitespace-nowrap pointer-events-none">
              {item.name}
              {/* Panah tooltip menghadap ke atas */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-slate-800" />
            </span>
            
            {/* Active/Hover Dot Indicator (Di atas icon) */}
            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
        ))}
      </motion.div>
    </div>
  );
}
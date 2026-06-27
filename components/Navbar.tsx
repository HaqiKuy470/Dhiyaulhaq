"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Certificates", href: "/certificates" },
    { name: "Docs", href: "/documentation" },
    { name: "Articles", href: "/news" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link href="/" className="text-xl font-black uppercase tracking-tighter bg-yellow-400 px-2 border-2 border-black" onClick={() => setIsOpen(false)}>
            HAQI
          </Link>
          <button 
            className="md:hidden border-2 border-black p-1 hover:bg-cyan-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <div className={`md:flex flex-col md:flex-row gap-6 mt-4 md:mt-0 ${isOpen ? 'flex' : 'hidden'}`}>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-bold uppercase text-sm hover:bg-cyan-400 px-2 py-1 md:py-0 transition-colors border-b-2 border-transparent hover:border-black block md:inline-block"
            >
              {item.name}
            </Link>
          ))}
          <Link href="#" className="brutalist-button bg-pink-400 text-xs md:text-sm text-center md:hidden mt-2" onClick={() => setIsOpen(false)}>
            -
          </Link>
        </div>

        <Link href="#" className="brutalist-button bg-pink-400 text-xs md:text-sm hidden md:block">
          -
        </Link>
      </div>
    </nav>
  );
}
"use client";
import { Github, Linkedin, Instagram, Youtube, Mail, Heart } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8 relative overflow-hidden">
      
      {/* Background Glow (Halus di bawah) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">
              Moh Dhiyaulhaq <span className="text-blue-500">Ulumuddin</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Mahasiswa PTI Universitas Negeri Malang yang berfokus pada Web Development, Automation, dan Financial Tech.
            </p>
            <div className="flex gap-4 mt-6">
              <SocialLink href="https://github.com/haqikuy470" icon={<Github className="w-5 h-5"/>} />
              <SocialLink href="https://linkedin.com" icon={<Linkedin className="w-5 h-5"/>} />
              <SocialLink href="https://instagram.com/haqikuy" icon={<Instagram className="w-5 h-5"/>} />
              <SocialLink href="https://youtube.com/@Dhaqi470" icon={<Youtube className="w-5 h-5"/>} />
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Sitemap</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link href="#about" className="hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-blue-500 transition-colors">Projects</Link></li>
              <li><Link href="#services" className="hover:text-blue-500 transition-colors">Services</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>emailmu@student.um.ac.id</span>
              </li>
              <li className="text-sm text-slate-500">
                Malang, Jawa Timur<br />Indonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Arshaka. All rights reserved.</p>
          <p className="flex items-center gap-1 mt-2 md:mt-0">
            Dibuat dengan <Heart className="w-3 h-3 text-red-500 fill-red-500" /> menggunakan Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

// Komponen Kecil untuk Social Icon
function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}
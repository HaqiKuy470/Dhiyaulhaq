"use client";
import { Github, Linkedin, Instagram, Youtube, Music, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t-8 border-black pt-16 pb-8 font-mono overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <div className="inline-block bg-yellow-400 px-4 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] mb-6">
              <h2 className="text-2xl font-black uppercase tracking-tighter">
                Moh Dhiyaulhaq Ulumuddin
              </h2>
            </div>
            <p className="font-bold text-sm md:text-base border-l-4 border-black pl-4 mb-6 max-w-sm bg-gray-100 p-2">
              Informatics Engineering student at the State University of Malang with a passion for exploring new technologies.
            </p>
            <div className="flex gap-4">
              <SocialLink href="https://github.com/haqikuy470" icon={<Github className="w-6 h-6"/>} />
              <SocialLink href="https://www.linkedin.com/in/moh-dhiyaulhaq-ulumuddin-98b9022a1" icon={<Linkedin className="w-6 h-6"/>} />
              <SocialLink href="https://instagram.com/haqikuy" icon={<Instagram className="w-6 h-6"/>} />
              <SocialLink href="https://youtube.com/@heyhaqi" icon={<Youtube className="w-6 h-6"/>} />
              <SocialLink href="https://tiktok.com/@haqikuy" icon={<Music className="w-6 h-6"/>} />
            </div>
          </div>

          <div className="md:col-span-2 grid grid-cols-2 gap-4 md:gap-12">
            
            <div>
              <h3 className="font-black uppercase mb-4 md:mb-6 border-b-4 border-black pb-2 inline-block">Sitemap</h3>
              <ul className="space-y-3 md:space-y-4 font-bold text-sm md:text-base">
                <li><Link href="#" className="hover:bg-cyan-400 hover:px-2 transition-all border-2 border-transparent hover:border-black inline-block">Home</Link></li>
                <li><Link href="#about" className="hover:bg-cyan-400 hover:px-2 transition-all border-2 border-transparent hover:border-black inline-block">About</Link></li>
                <li><Link href="#projects" className="hover:bg-cyan-400 hover:px-2 transition-all border-2 border-transparent hover:border-black inline-block">Projects</Link></li>
                <li><Link href="#services" className="hover:bg-cyan-400 hover:px-2 transition-all border-2 border-transparent hover:border-black inline-block">Services</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black uppercase mb-4 md:mb-6 border-b-4 border-black pb-2 inline-block">Contact</h3>
              <ul className="space-y-3 md:space-y-4 font-bold text-sm md:text-base">
                <li className="flex items-start md:items-center gap-2">
                  <span className="bg-pink-400 p-1 border-2 border-black shrink-0">
                    <Mail className="w-4 h-4 text-black" />
                  </span>
                   <a href="mailto:haqikuy470@gmail.com" className="hover:bg-pink-400 hover:px-2 transition-all border-2 border-transparent hover:border-black break-words">
                    haqikuy470@gmail.com
                  </a>
                </li>
                <li className="flex items-start md:items-center gap-2">
                  <span className="bg-cyan-400 p-1 border-2 border-black shrink-0">
                    <Phone className="w-4 h-4 text-black" />
                  </span>
                  <a href="https://wa.me/6285111422715" target="_blank" className="hover:bg-cyan-400 hover:px-2 transition-all border-2 border-transparent hover:border-black break-words">
                    +62 851 1142 2715
                  </a>
                </li>
                <li className="bg-gray-100 p-2 border-2 border-black mt-2 inline-block">
                  Malang, East Java<br />Indonesia
                </li>
              </ul>
            </div>

          </div>

        </div>

        <div className="border-t-4 border-black pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-bold gap-4 md:gap-0">
          <p className="bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_#000] text-center md:text-left">
            &copy; {new Date().getFullYear()} ARSHAKA. ALL RIGHTS RESERVED.
          </p>
          
          <div className="flex items-center gap-2 bg-white border-2 border-black px-2 py-1 shadow-[2px_2px_0px_0px_#000]">
            <span className="uppercase text-xs">Built with</span>
            
            <div className="bg-black text-white px-1 text-xs font-black">NEXT.JS</div>

            <span className="uppercase text-xs">by <span className="bg-blue-400 px-1 border border-black text-black">Haqikuy470</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_#000] flex items-center justify-center text-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 hover:bg-black hover:text-white transition-all shrink-0"
    >
      {icon}
    </a>
  );
}
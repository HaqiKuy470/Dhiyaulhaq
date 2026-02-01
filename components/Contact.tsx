"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 relative text-center">
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Punya ide proyek menarik?
          </h2>
          <p className="text-slate-400 text-lg mb-10">
            Saya selalu terbuka untuk diskusi tentang pengembangan web, sistem otomasi, 
            atau sekadar ngobrol seputar teknologi dan trading.
          </p>
          
          <a 
            href="mailto:emailmu@example.com" 
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Hubungi Saya
            <ArrowUpRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
      
      {/* Footer Minimalis di dalam section ini */}
      <div className="absolute bottom-0 w-full py-6 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Arshaka. Dibuat dengan Next.js & Tailwind.</p>
      </div>
    </section>
  );
}
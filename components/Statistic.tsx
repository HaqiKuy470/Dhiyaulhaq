"use client";
import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-900/50 relative">
      <div className="container mx-auto px-6">

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-blue-500 font-mono mb-4"
          >
            <BarChart3 className="w-5 h-5" />
            <span>04. Statistics</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            GitHub <span className="text-blue-500">Activity</span>
          </h2>
          <p className="text-slate-400 max-w-xl text-sm md:text-base">
            Data real-time diambil langsung dari repositori GitHub @HaqiKuy470.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* REVISI: Mengubah w-full pada <img> menjadi h-32 md:h-48 agar tingginya terkunci dan tidak melar */}
          <motion.div whileHover={{ y: -5 }} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden py-6 px-4 flex justify-center items-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=HaqiKuy470&theme=tokyonight&hide_border=true&fire=FF0000&ring=FF0000&currStreakNum=FF0000&background=00000000"
              alt="GitHub Streak"
              className="h-32 sm:h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden py-6 px-4 flex justify-center items-center">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=HaqiKuy470&theme=tokyonight&background=00000000"
              alt="Languages"
              className="h-32 sm:h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

          <motion.div whileHover={{ y: -5 }} className="w-full bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden py-6 px-4 flex justify-center items-center">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=HaqiKuy470&theme=tokyonight&background=00000000"
              alt="Stats"
              className="h-32 sm:h-40 md:h-48 w-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
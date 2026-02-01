"use client";

import { motion } from "framer-motion";
import { User, Code2, TrendingUp, Cpu } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Kiri: Deskripsi */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-blue-500 font-mono mb-4">
            <User className="w-5 h-5" />
            <span>03. About Me</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Beyond the <span className="text-blue-500">Code</span>
          </h2>

          <div className="space-y-4 text-slate-400 leading-relaxed">
            <p>
              Halo! Saya mahasiswa semester awal di <strong>Pendidikan Teknik Informatika, Universitas Negeri Malang</strong>. 
              Dunia saya tidak hanya berputar di sekitar syntax error, tapi juga bagaimana teknologi bisa menyelesaikan masalah nyata.
            </p>
            <p>
              Saya memiliki ketertarikan spesifik pada perpotongan antara <strong>Software Engineering</strong> dan <strong>Financial Markets</strong>. 
              Membangun bot trading, menganalisis data saham (Bandarmology), atau menciptakan sistem otomasi adalah hal yang sering saya lakukan di waktu luang.
            </p>
            <p>
              Saat ini saya fokus mendalami <strong>Next.js</strong> untuk web modern dan <strong>Python</strong> untuk AI/Automation script.
            </p>
          </div>
        </motion.div>

        {/* Kanan: Grid of Interests */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              icon: <Code2 className="w-6 h-6 text-blue-400" />, 
              title: "Fullstack Dev", 
              desc: "Membangun aplikasi web end-to-end yang scalable." 
            },
            { 
              icon: <TrendingUp className="w-6 h-6 text-green-400" />, 
              title: "Trading Tech", 
              desc: "Analisis pasar & pengembangan algoritma trading." 
            },
            { 
              icon: <Cpu className="w-6 h-6 text-purple-400" />, 
              title: "Automation", 
              desc: "Python scripting untuk efisiensi workflow." 
            },
            { 
              icon: <User className="w-6 h-6 text-orange-400" />, 
              title: "Student Life", 
              desc: "Aktif di PTI UM & komunitas teknologi." 
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <div className="bg-slate-950 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-800">
                {item.icon}
              </div>
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-xs text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
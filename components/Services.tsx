const SERVICES = [
  { 
    id: "01",
    title: "Web Development", 
    desc: "Membangun ekosistem web modern, responsif, dan cepat menggunakan Next.js dan React.", 
    color: "bg-pink-400" 
  },
  { 
    id: "02",
    title: "AI & Machine Learning", 
    desc: "Eksplorasi dan implementasi kecerdasan buatan untuk otomatisasi dan analisis data.", 
    color: "bg-cyan-400" 
  },
  { 
    id: "03",
    title: "Web 3 Development", 
    desc: "Pengembangan Aplikasi Web 3 untuk kebutuhan industri dan financial.", 
    color: "bg-yellow-400" 
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white border-b-8 border-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black uppercase mb-12 inline-block bg-purple-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((srv) => (
            <div key={srv.id} className="brutalist-card flex flex-col p-0">
              <div className={`p-4 border-b-4 border-black ${srv.color} flex justify-between items-center`}>
                <span className="text-2xl font-black uppercase">{srv.title}</span>
                <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#000]">{srv.id}</span>
              </div>
              <div className="p-6 bg-[#f4f4f0] flex-1">
                <p className="font-bold text-sm leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
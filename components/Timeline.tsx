const TIMELINE = [
  { year: "Sekarang", title: "Pendidikan Teknik Informatika", desc: "Universitas Negeri Malang (UM). Fokus mengeksplorasi Web Dev dan AI.", color: "bg-green-400" },
  { year: "2026", title: "Arshaka Ecosystem ", desc: "Membangun ekosistem digital .", color: "bg-cyan-400" },
  { year: "2025", title: "MAN 1 Lamongan", desc: "Menyelesaikan pendidikan menengah atas dengan minat kuat di bidang teknologi.", color: "bg-pink-400" },
];

export default function Timeline() {
  return (
    <section className="py-20 bg-[#f4f4f0] border-b-8 border-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black uppercase mb-12 inline-block bg-orange-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
          History
        </h2>

        <div className="space-y-6">
          {TIMELINE.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row border-4 border-black bg-white shadow-[6px_6px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
              <div className={`${item.color} p-6 border-b-4 md:border-b-0 md:border-r-4 border-black flex items-center justify-center min-w-[150px]`}>
                <span className="font-black text-xl uppercase bg-white border-2 border-black px-2 shadow-[2px_2px_0px_0px_#000]">{item.year}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black uppercase mb-2">{item.title}</h3>
                <p className="font-bold text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
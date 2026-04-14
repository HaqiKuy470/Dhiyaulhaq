export default function About() {
  return (
    <section id="about" className="py-20 bg-white border-b-8 border-black font-mono">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-black uppercase mb-12 inline-block bg-green-400 px-4 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
          About
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="brutalist-card p-8 bg-purple-200">
            <h3 className="text-2xl font-black mb-4 underline">Biography</h3>
            <p className="font-bold leading-relaxed">
              Saya adalah mahasiswa Pendidikan Teknik Informatika di Universitas Negeri Malang. 
              Fokus saya saat ini adalah membangun ekosistem digital melalui brand Arshaka, 
              menggabungkan efisiensi sistem dengan desain yang fungsional.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black">UM STUDENT</span>
              <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black">WEB DEV</span>
              <span className="bg-white border-2 border-black px-2 py-1 text-xs font-black">TRADING ENTHUSIAST</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <StatBox label="Projects" value="20+" color="bg-cyan-400" />
            <StatBox label="Experience" value="2 Yrs" color="bg-yellow-400" />
            <StatBox label="Tech Stack" value="15+" color="bg-pink-400" />
            <StatBox label="Clients" value="10+" color="bg-green-400" />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ label, value, color }: { label: string, value: string, color: string }) {
  return (
    <div className={`border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${color}`}>
      <div className="text-3xl font-black">{value}</div>
      <div className="text-xs uppercase font-bold">{label}</div>
    </div>
  );
}
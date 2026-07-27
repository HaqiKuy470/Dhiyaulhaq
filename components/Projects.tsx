import Link from "next/link";

interface Product {
  name: string;
  display: string;
  tagline: string;
  url: string;
  bg: string;
  chip: string;
}

const PRODUCTS: Product[] = [
  {
    name: "SHAKA STUDIO",
    display: "Shaka Studio",
    tagline: "Roblox game development studio building experiences & assets",
    url: "https://shakastudio.net",
    bg: "bg-purple-500",
    chip: "bg-yellow-400",
  },
  {
    name: "COMPILE DAILY",
    display: "Compile Daily",
    tagline: "Daily dev insights, tutorials, and tech news",
    url: "https://compiledaily.net",
    bg: "bg-orange-500",
    chip: "bg-lime-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b-8 border-black bg-[#f4f4f0] font-mono">
      <div className="container mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-black uppercase mb-12 inline-block bg-green-400 px-4 py-2 border-4 border-black shadow-[6px_6px_0px_0px_#000]">
          My Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS.map((product) => (
            <div
              key={product.url}
              className="w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] flex flex-col overflow-hidden hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all"
            >
              <div className={`h-48 border-b-4 border-black ${product.bg} flex flex-col items-center justify-center p-8 relative overflow-hidden`}>
                <span className="text-5xl md:text-6xl font-black opacity-20 uppercase tracking-tighter absolute -right-4 -bottom-4 rotate-6">
                  {product.name}
                </span>

                <div className={`relative z-10 ${product.chip} px-6 py-4 border-4 border-black shadow-[6px_6px_0px_0px_#000] transform -rotate-2`}>
                  <span className="text-2xl md:text-3xl font-black text-black uppercase tracking-tighter">
                    {product.name}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-center bg-white">
                <div className="mb-4 flex flex-wrap gap-2">
                  <span className="text-xs font-black uppercase border-2 border-black px-2 py-1 bg-cyan-400 shadow-[2px_2px_0px_0px_#000]">
                    Live
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase mb-4">{product.display}</h3>

                <p className="font-bold text-sm md:text-base mb-8 leading-relaxed text-black bg-pink-200 border-2 border-black p-4 shadow-[4px_4px_0px_0px_#000]">
                  {product.tagline}
                </p>

                <Link
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 border-4 border-black font-black uppercase bg-white text-xs md:text-sm shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all text-center"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { ArrowLeft, ExternalLink, Globe, Gamepad2 } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

interface Product {
  title: string;
  category: string;
  desc: string;
  icon: ReactNode;
  color: string;
  tags: string[];
  live: string;
}

const PRODUCTS: Product[] = [
  {
    title: "Shaka Studio",
    category: "Roblox Game Studio",
    desc: "Roblox game development studio building experiences, systems, and assets for the Roblox platform.",
    icon: <Gamepad2 className="w-8 h-8" />,
    color: "bg-purple-400",
    tags: ["Roblox", "Game Development", "Lua"],
    live: "https://shakastudio.net",
  },
  {
    title: "Compile Daily",
    category: "Media / Publication",
    desc: "Daily dev insights, tutorials, and tech news for developers who want to stay up to date.",
    icon: <Globe className="w-8 h-8" />,
    color: "bg-orange-400",
    tags: ["Tech News", "Tutorials", "Developer Content"],
    live: "https://compiledaily.net",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f4f4f0] font-mono text-black">
      <Navbar />
      <div className="container mx-auto max-w-6xl py-12 px-6 pt-32">

        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm w-fit"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>

          <div className="bg-yellow-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">My Products</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PRODUCTS.map((product, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col bg-white border-4 border-black shadow-[10px_10px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden"
            >
              <div className={`${product.color} p-6 border-b-4 border-black flex justify-between items-start`}>
                <div className="bg-white p-3 border-4 border-black shadow-[4px_4px_0px_0px_#000]">
                  {product.icon}
                </div>
                <span className="bg-black text-white px-3 py-1 text-sm font-black uppercase">
                  Live
                </span>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <span className="text-xs font-black uppercase text-gray-500 mb-2">{product.category}</span>
                <h2 className="text-2xl md:text-3xl font-black uppercase mb-4 leading-tight">
                  {product.title}
                </h2>
                <p className="font-bold text-sm leading-relaxed mb-8 text-gray-700">
                  {product.desc}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 border-2 border-black text-[10px] font-black uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={product.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-black text-white border-4 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Visit Site
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}

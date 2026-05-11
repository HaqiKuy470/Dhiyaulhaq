"use client";

import { ArrowLeft, BookOpen, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { NEWS_ARTICLES } from "./data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsPage() {
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
          
          <div className="bg-orange-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">News & Articles</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article, idx) => (
            <article 
              key={idx} 
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all flex flex-col overflow-hidden group"
            >
              <div className={`w-full h-48 ${article.color} border-b-4 border-black flex flex-col items-center justify-center p-6 relative`}>
                <BookOpen className="w-12 h-12 mb-4" />
                <span className="font-black uppercase text-xs bg-white px-2 py-1 border-2 border-black text-center">
                  {article.category}
                </span>
              </div>
              
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-sm font-bold mb-4 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="font-bold text-gray-700 leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
                
                <Link 
                  href={`/news/${article.slug}`} 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white font-black uppercase text-xs w-fit border-2 border-black hover:bg-white hover:text-black transition-colors mt-auto"
                >
                  Read Article <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
      <Footer />
    </main>
  );
}

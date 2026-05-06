"use client";

import { ArrowLeft, Calendar, Tag } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { NEWS_ARTICLES } from "../data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug;
  
  const article = NEWS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <main className="min-h-screen bg-[#f4f4f0] font-mono text-black py-12 px-6 flex items-center justify-center">
        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_#000] text-center">
          <h1 className="text-3xl font-black uppercase mb-4">Article Not Found</h1>
          <Link href="/news" className="inline-block bg-yellow-400 px-6 py-2 border-2 border-black font-bold uppercase hover:bg-black hover:text-white transition-colors">
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f4f0] font-mono text-black">
      <Navbar />
      <div className="container mx-auto max-w-3xl py-12 px-6 pt-32">
        
        <Link 
          href="/news" 
          className="inline-flex items-center gap-2 px-4 py-2 border-4 border-black bg-white shadow-[4px_4px_0px_0px_#000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all font-black uppercase text-sm w-fit mb-12"
        >
          <ArrowLeft className="w-5 h-5" /> Back to News
        </Link>

        <article className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_#000] overflow-hidden">
          <div className={`${article.color} p-8 border-b-4 border-black`}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm font-black uppercase bg-white px-3 py-1 border-2 border-black">
                <Tag className="w-4 h-4" />
                {article.category}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold bg-white px-3 py-1 border-2 border-black">
                <Calendar className="w-4 h-4" />
                {article.date}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight bg-white p-4 border-4 border-black inline-block">
              {article.title}
            </h1>
          </div>
          
          <div className="p-8 md:p-12 max-w-none bg-white">
            {article.content.split('\n').map((line, idx) => {
              const trimmed = line.trim();
              
              // Simple markdown parser logic
              const renderText = (text: string) => {
                const parts = text.split(/(\*\*.*?\*\*)/g);
                return parts.map((part, i) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={i} className="bg-yellow-200 px-1 border-b-2 border-black font-black">{part.slice(2, -2)}</strong>;
                  }
                  return part;
                });
              };

              if (trimmed.startsWith('###')) {
                return (
                  <h3 key={idx} className="text-2xl font-black uppercase mt-10 mb-6 border-b-4 border-black inline-block pb-1 bg-white">
                    {renderText(trimmed.replace('###', '').trim())}
                  </h3>
                );
              } 
              
              if (trimmed.startsWith('- ')) {
                return (
                  <div key={idx} className="flex gap-3 items-start mb-3 font-bold">
                    <div className="mt-1.5 w-3 h-3 bg-black shrink-0 border-2 border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" /> 
                    <div className="flex-1">{renderText(trimmed.replace('- ', ''))}</div>
                  </div>
                );
              } 
              
              if (trimmed.match(/^[0-9]+\./)) {
                const parts = trimmed.split('.');
                const number = parts[0];
                const rest = parts.slice(1).join('.').trim();
                return (
                  <div key={idx} className="flex gap-3 items-start mb-3 font-bold">
                    <div className="bg-black text-white px-2 py-0.5 text-xs font-black border-2 border-black">
                      {number}
                    </div>
                    <div className="flex-1">{renderText(rest)}</div>
                  </div>
                );
              } 
              
              if (trimmed !== '') {
                return (
                  <p key={idx} className="mb-6 font-bold leading-relaxed text-gray-800">
                    {renderText(trimmed)}
                  </p>
                );
              }
              
              return <div key={idx} className="h-4" />;
            })}
          </div>
        </article>

      </div>
      <Footer />
    </main>
  );
}

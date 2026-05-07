"use client";

import { ArrowLeft, ExternalLink, Award, FileText } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CERTIFICATES = [
  // Hackaton
  {
    title: "Hackathon Refactory UNAIR",
    issuer: "Hackaton",
    image: "/Sertif/Hackaton/REFACTORY_UNAIR.png",
    pdf: "/Sertif/Hackaton/REFACTORY_UNAIR.pdf",
    color: "bg-purple-400"
  },
  // Dicoding - Bank Indonesia
  {
    title: "Back-End with Google Cloud",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Back-End with Python",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Dasar AI",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Dasar Data Science",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Dasar Google Cloud",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Dasar Machine Learning",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Dasar Python",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.pdf",
    color: "bg-blue-400"
  },
  {
    title: "Prompt Engineering",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.pdf",
    color: "bg-blue-400"
  },
  {
    title: "UX Design",
    issuer: "Dicoding x Bank Indonesia",
    image: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.png",
    pdf: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.pdf",
    color: "bg-blue-400"
  },
  // Dicoding - DBS
  {
    title: "Dasar Data Science",
    issuer: "Dicoding x DBS",
    image: "/Sertif/Dicoding/DBS/DasarDataScience.png",
    pdf: "/Sertif/Dicoding/DBS/DasarDataScience.pdf",
    color: "bg-red-400"
  },
  {
    title: "Dasar Machine Learning",
    issuer: "Dicoding x DBS",
    image: "/Sertif/Dicoding/DBS/DasarMachineLearning.png",
    pdf: "/Sertif/Dicoding/DBS/DasarMachineLearning.pdf",
    color: "bg-red-400"
  },
  {
    title: "Dasar Python",
    issuer: "Dicoding x DBS",
    image: "/Sertif/Dicoding/DBS/DasarPython.png",
    pdf: "/Sertif/Dicoding/DBS/DasarPython.pdf",
    color: "bg-red-400"
  },
  {
    title: "Dasar SQL",
    issuer: "Dicoding x DBS",
    image: "/Sertif/Dicoding/DBS/DasarSQL.png",
    pdf: "/Sertif/Dicoding/DBS/DasarSQL.pdf",
    color: "bg-red-400"
  },
  {
    title: "Financial Literacy",
    issuer: "Dicoding x DBS",
    image: "/Sertif/Dicoding/DBS/FinancialLiteracy.png",
    pdf: "/Sertif/Dicoding/DBS/FinancialLiteracy.pdf",
    color: "bg-red-400"
  },
  // Dicoding - MICROSOFT
  {
    title: "Aplikasi GenAI Microsoft Azure",
    issuer: "Dicoding x Microsoft",
    image: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.png",
    pdf: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.pdf",
    color: "bg-cyan-400"
  },
  {
    title: "Dasar Machine Learning",
    issuer: "Dicoding x Microsoft",
    image: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.png",
    pdf: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.pdf",
    color: "bg-cyan-400"
  },
  {
    title: "Dasar Python",
    issuer: "Dicoding x Microsoft",
    image: "/Sertif/Dicoding/MICROSOFT/DasarPython.png",
    pdf: "/Sertif/Dicoding/MICROSOFT/DasarPython.pdf",
    color: "bg-cyan-400"
  },
  {
    title: "Data Science Microsoft Fabric",
    issuer: "Dicoding x Microsoft",
    image: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.png",
    pdf: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.pdf",
    color: "bg-cyan-400"
  },
  {
    title: "Fundamental Pemrosesan Data",
    issuer: "Dicoding x Microsoft",
    image: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.png",
    pdf: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.pdf",
    color: "bg-cyan-400"
  },
  // Udemy
  {
    title: "Web 3 Development Essential",
    issuer: "Udemy",
    image: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.png",
    pdf: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.pdf",
    color: "bg-orange-400"
  },
  {
    title: "Belajar Web Development Menggunakan Bahasa Pemrograman PHP",
    issuer: "Udemy",
    image: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.png",
    pdf: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.pdf",
    color: "bg-orange-400"
  },
  {
    title: "Complete Web & Mobile UI Designer: UI/UX, Figma, More",
    issuer: "Udemy",
    image: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.png",
    pdf: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.pdf",
    color: "bg-orange-400"
  },
    {
    title: "Converted Website Into Mobile APPS",
    issuer: "Udemy",
    image: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.png",
    pdf: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.pdf",
    color: "bg-orange-400"
  }
];

const CATEGORIES = Array.from(new Set(CERTIFICATES.map(c => c.issuer)));

export default function CertificatesPage() {
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
          
          <div className="bg-green-400 border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_#000]">
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">My Certificates</h1>
          </div>
        </div>

        {CATEGORIES.map((category) => (
          <div key={category} className="mb-16 last:mb-0">
            <div className="inline-block bg-yellow-400 px-6 py-2 border-4 border-black shadow-[4px_4px_0px_0px_#000] mb-8">
              <h2 className="text-2xl font-black uppercase tracking-tighter">{category}</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {CERTIFICATES.filter(c => c.issuer === category).map((cert, idx) => (
                <div 
                  key={idx} 
                  className="group flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all overflow-hidden"
                >
                  {/* Image Container */}
                  <div className={`${cert.color} h-48 w-full border-b-4 border-black flex items-center justify-center p-4 relative overflow-hidden`}>
                    {cert.image ? (
                      <Image 
                        src={cert.image} 
                        alt={cert.title} 
                        fill
                        className="object-contain p-2"
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_#000]">
                        <FileText className="w-12 h-12 mb-2" />
                        <span className="font-black uppercase text-xs">Document</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-yellow-500" />
                        <span className="text-xs font-black uppercase bg-gray-100 px-2 py-1 border-2 border-black">
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="text-lg font-black uppercase leading-tight mb-4">
                        {cert.title}
                      </h3>
                    </div>
                    
                    <Link 
                      href={cert.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-3 bg-black text-white border-4 border-black font-black uppercase text-xs shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      <ExternalLink className="w-4 h-4" /> View PDF
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}

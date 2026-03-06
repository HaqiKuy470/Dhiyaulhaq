"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import Preloader from "@/components/Preloader";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Cek apakah URL saat ini adalah /cv
  const isCV = pathname === "/cv";

  return (
    <>
      {/* Sembunyikan elemen-elemen ini JIKA sedang di halaman CV */}
      {!isCV && <Preloader />}
      {!isCV && <Navbar />}
      {!isCV && <FloatingWA />}
      
      {/* Konten Utama (Hero, About, atau Halaman CV) */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Sembunyikan Footer JIKA sedang di halaman CV */}
      {!isCV && (
        <div className="relative z-10">
          <Footer />
        </div>
      )}
    </>
  );
}
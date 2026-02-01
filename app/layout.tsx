import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// IMPORT KOMPONEN GLOBAL DI SINI
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Cursor from "@/components/ui/Cursor";
import Preloader from "@/components/Preloader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arshaka | Portfolio",
  description: "Portfolio of Moh Dhiyaulhaq Ulumuddin",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-200 overflow-x-hidden selection:bg-blue-500/30 relative`}
      >
        {/* 1. BACKGROUND LAYER (Sekarang ada di Layout, jadi nempel terus) */}
        <div className="bg-noise"></div>
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
           <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        {/* 2. NAVBAR & WA (Global) */}
        <Navbar />
        <Preloader/>
        <Cursor/>
        <FloatingWA />
        <SmoothScroll>
          <CustomCursor />
          {/* 3. KONTEN HALAMAN (Page.tsx akan masuk ke sini) */}
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>

        {/* 4. FOOTER (Global) */}
        <div className="relative z-10">
          <Footer />
        </div>

      </body>
    </html>
  );
}
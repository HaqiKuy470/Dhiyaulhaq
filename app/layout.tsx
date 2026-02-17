import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  title: "Dhiyaulhaq | Portfolio",
  description: "Portfolio of Moh Dhiyaulhaq Ulumuddin",
  icons: {
    icon: '/logo.png',
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
        <div className="bg-noise"></div>
        <div className="fixed inset-0 z-0 pointer-events-none">
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
           <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[100px] rounded-full mix-blend-screen" />
        </div>

        <Navbar />
        <Preloader/>
        <Cursor/>
        <FloatingWA />
        <SmoothScroll>
          <CustomCursor />
          <div className="relative z-10">
            {children}
          </div>
        </SmoothScroll>
        <div className="relative z-10">
          <Footer />
        </div>

      </body>
    </html>
  );
}
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
  title: "HeyHaqi | Portfolio Moh. Dhiyaulhaq",
  description: "Portfolio of Moh Dhiyaulhaq Ulumuddin (HeyHaqi). Informatics Engineering Education student at Universitas Negeri Malang exploring Web Development, Automation, and Financial Tech.",
  keywords: ["HeyHaqi", "Moh Dhiyaulhaq Ulumuddin", "Haqi", "Portfolio Web Developer", "PTI UM", "Next.js Developer Malang"],
  authors: [{ name: "Moh. Dhiyaulhaq Ulumuddin" }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "HeyHaqi | Web Developer Portfolio",
    description: "Portfolio of Moh Dhiyaulhaq Ulumuddin. Exploring Web Development, Automation, and Financial Tech.",
    url: "https://heyhaqi.my.id",
    siteName: "HeyHaqi Portfolio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Moh. Dhiyaulhaq Ulumuddin",
    "alternateName": ["HeyHaqi", "Haqi"],
    "url": "https://heyhaqi.my.id",
    "jobTitle": "Web Developer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Negeri Malang"
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Malang, Indonesia"
    },
    "knowsAbout": ["Web Development", "Next.js", "Python", "Automation", "Financial Tech"]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
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
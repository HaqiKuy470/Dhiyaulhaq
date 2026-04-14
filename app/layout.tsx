import type { Metadata } from "next";
import { Space_Mono } from 'next/font/google';
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: "HeyHaqi | Portfolio Moh. Dhiyaulhaq",
  description: "Portfolio of Moh Dhiyaulhaq Ulumuddin (HeyHaqi). Informatics Engineering Education student.",
  keywords: ["HeyHaqi", "Moh Dhiyaulhaq Ulumuddin", "Haqi", "Portfolio Web Developer", "PTI UM", "Next.js"],
  authors: [{ name: "Moh. Dhiyaulhaq Ulumuddin" }],
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: "HeyHaqi | Web Developer Portfolio",
    description: "Portfolio of Moh Dhiyaulhaq Ulumuddin. Exploring Web Development, Machine Learning, and Financial Tech.",
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
    "alternateName": ["HeyHaqi", "Haqi", "Moh Dhiyaulhaq Ulumuddin", "Dhiyaulhaq"],
    "url": "https://heyhaqi.my.id",
    "jobTitle": "Web Developer, AI Developer, Financial Tech Developer",
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Negeri Malang"
    },
    "homeLocation": {
      "@type": "Place",
      "name": "Malang, Indonesia"
    },
    "knowsAbout": ["Web Development", "Next.js", "Python", "Machine Learning", "Financial Tech", "Automation"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      {/* Memasukkan variable font Space_Mono ke body */}
      <body className={`${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
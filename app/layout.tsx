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
    icon: '/logo.webp',
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

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "HeyHaqi",
    "url": "https://heyhaqi.my.id",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://heyhaqi.my.id/news?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

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

  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "SiteNavigationElement",
        "position": 1,
        "name": "Projects",
        "url": "https://heyhaqi.my.id/projects"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 2,
        "name": "Certificates",
        "url": "https://heyhaqi.my.id/certificates"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 3,
        "name": "News",
        "url": "https://heyhaqi.my.id/news"
      },
      {
        "@type": "SiteNavigationElement",
        "position": 4,
        "name": "CV",
        "url": "https://heyhaqi.my.id/cv"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationSchema) }}
        />
      </head>
      {/* Memasukkan variable font Space_Mono ke body */}
      <body className={`${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
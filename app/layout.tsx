import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-fraunces",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://heyhaqi.my.id"),
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
    images: [
      {
        url: "https://heyhaqi.my.id/logo.webp",
        width: 800,
        height: 800,
        alt: "HeyHaqi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HeyHaqi | Web Developer Portfolio",
    description: "Portfolio of Moh Dhiyaulhaq Ulumuddin. Exploring Web Development, Machine Learning, and Financial Tech.",
    images: ["https://heyhaqi.my.id/logo.webp"],
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
        "name": "Products",
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
        "name": "CV",
        "url": "https://heyhaqi.my.id/cv"
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${newsreader.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Turn on scroll animations before first paint, unless the visitor prefers reduced motion. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              'if(window.matchMedia("(prefers-reduced-motion: no-preference)").matches)document.documentElement.dataset.motion="on";',
          }}
        />
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
      <body className="min-h-screen bg-paper font-serif text-ink antialiased">
        {children}
        <ScrollEffects />
      </body>
    </html>
  );
}
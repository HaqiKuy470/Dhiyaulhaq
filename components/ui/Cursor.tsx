"use client";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="hidden md:block"> {/* Sembunyikan di HP */}
      <AnimatedCursor
        innerSize={8}       // Ukuran titik inti
        outerSize={35}      // Ukuran lingkaran luar (scanner)
        color="34, 211, 238" // Warna Cyan Neon (RGB format tanpa koma)
        outerAlpha={0.2}    // Transparansi lingkaran luar
        innerScale={1}
        outerScale={2}      // Seberapa besar lingkaran membesar saat hover
        
        // PENTING: Konfigurasi "Engineer Feel"
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        
        // Style Kustom untuk efek X-Ray/Scanner
        outerStyle={{
          border: '1px solid var(--cursor-color)',
          mixBlendMode: 'exclusion' // Efek warna terbalik (keren di background gelap)
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }}
      />
    </div>
  );
}
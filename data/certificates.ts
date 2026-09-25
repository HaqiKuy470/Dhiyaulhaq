export interface Certificate {
  title: string;
  issuer: string;
  image: string;
  pdf: string;
}

export const CERTIFICATES: Certificate[] = [
  // Hackathon
  { title: "Hackathon Refactory UNAIR", issuer: "Hackathon", image: "/Sertif/Hackaton/REFACTORY_UNAIR.webp", pdf: "/Sertif/Hackaton/REFACTORY_UNAIR.pdf" },
  { title: "Essential Training Program Digdaya x Hackathon", issuer: "Hackathon", image: "/Sertif/Hackaton/DIGDAYA_HACKATHON.webp", pdf: "/Sertif/Hackaton/DIGDAYA_HACKATHON.pdf" },
  // Dicoding x Bank Indonesia
  { title: "Back-End with Google Cloud", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndGoogleCloud.pdf" },
  { title: "Back-End with Python", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/BackEndPython.pdf" },
  { title: "Dasar AI", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarAI.pdf" },
  { title: "Dasar Data Science", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarDataScience.pdf" },
  { title: "Dasar Google Cloud", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarGoogleCloud.pdf" },
  { title: "Dasar Machine Learning", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarMachineLearning.pdf" },
  { title: "Dasar Python", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/DasarPython.pdf" },
  { title: "Prompt Engineering", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/PromtEngine.pdf" },
  { title: "UX Design", issuer: "Dicoding x Bank Indonesia", image: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.webp", pdf: "/Sertif/Dicoding/BANK-INDONESIA/UXDesign.pdf" },
  // Dicoding x DBS
  { title: "Dasar Data Science", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarDataScience.webp", pdf: "/Sertif/Dicoding/DBS/DasarDataScience.pdf" },
  { title: "Dasar Machine Learning", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarMachineLearning.webp", pdf: "/Sertif/Dicoding/DBS/DasarMachineLearning.pdf" },
  { title: "Dasar Python", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarPython.webp", pdf: "/Sertif/Dicoding/DBS/DasarPython.pdf" },
  { title: "Dasar SQL", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/DasarSQL.webp", pdf: "/Sertif/Dicoding/DBS/DasarSQL.pdf" },
  { title: "Financial Literacy", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/FinancialLiteracy.webp", pdf: "/Sertif/Dicoding/DBS/FinancialLiteracy.pdf" },
  { title: "Fundamental Data Analisis", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/FundamentalDataAnalisis.webp", pdf: "/Sertif/Dicoding/DBS/FundamentalDataAnalisis.pdf" },
  { title: "Fundamental Deep Learning", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/FundamentalDeepLearning.webp", pdf: "/Sertif/Dicoding/DBS/FundamentalDeepLearning.pdf" },
  { title: "Machine Learning", issuer: "Dicoding x DBS", image: "/Sertif/Dicoding/DBS/MachineLearning.webp", pdf: "/Sertif/Dicoding/DBS/MachineLearning.pdf" },
  // Dicoding x Microsoft
  { title: "Aplikasi GenAI Microsoft Azure", issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.webp", pdf: "/Sertif/Dicoding/MICROSOFT/AplikasiGenAIMicrorosoftAzure.pdf" },
  { title: "Dasar Machine Learning", issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.webp", pdf: "/Sertif/Dicoding/MICROSOFT/DasarMachineLearning.pdf" },
  { title: "Dasar Python", issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DasarPython.webp", pdf: "/Sertif/Dicoding/MICROSOFT/DasarPython.pdf" },
  { title: "Data Science Microsoft Fabric", issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.webp", pdf: "/Sertif/Dicoding/MICROSOFT/DataScienceMicrosoftFabric.pdf" },
  { title: "Fundamental Pemrosesan Data", issuer: "Dicoding x Microsoft", image: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.webp", pdf: "/Sertif/Dicoding/MICROSOFT/FundamentalPemrosesanData.pdf" },
  // Google
  { title: "Juara Vibe Coding", issuer: "Google", image: "/Sertif/Google/JuaraVibeCoding.webp", pdf: "/Sertif/Google/JuaraVibeCoding.pdf" },
  // Idweb
  { title: "Web Design", issuer: "Idweb", image: "/Sertif/Idweb/WebDesign.webp", pdf: "/Sertif/Idweb/WebDesign.pdf" },
  { title: "Blog Review", issuer: "Idweb", image: "/Sertif/Idweb/BlogRiview.webp", pdf: "/Sertif/Idweb/BlogRiview.pdf" },
  // Udemy
  { title: "Web 3 Development Essential", issuer: "Udemy", image: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.webp", pdf: "/Sertif/Udemy/UC-3baf949d-16ab-4eff-83b7-f75170ba8d17.pdf" },
  { title: "Belajar Web Development Menggunakan Bahasa Pemrograman PHP", issuer: "Udemy", image: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.webp", pdf: "/Sertif/Udemy/UC-44fd7143-156c-4168-906b-13ed4459b999.pdf" },
  { title: "Complete Web & Mobile UI Designer: UI/UX, Figma, More", issuer: "Udemy", image: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.webp", pdf: "/Sertif/Udemy/UC-9ff05921-4ad5-47d8-b558-bc5905aa3807.pdf" },
  { title: "Converted Website Into Mobile APPS", issuer: "Udemy", image: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.webp", pdf: "/Sertif/Udemy/UC-8fc02690-1a9f-446d-ae9b-d15cd05d4c3b.pdf" },
];

export const CERTIFICATE_ISSUERS = Array.from(new Set(CERTIFICATES.map((c) => c.issuer)));

// Issuers ordered by how many certificates each has, largest first.
export const ISSUER_COUNTS = CERTIFICATE_ISSUERS.map((issuer) => ({
  issuer,
  count: CERTIFICATES.filter((c) => c.issuer === issuer).length,
})).sort((a, b) => b.count - a.count);

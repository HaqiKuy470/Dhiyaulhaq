import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import DraggableStickers from "@/components/DraggableStickers";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <DraggableStickers />
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Contents from "@/components/Contents";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import Credentials from "@/components/Credentials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar variant="full" />
      <main>
        <Hero />
        <Contents />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Timeline />
        <Credentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

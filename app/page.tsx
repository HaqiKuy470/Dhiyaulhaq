// app/page.tsx
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stats from "@/components/Statistic";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

// Navbar, Footer, FloatingWA, dan Background SUDAH DIHAPUS dari sini
// karena sudah ada di layout.tsx

export default function Home() {
  return (
    <main>
        {/* ID="home" untuk tombol Home */}
        <section id="home">
          <Hero />
          <TechMarquee/>
        </section>
        
        {/* ID="services" agar tombol Services berfungsi */}
        <section id="services">
           <Services /> 
        </section>

        {/* ID="projects" agar tombol Projects berfungsi */}
        <section id="projects"> 
           <Projects /> 
        </section>

        {/* ID="about" mencakup About, Stats, dan Journey */}
        <section id="about"> 
            <About />     
            <Stats />     
            <Timeline />  
        </section>

        {/* ID="contact" agar tombol Contact berfungsi */}
        <section id="contact"> 
           <Contact /> 
        </section>
    </main>
  );
}
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Stats from "@/components/Statistic";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
        <section id="home">
          <Hero />
          <TechMarquee/>
        </section>
        
        <section id="services">
           <Services /> 
        </section>
        <section id="projects"> 
           <Projects /> 
        </section>

        <section id="about"> 
            <About />     
            <Stats />     
            <Timeline />  
        </section>

        <section id="contact"> 
           <Contact /> 
        </section>
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Competencies from "@/components/Competencies";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AmbientGlow from "@/components/AmbientGlow";

export default function Home() {
  return (
    <>
      {/* Ambient background glows */}
      <AmbientGlow />

      {/* Sticky frosted glass navigation */}
      <Navbar />

      {/* Main semantic content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 relative z-10 space-y-24">
        <Hero />
        <About />
        <Competencies />
        <TechStack />
        <Projects />
        <Process />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

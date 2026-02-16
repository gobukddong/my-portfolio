import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Activities from "@/components/Activities";
import RoadmapTimeline from "@/components/RoadmapTimeline";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <RoadmapTimeline />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Activities />
      <Contact />
      <Footer />
    </main>
  );
}

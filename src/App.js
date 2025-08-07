import AboutMeSection from "./AboutMeSection";
import "./App.css";
import "./query.css";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import MainNav from "./MainNav";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="scroll-container">
      <MainNav />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutMeSection />
      </section>
      <section id="project">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

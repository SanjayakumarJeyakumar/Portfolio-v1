import AboutMeSection from "./AboutMeSection";
import "./App.css";
import Contact from "./Contact";
import HeroSection from "./HeroSection";
import MainNav from "./MainNav";
import Projects from "./Projects";

export default function App() {
  return (
    <div className="scroll-container">
      <MainNav />
      <HeroSection />
      <AboutMeSection />
      <Projects />
      <Contact />
    </div>
  );
}

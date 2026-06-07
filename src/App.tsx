import { useState } from "react";
import "./index.css";
import Intro from "./components/Intro";
import NeuralBackground from "./components/NeuralBackground";
import SectionDivider from "./components/SectionDivider";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Footer from "./components/Footer";

function App() {
  const alreadyDone = sessionStorage.getItem("intro-done") === "1";
  const [introDone, setIntroDone] = useState(alreadyDone);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#fafafa]">
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}

      <div
        className={`app-content ${introDone ? "app-content-visible" : "app-content-hidden"}`}
      >
        <NeuralBackground />

        <div className="relative" style={{ zIndex: 10 }}>
          <Navbar />
          <main>
            <Hero />
            <SectionDivider />
            <About />
            <SectionDivider color="#818cf8" />
            <TechStack />
            <SectionDivider color="#38bdf8" />
            <Projects />
            <SectionDivider />
            <Achievements />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

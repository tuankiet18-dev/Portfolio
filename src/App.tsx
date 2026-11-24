import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPin from "./components/AboutPin";
import AllProjects from "./components/AllProjects";
import Competitions from "./components/Competitions";
import Certifications from "./components/Certifications";
import AllCertifications from "./components/AllCertifications";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [view, setView] = useState<"home" | "certifications" | "work">(() => {
    if (window.location.hash === "#certifications") return "certifications";
    if (window.location.hash === "#work") return "work";
    return "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash === "#certifications") {
        setView("certifications");
      } else if (window.location.hash === "#work") {
        setView("work");
      } else {
        setView("home");
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToCertifications = () => {
    window.history.pushState({ view: "certifications" }, "", "#certifications");
    setView("certifications");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToWork = () => {
    window.history.pushState({ view: "work" }, "", "#work");
    setView("work");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = (targetSection: string = "hero") => {
    window.history.pushState({ view: "home" }, "", `#${targetSection}`);
    setView("home");
    setTimeout(() => {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 60);
  };

  useEffect(() => {
    if (view !== "home") return;

    const sections = ["hero", "experience", "certs", "contact"]
      .map((id) => document.getElementById(id))
      .filter((s): s is HTMLElement => s !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [view]);

  return (
    <div className="min-h-screen surface-light text-[#111111] font-body selection:bg-[#e05e1b] selection:text-white">
      {/* Minimal Sticky Header */}
      <Navbar
        activeSection={
          view === "work" ? "projects" : view === "certifications" ? "certs" : activeSection
        }
        onNavigate={(sec) => {
          if (sec === "projects") {
            navigateToWork();
          } else if (sec === "certs") {
            navigateToCertifications();
          } else {
            navigateToHome(sec);
          }
        }}
      />

      {/* Main Flow, All Certifications, or All Projects Page */}
      {view === "certifications" ? (
        <AllCertifications onBack={() => navigateToHome("certs")} />
      ) : view === "work" ? (
        <AllProjects onBack={() => navigateToHome("hero")} />
      ) : (
        <main>
          {/* 1. Hero with Sliced Glitch Reveal & ME bio */}
          <Hero />

          {/* 2. 340vh Sticky Pinned Card (Academic, Experience, Stack, Info) */}
          <AboutPin />

          {/* Competitions & Hackathons with photo lightbox */}
          <Competitions onViewProject={navigateToWork} />

          {/* 3. Professional Certifications & Honors Horizontal Track + Modal */}
          <Certifications onViewAll={navigateToCertifications} />
        </main>
      )}

      {/* 4. Surface Dark Footer matching Euloge */}
      <Footer
        onNavigate={(section) => {
          if (section === "projects") {
            navigateToWork();
          } else if (section === "certs") {
            navigateToCertifications();
          } else {
            navigateToHome(section);
          }
        }}
        onViewProjects={navigateToWork}
        onViewCertifications={navigateToCertifications}
      />
    </div>
  );
}

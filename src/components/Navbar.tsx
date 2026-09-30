import { useState, useEffect } from "react";
import LetterRoll from "./LetterRoll";
import { ArrowUpRight, X } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavigate?: (section: string) => void;
}

export default function Navbar({ activeSection = "hero", onNavigate }: NavbarProps) {
  const [isOnDark, setIsOnDark] = useState(false);
  const [isAway, setIsAway] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 80) {
        if (delta > 8) {
          // Scrolling down -> hide navbar
          setIsAway(true);
        } else if (delta < -8) {
          // Scrolling up -> show navbar
          setIsAway(false);
        }
      } else {
        // At the very top -> always visible
        setIsAway(false);
      }

      lastScrollY = currentScrollY;

      // Check if header is currently over dark surfaces (e.g., #experience pinned card or #contact footer)
      const darkSections = [
        document.getElementById("experience"),
        document.getElementById("contact"),
      ].filter((el): el is HTMLElement => el !== null);

      const headerThreshold = 50;
      let onDark = false;

      for (const sec of darkSections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= headerThreshold && rect.bottom >= headerThreshold) {
          onDark = true;
          break;
        }
      }

      setIsOnDark(onDark);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`reference-header ${isAway ? "is-away" : ""} ${isOnDark ? "is-on-dark" : ""}`}
      >
        {/* Monogram Logo (HE in euloge -> TK for Kiet) */}
        <a
          className="reference-header__logo"
          aria-label="Luong Tuan Kiet - About"
          href="#hero"
          onClick={(e) => {
            if (onNavigate) {
              e.preventDefault();
              onNavigate("hero");
            }
          }}
        >
          TK
        </a>

        {/* Center Nav Cluster with LetterRoll */}
        <nav className="reference-header__nav" aria-label="Navigation principale">
          <div className="reference-header__cluster">
            <a
              className={`reference-header__link ${activeSection === "hero" ? "is-active" : ""}`}
              href="#hero"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("hero");
                }
              }}
            >
              <LetterRoll text="ABOUT" />
            </a>

            <a
              className={`reference-header__link ${activeSection === "projects" ? "is-active" : ""}`}
              href="#work"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("projects");
                }
              }}
            >
              <LetterRoll text="PROJECTS" />
            </a>

            <a
              className={`reference-header__link ${activeSection === "certs" ? "is-active" : ""}`}
              href="#certs"
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("certs");
                }
              }}
            >
              <LetterRoll text="CERTS" />
            </a>
          </div>
        </nav>

        {/* Right Actions: Contact + CV */}
        <div className="reference-header__actions">
          <div className="reference-header__contact-wrap">
            <a
              href="mailto:luongtuankiet1801@gmail.com"
              className="reference-header__contact"
              aria-label="Contact"
            >
              <LetterRoll text="CONTACT" />
            </a>
          </div>

          <a
            href="/KietLT_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="reference-header__language"
            aria-label="View CV"
          >
            CV
          </a>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="reference-header__mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            MENU
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-[#111111] text-[#f2f0ec] p-8 pt-24 flex flex-col justify-between md:hidden animate-fade-in">
          <button
            type="button"
            className="absolute top-6 right-6 p-2 rounded text-[#f2f0ec] border border-white/20"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>

          <nav className="flex flex-col gap-6">
            <a
              href="#hero"
              onClick={(e) => {
                setMobileOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("hero");
                }
              }}
              className="font-display text-5xl text-[#f2f0ec] hover:text-[#e05e1b]"
            >
              ABOUT
            </a>
            <a
              href="#work"
              onClick={(e) => {
                setMobileOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("projects");
                }
              }}
              className="font-display text-5xl text-[#f2f0ec] hover:text-[#e05e1b]"
            >
              PROJECTS
            </a>
            <a
              href="#certs"
              onClick={(e) => {
                setMobileOpen(false);
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate("certs");
                }
              }}
              className="font-display text-5xl text-[#f2f0ec] hover:text-[#e05e1b]"
            >
              CERTS
            </a>
            <a
              href="mailto:luongtuankiet1801@gmail.com"
              onClick={() => setMobileOpen(false)}
              className="font-display text-5xl text-[#f2f0ec] hover:text-[#e05e1b]"
            >
              CONTACT
            </a>
          </nav>

          <div className="pt-6 border-t border-white/10">
            <a
              href="/KietLT_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 text-center rounded bg-white text-black font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Download CV</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}

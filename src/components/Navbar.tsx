import { useEffect, useState } from "react";
import { FileText, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-inner" aria-label="Main navigation">
        <a
          href="#hero"
          className="nav-brand"
          onClick={() => setMobileOpen(false)}
        >
          <span>&lt;</span>
          <strong>David</strong>
          <span>/&gt;</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            href="/KietLT_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
            id="nav-resume-btn"
          >
            <FileText size={13} />
            Resume
          </a>

          <button
            className="nav-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="nav-mobile-panel">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/KietLT_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-resume"
            id="nav-mobile-resume-btn"
          >
            <FileText size={12} />
            Resume
          </a>
        </div>
      )}
    </header>
  );
}

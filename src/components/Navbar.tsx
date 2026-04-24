import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Stack',        href: '#stack' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#27272a]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo – Lovable's <David /> style */}
        <a href="#hero" className="group flex items-center gap-1.5">
          <span className="font-mono text-sm font-bold text-[#f97316]">&lt;</span>
          <span className="font-mono text-sm font-bold text-[#fafafa] group-hover:text-[#f97316] transition-colors duration-200">
            David
          </span>
          <span className="font-mono text-sm font-bold text-[#f97316]">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side: status + Resume CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <span className="hidden md:flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to work
          </span>

          {/* Resume – links to PDF in /public */}
          <a
            href="/KietLT_CV.pdf"
            download="KietLT_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn-resume"
            id="nav-resume-btn"
          >
            <FileText size={13} />
            Resume
          </a>

          <button
            className="md:hidden text-[#a1a1aa] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111111] border-b border-[#27272a] px-6 py-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-base"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-[#27272a]">
            <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </span>
            <a href="/KietLT_CV.pdf" download="KietLT_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn-resume" id="nav-mobile-resume-btn">
              <FileText size={12} />
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import {
  ArrowUpRight,
  FileText,
  GitFork,
  Database,
  Server,
  Cpu,
} from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="hero-kicker-dot" />
            Backend Developer
          </div>

          <h1 className="hero-title">TUAN KIET</h1>

          <div className="hero-cta-row">
            <a
              href="https://github.com/tuankiet18-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              id="hero-github-btn"
            >
              <GitFork size={15} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href="/KietLT_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              id="hero-resume-btn"
            >
              <FileText size={15} />
              Resume
            </a>
          </div>

          {/* Floating Cards */}
          <div className="floating-card float-1">
            <div className="floating-card-icon">
              <Server size={18} />
            </div>
            <div className="floating-card-info">
              <span>Primary</span>
              <strong>.NET Backend</strong>
            </div>
          </div>
          <div className="floating-card float-2">
            <div className="floating-card-icon">
              <Cpu size={18} />
            </div>
            <div className="floating-card-info">
              <span>Language</span>
              <strong>C#</strong>
            </div>
          </div>
          <div className="floating-card float-3">
            <div className="floating-card-icon">
              <Database size={18} />
            </div>
            <div className="floating-card-info">
              <span>Data</span>
              <strong>PostgreSQL</strong>
            </div>
          </div>
          <div className="floating-card float-4">
            <div className="floating-card-icon">
              <Server size={18} />
            </div>
            <div className="floating-card-info">
              <span>Style</span>
              <strong>Clean APIs</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

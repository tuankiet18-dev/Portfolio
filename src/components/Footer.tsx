import { ArrowUpRight, GitFork, Link2, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const contactLinks = [
  {
    id: "contact-email",
    icon: Mail,
    label: "Email",
    value: "luongtuankiet1801@gmail.com",
    href: "mailto:luongtuankiet1801@gmail.com",
    tone: "orange",
  },
  {
    id: "contact-github",
    icon: GitFork,
    label: "GitHub",
    value: "github.com/tuankiet18-dev",
    href: "https://github.com/tuankiet18-dev",
    tone: "green",
  },
  {
    id: "contact-linkedin",
    icon: Link2,
    label: "LinkedIn",
    value: "linkedin.com/in/kietluong18",
    href: "https://linkedin.com/in/kietluong18",
    tone: "blue",
  },
  {
    id: "contact-location",
    icon: MapPin,
    label: "Location",
    value: "Thu Duc, HCMC, Vietnam",
    href: null,
    tone: "rose",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const headerRef = useScrollReveal<HTMLDivElement>();
  const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <footer id="contact" className="footer-section">
      <div className="portfolio-container">
        <div className="footer-cta reveal" ref={headerRef}>
          <span className="section-label">04 / Contact</span>
          <h2>Open to backend opportunities.</h2>
          <p>
            I am looking for backend roles where I can build with .NET,
            API design, authentication, database modelling, and clean service
            boundaries.
          </p>
          <a
            href="mailto:luongtuankiet1801@gmail.com"
            className="btn-primary"
            id="footer-email-cta"
          >
            <Mail size={16} />
            Email me
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="contact-grid reveal-stagger" ref={gridRef}>
          {contactLinks.map(({ id, icon: Icon, label, value, href, tone }) => {
            const content = (
              <>
                <div className="contact-card-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
                {href && <ArrowUpRight className="contact-card-arrow" size={14} />}
              </>
            );

            if (href) {
              return (
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={id}
                  className="contact-card"
                  data-tone={tone}
                >
                  {content}
                </a>
              );
            }

            return (
              <div key={id} id={id} className="contact-card" data-tone={tone}>
                {content}
              </div>
            );
          })}
        </div>

        <div className="footer-bottom">
          <a href="#hero" className="nav-brand">
            <span>&lt;</span>
            <strong>David</strong>
            <span>/&gt;</span>
          </a>
          <p>{year} Luong Tuan Kiet - Backend Developer</p>
          <span className="footer-status">
            <span />
            Open to backend roles
          </span>
        </div>
      </div>
    </footer>
  );
}

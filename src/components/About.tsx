import { Briefcase, MapPin, Server } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const textRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const metaRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="about" className="about-minimal-section section-glass">
      <div className="portfolio-container">
        <div className="minimal-section-header reveal" ref={headerRef}>
          <span className="section-label">00 / About</span>
          <h2>Clear boundaries, reliable delivery.</h2>
        </div>

        <div className="about-editorial-grid">
          <div className="about-editorial-text reveal" ref={textRef}>
            <p>
              I am a final-year Software Engineering student focused on backend
              development, especially .NET. I enjoy turning product
              requirements into clean APIs, auth flows, file processing, and
              database-backed services.
            </p>
            <p>
              My strongest work is designing service boundaries, writing typed
              contracts, modelling data, and keeping business logic readable. I
              care about backend code that is simple to change, test, and
              operate.
            </p>
          </div>

          <div className="about-editorial-meta reveal delay-1" ref={metaRef}>
            <div className="editorial-meta-item">
              <Server size={16} />
              <div>
                <span>Focus</span>
                <strong>.NET Backend</strong>
              </div>
            </div>
            <div className="editorial-meta-item">
              <Briefcase size={16} />
              <div>
                <span>Internship</span>
                <strong>AWS FCAJ</strong>
              </div>
            </div>
            <div className="editorial-meta-item">
              <MapPin size={16} />
              <div>
                <span>Location</span>
                <strong>Ho Chi Minh City, Vietnam</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

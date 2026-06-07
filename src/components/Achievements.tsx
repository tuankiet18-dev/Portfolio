import { BadgeCheck, ExternalLink, GraduationCap, Trophy } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Item = {
  title: string;
  meta: string;
  year: string;
  link?: string;
};

const highlights: Item[] = [
  {
    title: "Top 8 / 250+ teams",
    meta: "THE FINNOVATIVE HACKATHON - fintech product challenge",
    year: "Jan 2026",
    link: "/certs/Cert_Hackathon.png",
  },
  {
    title: "Top 15 / 600+ participants",
    meta: "F-CODE TALENT - algorithm contest",
    year: "2024",
  },
  {
    title: "Academic Excellence Award",
    meta: "Honorable Student of Trimester - 4 consecutive terms",
    year: "2024-2025",
  },
];

const certificates: Item[] = [
  {
    title: "AWS Fundamentals Specialization",
    meta: "Supporting certificate - Amazon Web Services via Coursera",
    year: "May 2026",
    link: "https://coursera.org/share/d64c474d089da1869e15e7fbc4821d24",
  },
  {
    title: "Software Development Lifecycle",
    meta: "University of Minnesota",
    year: "Jun 2025",
    link: "https://www.coursera.org/account/accomplishments/specialization/67400MUI5V41",
  },
  {
    title: "Web Applications for Everybody",
    meta: "University of Michigan",
    year: "Jun 2025",
    link: "https://coursera.org/share/f5e59e14e90b8c4c74e488d6695574a6",
  },
  {
    title: "AI For Everyone",
    meta: "DeepLearning.AI",
    year: "Jun 2024",
    link: "/certs/Cert_AI.png",
  },
];

function MinimalItem({ item }: { item: Item }) {
  const content = (
    <>
      <div>
        <h3>{item.title}</h3>
        <p>{item.meta}</p>
      </div>
      <span>{item.year}</span>
      {item.link && <ExternalLink size={13} />}
    </>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="minimal-achievement-item"
      >
        {content}
      </a>
    );
  }

  return <div className="minimal-achievement-item">{content}</div>;
}

export default function Achievements() {
  const headerRef = useScrollReveal<HTMLDivElement>();
  const eduRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const awardRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const certRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section
      id="achievements"
      className="achievements-minimal-section section-glass"
    >
      <div className="portfolio-container">
        <div className="minimal-section-header reveal" ref={headerRef}>
          <span className="section-label">03 / Education & Achievements</span>
          <h2>Background</h2>
          <p>
            Education, awards, and certificates that support my software
            engineering foundation and backend focus.
          </p>
        </div>

        <div className="minimal-background-grid">
          <div className="minimal-education-card reveal" ref={eduRef}>
            <div className="minimal-card-label">
              <GraduationCap size={15} />
              Education
            </div>
            <h3>Bachelor of Software Engineering</h3>
            <p>FPT University, Ho Chi Minh City</p>
            <div className="minimal-education-meta">
              <span>2023-2027</span>
              <strong>GPA 8.9 / 10</strong>
            </div>
            <div className="minimal-education-meta minimal-education-secondary">
              <strong>Focus: Backend Development</strong>
            </div>
          </div>

          <div className="minimal-list-block reveal" ref={awardRef}>
            <div className="minimal-card-label">
              <Trophy size={15} />
              Awards
            </div>
            <div className="minimal-achievement-list">
              {highlights.map((item) => (
                <MinimalItem key={item.title} item={item} />
              ))}
            </div>
          </div>

          <div className="minimal-list-block reveal" ref={certRef}>
            <div className="minimal-card-label">
              <BadgeCheck size={15} />
              Certificates
            </div>
            <div className="minimal-achievement-list">
              {certificates.map((item) => (
                <MinimalItem key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

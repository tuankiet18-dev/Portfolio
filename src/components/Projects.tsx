import { ArrowUpRight, GitFork } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

type Project = {
  id: string;
  title: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
  link: string;
  accent: string;
};

const projects: Project[] = [
  {
    id: "insightvault",
    title: "InsightVault AI",
    period: "2026",
    role: "Backend / AI Developer",
    description:
      "Document analysis workspace for upload, text extraction, vector search, and RAG chat. I built the backend flow around .NET APIs, FastAPI AI service, pgvector retrieval, MinIO storage, and RabbitMQ jobs.",
    stack: [
      "ASP.NET Core 10",
      "FastAPI",
      "Gemini API",
      "PostgreSQL pgvector",
      "MinIO",
      "RabbitMQ",
      "React",
    ],
    link: "https://github.com/tuankiet18-dev/InsightVault-AI",
    accent: "#f97316",
  },
  {
    id: "oneclick-host",
    title: "OneClick-Host",
    period: "2026",
    role: "Backend / Platform Developer",
    description:
      "Self-hosted deployment platform for turning GitHub repositories into running containers. I worked on deployment APIs for stack detection, Dockerfile generation, container builds, routing, and log streaming.",
    stack: [
      "ASP.NET Core 10",
      "Python Worker",
      "Docker",
      "PostgreSQL",
      "Traefik",
      "OpenAI API",
      "React",
    ],
    link: "https://github.com/HienMinh58/oneclick-host",
    accent: "#38bdf8",
  },
  {
    id: "smartinvoice",
    title: "SmartInvoice Shield",
    period: "2026",
    role: "Backend Developer Intern",
    description:
      "Invoice risk processing system built during internship work. I implemented .NET services for OCR coordination, SQS messaging, Cognito RBAC, Fargate deployment, and CI/CD via GitHub Actions.",
    stack: [".NET Core", "AWS SQS", "Cognito", "Fargate", "GitHub Actions"],
    link: "https://github.com/tuankiet18-dev/SMARTINVOICE-SHIELD",
    accent: "#a78bfa",
  },
  {
    id: "ev-charging",
    title: "EV Charging Management",
    period: "2025",
    role: "Backend Developer",
    description:
      "EV charging station management platform with secure APIs and real-time status. I built backend flows for JWT auth, SignalR updates, VNPay payments, SQL Server data, and Angular dashboard integration.",
    stack: [
      ".NET 9",
      "SignalR",
      "JWT Identity",
      "VNPay",
      "SQL Server",
      "Angular",
    ],
    link: "https://github.com/tuankiet18-dev/EVStation-API",
    accent: "#22c55e",
  },
];

function ProjectCard({ project }: { project: Project }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.06 });

  return (
    <article
      id={`project-${project.id}`}
      ref={ref}
      className="project-card reveal"
      style={{ "--project-accent": project.accent } as React.CSSProperties}
    >
      <div className="project-card-top">
        <span className="project-card-period">{project.period}</span>
      </div>

      <h3 className="project-card-title">{project.title}</h3>
      <p className="project-card-role">{project.role}</p>
      <p className="project-card-desc">{project.description}</p>

      <div className="project-card-footer">
        <div className="project-card-stack">
          {project.stack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          id={`project-${project.id}-link`}
          aria-label={`View ${project.title} on GitHub`}
        >
          <GitFork size={14} />
          Source
          <ArrowUpRight size={13} />
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="projects-section section-glass">
      <div className="portfolio-container">
        <div className="minimal-section-header reveal" ref={headerRef}>
          <span className="section-label">02 / Projects</span>
          <h2>Selected work</h2>
          <p>
            Backend projects built around real patterns: APIs, queues, data
            flows, deployment support, and service boundaries.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

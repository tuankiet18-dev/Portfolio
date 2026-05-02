import {
  GitFork,
  ExternalLink,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useState } from "react";

type ProjectImage = {
  src: string;
  alt: string;
  label?: string;
};

type Project = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  stack: string[];
  problem: string;
  solution: string[];
  impact?: string[];
  links: { label: string; href: string; icon: "github" | "external" }[];
  badge?: string;
  badgeColor?: string;
  /** One or multiple screenshots / diagrams */
  images?: ProjectImage[];
};

const projects: Project[] = [
  {
    id: "smartinvoice",
    title: "SmartInvoice Shield",
    subtitle:
      "Multi-tenant SaaS & tax-risk assessment platform (AWS FCAJ Internship)",
    role: "Backend & Cloud Developer Intern",
    badge: "Internship",
    badgeColor: "bg-amber-400/15 text-amber-300 border-amber-400/30",
    images: [
      {
        src: "/images/smartinvoice-arch.jpg",
        alt: "AWS Architecture Diagram – SmartInvoice Shield",
        label: "AWS Architecture",
      },
    ],
    stack: [
      "ASP.NET Core",
      "AWS SQS",
      "AWS Cognito",
      "Docker",
      "GitHub Actions",
      "PostgreSQL",
      "Python OCR",
    ],
    problem:
      "Manual tax-risk assessment of invoices was slow, error-prone, and didn't scale across tenants with varying compliance rules.",
    solution: [
      "Set up 3 CI/CD pipelines using Docker and GitHub Actions for automated deployment to AWS Elastic Beanstalk and ECS Fargate.",
      "Built an async communication layer using AWS SQS to decouple .NET ingestion from a Python OCR microservice.",
      "Implemented a manual verification workflow for high-risk invoices with SNS notifications.",
      "Configured multi-tenant data isolation using AWS Cognito RBAC with role-based access policies.",
    ],
    impact: [
      "Zero data loss on pipeline",
      "3 automated CI/CD pipelines",
      "Multi-tenant RBAC secured",
    ],
    links: [
      {
        label: "View Source",
        href: "https://github.com/tuankiet18-dev/SMARTINVOICE-SHIELD",
        icon: "github",
      },
    ],
  },
  {
    id: "ev-charging",
    title: "EV Charging Station Management",
    subtitle: "Real-time monitoring and secure payment platform",
    role: "Backend Developer",
    badge: "Real-time",
    badgeColor: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
    images: [
      {
        src: "/images/ev-landing.png",
        alt: "EVoltStation – Landing Page",
        label: "Landing Page",
      },
      {
        src: "/images/ev-dashboard.png",
        alt: "EVoltStation – Find Nearest Station Dashboard",
        label: "Dashboard",
      },
    ],
    stack: [
      ".NET 9",
      "SignalR",
      "JWT / Identity",
      "VNPay",
      "SQL Server",
      "Angular",
    ],
    problem:
      "EV drivers needed real-time visibility into station availability and a secure, seamless way to process payments — all through a single unified platform.",
    solution: [
      "Built RESTful APIs with .NET 9 following Clean Architecture principles.",
      "Integrated VNPay e-wallet gateway for secure payment transactions.",
      "Used SignalR WebSockets to push real-time charging status updates.",
      "Implemented JWT-based authentication and role-based authorization via ASP.NET Identity.",
    ],
    impact: [
      "Real-time status via SignalR",
      "Secure VNPay payment flow",
      "Clean Architecture codebase",
    ],
    links: [
      {
        label: "View Source",
        href: "https://github.com/tuankiet18-dev/EVStation-API",
        icon: "github",
      },
    ],
  },
];

const IconMap = { github: GitFork, external: ExternalLink };

/* ── Lightbox ── */
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/88 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-w-[92vw] max-h-[90vh] rounded-2xl overflow-hidden border border-[#27272a] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="block max-w-full max-h-[88vh] object-contain"
        />
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0a0a0a]/80 border border-[#27272a] flex items-center justify-center text-[#a1a1aa] hover:text-white transition-colors text-lg font-bold"
        >
          ×
        </button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-3">
          <p className="font-mono text-xs text-[#a1a1aa]">{alt}</p>
        </div>
      </div>
    </div>
  );
}

/* ── Image Gallery Panel ── */
function ProjectGallery({
  images,
  accentColor,
}: {
  images?: ProjectImage[];
  accentColor: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Reset load state when switching images
  const switchTo = (idx: number) => {
    if (idx === activeIdx) return;
    setLoaded(false);
    setError(false);
    setActiveIdx(idx);
  };

  const current = images?.[activeIdx];

  if (!images || images.length === 0 || !current || error) {
    return (
      <div className="relative bg-[#0d0d0d] border-b border-[#27272a] h-48 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `linear-gradient(${accentColor}22 1px, transparent 1px), linear-gradient(90deg, ${accentColor}22 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative text-center px-6">
          <p className="font-mono text-xs text-[#3f3f46] mb-1">
            [ screenshot / diagram coming soon ]
          </p>
        </div>
      </div>
    );
  }

  const hasMultiple = images.length > 1;

  return (
    <>
      <div className="relative bg-[#0d0d0d] border-b border-[#27272a] overflow-hidden">
        {/* Main image */}
        <div
          className="relative cursor-zoom-in group"
          style={{ maxHeight: "340px" }}
          onClick={() => loaded && setLightbox(true)}
        >
          {/* Loading shimmer */}
          {!loaded && (
            <div className="absolute inset-0 animate-pulse bg-[#141414]" style={{ minHeight: "220px" }} />
          )}

          <img
            key={current.src}
            src={current.src}
            alt={current.alt}
            onLoad={() => setLoaded(true)}
            onError={() => setError(true)}
            className={`w-full object-cover object-top transition-all duration-500 ${
              loaded ? "opacity-100" : "opacity-0"
            } group-hover:scale-[1.012]`}
            style={{ maxHeight: "340px" }}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-black/70 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <ZoomIn size={13} className="text-white" />
              <span className="text-white text-xs font-mono">Click to expand</span>
            </div>
          </div>

          {/* Prev / Next arrows (only if multiple images) */}
          {hasMultiple && loaded && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); switchTo((activeIdx - 1 + images.length) % images.length); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                aria-label="Previous image"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); switchTo((activeIdx + 1) % images.length); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                aria-label="Next image"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail tab strip (only if multiple images) */}
        {hasMultiple && (
          <div className="flex gap-2 px-4 py-3 bg-[#0a0a0a] border-t border-[#1c1c1e]">
            {images.map((img, idx) => (
              <button
                key={img.src}
                onClick={() => switchTo(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                  idx === activeIdx
                    ? "border-[#f97316]/50 bg-[#f97316]/10 text-[#f97316]"
                    : "border-[#27272a] bg-transparent text-[#52525b] hover:text-[#a1a1aa] hover:border-[#3f3f46]"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    idx === activeIdx ? "bg-[#f97316]" : "bg-[#3f3f46]"
                  }`}
                />
                {img.label ?? `Screenshot ${idx + 1}`}
              </button>
            ))}
          </div>
        )}

        {/* Single image label badge */}
        {!hasMultiple && current.label && loaded && (
          <div className="absolute bottom-3 left-3 font-mono text-[10px] text-[#a1a1aa] bg-black/60 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
            {current.label}
          </div>
        )}
      </div>

      {lightbox && (
        <Lightbox
          src={current.src}
          alt={current.alt}
          onClose={() => setLightbox(false)}
        />
      )}
    </>
  );
}

/* ── Project card ── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.04 });

  const topBarColor =
    index === 0
      ? "linear-gradient(90deg, #f97316, #fb923c, transparent)"
      : "linear-gradient(90deg, #34d399, #6ee7b7, transparent)";

  const accentHex = index === 0 ? "#f97316" : "#34d399";

  return (
    <article
      id={`project-${project.id}`}
      ref={ref}
      className="reveal rounded-2xl border border-[#27272a] bg-[#111111] overflow-hidden card-hover gradient-border"
    >
      {/* Colored top accent bar */}
      <div className="h-[3px] w-full" style={{ background: topBarColor }} />

      {/* Gallery */}
      <ProjectGallery images={project.images} accentColor={accentHex} />

      <div className="p-8">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-[#fafafa]">
                {project.title}
              </h3>
              {project.badge && (
                <span
                  className={`text-xs font-mono font-semibold px-2 py-0.5 rounded border ${project.badgeColor}`}
                >
                  {project.badge}
                </span>
              )}
            </div>
            <p className="text-[#52525b] text-sm">{project.subtitle}</p>
            <p className="mt-1 font-mono text-xs text-[#3f3f46]">
              Role: <span className="text-[#f97316]">{project.role}</span>
            </p>
          </div>

          {project.links.length > 0 && (
            <div className="flex gap-2">
              {project.links.map((link) => {
                const Icon = IconMap[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-2 px-3"
                    id={`project-${project.id}-${link.icon}-link`}
                  >
                    <Icon size={13} />
                    {link.label}
                  </a>
                );
              })}
            </div>
          )}
        </div>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tech) => (
            <span key={tech} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>

        {/* PSI Grid */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Problem */}
          <div className="rounded-xl border border-red-500/15 bg-red-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle size={14} className="text-red-400" />
              <span className="text-xs font-mono font-semibold text-red-400 uppercase tracking-wider">
                Problem
              </span>
            </div>
            <p className="text-[#a1a1aa] text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="rounded-xl border border-[#f97316]/15 bg-[#f97316]/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb size={14} className="text-[#f97316]" />
              <span className="text-xs font-mono font-semibold text-[#f97316] uppercase tracking-wider">
                Solution
              </span>
            </div>
            <ul className="space-y-2">
              {project.solution.map((s, i) => (
                <li
                  key={i}
                  className="text-[#a1a1aa] text-sm leading-relaxed flex gap-2"
                >
                  <span className="text-[#f97316] font-mono mt-0.5 shrink-0">
                    ›
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="rounded-xl border border-emerald-500/15 bg-emerald-500/5 p-5">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={14} className="text-emerald-400" />
              <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                Impact
              </span>
            </div>
            <div className="space-y-2">
              {project.impact?.map((imp, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 bg-emerald-400/10 border border-emerald-400/20 rounded-lg px-3 py-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-emerald-300 text-xs font-mono">
                    {imp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14 reveal" ref={headerRef}>
          <span className="section-label">02 — Projects</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa]">
            A look at recent systems
          </h2>
          <p className="mt-3 text-[#52525b] text-sm max-w-xl">
            Projects I worked on — as an intern and as a student. Each is structured around a{" "}
            <span className="font-mono text-[#f97316]">
              Problem → Solution → Impact
            </span>{" "}
            to keep it honest and concrete.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ArrowLeft, ArrowUpRight, GitFork, ExternalLink, Trophy, PlayCircle } from "lucide-react";
import ShutterTitle from "./ShutterTitle";
import { getCompetition } from "../data/competitions";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Cloud & Serverless" | "Cloud & Platform" | "Enterprise & AWS" | "IoT & Telemetry" | "AI & Vector RAG" | "Systems & Security" | "Data & Optimization";
  shortDescription: string;
  fullDescription: string;
  year: string;
  stack: string[];
  highlightMetric?: string;
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  /** Pitch video, demo recording, or slides. Useful for hackathon projects without a live site. */
  demoUrl?: string;
  /** id from COMPETITIONS when the project was built for a competition. */
  competitionId?: string;
}

const COMPETITIONS_FILTER = "Competitions";

const projectUrl = (p: ProjectItem) => p.githubUrl ?? p.liveUrl ?? p.demoUrl;

const openUrl = (url?: string) => {
  if (url) window.open(url, "_blank", "noopener,noreferrer");
};

function CompetitionBadge({ competitionId }: { competitionId: string }) {
  const competition = getCompetition(competitionId);
  if (!competition) return null;
  return (
    <span className="work-list__event-badge">
      <Trophy size={11} />
      <span>
        {competition.shortName}
        {competition.result && ` · ${competition.result}`}
      </span>
    </span>
  );
}

export const ALL_PROJECTS: ProjectItem[] = [
  {
    id: "onthilab",
    title: "OnThiLab",
    category: "Cloud & Serverless",
    shortDescription:
      "Live exam-practice platform for FPT students, with timed exams, autosaved answers, and an asynchronous AWS import pipeline.",
    fullDescription:
      "Production MVP for practicing FPT University FE exams (onthilab.id.vn). The Hono API runs on AWS Lambda behind API Gateway and uses PostgreSQL with Drizzle ORM. Exam workflows include server-side countdowns, autosaved answers, and idempotent submissions. An SQS and Lambda worker pipeline handles ZIP exam imports and related processing. Staging load tests reached 200 concurrent students; the project CV reports p95 latency below 175 ms.",
    year: "2026",
    stack: [
      "Hono",
      "TypeScript",
      "React 19",
      "PostgreSQL · Drizzle ORM",
      "AWS Lambda",
      "API Gateway · S3",
      "Amazon SQS",
      "AWS Cognito",
      "k6",
    ],
    highlightMetric: "p95 < 175ms at 200 CCU",
    image: "/images/onthilab-preview.png",
    githubUrl: "https://github.com/tuankiet18-dev/on-thi-lab",
    liveUrl: "https://onthilab.id.vn",
  },
  {
    id: "firecalendar",
    title: "FireCalendar",
    category: "Data & Optimization",
    shortDescription:
      "One consistent 2000–2025 fire calendar from MODIS and VIIRS satellite hotspots, built for NASA Space Apps Challenge 2026.",
    fullDescription:
      "Web app for the Harmonization of MODIS and VIIRS Hot Spots challenge. Simply adding both sensors makes fire appear to triple in 2012, so the app counts burning activity in one unit, the H3 cell-day, on a series where a data-team model converts MODIS detections to the VIIRS scale. Users pick a country, a drawn area, or coordinates to see fire maps, monthly and daily calendars, anomalies against typical years, and similar past seasons. A FastAPI and DuckDB API serves tables pre-built from about 12 GB of Parquet, behind an nginx cache on AWS EC2.",
    year: "2026",
    stack: [
      "React · TypeScript",
      "MapLibre · ECharts",
      "FastAPI",
      "DuckDB",
      "H3 geospatial",
      "Docker · Caddy · nginx",
      "AWS EC2",
    ],
    highlightMetric: "12 GB of hotspots → one comparable series",
    image: "/images/projects/firecalendar-preview.webp",
    githubUrl: "https://github.com/tuankiet18-dev/Harmonization-of-MODIS-and-VIIRS-Hot-Spots",
    competitionId: "nasa-space-apps-hcmc-2026",
  },
  {
    id: "nordic-flow",
    title: "Nordic Flow",
    category: "Data & Optimization",
    shortDescription:
      "Lowest-cost supplier and warehouse allocation with a proven-optimal MILP, independent plan verification, and human approval.",
    fullDescription:
      "Decision-support MVP for a fictional Nordic building-materials distributor, built by team NEW AURA for the IT Consultant Challenge 2026 (top 4 of 160 teams). OR-Tools solves the weekly allocation as a MILP, an independent verifier checks demand, supply, capacity and lanes, and a planner must explain overrides and approve every plan before export. Each step is written to a hash-chained audit trail. For the final pitch the team answered a 30% budget cut with history replay: re-run past weeks against the plans actually shipped and apply a go/no-go gate before any live pilot.",
    year: "2026",
    stack: [
      "Python",
      "OR-Tools (MILP)",
      "FastAPI",
      "SQLite",
      "React · Vite",
      "Tailwind CSS",
      "pytest · Playwright",
    ],
    highlightMetric: "Top 4 of 160 teams",
    image: "/images/projects/nordicflow-preview.webp",
    githubUrl: "https://github.com/tuankiet18-dev/Nordic-Flow",
    demoUrl: "https://github.com/tuankiet18-dev/Nordic-Flow/blob/main/deliverables/MVP.mp4",
    competitionId: "it-consultant-challenge-2026",
  },
  {
    id: "smartinvoice",
    title: "SmartInvoice Shield",
    category: "Enterprise & AWS",
    shortDescription:
      "Enterprise invoice risk platform with async SQS pipelines, ECS Fargate OCR workers, and VietQR validation.",
    fullDescription:
      "Multi-tenant Vietnamese e-invoice platform built as the AWS First Cloud AI Journey capstone. It uses an S3-to-SQS pipeline with Python OCR workers on ECS Fargate, company-scoped access controls, and EF Core tenant isolation. The invoice workflow moves through Processing, Draft, Pending, Approved or Rejected, and Archived states. Polly retries and a circuit breaker protect VietQR tax-code validation.",
    year: "2026",
    stack: [
      "ASP.NET Core (.NET 9)",
      "React · Python OCR",
      "PostgreSQL",
      "EF Core · Amazon S3/SQS",
      "ECS Fargate",
      "AWS Cognito",
      "Docker",
      "GitHub Actions",
    ],
    highlightMetric: "Multi-tenant OCR Pipeline",
    image: "/images/smartinvoice-arch.jpg",
    githubUrl: "https://github.com/tuankiet18-dev/SMARTINVOICE-SHIELD",
  },
  {
    id: "ev-charging",
    title: "EvoltStation — EV Charging Management System",
    category: "IoT & Telemetry",
    shortDescription:
      "EV station management platform with real-time SignalR telemetry streaming, .NET background workers, and VNPay E-Wallet.",
    fullDescription:
      "EV charging management platform for station discovery, reservations, QR-based charging, and wallet payments. Its .NET 9 API uses a layered architecture, EF Core, and Identity/JWT; background services release no-show reservations and calculate idle parking fees. The platform integrates VNPay payments, SignalR real-time updates, Cloudinary, and an Angular client.",
    year: "2025",
    stack: [
      "ASP.NET Core (.NET 9)",
      "EF Core",
      "SQL Server",
      "Angular",
      "SignalR",
      "JWT Identity",
      "VNPay",
      "Cloudinary",
      "QRCoder",
    ],
    highlightMetric: "Real-time Telemetry & Payments",
    image: "/images/ev-landing.png",
    githubUrl: "https://github.com/tuankiet18-dev/EVStation-API",
  },
  {
    id: "insightvault",
    title: "InsightVault AI",
    category: "AI & Vector RAG",
    shortDescription:
      "Document analysis workspace with pgvector semantic search, FastAPI RAG inference, MinIO storage, and RabbitMQ workers.",
    fullDescription:
      "Collaborative AI knowledge workspace for managing documents, running RAG chat, summarizing and comparing files, and generating reports. The application combines React 19, ASP.NET Core APIs, a FastAPI service for extraction and retrieval, PostgreSQL with pgvector, MinIO object storage, and RabbitMQ job orchestration.",
    year: "2026",
    stack: [
      "ASP.NET Core",
      "FastAPI",
      "Python",
      "React 19",
      "pgvector",
      "RabbitMQ",
      "MinIO",
      "Docker",
    ],
    highlightMetric: "Vector RAG & Asynchronous Jobs",
    image: "/images/insightvault-preview.png",
    githubUrl: "https://github.com/tuankiet18-dev/InsightVault-AI",
  },
  {
    id: "syssentinel",
    title: "SysSentinel",
    category: "Systems & Security",
    shortDescription:
      "C++17 Linux endpoint monitor combining SHA-256 signature checks, heuristic process analysis, and SIEM-ready JSON alerts.",
    fullDescription:
      "Linux endpoint process and heuristic threat analyzer built with C++17. It loads SHA-256 malware signatures into an unordered set for average O(1) lookups, monitors process data through /proc, flags suspicious paths and unlinked binaries, and emits structured JSON suitable for SIEM log aggregators. The code uses RAII and avoids raw pointer management.",
    year: "2025",
    stack: ["C++17", "Linux /proc", "SHA-256", "CMake", "GoogleTest", "SIEM JSON"],
    highlightMetric: "O(1) Signature Lookup · RAII-based C++17",
    image: "/images/syssentinel-preview.png",
    githubUrl: "https://github.com/tuankiet18-dev/SysSentinel",
  },
  {
    id: "oneclick-host",
    title: "OneClick-Host",
    category: "Cloud & Platform",
    shortDescription:
      "Self-hosted deployment platform that detects app stacks, generates Dockerfiles, deploys containers, and routes services through Traefik.",
    fullDescription:
      "Self-hosted deployment platform for GitHub projects. A Next.js dashboard and ASP.NET Core (.NET 10) API queue deployments for a Python worker that detects supported stacks, generates Dockerfiles when needed, builds and runs containers through Docker, and configures Traefik routing. The dashboard streams build logs; optional AI diagnosis summarizes failed deployment snapshots.",
    year: "2025",
    stack: ["Next.js", "ASP.NET Core (.NET 10)", "Python", "PostgreSQL", "Docker", "Traefik"],
    highlightMetric: "GitHub-to-Container Deployment",
    image: "/images/oneclickhost-preview.png",
    githubUrl: "https://github.com/tuankiet18-dev/OneClick-Host",
  },
];

interface AllProjectsProps {
  onBack: () => void;
}

export default function AllProjects({ onBack }: AllProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showFloatingPreview, setShowFloatingPreview] = useState(true);

  const listContainerRef = useRef<HTMLDivElement>(null);

  // Floating preview coordinates tracking cursor smoothly with Framer Motion useSpring
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 220, damping: 26, mass: 0.3 });
  const springY = useSpring(mouseY, { stiffness: 220, damping: 26, mass: 0.3 });

  const categories = [
    "All",
    "Cloud & Serverless",
    "Cloud & Platform",
    "Enterprise & AWS",
    "IoT & Telemetry",
    "AI & Vector RAG",
    "Systems & Security",
    "Data & Optimization",
    // Shown only once at least one project is linked to a competition.
    ...(ALL_PROJECTS.some((p) => p.competitionId) ? [COMPETITIONS_FILTER] : []),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? ALL_PROJECTS
      : activeFilter === COMPETITIONS_FILTER
        ? ALL_PROJECTS.filter((p) => p.competitionId)
        : ALL_PROJECTS.filter((p) => p.category === activeFilter);

  const hoveredProject = hoveredIndex !== null ? filteredProjects[hoveredIndex] : null;

  // Handle smooth mouse tracking for floating image
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!listContainerRef.current) return;
    if ((e.target as HTMLElement).closest(".work-list__col-year")) {
      setShowFloatingPreview(false);
      return;
    }
    setShowFloatingPreview(true);

    const rect = listContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Card dimensions: 384px width, 240px height
    const cardWidth = 384;
    const cardHeight = 240;

    // Keep card nicely bounded within the container, floating centered around cursor
    const reservedActionsWidth = 170;
    const boundedX = Math.max(
      16,
      Math.min(rect.width - cardWidth - reservedActionsWidth, x - cardWidth / 2),
    );
    const boundedY = Math.max(8, Math.min(rect.height - cardHeight - 8, y - cardHeight / 2));

    mouseX.set(boundedX);
    mouseY.set(boundedY);
  };

  return (
    <div className="certs-page surface-light animate-fade-in pb-32">
      {/* Euloge Exact Pill Back Button */}
      <button
        type="button"
        className="certs-page__back"
        onClick={onBack}
        aria-label="Back to home"
      >
        <div className="certs__gradient-btn">
          <div className="certs__gradient-content">
            <ArrowLeft size={15} />
            <span>Back</span>
          </div>
        </div>
      </button>

      {/* Header with Signature Shutter Animation */}
      <header className="certs-page__header">
        <h1>
          <ShutterTitle text="PROJECTS" />
        </h1>
        <p>
          Production architectures, serverless workflows, high-concurrency event pipelines, and systems programming.
        </p>
      </header>

      {/* Filter bar & List/Grid View Switcher */}
      <div className="flex flex-col justify-between gap-4 border-b border-black/10 pb-4 md:flex-row md:items-center mt-8 mb-6">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`rounded-md px-3.5 py-1.5 text-[11px] font-mono transition-colors ${
                activeFilter === cat
                  ? "bg-[#111] font-medium text-[#f2f0ec]"
                  : "border border-black/10 bg-white/45 text-[#5c5852] hover:text-black"
              }`}
              onClick={() => {
                setActiveFilter(cat);
                setHoveredIndex(null);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* View Mode Toggle (List / Grid) */}
        <div className="hidden md:flex items-center gap-1">
          <button
            type="button"
            aria-pressed={viewMode === "list"}
            className={`rounded-md px-3.5 py-1.5 text-[11px] font-mono transition-colors ${
              viewMode === "list"
                ? "bg-[#111] font-medium text-[#f2f0ec]"
                : "text-[#6a6762] hover:text-black"
            }`}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
          <button
            type="button"
            aria-pressed={viewMode === "grid"}
            className={`rounded-md px-3.5 py-1.5 text-[11px] font-mono transition-colors ${
              viewMode === "grid"
                ? "bg-[#111] font-medium text-[#f2f0ec]"
                : "text-[#6a6762] hover:text-black"
            }`}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
        </div>
      </div>

      {/* Main Content: List View or Grid View */}
      {viewMode === "list" ? (
        <div
          ref={listContainerRef}
          className="work-list relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={() => {
            setHoveredIndex(null);
            setShowFloatingPreview(true);
          }}
        >
          {/* Floating Hover Preview Card with Center Zoom Animation */}
          <motion.div
            className="work-list__floating-container pointer-events-none hidden md:block"
            style={{
              x: springX,
              y: springY,
            }}
          >
            <AnimatePresence mode="wait">
              {hoveredProject && showFloatingPreview && (
                <motion.div
                  key={hoveredProject.id}
                  className="work-list__floating-preview"
                  style={{
                    transformOrigin: "center center",
                  }}
                  initial={{
                    clipPath: "inset(50% round 14px)",
                    scale: 0.35,
                    opacity: 0,
                  }}
                  animate={{
                    clipPath: "inset(0% round 14px)",
                    scale: 1,
                    opacity: 1,
                  }}
                  exit={{
                    clipPath: "inset(50% round 14px)",
                    scale: 0.35,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="work-list__floating-inner">
                    <motion.img
                      src={hoveredProject.image}
                      alt={hoveredProject.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.25 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 1.15 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="work-list__floating-meta">
                      <span className="font-mono text-xs text-white/90 font-medium">
                        {hoveredProject.githubUrl
                          ? "Open GitHub README"
                          : hoveredProject.liveUrl
                            ? "Open live site"
                            : "Open demo"}
                      </span>
                      <ArrowUpRight size={13} className="text-[#e05e1b]" />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Table / List Rows */}
          <div className="work-list__rows divide-y divide-black/8 border-y border-black/8">
            {filteredProjects.map((project, idx) => {
              const isHovered = hoveredIndex === idx;

              return (
                <div
                  key={project.id}
                  className={`work-list__row group ${isHovered ? "is-active" : ""}`}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => openUrl(projectUrl(project))}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      openUrl(projectUrl(project));
                    }
                  }}
                  aria-label={`View ${project.title}`}
                >
                  {/* Column 1: Title & Mobile Thumbnail */}
                  <div className="work-list__col-title">
                    {/* Small preview on mobile screens */}
                    <div className="work-list__mobile-thumb md:hidden">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="work-list__title-text">
                        {project.title}
                      </h3>
                      <span className="work-list__mobile-cat md:hidden text-[11px] font-mono text-[#6e6b66] mt-0.5">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Column 2: Short Description & Tech Badges */}
                  <div className="work-list__col-desc">
                    {project.competitionId && (
                      <CompetitionBadge competitionId={project.competitionId} />
                    )}
                    <p className="work-list__desc-text">
                      {project.shortDescription}
                    </p>
                    <div className="work-list__stack-row">
                      {project.stack.slice(0, 4).map((tech) => (
                        <span key={tech} className="work-list__stack-tag">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 4 && (
                        <span className="work-list__stack-tag opacity-70">
                          +{project.stack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Column 3: Year & Direct Actions */}
                  <div className="work-list__col-year">
                    <span className="work-list__year-text font-mono">
                      {project.year}
                    </span>

                    <div className="work-list__action-icons">
                      {project.liveUrl && (
                        <button
                          type="button"
                          className="work-list__link-pill live-pill"
                          title="View Live Site"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.liveUrl, "_blank", "noopener,noreferrer");
                          }}
                        >
                          <ExternalLink size={12} />
                          <span>Live</span>
                        </button>
                      )}
                      {project.demoUrl && (
                        <button
                          type="button"
                          className="work-list__link-pill live-pill"
                          title="View demo or pitch"
                          onClick={(e) => {
                            e.stopPropagation();
                            openUrl(project.demoUrl);
                          }}
                        >
                          <PlayCircle size={12} />
                          <span>Demo</span>
                        </button>
                      )}
                      {project.githubUrl && (
                        <button
                          type="button"
                          className="work-list__link-pill github-pill"
                          title="View GitHub Repository & README"
                          onClick={(e) => {
                            e.stopPropagation();
                            openUrl(project.githubUrl);
                          }}
                        >
                          <GitFork size={12} />
                          <span>Code</span>
                          <ArrowUpRight size={11} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Grid View matching Euloge */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-28 mt-8">
          {filteredProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, delay: 0.04 * idx }}
            >
              <div
                className="group block cursor-pointer"
                onClick={() => openUrl(projectUrl(project))}
              >
                {/* Minimal 16:10 Thumbnail */}
                <div className="aspect-[16/10] overflow-hidden rounded-xl border border-black/10 bg-black/5 transition duration-300 group-hover:border-black/30 group-hover:shadow-md">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Minimal Metadata Line: Title + Year */}
                <div className="mt-3.5 flex items-baseline justify-between gap-3">
                  <span className="text-base md:text-lg font-medium text-[#171717] transition-colors group-hover:text-black flex items-center gap-1.5">
                    {project.title}
                    <ArrowUpRight
                      size={14}
                      className="text-[#77716a] group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </span>
                  <span className="font-mono text-xs text-[#77716a]">
                    {project.year}
                  </span>
                </div>

                {project.competitionId && (
                  <div className="mt-2">
                    <CompetitionBadge competitionId={project.competitionId} />
                  </div>
                )}

                {/* Short Description */}
                <p className="mt-1.5 text-sm text-[#5c5852] line-clamp-2 leading-relaxed">
                  {project.shortDescription}
                </p>

                {/* Category & Quick Live Demo Link */}
                <div className="mt-2.5 flex items-center justify-between text-xs font-mono text-[#77716a]">
                  <span className="text-[11px] uppercase tracking-wider text-[#8a857e]">
                    {project.category}
                  </span>
                  {project.liveUrl && (
                    <span
                      className="inline-flex items-center gap-1 text-[11px] text-[#e05e1b] hover:underline"
                      onClick={(e) => {
                        e.stopPropagation();
                        openUrl(project.liveUrl);
                      }}
                    >
                      <span>Live Site</span>
                      <ExternalLink size={10} />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}

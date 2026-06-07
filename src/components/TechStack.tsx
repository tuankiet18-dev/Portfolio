import { useScrollReveal } from "../hooks/useScrollReveal";

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

type Tech = {
  name: string;
  icon?: string;
};

type SkillGroup = {
  label: string;
  title: string;
  summary: string;
  accent: string;
  metric: string;
  techs: Tech[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Core",
    title: "Backend",
    summary:
      "ASP.NET Core APIs, authentication, business logic, database access, and clean service boundaries.",
    accent: "#f97316",
    metric: ".NET / C# / SQL",
    techs: [
      { name: "C#", icon: `${DI}/csharp/csharp-original.svg` },
      { name: ".NET", icon: `${DI}/dotnetcore/dotnetcore-original.svg` },
      { name: "ASP.NET Core", icon: `${DI}/dotnetcore/dotnetcore-plain.svg` },
      {
        name: "Entity Framework",
        icon: `${DI}/entityframeworkcore/entityframeworkcore-plain.svg`,
      },
      {
        name: "SQL Server",
        icon: `${DI}/microsoftsqlserver/microsoftsqlserver-plain.svg`,
      },
      { name: "PostgreSQL", icon: `${DI}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    label: "Interface",
    title: "Frontend",
    summary:
      "React interfaces, API integration, dashboard screens, and typed UI workflows.",
    accent: "#818cf8",
    metric: "React / TS / UI",
    techs: [
      { name: "React", icon: `${DI}/react/react-original.svg` },
      { name: "TypeScript", icon: `${DI}/typescript/typescript-original.svg` },
      { name: "Vite", icon: `${DI}/vitejs/vitejs-original.svg` },
      { name: "HTML5", icon: `${DI}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${DI}/css3/css3-original.svg` },
    ],
  },
  {
    label: "Delivery",
    title: "Cloud & DevOps",
    summary:
      "Supporting tools I have used in projects and internship work for deployment, queues, and runtime operations.",
    accent: "#38bdf8",
    metric: "AWS / Docker / Git",
    techs: [
      {
        name: "AWS",
        icon: `${DI}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
      },
      { name: "Docker", icon: `${DI}/docker/docker-original.svg` },
      { name: "Git", icon: `${DI}/git/git-original.svg` },
      { name: "Linux", icon: `${DI}/linux/linux-original.svg` },
    ],
  },
];

function TechMark({ tech }: { tech: Tech }) {
  const fallback = tech.name
    .replace(/[^a-zA-Z0-9]/g, "")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="stack-tech-mark">
      <div className="stack-tech-icon" aria-hidden="true">
        {tech.icon ? (
          <>
            <img
              src={tech.icon}
              alt=""
              loading="lazy"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling?.classList.add(
                  "is-visible",
                );
              }}
            />
            <span className="stack-tech-fallback">{fallback}</span>
          </>
        ) : (
          <span className="stack-tech-fallback is-visible">{fallback}</span>
        )}
      </div>
      <span className="stack-tech-name">{tech.name}</span>
    </div>
  );
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useScrollReveal<HTMLElement>({ threshold: 0.08 });
  const number = String(index + 1).padStart(2, "0");

  return (
    <article
      ref={ref}
      className="stack-skill-card reveal"
      style={{ "--stack-accent": group.accent } as React.CSSProperties}
    >
      <div className="stack-card-topline">
        <span>{number}</span>
        <span>{group.label}</span>
      </div>

      <div className="stack-signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <h3>{group.title}</h3>
      <p className="stack-summary">{group.summary}</p>

      <div className="stack-metric">{group.metric}</div>

      <div className="stack-tech-grid">
        {group.techs.map((tech) => (
          <TechMark key={tech.name} tech={tech} />
        ))}
      </div>
    </article>
  );
}

export default function TechStack() {
  const headerRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="stack" className="stack-section section-glass">
      <div className="max-w-6xl mx-auto">
        <div className="stack-header reveal" ref={headerRef}>
          <div>
            <span className="section-label">01 / Stack</span>
            <h2>Tech stack</h2>
          </div>
          <p>
            My strongest area is backend development with .NET. I also use
            frontend and cloud/devops tools when projects need dashboards,
            deployment, queues, or runtime support.
          </p>
        </div>

        <div className="stack-cockpit" aria-label="Technical skill areas">
          {skillGroups.map((group, index) => (
            <SkillCard key={group.title} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

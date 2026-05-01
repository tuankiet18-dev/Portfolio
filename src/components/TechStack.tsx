import { useScrollReveal } from "../hooks/useScrollReveal";

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  category: string;
  description: string;
  accentColor: string;
  glowColor: string;
  bgGradient: string;
  borderColor: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    description: "Core runtime & frameworks",
    accentColor: "#f97316",
    glowColor: "rgba(249,115,22,0.15)",
    bgGradient: "linear-gradient(135deg, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0.02) 100%)",
    borderColor: "rgba(249,115,22,0.2)",
    skills: [
      { name: "C#", icon: "⬡" },
      { name: "ASP.NET Core", icon: "◈" },
      { name: "EF Core", icon: "⬛" },
      { name: "SignalR", icon: "⚡" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    description: "AWS services & databases",
    accentColor: "#fbbf24",
    glowColor: "rgba(251,191,36,0.15)",
    bgGradient: "linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)",
    borderColor: "rgba(251,191,36,0.2)",
    skills: [
      { name: "AWS Elastic Beanstalk", icon: "☁" },
      { name: "ECS Fargate", icon: "⊞" },
      { name: "S3", icon: "⬡" },
      { name: "SQS", icon: "⇌" },
      { name: "Cognito", icon: "⊙" },
      { name: "RDS", icon: "⬛" },
      { name: "PostgreSQL", icon: "⬢" },
      { name: "SQL Server", icon: "⬣" },
    ],
  },
  {
    category: "DevOps & Tooling",
    description: "CI/CD pipeline & containers",
    accentColor: "#a78bfa",
    glowColor: "rgba(167,139,250,0.15)",
    bgGradient: "linear-gradient(135deg, rgba(167,139,250,0.08) 0%, rgba(167,139,250,0.02) 100%)",
    borderColor: "rgba(167,139,250,0.2)",
    skills: [
      { name: "Docker", icon: "⬡" },
      { name: "GitHub Actions", icon: "⚙" },
      { name: "CI/CD", icon: "↻" },
      { name: "Git", icon: "⎇" },
      { name: "Linux", icon: "◉" },
    ],
  },
];

const awsServices = [
  {
    name: "Elastic Beanstalk",
    abbr: "EB",
    description: "App deployment platform",
    gradientFrom: "#22c55e",
    gradientTo: "#16a34a",
    glowColor: "rgba(34,197,94,0.25)",
    textColor: "#4ade80",
    bgColor: "rgba(34,197,94,0.08)",
    borderColor: "rgba(34,197,94,0.2)",
  },
  {
    name: "ECS Fargate",
    abbr: "ECS",
    description: "Serverless containers",
    gradientFrom: "#f97316",
    gradientTo: "#ea580c",
    glowColor: "rgba(249,115,22,0.25)",
    textColor: "#fb923c",
    bgColor: "rgba(249,115,22,0.08)",
    borderColor: "rgba(249,115,22,0.2)",
  },
  {
    name: "Simple Queue (SQS)",
    abbr: "SQS",
    description: "Message queuing service",
    gradientFrom: "#eab308",
    gradientTo: "#ca8a04",
    glowColor: "rgba(234,179,8,0.25)",
    textColor: "#facc15",
    bgColor: "rgba(234,179,8,0.08)",
    borderColor: "rgba(234,179,8,0.2)",
  },
  {
    name: "S3 Storage",
    abbr: "S3",
    description: "Object storage service",
    gradientFrom: "#0ea5e9",
    gradientTo: "#0284c7",
    glowColor: "rgba(14,165,233,0.25)",
    textColor: "#38bdf8",
    bgColor: "rgba(14,165,233,0.08)",
    borderColor: "rgba(14,165,233,0.2)",
  },
  {
    name: "Cognito IAM",
    abbr: "COG",
    description: "Identity & access mgmt",
    gradientFrom: "#ec4899",
    gradientTo: "#db2777",
    glowColor: "rgba(236,72,153,0.25)",
    textColor: "#f472b6",
    bgColor: "rgba(236,72,153,0.08)",
    borderColor: "rgba(236,72,153,0.2)",
  },
  {
    name: "RDS Database",
    abbr: "RDS",
    description: "Managed relational DB",
    gradientFrom: "#6366f1",
    gradientTo: "#4f46e5",
    glowColor: "rgba(99,102,241,0.25)",
    textColor: "#818cf8",
    bgColor: "rgba(99,102,241,0.08)",
    borderColor: "rgba(99,102,241,0.2)",
  },
];

export default function TechStack() {
  const headerRef = useScrollReveal();
  const skillsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
  const awsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

  return (
    <section id="stack" className="py-28 px-6 bg-[#0d0d0d] relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background: "radial-gradient(ellipse, rgba(249,115,22,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <div
          className="mb-16 reveal"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="section-label">01 — Stack</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa]">
            Tools I build with
          </h2>
          <p className="mt-2 text-[#52525b] text-sm font-mono max-w-xl">
            A focused toolkit for shipping reliable backend services and
            resilient cloud infrastructure.
          </p>
        </div>

        {/* Skill categories */}
        <div
          className="reveal"
          ref={skillsRef as React.RefObject<HTMLDivElement>}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {skillCategories.map(
              ({
                category,
                description,
                accentColor,
                glowColor,
                bgGradient,
                borderColor,
                skills,
              }) => (
                <div
                  key={category}
                  className="tech-category-card"
                  style={{
                    background: bgGradient,
                    border: `1px solid ${borderColor}`,
                    borderRadius: "16px",
                    padding: "24px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 60px ${glowColor}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "2px",
                      background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                    }}
                  />

                  {/* Category header */}
                  <div style={{ marginBottom: "16px" }}>
                    <span
                      className="font-mono text-sm font-bold"
                      style={{ color: accentColor }}
                    >
                      {category}
                    </span>
                    <p
                      className="text-xs mt-1"
                      style={{ color: "#52525b", fontFamily: "Fira Code, monospace" }}
                    >
                      {description}
                    </p>
                  </div>

                  {/* Skill tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {skills.map(({ name }) => (
                      <span
                        key={name}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "6px 14px",
                          borderRadius: "8px",
                          fontSize: "0.74rem",
                          fontFamily: "Fira Code, monospace",
                          fontWeight: 500,
                          color: "#c4c4c8",
                          background: "rgba(255,255,255,0.05)",
                          border: `1px solid ${borderColor}`,
                          transition: "all 0.2s ease",
                          cursor: "default",
                          whiteSpace: "nowrap",
                          letterSpacing: "0.01em",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color = "#fafafa";
                          (e.currentTarget as HTMLSpanElement).style.background = `rgba(255,255,255,0.1)`;
                          (e.currentTarget as HTMLSpanElement).style.borderColor = accentColor;
                          (e.currentTarget as HTMLSpanElement).style.boxShadow = `0 0 12px ${borderColor}`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.color = "#c4c4c8";
                          (e.currentTarget as HTMLSpanElement).style.background = "rgba(255,255,255,0.05)";
                          (e.currentTarget as HTMLSpanElement).style.borderColor = borderColor;
                          (e.currentTarget as HTMLSpanElement).style.boxShadow = "none";
                        }}
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </div>

        {/* AWS services grid */}
        <div
          className="reveal"
          ref={awsRef as React.RefObject<HTMLDivElement>}
          style={{ marginTop: "32px" }}
        >
          <div
            style={{
              borderRadius: "20px",
              border: "1px solid rgba(249,115,22,0.12)",
              background: "#111111",
              padding: "32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Section label */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: "0.65rem",
                  color: "#3f3f46",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                AWS Services Experience
              </span>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background: "linear-gradient(90deg, rgba(249,115,22,0.2), transparent)",
                }}
              />
            </div>

            {/* AWS cards grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "12px",
              }}
            >
              {awsServices.map(
                ({
                  name,
                  abbr,
                  description,
                  glowColor,
                  textColor,
                  bgColor,
                  borderColor,
                }) => (
                  <div
                    key={abbr}
                    style={{
                      borderRadius: "14px",
                      border: `1px solid ${borderColor}`,
                      background: bgColor,
                      padding: "20px 16px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "default",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(-6px) scale(1.02)";
                      el.style.boxShadow = `0 16px 40px ${glowColor}`;
                      el.style.borderColor = textColor;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.transform = "translateY(0) scale(1)";
                      el.style.boxShadow = "none";
                      el.style.borderColor = borderColor;
                    }}
                  >
                    {/* Abbr */}
                    <span
                      className="font-mono font-bold"
                      style={{
                        fontSize: "1.4rem",
                        color: textColor,
                        letterSpacing: "0.05em",
                        lineHeight: 1,
                      }}
                    >
                      {abbr}
                    </span>

                    {/* Full name */}
                    <span
                      style={{
                        fontSize: "0.74rem",
                        fontWeight: 600,
                        color: "#c4c4c8",
                        marginTop: "8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {name}
                    </span>

                    {/* Description */}
                    <span
                      className="font-mono"
                      style={{
                        fontSize: "0.64rem",
                        color: "#6b6b74",
                        marginTop: "5px",
                        lineHeight: 1.3,
                      }}
                    >
                      {description}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

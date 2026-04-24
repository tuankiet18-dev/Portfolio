import { useScrollReveal } from "../hooks/useScrollReveal";

type SkillCategory = {
  category: string;
  color: string;
  borderColor: string;
  pillClass: string;
  skills: { name: string }[];
};

const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    color: "text-[#f97316]",
    borderColor: "border-[#f97316]/25",
    pillClass:
      "border-[#f97316]/25 bg-[#f97316]/06 hover:border-[#f97316]/50 hover:bg-[#f97316]/12",
    skills: [
      { name: "C#" },
      { name: "ASP.NET Core" },
      { name: "EF Core" },
      { name: "SignalR" },
    ],
  },
  {
    category: "Cloud & Infrastructure",
    color: "text-amber-400",
    borderColor: "border-amber-400/25",
    pillClass:
      "border-amber-400/25 bg-amber-400/06 hover:border-amber-400/50 hover:bg-amber-400/12",
    skills: [
      { name: "AWS Elastic Beanstalk" },
      { name: "ECS Fargate" },
      { name: "S3" },
      { name: "SQS" },
      { name: "Cognito" },
      { name: "RDS" },
      { name: "PostgreSQL" },
      { name: "SQL Server" },
    ],
  },
  {
    category: "DevOps & Tooling",
    color: "text-violet-400",
    borderColor: "border-violet-400/25",
    pillClass:
      "border-violet-400/25 bg-violet-400/06 hover:border-violet-400/50 hover:bg-violet-400/12",
    skills: [
      { name: "Docker" },
      { name: "GitHub Actions" },
      { name: "CI/CD" },
      { name: "Git" },
      { name: "Linux" },
    ],
  },
];

const awsServices = [
  {
    name: "Elastic\nBeanstalk",
    abbr: "EB",
    color: "from-green-500/20 to-green-600/5",
    textColor: "text-green-400",
  },
  {
    name: "ECS\nFargate",
    abbr: "ECS",
    color: "from-orange-500/20 to-orange-600/5",
    textColor: "text-orange-400",
  },
  {
    name: "Simple\nQueue (SQS)",
    abbr: "SQS",
    color: "from-yellow-500/20 to-yellow-600/5",
    textColor: "text-yellow-400",
  },
  {
    name: "S3\nStorage",
    abbr: "S3",
    color: "from-sky-500/20 to-sky-600/5",
    textColor: "text-sky-400",
  },
  {
    name: "Cognito\nIAM",
    abbr: "COG",
    color: "from-pink-500/20 to-pink-600/5",
    textColor: "text-pink-400",
  },
  {
    name: "RDS\nDatabase",
    abbr: "RDS",
    color: "from-blue-500/20 to-blue-600/5",
    textColor: "text-blue-400",
  },
];

export default function TechStack() {
  const headerRef = useScrollReveal();
  const skillsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });
  const awsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section id="stack" className="py-28 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div
          className="mb-14 reveal"
          ref={headerRef as React.RefObject<HTMLDivElement>}
        >
          <span className="section-label">01 — Stack</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#fafafa]">
            Tools I build with
          </h2>
          <p className="mt-2 text-[#52525b] text-sm font-mono">
            A focused toolkit for shipping reliable backend services and
            resilient cloud infrastructure.
          </p>
        </div>

        {/* Skill categories */}
        <div
          className="space-y-10 reveal"
          ref={skillsRef as React.RefObject<HTMLDivElement>}
        >
          {skillCategories.map(
            ({ category, color, borderColor, pillClass, skills }) => (
              <div key={category}>
                <div className="flex items-center gap-3 mb-5">
                  <span className={`font-mono text-sm font-semibold ${color}`}>
                    {category}
                  </span>
                  <div className={`flex-1 h-px border-t ${borderColor}`} />
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {skills.map(({ name }) => (
                    <span
                      key={name}
                      className={`tech-pill ${pillClass} text-[#a1a1aa]`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ),
          )}
        </div>

        {/* AWS services grid */}
        <div
          className="mt-16 rounded-2xl border border-[#27272a] bg-[#111111] p-8 reveal"
          ref={awsRef as React.RefObject<HTMLDivElement>}
        >
          <p className="font-mono text-xs text-[#3f3f46] uppercase tracking-widest mb-6">
            AWS Services Experience
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {awsServices.map(({ name, abbr, color, textColor }) => (
              <div
                key={abbr}
                className={`rounded-xl border border-white/5 bg-gradient-to-br ${color} p-3 flex flex-col items-center text-center card-hover cursor-default`}
              >
                <span className={`font-mono text-lg font-bold ${textColor}`}>
                  {abbr}
                </span>
                <span className="text-[10px] text-[#52525b] mt-1 leading-tight whitespace-pre">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TABS = [
  { id: "academic", label: "Academic" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "infos", label: "Info" },
];

const STACK_CATEGORIES = [
  {
    cat: "Core Backend & Languages",
    items: [
      "C#",
      ".NET 9",
      "ASP.NET Core",
      "Entity Framework Core",
      "TypeScript",
      "Hono",
    ],
  },
  {
    cat: "Web & Frontend",
    items: ["React", "HTML/CSS", "Drizzle ORM"],
  },
  {
    cat: "Cloud & DevOps",
    items: [
      "AWS Lambda",
      "Amazon SQS",
      "ECS Fargate",
      "AWS S3",
      "Cognito",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    cat: "Databases",
    items: ["PostgreSQL", "SQL Server"],
  },
  {
    cat: "Architecture & Tooling",
    items: [
      "xUnit",
      "Playwright",
      "k6 Load Testing",
      "SignalR",
      "Swagger / OpenAPI",
    ],
  },
];

const INFO_ITEMS = [
  { label: "Based in", value: "Ho Chi Minh City, Vietnam" },
  { label: "Education", value: "Bachelor of Software Engineering (FPT University · GPA: 8.8/10)" },
  { label: "Focus", value: "Backend Development (.NET/C#) Cloud-Native Architecture (AWS)" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/tuankiet18",
    href: "https://linkedin.com/in/tuankiet18",
  },
  {
    label: "Contact",
    value: "luongtuankiet1801@gmail.com",
    href: "mailto:luongtuankiet1801@gmail.com",
  },
];

export default function AboutPin() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 809);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Pin animation: card expands from inset 40px/28px radius to 0px during first 18% of scroll
  const pinProgress = useTransform(scrollYProgress, [0, 0.18], [0, 1]);

  // Spring physics matching euloge.me (stiffness 120, damping 28, mass 0.4)
  const springProgress = useSpring(pinProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });

  const maxInset = isMobile ? 0 : 40;
  const maxRadius = isMobile ? 0 : 28;
  const inset = useTransform(springProgress, [0, 1], [maxInset, 0]);
  const borderRadius = useTransform(springProgress, [0, 1], [maxRadius, 0]);

  // Tab switching: progress <= 0.18 -> tab 0, otherwise split the remaining 0.82 into 4 segments
  useEffect(() => {
    return scrollYProgress.on("change", (p) => {
      if (p <= 0.18) {
        setActiveTab(0);
      } else {
        const idx = Math.min(
          TABS.length - 1,
          Math.floor(((p - 0.18) / 0.82) * TABS.length)
        );
        setActiveTab(idx);
      }
    });
  }, [scrollYProgress]);

  // Smooth scroll to target tab progress
  const scrollToTab = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const totalScrollable = el.offsetHeight - window.innerHeight;
    const targetProgress = 0.18 + ((index + 0.12) / TABS.length) * 0.82;
    window.scrollTo({
      top: el.offsetTop + targetProgress * totalScrollable,
      behavior: "smooth",
    });
  };

  return (
    <section id="experience" ref={containerRef} className="about-pin">
      <div className="about-pin__sticky">
        <motion.div
          className="about-pin__card"
          data-header-theme="dark"
          style={{
            top: inset,
            right: inset,
            bottom: inset,
            left: inset,
            borderRadius,
          }}
        >
          <div className="about-pin__inner">
            {/* Left Column: Navigation / Tabs */}
            <aside
              className="about-pin__nav"
              aria-label="Experience, skills & background"
            >
              <p className="about-pin__kicker">
                Experience, skills &amp; background
              </p>

              <div className="about-pin__tabs">
                {TABS.map((tab, idx) => (
                  <button
                    key={tab.id}
                    type="button"
                    className={`about-pin__tab${activeTab === idx ? " is-active" : ""}`}
                    onClick={() => scrollToTab(idx)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </aside>

            {/* Right Stage: Cross-fading Content Panels */}
            <div className="about-pin__stage">
              {/* Panel 0: Academic */}
              <motion.div
                className="about-pin__panel"
                animate={{
                  opacity: activeTab === 0 ? 1 : 0,
                  y: activeTab === 0 ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: activeTab === 0 ? "auto" : "none" }}
              >
                <p className="about-pin__lead">
                  Academic foundation in Software Engineering and high-performance computing.
                </p>
                <ul className="about-pin__list">
                  <li>
                    <div className="about-pin__row">
                      <strong>FPT University — Software Engineering</strong>
                      <span>2023 – 2027 (Expected)</span>
                    </div>
                    <p>
                      Bachelor of Software Engineering (Specialization: .NET) · GPA: 8.8/10. Core disciplines: Distributed Systems, System Architecture, Database Engineering, and High-Concurrency Applications.
                    </p>
                  </li>
                  <li>
                    <div className="about-pin__row">
                      <strong>Honorable Student of the Trimester</strong>
                      <span>5 Consecutive Terms (2024 – 2026)</span>
                    </div>
                    <p>
                      Awarded Semester Honors across five consecutive trimesters for ranking in the top percentiles of the Software Engineering cohort.
                    </p>
                  </li>
                  <li>
                    <div className="about-pin__row">
                      <strong>Competitions &amp; Hackathons</strong>
                      <span>2024 – 2026</span>
                    </div>
                    <p>
                      Semifinalist (Top 8 of 250+ teams) at The Finnovative Hackathon 2026. Top 15 of 600+ participants at the F-CODE TALENT 2024 programming contest.
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Panel 1: Experience */}
              <motion.div
                className="about-pin__panel"
                animate={{
                  opacity: activeTab === 1 ? 1 : 0,
                  y: activeTab === 1 ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: activeTab === 1 ? "auto" : "none" }}
              >
                <p className="about-pin__lead">
                  Cloud infrastructure and backend systems engineered for production reliability.
                </p>
                <ul className="about-pin__list">
                  <li>
                    <div className="about-pin__row">
                      <strong>FCAJ — AWS First Cloud AI Journey</strong>
                      <span>Jan 2026 – Apr 2026</span>
                    </div>
                    <p>
                      Cloud &amp; Backend OJT Trainee (3-month intensive program via AWS Study Bootcamp). Applied EC2, S3, ECS, ALB, and CloudWatch in collaborative project infrastructure. Recognised as an FCAJ Challenger for active cohort contribution.
                    </p>
                  </li>
                  <li>
                    <div className="about-pin__row">
                      <strong>Capstone: SmartInvoice Shield</strong>
                      <span>Team of 4</span>
                    </div>
                    <p>
                      ASP.NET Core (.NET 9), React, PostgreSQL, AWS (S3, SQS, ECS Fargate, Cognito), Docker, CI/CD : Engineered event-driven document pipeline with S3 → SQS → ECS Fargate and Python OCR workers (validating 15/15 invoices). Designed 4-stage invoice lifecycle with soft-delete, audit trails, EF Core multi-tenant isolation, Polly resilience for VietQR, and Cognito RBAC.
                    </p>
                  </li>
                </ul>
              </motion.div>

              {/* Panel 2: Stack */}
              <motion.div
                className="about-pin__panel"
                animate={{
                  opacity: activeTab === 2 ? 1 : 0,
                  y: activeTab === 2 ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: activeTab === 2 ? "auto" : "none" }}
              >
                <ul className="about-pin__stack">
                  {STACK_CATEGORIES.map((cat) => (
                    <li key={cat.cat}>
                      <span>{cat.cat}</span>
                      <p className="about-pin__skills">
                        {cat.items.map((item, i) => (
                          <span key={item}>
                            {i > 0 && <i aria-hidden="true">•</i>}
                            {item}
                          </span>
                        ))}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Panel 3: Info */}
              <motion.div
                className="about-pin__panel"
                animate={{
                  opacity: activeTab === 3 ? 1 : 0,
                  y: activeTab === 3 ? 0 : 8,
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                style={{ pointerEvents: activeTab === 3 ? "auto" : "none" }}
              >
                <ul className="about-pin__infos">
                  {INFO_ITEMS.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}</span>
                      {item.href ? (
                        <p>
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{ color: "inherit", textDecoration: "none" }}
                            className="hover:underline"
                          >
                            {item.value}
                          </a>
                        </p>
                      ) : (
                        <p>{item.value}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Bottom-right Button: View Resume */}
            <a
              href="/KietLT_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="about-pin__cv"
              aria-label="View resume"
            >
              <span className="certs__gradient-btn">
                <span className="certs__gradient-content">
                  <span>View resume</span>
                  <ArrowUpRight size={14} />
                </span>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

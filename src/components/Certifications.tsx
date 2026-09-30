import { useRef, useState } from "react";
import { Eye, ArrowLeft, ArrowRight, ArrowUpRight, Check, X, Download } from "lucide-react";
import { COURSE_CERTIFICATES } from "../courseCertificates";

export interface CertificateItem {
  id: string;
  isDark?: boolean;
  badgeImg: string;
  badgeAlt: string;
  type: string;
  title: string;
  description: string;
  skills: string[];
  previewImg: string;
  fileUrl: string;
  fileType: "image" | "pdf";
  verifyUrl: string;
}

export const KIET_CERTS: CertificateItem[] = [
  {
    id: "aws-fundamentals",
    isDark: true,
    badgeImg: "/certs/aws-white.svg",
    badgeAlt: "Amazon Web Services",
    type: "specialization",
    title: "AWS Fundamentals",
    description:
      "Three-course specialization covering core AWS services and security concepts, cloud migration strategies, solution architecture, and serverless fundamentals.",
    skills: [
      "Core AWS services & use cases",
      "AWS security concepts",
      "Cloud migration strategies",
      "Solution architecture & serverless basics",
    ],
    previewImg: "/certs/cert-aws-fundamental-1.png",
    fileUrl: "/certs/AWS_Fundamental.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/d64c474d089da1869e15e7fbc4821d24",
  },
  {
    id: "hackathon-semifinal",
    isDark: false,
    badgeImg: "/certs/hackathon-logo.svg",
    badgeAlt: "FESE - Sàn Giao Dịch Chứng Khoán Ảo",
    type: "achievement",
    title: "Hackathon Semifinal Round Participant",
    description:
      "Certificate recognizing participation in the semifinal round of The Finnovative Hackathon, organized by FESE - Sàn Giao Dịch Chứng Khoán Ảo.",
    skills: [
      "The Finnovative Hackathon",
      "Semifinal round participant",
      "Organized by FESE",
      "January 17, 2026",
    ],
    previewImg: "/certs/Cert_Hackathon.png",
    fileUrl: "/certs/Cert_Hackathon.png",
    fileType: "image",
    verifyUrl: "/certs/Cert_Hackathon.png",
  },
  {
    id: "ai-for-everyone",
    isDark: false,
    badgeImg: "/certs/deeplearning-logo.png",
    badgeAlt: "DeepLearning.AI",
    type: "course certificate",
    title: "AI For Everyone",
    description:
      "Non-technical course taught by Andrew Ng covering AI terminology and capabilities, AI project workflows, organizational AI strategy, and ethical considerations.",
    skills: [
      "AI terminology & capabilities",
      "ML and data science workflows",
      "AI project selection & strategy",
      "AI ethics & societal impact",
    ],
    previewImg: "/certs/cert-ai-for-everyone-1.png",
    fileUrl: "/certs/AI_For_Everyone.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/f2c74bbc82c11d70136e16f8af131a40",
  },
  {
    id: "software-development-lifecycle",
    isDark: false,
    badgeImg: "/certs/umn-logo.png",
    badgeAlt: "University of Minnesota",
    type: "specialization",
    title: "Software Development Lifecycle",
    description:
      "Four-course specialization covering traditional, secure, Agile, and Lean software development approaches and practices for building quality software.",
    skills: [
      "SDLC processes & methodologies",
      "Agile software development",
      "Lean software development",
      "Quality & secure software practices",
    ],
    previewImg: "/certs/cert-software-lifecycle-1.png",
    fileUrl: "/certs/Software_Development_Lifecycle.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/8e05a92cdebc19fece252f5bfa4e7a94",
  },
  {
    id: "core-java",
    isDark: false,
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    type: "specialization",
    title: "Core Java for Beginners",
    description:
      "Four-course specialization covering Java foundations, object-oriented programming, multithreading, collections, I/O, testing, logging, and design patterns.",
    skills: [
      "Java foundations & OOP",
      "Multithreading & classes",
      "Generics, collections & I/O",
      "Testing, logging & design patterns",
    ],
    previewImg: "/certs/cert-core-java-1.png",
    fileUrl: "/certs/Core_Java_for_Beginners.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/1467b39adcd286f759f12a357e1d0490",
  },
  {
    id: "core-java-design-patterns",
    isDark: false,
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    type: "course certificate",
    title: "Core Java - Design Patterns",
    description:
      "Engineering course covering classic GoF design patterns in Java (Creational, Structural, Behavioral), architectural principles, and logging.",
    skills: [
      "Creational patterns (Factory, Builder)",
      "Structural patterns (Adapter, Decorator)",
      "Behavioral patterns (Observer, Strategy)",
      "Design principles & logging",
    ],
    previewImg: "/certs/cert-core-java-design-patterns.png",
    fileUrl: "/certs/core-java-design-patterns.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/c7cf3154c4f0554bfa4a848f8cfcc017",
  },
  {
    id: "core-java-advanced-fundamentals",
    isDark: false,
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    type: "course certificate",
    title: "Core Java - Advanced Fundamentals",
    description:
      "In-depth course covering generics, the Java Collections Framework, exception handling patterns, file I/O operations, and unit testing.",
    skills: [
      "Generics & type safety",
      "Java Collections Framework",
      "Exception handling patterns",
      "File I/O & unit testing",
    ],
    previewImg: "/certs/cert-core-java-advanced-fundamentals.png",
    fileUrl: "/certs/core-java-advanced-fundamentals.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/62ed179791940d06c42cffc947417da9",
  },
  {
    id: "core-java-multithreading",
    isDark: false,
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    type: "course certificate",
    title: "Core Java - Multithreading & Classes",
    description:
      "Course focusing on thread lifecycles, synchronization, concurrency, inner classes, interfaces, and abstract classes in Java.",
    skills: [
      "Multithreading & synchronization",
      "Thread safety & concurrency",
      "Inner & anonymous classes",
      "Interfaces & abstract classes",
    ],
    previewImg: "/certs/cert-core-java-multithreading.png",
    fileUrl: "/certs/core-java-multithreading.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/623047ada10f60142f9dd149f2af5adc",
  },
  {
    id: "core-java-foundations",
    isDark: false,
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    type: "course certificate",
    title: "Core Java - Foundations",
    description:
      "Foundational course covering Java syntax, control structures, methods, arrays, and core object-oriented programming concepts.",
    skills: [
      "Java syntax & control flow",
      "Methods & array data structures",
      "Object-oriented fundamentals",
      "LearnKartS certified",
    ],
    previewImg: "/certs/cert-core-java-foundations.png",
    fileUrl: "/certs/core-java-foundations.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/ad2f83b18c7ff0dcf5d31e2783568d33",
  },
  {
    id: "web-applications-everybody",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "specialization",
    title: "Web Applications for Everybody",
    description:
      "Four-course specialization covering PHP web development, SQL and relational database design, database-backed applications, JavaScript, jQuery, and JSON.",
    skills: [
      "PHP web applications",
      "SQL & relational database design",
      "Cookies & session management",
      "JavaScript, jQuery & JSON",
    ],
    previewImg: "/certs/cert-web-applications-1.png",
    fileUrl: "/certs/Web_Applications_for_Everybody.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/f5e59e14e90b8c4c74e488d6695574a6",
  },
  {
    id: "web-design-everybody",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "specialization",
    title: "Web Design for Everybody",
    description:
      "Specialization on semantic HTML5 markup, responsive CSS3 styling, JavaScript DOM interactivity, and WCAG accessibility standards.",
    skills: [
      "Responsive Web Design",
      "HTML5 & CSS3 Styling",
      "JavaScript DOM Interactivity",
      "WCAG Accessibility Standards",
    ],
    previewImg: "/certs/cert-web-design-1.png",
    fileUrl: "/certs/Web_Design_for_Everybody.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/98f79f33c48fb401a3d59e8293795990",
  },
  {
    id: "web-design-html5",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Introduction to HTML5",
    description:
      "Course certificate covering the foundations of HTML5 and accessible web page structure, issued by the University of Michigan through Coursera.",
    skills: ["HTML5 foundations", "Semantic page structure", "Accessible web content"],
    previewImg: "/certs/cert-introduction-html5.png",
    fileUrl: "/certs/Introduction%20to%20HTML5.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/e3e9664b48340d97bbcdc75c8972bf21",
  },
  {
    id: "web-design-css3",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Introduction to CSS3",
    description:
      "Course certificate covering CSS3 styling and accessible design principles, issued by the University of Michigan through Coursera.",
    skills: ["CSS3 styling", "Web page layout", "Accessible visual design"],
    previewImg: "/certs/cert-introduction-css3.png",
    fileUrl: "/certs/Introduction%20to%20CSS3.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/c7de611b0ae3b5f6310fca95c4f39c7e",
  },
  {
    id: "web-design-javascript-interactivity",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Interactivity with JavaScript",
    description:
      "Course certificate covering JavaScript-driven page interactions and accessible interactive features, issued by the University of Michigan through Coursera.",
    skills: ["JavaScript fundamentals", "Interactive web pages", "Accessible interactions"],
    previewImg: "/certs/cert-interactivity-javascript.png",
    fileUrl: "/certs/Interactivity%20with%20JavaScript.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/583e40ce07f58bcff733d3d5acef627f",
  },
  {
    id: "web-design-responsive-styling",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Advanced Styling with Responsive Design",
    description:
      "Course certificate covering responsive, mobile-first styling, wireframes, fluid layouts, and media queries, issued by the University of Michigan through Coursera.",
    skills: ["Responsive design", "Mobile-first layouts", "Wireframes & media queries"],
    previewImg: "/certs/cert-advanced-responsive-design.png",
    fileUrl: "/certs/Advanced%20Styling%20with%20Responsive%20Design.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/eeac15bb597de9fb4119a76cc4a66213",
  },
  {
    id: "web-design-capstone",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Web Design for Everybody Capstone",
    description:
      "Capstone course certificate for applying web design and development skills in a final project, issued by the University of Michigan through Coursera.",
    skills: ["Web design capstone", "Applied HTML, CSS & JavaScript", "Final project"],
    previewImg: "/certs/cert-web-design-capstone.png",
    fileUrl: "/certs/Web%20Design%20for%20Everybody%20Capstone.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/801e4b14acc51d6898d8ce16f5eb50fc",
  },
  {
    id: "web-applications-javascript-jquery-json",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "JavaScript, jQuery, and JSON",
    description:
      "Course certificate covering JavaScript, jQuery, and JSON for web applications, issued by the University of Michigan through Coursera.",
    skills: ["JavaScript", "jQuery", "JSON data"],
    previewImg: "/certs/cert-javascript-jquery-json.png",
    fileUrl: "/certs/JavaScript%2C%20jQuery%2C%20and%20JSON.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/b1602d0856d641505033f22cf0c74f48",
  },
  {
    id: "web-applications-database-php",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Building Database Applications in PHP",
    description:
      "Course certificate covering database-backed web applications built with PHP, issued by the University of Michigan through Coursera.",
    skills: ["PHP", "Database-backed applications", "CRUD workflows"],
    previewImg: "/certs/cert-building-database-php.png",
    fileUrl: "/certs/Building%20Database%20Applications%20in%20PHP.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/8506ff74bf58c3498da347dca5169134",
  },
  {
    id: "web-applications-sql",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Introduction to Structured Query Language (SQL)",
    description:
      "Course certificate covering foundational SQL queries and relational database concepts, issued by the University of Michigan through Coursera.",
    skills: ["SQL queries", "Relational databases", "Data retrieval & manipulation"],
    previewImg: "/certs/cert-introduction-sql.png",
    fileUrl: "/certs/Introduction%20to%20Structured%20Query%20Language%20(SQL).pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/e9c222665b11348b0e5249425f66b91f",
  },
  {
    id: "web-applications-php",
    isDark: false,
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    type: "course certificate",
    title: "Building Web Applications in PHP",
    description:
      "Course certificate covering server-side web application development with PHP, issued by the University of Michigan through Coursera.",
    skills: ["PHP web development", "Server-side programming", "Web application fundamentals"],
    previewImg: "/certs/cert-building-web-applications-php.png",
    fileUrl: "/certs/Building%20Web%20Applications%20in%20PHP.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/4002928c63981b0caba3ddd14fa9d2ed",
  },
  {
    id: "project-management-principles",
    isDark: false,
    badgeImg: "/certs/uci-logo.png",
    badgeAlt: "University of California, Irvine",
    type: "specialization",
    title: "Project Management Principles & Practices",
    description:
      "Four-course specialization covering project initiation and planning, work breakdown structures, budgeting, scheduling, risk, and change management.",
    skills: [
      "Project scope & planning",
      "Work breakdown structures",
      "Budgeting & scheduling",
      "Risk & change management",
    ],
    previewImg: "/certs/cert-project-management-1.png",
    fileUrl: "/certs/Project_Management_Principles_and_Practices.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/6e69dd59712aedf03b9c63bbb84f7524",
  },
  {
    id: "svg-fall-2025",
    isDark: false,
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    type: "academic honor",
    title: "Honorable Student — Fall 2025",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Fall 2025 trimester.",
    skills: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Fall 2025",
      "Issued March 5, 2026",
    ],
    previewImg: "/certs/cert-fall-2025-1.png",
    fileUrl: "/certs/SVG-Fall2025.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Fall2025.pdf",
  },
  {
    id: "svg-summer-2025",
    isDark: false,
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    type: "academic honor",
    title: "Honorable Student — Summer 2025",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Summer 2025 trimester.",
    skills: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Summer 2025",
      "Issued October 23, 2025",
    ],
    previewImg: "/certs/cert-summer-2025-1.png",
    fileUrl: "/certs/SVG-Summer2025.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Summer2025.pdf",
  },
  ...COURSE_CERTIFICATES.map((cert) => ({
    id: cert.id,
    isDark: false,
    badgeImg: cert.badgeImg,
    badgeAlt: cert.badgeAlt,
    type: "course certificate",
    title: cert.title,
    description: cert.description,
    skills: [...cert.points],
    previewImg: cert.previewImg,
    fileUrl: cert.fileUrl,
    fileType: cert.fileType,
    verifyUrl: cert.verifyUrl,
  })),
];

const FEATURED_CERT_IDS = [
  "aws-fundamentals",
  "software-development-lifecycle",
  "web-design-everybody",
  "web-applications-everybody",
  "project-management-principles",
  "hackathon-semifinal",
];

const FEATURED_CERTS = FEATURED_CERT_IDS.flatMap((id) => {
  const cert = KIET_CERTS.find((item) => item.id === id);
  return cert ? [cert] : [];
});

interface CertificationsProps {
  onViewAll?: () => void;
}

export default function Certifications({ onViewAll }: CertificationsProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const offset = direction === "left" ? -320 : 320;
    trackRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section id="certs" className="certs">
      {/* Header (Exact Euloge layout: centered, bold, 2-line title) */}
      <header className="certs__header">
        <h2>
          Professional<br />Certifications
        </h2>
        <p>
          Continuous learning and professional development through industry-leading bodies.
        </p>
      </header>

      {/* Horizontal Track with generous gutter */}
      <div className="certs__track" ref={trackRef}>
        {FEATURED_CERTS.map((cert) => (
          <article
            key={cert.id}
            className={`certs__card ${cert.isDark ? "is-dark" : ""}`}
          >
            {/* Top row: Badge logo + type */}
            <div className="certs__card-top">
              <span className="certs__badge">
                <img src={cert.badgeImg} alt={cert.badgeAlt} />
              </span>
              <em>{cert.type}</em>
            </div>

            {/* Title & Description */}
            <h3>{cert.title}</h3>
            <p>{cert.description}</p>

            {/* Skills list with green checkmark circles */}
            <ul>
              {cert.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>

            {/* Card Actions */}
            <div className="certs__card-actions">
              <button
                type="button"
                className="certs__gradient-btn"
                aria-label={`View certificate ${cert.title}`}
                onClick={() => setSelectedCert(cert)}
              >
                <div className="certs__gradient-content">
                  <Eye size={13} />
                  <span>View certificate</span>
                </div>
              </button>

              <a
                className="certs__action-link"
                href={cert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Verify ${cert.title}`}
              >
                <div className="certs__gradient-btn">
                  <div className="certs__gradient-content">
                    <Check size={13} className="text-emerald-500" />
                    <span>Verify</span>
                  </div>
                </div>
              </a>
            </div>
          </article>
        ))}

        {/* More certifications card at end of track */}
        <aside className="certs__more">
          <p>More from the journey</p>
          <h3>More certifications</h3>
          <span>
            Browse all academic honors, transcripts, and verification documents.
          </span>
          <button
            type="button"
            className="certs__action-link"
            onClick={onViewAll}
            aria-label="View all certifications"
          >
            <div className="certs__gradient-btn">
              <div className="certs__gradient-content">
                <span>View all</span>
                <ArrowUpRight size={13} />
              </div>
            </div>
          </button>
        </aside>
      </div>

      {/* Bottom Toolbar: View All + Prev/Next Arrows */}
      <div className="certs__toolbar">
        <button
          type="button"
          className="certs__action-link"
          onClick={onViewAll}
          aria-label="View all certifications"
        >
          <div className="certs__gradient-btn certs__gradient-btn--all">
            <div className="certs__gradient-content">
              <span>View all certifications</span>
              <ArrowUpRight size={13} />
            </div>
          </div>
        </button>

        <div className="certs__arrows">
          <button
            type="button"
            className="certs__gradient-btn certs__gradient-btn--icon"
            aria-label="Previous certification"
            onClick={() => scroll("left")}
          >
            <div className="certs__gradient-content">
              <ArrowLeft size={15} />
            </div>
          </button>

          <button
            type="button"
            className="certs__gradient-btn certs__gradient-btn--icon"
            aria-label="Next certification"
            onClick={() => scroll("right")}
          >
            <div className="certs__gradient-content">
              <ArrowRight size={15} />
            </div>
          </button>
        </div>
      </div>

      {/* High-Resolution Certificate Visual Proof Modal */}
      {selectedCert && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 md:p-6 border-b border-white/10 flex items-center justify-between bg-[#111111]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#e05e1b]">
                  {selectedCert.type}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-white mt-0.5">
                  {selectedCert.title}
                </h3>
                <p className="text-xs text-white/50">{selectedCert.badgeAlt}</p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image Viewport */}
            <div className="flex-1 overflow-auto bg-[#0a0a0a] p-4 md:p-8 flex items-center justify-center min-h-[380px] max-h-[68vh]">
              <img
                src={selectedCert.previewImg}
                alt={selectedCert.title}
                className="max-w-full max-h-[62vh] object-contain rounded shadow-2xl border border-white/10"
              />
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 md:p-5 border-t border-white/10 bg-[#111111] flex items-center justify-between gap-4">
              <a
                href={selectedCert.fileUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs md:text-sm text-white/80 hover:text-white flex items-center gap-2 underline underline-offset-4"
              >
                <Download size={14} />
                <span>Open original document</span>
              </a>

              <a
                href={selectedCert.verifyUrl}
                target="_blank"
                rel="noreferrer"
                className="certs__gradient-btn"
              >
                <div className="certs__gradient-content">
                  <Check size={13} className="text-emerald-500" />
                  <span>Verify credential</span>
                  <ArrowUpRight size={13} />
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

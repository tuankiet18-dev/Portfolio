import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Check, Eye, X, Download } from "lucide-react";
import ShutterTitle from "./ShutterTitle";
import { COURSE_CERTIFICATES } from "../courseCertificates";

export interface DetailedCertItem {
  id: string;
  category: "Specialization" | "Course Certificate" | "Academic" | "Award";
  badgeImg?: string;
  badgeAlt?: string;
  title: string;
  description: string;
  issuer: string;
  obtained: string;
  previewImg: string;
  fileUrl: string;
  fileType: "image" | "pdf";
  verifyUrl: string;
  keyPoints: string[];
  courses?: string[];
}

export const ALL_CERTIFICATIONS: DetailedCertItem[] = [
  {
    id: "aws-fundamentals",
    category: "Specialization",
    badgeImg: "/certs/aws-dark.svg",
    badgeAlt: "Amazon Web Services",
    title: "AWS Fundamentals",
    description:
      "Three-course specialization covering core AWS services and security concepts, cloud migration strategies, solution architecture, and the basics of building serverless applications on AWS.",
    issuer: "Amazon Web Services (AWS) via Coursera",
    obtained: "May 10, 2026",
    previewImg: "/certs/cert-aws-fundamental-1.png",
    fileUrl: "/certs/AWS_Fundamental.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/d64c474d089da1869e15e7fbc4821d24",
    keyPoints: [
      "Core AWS Services",
      "AWS Security Concepts",
      "Cloud Migration Strategies",
      "Solution Architecture & Serverless",
    ],
    courses: [
      "AWS Cloud Technical Essentials",
      "Migrating to the AWS Cloud",
      "Architecting Solutions on AWS",
    ],
  },
  {
    id: "ai-for-everyone",
    category: "Course Certificate",
    badgeImg: "/certs/deeplearning-logo.png",
    badgeAlt: "DeepLearning.AI",
    title: "AI For Everyone",
    description:
      "Non-technical course authorized by DeepLearning.AI and taught by Andrew Ng, covering AI terminology and capabilities, AI project workflows, organizational AI strategy, and ethical considerations.",
    issuer: "DeepLearning.AI via Coursera",
    obtained: "June 24, 2024",
    previewImg: "/certs/cert-ai-for-everyone-1.png",
    fileUrl: "/certs/AI_For_Everyone.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/f2c74bbc82c11d70136e16f8af131a40",
    keyPoints: [
      "AI Terminology & Capabilities",
      "ML & Data Science Workflows",
      "AI Project Selection & Strategy",
      "AI Ethics & Societal Impact",
    ],
  },
  {
    id: "software-development-lifecycle",
    category: "Specialization",
    badgeImg: "/certs/umn-logo.png",
    badgeAlt: "University of Minnesota",
    title: "Software Development Lifecycle",
    description:
      "Four-course specialization covering traditional, secure, Agile, and Lean software development approaches and engineering practices for building quality software.",
    issuer: "University of Minnesota via Coursera",
    obtained: "July 1, 2025",
    previewImg: "/certs/cert-software-lifecycle-1.png",
    fileUrl: "/certs/Software_Development_Lifecycle.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/8e05a92cdebc19fece252f5bfa4e7a94",
    keyPoints: [
      "SDLC Methodologies",
      "Agile Software Development",
      "Lean Software Development",
      "Quality & Secure Software Practices",
    ],
    courses: [
      "Software Development Processes and Methodologies",
      "Agile Software Development",
      "Lean Software Development",
      "Engineering Practices for Building Quality Software",
    ],
  },
  {
    id: "core-java",
    category: "Specialization",
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    title: "Core Java for Beginners",
    description:
      "Four-course specialization covering Java foundations, object-oriented programming, multithreading, collections, I/O, testing, logging, and design patterns.",
    issuer: "LearnKartS via Coursera",
    obtained: "February 16, 2025",
    previewImg: "/certs/cert-core-java-1.png",
    fileUrl: "/certs/Core_Java_for_Beginners.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/1467b39adcd286f759f12a357e1d0490",
    keyPoints: [
      "Java Foundations & OOP",
      "Multithreading & Classes",
      "Collections, I/O & Testing",
      "Logging & Design Patterns",
    ],
    courses: [
      "Core Java - Foundations",
      "Core Java - Multithreading and Classes",
      "Core Java - Advanced Fundamentals",
      "Core Java - Design Patterns",
    ],
  },
  {
    id: "core-java-design-patterns",
    category: "Course Certificate",
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    title: "Core Java - Design Patterns",
    description:
      "Engineering course covering classic Gang of Four (GoF) design patterns implemented in Java, architectural principles, logging, and best practices.",
    issuer: "LearnKartS via Coursera",
    obtained: "February 17, 2025",
    previewImg: "/certs/cert-core-java-design-patterns.png",
    fileUrl: "/certs/core-java-design-patterns.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/c7cf3154c4f0554bfa4a848f8cfcc017",
    keyPoints: [
      "Creational Patterns (Singleton, Factory, Builder)",
      "Structural Patterns (Adapter, Decorator, Facade)",
      "Behavioral Patterns (Observer, Strategy)",
      "Architectural Principles & Logging",
    ],
  },
  {
    id: "core-java-advanced-fundamentals",
    category: "Course Certificate",
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    title: "Core Java - Advanced Fundamentals",
    description:
      "In-depth course covering generics, the Java Collections Framework, exception handling patterns, file I/O operations, and unit testing.",
    issuer: "LearnKartS via Coursera",
    obtained: "February 16, 2025",
    previewImg: "/certs/cert-core-java-advanced-fundamentals.png",
    fileUrl: "/certs/core-java-advanced-fundamentals.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/62ed179791940d06c42cffc947417da9",
    keyPoints: [
      "Generics & Type Safety",
      "Java Collections Framework",
      "Exception Handling Patterns",
      "File I/O Streams & Unit Testing",
    ],
  },
  {
    id: "core-java-multithreading",
    category: "Course Certificate",
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    title: "Core Java - Multithreading and Classes",
    description:
      "Course focusing on thread lifecycles, synchronization, concurrency, inner classes, interfaces, and abstract classes in Java.",
    issuer: "LearnKartS via Coursera",
    obtained: "February 13, 2025",
    previewImg: "/certs/cert-core-java-multithreading.png",
    fileUrl: "/certs/core-java-multithreading.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/623047ada10f60142f9dd149f2af5adc",
    keyPoints: [
      "Multithreading & Synchronization",
      "Thread Lifecycles & Concurrency",
      "Inner & Anonymous Classes",
      "Interfaces & Abstract Classes",
    ],
  },
  {
    id: "core-java-foundations",
    category: "Course Certificate",
    badgeImg: "/certs/learnkarts-logo.png",
    badgeAlt: "LearnKartS",
    title: "Core Java - Foundations",
    description:
      "Foundational course covering Java syntax, control structures, methods, arrays, and core object-oriented programming concepts.",
    issuer: "LearnKartS via Coursera",
    obtained: "February 13, 2025",
    previewImg: "/certs/cert-core-java-foundations.png",
    fileUrl: "/certs/core-java-foundations.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/ad2f83b18c7ff0dcf5d31e2783568d33",
    keyPoints: [
      "Java Syntax & Basics",
      "Control Structures & Loops",
      "Methods & Arrays",
      "Object-Oriented Fundamentals",
    ],
  },
  {
    id: "web-applications-everybody",
    category: "Specialization",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Web Applications for Everybody",
    description:
      "Four-course specialization covering PHP web development, SQL and relational database design, database-backed applications, JavaScript, jQuery, and JSON.",
    issuer: "University of Michigan via Coursera",
    obtained: "June 8, 2025",
    previewImg: "/certs/cert-web-applications-1.png",
    fileUrl: "/certs/Web_Applications_for_Everybody.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/f5e59e14e90b8c4c74e488d6695574a6",
    keyPoints: [
      "PHP Web Applications",
      "SQL & Relational Database Design",
      "Cookies & Session Management",
      "JavaScript, jQuery & JSON",
    ],
    courses: [
      "Building Web Applications in PHP",
      "Introduction to Structured Query Language (SQL)",
      "Building Database Applications in PHP",
      "JavaScript, jQuery, and JSON",
    ],
  },
  {
    id: "web-design-everybody",
    category: "Specialization",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Web Design for Everybody: Basics of Web Development & Coding",
    description:
      "Specialization on semantic HTML5 markup, responsive CSS3 styling, JavaScript DOM interactivity, and WCAG accessibility standards.",
    issuer: "University of Michigan via Coursera",
    obtained: "April 7, 2025",
    previewImg: "/certs/cert-web-design-1.png",
    fileUrl: "/certs/Web_Design_for_Everybody.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/98f79f33c48fb401a3d59e8293795990",
    keyPoints: [
      "HTML5 Semantic Structure",
      "Advanced CSS3 Styling",
      "JavaScript DOM Interactivity",
      "WCAG Accessibility",
    ],
    courses: [
      "Introduction to HTML5",
      "Introduction to CSS3",
      "Interactivity with JavaScript",
      "Advanced Styling with Responsive Design",
      "Web Design for Everybody Capstone",
    ],
  },
  {
    id: "web-design-html5",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Introduction to HTML5",
    description:
      "Course certificate covering the foundations of HTML5 and accessible web page structure.",
    issuer: "University of Michigan via Coursera",
    obtained: "January 21, 2025",
    previewImg: "/certs/cert-introduction-html5.png",
    fileUrl: "/certs/Introduction%20to%20HTML5.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/e3e9664b48340d97bbcdc75c8972bf21",
    keyPoints: ["HTML5 Foundations", "Semantic Page Structure", "Accessible Web Content"],
  },
  {
    id: "web-design-css3",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Introduction to CSS3",
    description:
      "Course certificate covering CSS3 styling and accessible design principles.",
    issuer: "University of Michigan via Coursera",
    obtained: "February 16, 2025",
    previewImg: "/certs/cert-introduction-css3.png",
    fileUrl: "/certs/Introduction%20to%20CSS3.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/c7de611b0ae3b5f6310fca95c4f39c7e",
    keyPoints: ["CSS3 Styling", "Web Page Layout", "Accessible Visual Design"],
  },
  {
    id: "web-design-javascript-interactivity",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Interactivity with JavaScript",
    description:
      "Course certificate covering JavaScript-driven page interactions and accessible interactive features.",
    issuer: "University of Michigan via Coursera",
    obtained: "March 10, 2025",
    previewImg: "/certs/cert-interactivity-javascript.png",
    fileUrl: "/certs/Interactivity%20with%20JavaScript.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/583e40ce07f58bcff733d3d5acef627f",
    keyPoints: ["JavaScript Fundamentals", "Interactive Web Pages", "Accessible Interactions"],
  },
  {
    id: "web-design-responsive-styling",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Advanced Styling with Responsive Design",
    description:
      "Course certificate covering responsive, mobile-first styling, wireframes, fluid layouts, and media queries.",
    issuer: "University of Michigan via Coursera",
    obtained: "March 26, 2025",
    previewImg: "/certs/cert-advanced-responsive-design.png",
    fileUrl: "/certs/Advanced%20Styling%20with%20Responsive%20Design.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/eeac15bb597de9fb4119a76cc4a66213",
    keyPoints: ["Responsive Design", "Mobile-First Layouts", "Wireframes & Media Queries"],
  },
  {
    id: "web-design-capstone",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Web Design for Everybody Capstone",
    description:
      "Capstone course certificate for applying web design and development skills in a final project.",
    issuer: "University of Michigan via Coursera",
    obtained: "April 7, 2025",
    previewImg: "/certs/cert-web-design-capstone.png",
    fileUrl: "/certs/Web%20Design%20for%20Everybody%20Capstone.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/801e4b14acc51d6898d8ce16f5eb50fc",
    keyPoints: ["Web Design Capstone", "Applied HTML, CSS & JavaScript", "Final Project"],
  },
  {
    id: "web-applications-javascript-jquery-json",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "JavaScript, jQuery, and JSON",
    description:
      "Course certificate covering JavaScript, jQuery, and JSON for web applications.",
    issuer: "University of Michigan via Coursera",
    obtained: "June 8, 2025",
    previewImg: "/certs/cert-javascript-jquery-json.png",
    fileUrl: "/certs/JavaScript%2C%20jQuery%2C%20and%20JSON.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/b1602d0856d641505033f22cf0c74f48",
    keyPoints: ["JavaScript", "jQuery", "JSON Data"],
  },
  {
    id: "web-applications-database-php",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Building Database Applications in PHP",
    description:
      "Course certificate covering database-backed web applications built with PHP.",
    issuer: "University of Michigan via Coursera",
    obtained: "June 8, 2025",
    previewImg: "/certs/cert-building-database-php.png",
    fileUrl: "/certs/Building%20Database%20Applications%20in%20PHP.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/8506ff74bf58c3498da347dca5169134",
    keyPoints: ["PHP", "Database-Backed Applications", "CRUD Workflows"],
  },
  {
    id: "web-applications-sql",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Introduction to Structured Query Language (SQL)",
    description:
      "Course certificate covering foundational SQL queries and relational database concepts.",
    issuer: "University of Michigan via Coursera",
    obtained: "June 6, 2025",
    previewImg: "/certs/cert-introduction-sql.png",
    fileUrl: "/certs/Introduction%20to%20Structured%20Query%20Language%20(SQL).pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/e9c222665b11348b0e5249425f66b91f",
    keyPoints: ["SQL Queries", "Relational Databases", "Data Retrieval & Manipulation"],
  },
  {
    id: "web-applications-php",
    category: "Course Certificate",
    badgeImg: "/certs/umich-logo.png",
    badgeAlt: "University of Michigan",
    title: "Building Web Applications in PHP",
    description:
      "Course certificate covering server-side web application development with PHP.",
    issuer: "University of Michigan via Coursera",
    obtained: "June 2, 2025",
    previewImg: "/certs/cert-building-web-applications-php.png",
    fileUrl: "/certs/Building%20Web%20Applications%20in%20PHP.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/4002928c63981b0caba3ddd14fa9d2ed",
    keyPoints: ["PHP Web Development", "Server-Side Programming", "Web Application Fundamentals"],
  },
  {
    id: "project-management-principles",
    category: "Specialization",
    badgeImg: "/certs/uci-logo.png",
    badgeAlt: "University of California, Irvine",
    title: "Project Management Principles and Practices",
    description:
      "Four-course specialization covering project initiation and planning, work breakdown structures, budgeting, scheduling, risk, and change management.",
    issuer: "University of California, Irvine (UCI) via Coursera",
    obtained: "July 14, 2026",
    previewImg: "/certs/cert-project-management-1.png",
    fileUrl: "/certs/Project_Management_Principles_and_Practices.pdf",
    fileType: "pdf",
    verifyUrl: "https://coursera.org/share/6e69dd59712aedf03b9c63bbb84f7524",
    keyPoints: [
      "Project Scope & Planning",
      "Work Breakdown Structures",
      "Budgeting & Scheduling",
      "Risk & Change Management",
    ],
    courses: [
      "Initiating and Planning Projects",
      "Budgeting and Scheduling Projects",
      "Managing Project Risks and Changes",
      "Project Management Project",
    ],
  },
  {
    id: "nasa-space-apps-2026",
    category: "Award",
    badgeImg: "/certs/nasa-space-apps-logo.png",
    badgeAlt: "NASA Space Apps Challenge",
    title: "Galactic Problem Solver — NASA Space Apps Challenge 2026",
    description:
      "Certificate from the 2026 NASA Space Apps Challenge for participation and efforts to address challenges on Earth and in space.",
    issuer: "NASA Space Apps Challenge",
    obtained: "November 14–15, 2026",
    previewImg: "/images/events/nasa-space-apps-2026/certificate.webp",
    fileUrl: "/images/events/nasa-space-apps-2026/certificate.png",
    fileType: "image",
    verifyUrl: "/images/events/nasa-space-apps-2026/certificate.png",
    keyPoints: [
      "NASA Space Apps Challenge 2026",
      "Galactic Problem Solver",
      "Ho Chi Minh City local event",
      "November 14–15, 2026",
    ],
  },
  {
    id: "hackathon-semifinal",
    category: "Award",
    badgeImg: "/certs/hackathon-logo.svg",
    badgeAlt: "FESE — Sàn Giao Dịch Chứng Khoán Ảo",
    title: "Hackathon Semifinal Round Participant",
    description:
      "Certificate recognizing participation in the semifinal round of The Finnovative Hackathon, organized by FESE - Sàn Giao Dịch Chứng Khoán Ảo.",
    issuer: "FESE — Sàn Giao Dịch Chứng Khoán Ảo",
    obtained: "January 17, 2026",
    previewImg: "/certs/Cert_Hackathon.png",
    fileUrl: "/certs/Cert_Hackathon.png",
    fileType: "image",
    verifyUrl: "/certs/Cert_Hackathon.png",
    keyPoints: [
      "The Finnovative Hackathon",
      "Semifinal Round Participant",
      "Organized by FESE",
      "January 17, 2026",
    ],
  },
  {
    id: "fpt-fall-2025",
    category: "Academic",
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    title: "Honorable Student — Fall 2025",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Fall 2025 trimester.",
    issuer: "FPT University Ho Chi Minh City",
    obtained: "Issued March 5, 2026",
    previewImg: "/certs/cert-fall-2025-1.png",
    fileUrl: "/certs/SVG-Fall2025.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Fall2025.pdf",
    keyPoints: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Fall 2025",
      "FPT University",
    ],
  },
  {
    id: "fpt-summer-2025",
    category: "Academic",
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    title: "Honorable Student — Summer 2025",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Summer 2025 trimester.",
    issuer: "FPT University Ho Chi Minh City",
    obtained: "Issued October 23, 2025",
    previewImg: "/certs/cert-summer-2025-1.png",
    fileUrl: "/certs/SVG-Summer2025.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Summer2025.pdf",
    keyPoints: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Summer 2025",
      "FPT University",
    ],
  },
  {
    id: "fpt-fall-2024",
    category: "Academic",
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    title: "Honorable Student — Fall 2024",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Fall 2024 trimester.",
    issuer: "FPT University Ho Chi Minh City",
    obtained: "Issued March 3, 2025",
    previewImg: "/certs/cert-fall-2024-1.png",
    fileUrl: "/certs/SVG-Fall2024.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Fall2024.pdf",
    keyPoints: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Fall 2024",
      "FPT University",
    ],
  },
  {
    id: "fpt-summer-2024",
    category: "Academic",
    badgeImg: "/certs/fpt-logo.png",
    badgeAlt: "FPT University",
    title: "Honorable Student — Summer 2024",
    description:
      "Certificate of Merit awarded by FPT University for recognition as an Honorable Student of the Summer 2024 trimester.",
    issuer: "FPT University Ho Chi Minh City",
    obtained: "Issued November 15, 2024",
    previewImg: "/certs/cert-summer-2024-1.png",
    fileUrl: "/certs/SVG-Summer2024.pdf",
    fileType: "pdf",
    verifyUrl: "/certs/SVG-Summer2024.pdf",
    keyPoints: [
      "Certificate of Merit",
      "Honorable Student of Trimester",
      "Summer 2024",
      "FPT University",
    ],
  },
  ...COURSE_CERTIFICATES.map((cert) => ({
    id: cert.id,
    category: cert.category,
    badgeImg: cert.badgeImg,
    badgeAlt: cert.badgeAlt,
    title: cert.title,
    description: cert.description,
    issuer: cert.name,
    obtained: cert.obtained,
    previewImg: cert.previewImg,
    fileUrl: cert.fileUrl,
    fileType: cert.fileType,
    verifyUrl: cert.verifyUrl,
    keyPoints: [...cert.points],
  })),
];

const normalizeCourseTitle = (title: string) => title.toLowerCase().replace(/[^a-z0-9]/g, "");

const getCourseCertificate = (courseTitle: string) => {
  const normalizedTitle = normalizeCourseTitle(courseTitle);
  return ALL_CERTIFICATIONS.find(
    (cert) =>
      cert.category === "Course Certificate" &&
      normalizeCourseTitle(cert.title) === normalizedTitle,
  );
};

interface AllCertificationsProps {
  onBack: () => void;
}

export default function AllCertifications({ onBack }: AllCertificationsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [selectedCert, setSelectedCert] = useState<DetailedCertItem | null>(null);
  const [courseParent, setCourseParent] = useState<DetailedCertItem | null>(null);

  const closeCertModal = () => {
    setSelectedCert(null);
    setCourseParent(null);
  };

  const filters = ["All", "Specialization", "Course Certificate", "Academic", "Award"];

  const filteredCerts =
    activeFilter === "All"
      ? ALL_CERTIFICATIONS
      : ALL_CERTIFICATIONS.filter((c) => c.category === activeFilter);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeCertModal();
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  return (
    <div className="certs-page surface-light animate-fade-in">
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
          <ShutterTitle text="ALL CERTIFICATIONS" />
        </h1>
        <p>Descriptions, topics, dates and visual proof.</p>
      </header>

      {/* Filter Tabs */}
      <div className="certs-page__filters" role="tablist" aria-label="Filter certifications">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            role="tab"
            aria-selected={activeFilter === filter}
            className={activeFilter === filter ? "is-active" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Certifications Grid */}
      <div className="certs-page__grid">
        {filteredCerts.map((cert) => (
          <article key={cert.id} className="certs-page__card">
            {/* Top Visual Proof Thumbnail */}
            <button
              type="button"
              className="certs-page__thumb"
              onClick={() => setSelectedCert(cert)}
              aria-label={`View certificate proof for ${cert.title}`}
            >
              <img
                src={cert.previewImg}
                alt={cert.title}
                loading="lazy"
              />
            </button>

            {/* Card Content Body */}
            <div className="certs-page__body">
              <em>{cert.category}</em>
              <h2>{cert.title}</h2>
              <p>{cert.description}</p>

              <dl>
                <div>
                  <dt>ISSUER</dt>
                  <dd>{cert.issuer}</dd>
                </div>
                <div>
                  <dt>OBTAINED</dt>
                  <dd>{cert.obtained}</dd>
                </div>
              </dl>

              <h3>KEY POINTS</h3>
              <ul>
                {cert.keyPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {/* Action Buttons with Signature Gradient Border */}
              <div className="certs-page__actions">
                <button
                  type="button"
                  className="certs__gradient-btn"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`View certificate ${cert.title}`}
                >
                  <div className="certs__gradient-content">
                    <Eye size={13} />
                    <span>View certificate</span>
                  </div>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="certs__gradient-btn"
                  aria-label={`Verify ${cert.title}`}
                >
                  <div className="certs__gradient-content">
                    <Check size={13} className="text-emerald-500" />
                    <span>Verify</span>
                  </div>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Euloge Exact 2-Column Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertModal}
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              className="cert-modal__panel"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                className="cert-modal__close"
                onClick={closeCertModal}
                aria-label="Close dialog"
              >
                <X size={18} />
              </button>

              {/* Left Column: Visual Proof Document Viewport */}
              <div className="cert-modal__media">
                <img
                  src={selectedCert.previewImg}
                  alt={selectedCert.title}
                />
              </div>

              {/* Right Column: Metadata, Course Breakdown & Actions */}
              <aside className="cert-modal__meta">
                {courseParent && selectedCert.category === "Course Certificate" && (
                  <button
                    type="button"
                    className="cert-modal__back-to-specialization"
                    onClick={() => {
                      setSelectedCert(courseParent);
                      setCourseParent(null);
                    }}
                  >
                    <ArrowLeft size={13} />
                    <span>Back to {courseParent.title}</span>
                  </button>
                )}
                <em>{selectedCert.category}</em>
                <h3>{selectedCert.title}</h3>
                <p>{selectedCert.description}</p>

                <dl>
                  <div>
                    <dt>ISSUER</dt>
                    <dd>{selectedCert.issuer}</dd>
                  </div>
                  <div>
                    <dt>OBTAINED</dt>
                    <dd>{selectedCert.obtained}</dd>
                  </div>
                </dl>

                {/* Course Breakdown for Specializations / Academic distictions */}
                {selectedCert.courses && selectedCert.courses.length > 0 && (
                  <section className="cert-modal__courses">
                    <h4>Specialization Curriculum</h4>
                    <p>Courses completed and verified within this curriculum:</p>
                    <ul>
                      {selectedCert.courses.map((course) => (
                        <li key={course}>
                          {getCourseCertificate(course) ? (
                            <button
                              type="button"
                              className="cert-modal__course-link"
                              onClick={() => {
                                const courseCert = getCourseCertificate(course);
                                if (!courseCert) return;
                                setCourseParent(selectedCert);
                                setSelectedCert(courseCert);
                              }}
                              aria-label={`Open certificate for ${course}`}
                            >
                              <strong>{course}</strong>
                              <span>View course certificate</span>
                            </button>
                          ) : (
                            <div>
                              <strong>{course}</strong>
                              <span>{selectedCert.issuer.split(" via ")[0]} · Course</span>
                            </div>
                          )}
                          <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                            <Check size={13} />
                            Certificate
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* Footer Modal Actions */}
                <div className="cert-modal__actions">
                  <a
                    href={selectedCert.fileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-[#111] hover:opacity-70 flex items-center gap-2 font-medium underline underline-offset-4"
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
              </aside>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

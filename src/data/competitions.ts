export interface CompetitionPhoto {
  /** Path under /public, e.g. "/images/events/nasa-2026/pitch.webp". No spaces or ":" in file names. */
  src: string;
  alt: string;
}

export interface Competition {
  id: string;
  name: string;
  /** Short label used on project badges. */
  shortName: string;
  date: string;
  location?: string;
  /** Award or placement, e.g. "Top 10" or "Second Prize". */
  result?: string;
  role?: string;
  summary: string;
  /** id of the related entry in ALL_PROJECTS, if the competition produced a code project. */
  projectId?: string;
  /** First photo is used as the card cover. */
  photos: CompetitionPhoto[];
}

export const COMPETITIONS: Competition[] = [
  {
    id: "it-consultant-challenge-2026",
    name: "IT Consultant Challenge 2026",
    shortName: "IT Consultant Challenge 2026",
    date: "2026",
    result: "Top 4 of 160 teams",
    role: "Analysis, budget & coordination",
    summary:
      "Three rounds as team NEW AURA: a written proposal, a working MVP (Nordic Flow) with documentation, then a live pitch to a changed brief with a 30% smaller budget and a mandatory CRM migration. I led the documents, analysis and budget, and presented the revised proposal.",
    projectId: "nordic-flow",
    photos: [
      {
        src: "/images/events/it-consultant-2026/team-working.webp",
        alt: "Team NEW AURA working on the Nordic Flow MVP",
      },
      {
        src: "/images/events/it-consultant-2026/replay-results.webp",
        alt: "Nordic Flow history replay: optimised plan against the plan actually shipped",
      },
      {
        src: "/images/events/it-consultant-2026/review.webp",
        alt: "Nordic Flow review and approve screen",
      },
      {
        src: "/images/events/it-consultant-2026/audit.webp",
        alt: "Nordic Flow hash-chained audit trail",
      },
    ],
  },
  {
    id: "nasa-space-apps-hcmc-2026",
    name: "NASA Space Apps Challenge HCMC 2026",
    shortName: "NASA Space Apps HCMC 2026",
    date: "Nov 14–15, 2026",
    location: "Ho Chi Minh City",
    role: "Web app & API",
    summary:
      "48-hour challenge on harmonizing MODIS and VIIRS fire hotspots. Our team built FireCalendar, a fire calendar that stays comparable across 2000–2025; I built the web app and API on top of the data team's harmonization model.",
    projectId: "firecalendar",
    photos: [
      {
        src: "/images/events/nasa-space-apps-2026/firecalendar.webp",
        alt: "FireCalendar overview: fire hexagon map and monthly activity chart",
      },
      {
        src: "/images/events/nasa-space-apps-2026/certificate.webp",
        alt: "NASA Space Apps Challenge 2026 Galactic Problem Solver certificate",
      },
    ],
  },
  {
    id: "seal-hackathon-2026",
    name: "SEAL Hackathon Summer 2026",
    shortName: "SEAL Hackathon 2026",
    date: "Summer 2026",
    location: "FPT University",
    summary:
      "Software Engineering Agile League hackathon at FPT University. Our five-person team designed FarmOps AI, a closed-loop farm operations system: MQTT sensor telemetry feeds a deterministic trust and physics engine, coordinated agents diagnose, plan and challenge each other, and every action needs human approval and is verified against the expected outcome.",
    photos: [
      {
        src: "/images/events/seal-hackathon-2026/team.webp",
        alt: "Team at the SEAL Hackathon Summer 2026 backdrop",
      },
      {
        src: "/images/events/seal-hackathon-2026/team-working.webp",
        alt: "Working on FarmOps AI during the hackathon",
      },
      {
        src: "/images/events/seal-hackathon-2026/farmops-architecture.webp",
        alt: "FarmOps AI architecture: ingestion, storage, trust engine, multi-agent orchestration, approval, verification",
      },
      {
        src: "/images/events/seal-hackathon-2026/farmops-pipeline.webp",
        alt: "FarmOps AI multi-agent pipeline: sense, reason, challenge, plan, approve, act, verify, replan",
      },
    ],
  },
  {
    id: "finnovative-hackathon-2026",
    name: "The Finnovative Hackathon 2026",
    shortName: "Finnovative Hackathon 2026",
    date: "Jan 17, 2026",
    result: "Semifinalist · Top 8 of 250+ teams",
    summary:
      "Fintech hackathon organized by FESE (Sàn Giao Dịch Chứng Khoán Ảo). Our team advanced past the opening round into the semifinal, placing in the top 8 of more than 250 teams.",
    photos: [
      {
        src: "/images/events/finnovative-2026/certificate.webp",
        alt: "The Finnovative Hackathon semifinal round certificate",
      },
    ],
  },
];

export const getCompetition = (id: string) => COMPETITIONS.find((c) => c.id === id);

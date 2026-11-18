export type ExperienceEntry = {
  id: string;
  title: string;
  company: string;
  dateRange: string;
  /** Location, team, or other context line under the organization */
  context?: string;
  /** Supervisors or collaborators */
  supervisor?: string;
  highlights?: string[];
};

export type ExperienceGroup = {
  id: string;
  label: string;
  entries: ExperienceEntry[];
};

export const experienceGroups: ExperienceGroup[] = [
  {
    id: "research",
    label: "Research Experience",
    entries: [
      {
        id: "grad-research",
        title: "Graduation Research Project, Thinking with AI",
        company: "Emily Carr University",
        dateRange: "Sep 2026 – Apr 2027",
        supervisor: "Supervisors: Dr. Manuhuia Barcham, Eugenia Bertulis",
        highlights: [
          "Proposal: User-Adjustable Levels of AI Involvement to Sustain Human Cognitive Engagement, a “Thinking Dial” that lets users choose how much of the thinking AI does.",
          "Planned study: interviews and a one-week diary study (6–8 people), then a Wizard-of-Oz experiment (n = 32, 3 × 2 mixed design) measuring accuracy, over-reliance, retention, workload and trust.",
          "Completed TCPS 2: CORE research ethics training.",
        ],
      },
      {
        id: "shumka-psychsafe",
        title: "Design Researcher, Shumka Centre × PsychSafe",
        company: "Emily Carr University",
        dateRange: "Aug 2026 – Present",
        supervisor: "Supervisor: Colby May",
        highlights: [
          "Evaluating the accessibility and usability of a pre-launch workplace psychological-safety platform for users with varied mental-health literacy.",
          "Completed a heuristic evaluation; interviews with 4–5 pilot users and usability testing to follow.",
        ],
      },
      {
        id: "metacreation",
        title: "Volunteer Research Assistant, Metacreation Lab for Creative AI",
        company: "Simon Fraser University",
        dateRange: "Jun 2026 – Aug 2026",
        context: "Surrey, BC",
        highlights: [
          "Evaluated how well Autolume, the lab’s generative-AI art tool, communicates what its models are doing, combining five human–AI interaction principles with Nielsen’s heuristics and verifying claims against the source code.",
          "Identified 17 usability problems (2 major) and 5 prioritized recommendations, presented to the development team.",
        ],
      },
      {
        id: "shumka-disposal-queen",
        title: "Design Researcher, Shumka Centre × Disposal Queen",
        company: "Emily Carr University",
        dateRange: "Sep 2025 – Dec 2025",
        supervisor: "Supervisors: Colby May, Gill Barros",
        highlights: [
          "Ran usability testing and competitive analysis of property managers’ disposal workflows.",
          "As sole designer, redesigned the customer portal, which has since launched.",
        ],
      },
      {
        id: "healthsync",
        title: "UX Researcher & Designer, HealthSync AI",
        company: "ISM Creatives",
        dateRange: "Sep 2025 – Dec 2025",
        context: "Remote · 3-person team",
        highlights: [
          "Interviewed 3 people living with diabetes and analyzed Apple Health, Fitbit, Oura and MyChart; a key finding was that alert fatigue erodes trust.",
          "Independently designed the mobile and Apple Watch interfaces and delivered an interactive hi-fi prototype.",
        ],
      },
    ],
  },
  {
    id: "technical",
    label: "Technical Experience",
    entries: [
      {
        id: "persustain",
        title: "AI/ML Developer, Persustain (carbon-footprint app)",
        company: "ISM Creatives",
        dateRange: "Jan 2026 – May 2026",
        context: "Remote",
        highlights: [
          "Built the AI pipeline that turns daily activities into carbon-emission estimates using rule-based emission factors and the Climatiq API.",
          "Used an LLM (GPT-4.1-mini) only for explanations; all numbers are computed in code, with JSON-schema outputs and audit logging to prevent hallucination.",
          "Stack: TypeScript, Node.js, Firebase Cloud Functions, Firestore, OpenAI API, Climatiq API.",
        ],
      },
    ],
  },
  {
    id: "industry",
    label: "Design Industry Experience",
    entries: [
      {
        id: "cuddles-learning",
        title: "Visual Design Intern",
        company: "Cuddles Learning Inc.",
        dateRange: "Aug 2024 – Jan 2025",
        context: "Remote",
      },
      {
        id: "skillhat",
        title: "Product Design Intern",
        company: "SkillHat",
        dateRange: "Apr 2024 – Aug 2024",
        context: "Remote",
      },
    ],
  },
];

export type RecognitionEntry = {
  id: string;
  label: string;
  title: string;
  detail: string;
};

export const recognitionEntries: RecognitionEntry[] = [
  {
    id: "persian-miniature",
    label: "Exhibition",
    title: "Persian Miniature",
    detail:
      "Max/MSP audiovisual work in which video speed follows the audio’s tempo. End of Year Exhibition, Emily Carr University, Vancouver, 2024.",
  },
  {
    id: "flui",
    label: "Leadership & Service",
    title: "Lead Mentor, FLUI (For the Love of UI) Hackathon",
    detail: "Interaction Design Department, Emily Carr University, March 2025.",
  },
];

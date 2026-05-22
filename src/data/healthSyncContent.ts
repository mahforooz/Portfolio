/**
 * Case study copy from Portfolio Case Studies-4.pdf (HealthSync AI).
 */

import type { GallerySlide } from "@/components/CaseStudyImageGallery";

export const healthSync = {
  tagline:
    "Designing a human-centered AI healthcare experience for preventive monitoring and remote care",

  heroMeta: {
    role: "UX/UI Designer",
    timeline: "August – December 2025",
    team: "ISM Creative Company",
    tools: ["Figma", "Apple Watch UI", "Interactive prototyping", "Heuristic evaluation"],
  },

  overviewIntro:
    "HealthSync AI is a conceptual healthcare platform designed to support chronic condition management and preventive care through wearable devices, contextual AI insights, and collaborative care experiences. The project explored how AI could transform fragmented health data into understandable and emotionally supportive guidance for patients, caregivers, and clinicians.",

  overviewContribution:
    "I collaborated on UX research and designed the complete mobile and Apple Watch interface system for the final interactive hi-fi prototype.",

  overviewMocksAlt:
    "HealthSync AI mobile screens: home dashboard, weekly insights, monthly report, today’s summary, and suggested actions",
  overviewMocksCaption: "Hi-fi prototype · mobile platform screens",

  collaboratedIntro: "I collaborated on:",
  collaboratedBullets: [
    "UX research",
    "heuristic analysis",
    "secondary research",
  ],

  independentIntro: "I independently designed:",
  independentBullets: [
    "mobile interfaces",
    "Apple Watch experience",
    "AI interaction patterns",
    "escalation flows",
    "reporting dashboards",
    "the final interactive prototype",
  ],

  problemIntro:
    "Managing chronic conditions often requires patients to navigate disconnected health systems, overwhelming dashboards, and repetitive manual tracking. Many healthcare platforms communicate health information in ways that unintentionally increase anxiety through excessive alerts, clinical language, and dense data visualization.",
  problemSecondary:
    "At the same time, caregivers and clinicians struggle with fragmented patient information and limited visibility into day-to-day health behaviors.",
  problemClosing:
    "We identified an opportunity to design a calmer and more collaborative healthcare experience that supports preventive care without overwhelming users.",

  researchIntro:
    "The project began with heuristic analysis and secondary research focused on:",
  researchTopics: [
    "healthcare UX",
    "wearable ecosystems",
    "chronic condition management",
    "remote patient monitoring",
    "AI trust and explainability",
  ],
  researchClosing:
    "We analyzed products such as Apple Health, Fitbit, Oura, and MyChart to understand how existing systems communicate health information and support long-term engagement.",

  keyInsights: [
    {
      title: "Healthcare experiences are deeply emotional",
      body: "Many healthcare apps unintentionally increase stress through alarming notifications and overly clinical communication patterns.",
    },
    {
      title: "Users need guidance, not more data",
      body: "Most systems display large amounts of biometric information without helping users understand what the data actually means.",
    },
    {
      title: "Alert fatigue reduces trust",
      body: "Excessive notifications often lead users to disengage from monitoring systems over time.",
    },
    {
      title: "Care is collaborative",
      body: "Healthcare management frequently involves caregivers, family members, nurses, and clinicians, not just individual patients.",
    },
  ],
  insightsClosing:
    "These insights shaped our approach to calm interaction design, progressive escalation, and contextual AI guidance.",

  strategyIntro: "The experience was designed around several core principles:",
  strategyPrinciples: [
    "Calm by default, reducing stress through emotionally supportive interactions",
    "Human-centered AI, AI supports users rather than replacing clinicians",
    "Low cognitive load, lightweight interactions during stressful moments",
    "Progressive escalation, interventions increase gradually depending on severity",
    "Collaborative care, patients, caregivers, and clinicians share contextual understanding",
  ],
  strategyClosing:
    "Instead of presenting users with dense dashboards and urgent alerts, the system focuses on contextual guidance and long-term health awareness.",

  journeyIntro: "The platform was structured around a continuous healthcare journey that includes:",
  journeyStages: [
    "onboarding and trust building",
    "passive monitoring",
    "contextual nudges",
    "caregiver coordination",
    "escalation and intervention",
    "longitudinal reporting",
  ],
  journeyClosing:
    "The goal was to shift the experience from reactive health tracking toward proactive and collaborative preventive care.",

  journeyMapsAlt:
    "User journey maps for patient setup and onboarding and caregiver first login and patient connection",
  journeyMapsCaption:
    "Journey maps · patient onboarding and caregiver connection flows",

  aiIntro:
    "The AI system continuously analyzes behavioral and biometric patterns including:",
  aiSignals: [
    "glucose variability",
    "sleep",
    "movement",
    "medication adherence",
    "heart rate trends",
  ],
  aiTranslation:
    "Rather than overwhelming users with medical terminology, the system translates patterns into understandable and actionable guidance.",
  aiExample:
    "For example, instead of displaying only a glucose spike, the app explains what may be happening and suggests small actions such as hydration or a short walk.",
  aiPrinciplesIntro: "The AI was intentionally designed to:",
  aiPrinciples: ["support", "contextualize", "guide"],
  aiPrinciplesClosing: "rather than diagnose.",

  watchIntro:
    "The Apple Watch companion experience focused on glanceable and low-friction healthcare interactions. Users can quickly log actions, receive lightweight alerts, and access health summaries without needing to constantly open the mobile app.",
  watchClosing:
    "Designing for wearable interactions helped make healthcare monitoring feel more ambient, accessible, and integrated into everyday routines.",

  watchMocksAlt:
    "Four Apple Watch screens: morning glucose snapshot, quick log actions, glucose nudge alert, and high escalation alert",
  watchMocksCaption:
    "Apple Watch · morning snapshot, quick log, nudges, and escalation alerts",

  visualIntro:
    "The visual system intentionally avoided traditional clinical aesthetics. Inspired by products such as Apple Health, Oura, and Calm, the interface uses:",
  visualTraits: [
    "soft gradients",
    "rounded cards",
    "spacious layouts",
    "restrained color palettes",
    "minimal visual noise",
  ],
  visualClosing:
    "to create a calmer and more emotionally supportive healthcare experience.",

  ethicsIntro:
    "Because the project explored AI-assisted healthcare experiences, ethical considerations became an important part of the design process.",
  ethicsTopicsIntro: "We explored questions around:",
  ethicsTopics: [
    "trust in AI systems",
    "alert fatigue",
    "emotional impact of notifications",
    "privacy and caregiver permissions",
    "preserving human oversight in healthcare",
  ],
  ethicsClosing:
    "These considerations heavily influenced both the interaction patterns and emotional tone of the experience.",

  outcomeIntro: "The final deliverable was a fully interactive hi-fi prototype consisting of:",
  outcomeBullets: [
    "a mobile healthcare platform",
    "Apple Watch companion experience",
    "AI-powered nudges",
    "caregiver coordination flows",
    "escalation systems",
    "longitudinal reporting interfaces",
  ],

  outcomeGallery: [
    {
      src: "/projects/healthsync-outcome-1.png",
      alt: "Enrollment and setup screens: welcome flow and care circle setup with family and clinical contacts",
      caption: "Enrollment & setup · trust building and care circle",
    },
    {
      src: "/projects/healthsync-outcome-2.png",
      alt: "Home dashboard and today’s summary showing glucose, mobility, and caregiver updates",
      caption: "Morning routine · passive monitoring and caregiver confirmation",
    },
    {
      src: "/projects/healthsync-outcome-3.png",
      alt: "Weekly insights and monthly report with glucose trends and pattern detection",
      caption: "Longitudinal progress · weekly and monthly reporting",
    },
    {
      src: "/projects/healthsync-outcome-4.png",
      alt: "Glucose nudge with suggested actions and patient logging confirmation flow",
      caption: "Nudge moments · timely actions and one-tap logging",
    },
    {
      src: "/projects/healthsync-outcome-5.png",
      alt: "High-risk alert, intervention timeline, and post-call care summary with nurse notes",
      caption: "Escalation & clinical intervention · alert through resolution",
    },
  ] satisfies GallerySlide[],

  outcomeSkillsIntro: "This project strengthened my skills in:",
  outcomeSkills: [
    "healthcare UX",
    "systems thinking",
    "wearable interaction design",
    "human-centered AI design",
  ],

  reflectionIntro:
    "This project changed how I think about AI-assisted experiences and healthcare technology.",
  reflectionLesson:
    "One of the biggest lessons I learned was that trust is shaped not only through functionality, but through emotional tone, interaction patterns, and clarity of communication.",
  reflectionClosing:
    "Rather than replacing human care, I became interested in how intelligent systems can support collaboration between patients, caregivers, clinicians, and technology in ways that feel calm, understandable, and empowering.",
};

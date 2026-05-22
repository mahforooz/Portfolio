/**
 * Persustain case study, condensed copy focused on backend / AI engineering.
 */

export const persustainPdf = {
  tagline:
    "Backend AI pipelines and deterministic emissions logic for an MVP sustainability app",

  heroMeta: {
    role: "AI & Backend Engineer",
    timeline: "January 2026 – April 2026",
    team: "ISM Creative Company",
    tools: [
      "Firebase (Cloud Functions, Firestore)",
      "TypeScript",
      "OpenAI API",
      "Climatiq API",
    ],
  },

  overviewIntro:
    "Persustain is an AI-supported sustainability platform designed to help users better understand the environmental impact of their daily behaviors through explainable carbon estimation, personalized sustainability insights, and contribution-based tracking.",

  overviewQuestionLead: "The project explored a central question:",

  overviewQuestion:
    "How can AI systems communicate environmental impact in ways that are understandable, trustworthy, and meaningful to non-expert users?",

  overviewContributionIntro:
    "My primary contribution focused on designing and implementing the backend AI architecture powering:",

  overviewContributionBullets: [
    "Emissions estimation",
    "Activity normalization",
    "Sustainability insight generation",
    "Contribution aggregation",
    "Recommendation systems",
  ],

  overviewClosing:
    "Rather than using AI purely for prediction or automation, the platform treated AI as an interpretive layer, helping users understand how sustainability data is generated, what assumptions are being made, and how everyday actions connect to larger environmental outcomes.",

  problemIntro:
    "Many green apps bury methodology or mix generative guesses with totals. The product goal was credible numbers plus readable explanations, not the other way around.",
  problemBullets: [
    "Keep calculation paths deterministic",
    "Isolate AI for narrative and caveats only",
    "Scale cleanly as more users aggregate contributions",
  ],

  roleIntro: "Hands-on backend and AI implementation for the MVP.",
  roleBullets: [
    "Cloud Functions architecture and APIs",
    "OpenAI and Climatiq integration",
    "Emissions and avoided-emissions semantics",
    "Firestore queries, aggregation, and cache keys",
  ],

  hybridIntro:
    "Architecture split deterministic environmental math from generative interpretation: models never fabricated core emission totals.",

  deterministicTitle: "Deterministic",
  deterministicBullets: [
    "Baselines and activity math",
    "Aggregation and trends",
    "Stored totals users can trace",
  ],

  aiTitle: "AI-assisted",
  aiBullets: [
    "Explanations and summaries",
    "Recommendation rationales",
    "Assumption callouts where useful",
  ],

  separationNote:
    "That boundary improved reliability and made dashboards easier to reason about.",

  behaviorIntro:
    "Early logic treated every logged action as additive emissions until we introduced avoided emissions and net framing.",
  modelConcepts: ["Actual CO₂", "Avoided CO₂", "Net impact"],
  netFormula: "net_co2_kg = actual_co2_kg − avoided_co2_kg",
  modelOutcome:
    "Virtuous behaviors (e.g. biking vs driving) showed as reductions versus baseline instead of oddly positive-only totals.",

  productModules: [
    {
      title: "Baseline",
      body: "Onboarding-derived weekly baseline.",
    },
    {
      title: "Activity pipeline",
      body: "Normalize logs → estimates → optional LLM explanations.",
    },
    {
      title: "Dashboard",
      body: "Trends and insights from stored aggregates.",
    },
    {
      title: "Contributions",
      body: "User-scoped aggregation into program-style rollups.",
    },
  ],

  technicalStackIntro: "Backend stack:",
  technicalStack: [
    "Firebase Cloud Functions (2nd Gen)",
    "Firestore",
    "TypeScript",
    "OpenAI API",
    "Climatiq API",
  ],

  coreServicesIntro: "Representative callable units:",
  coreServices: [
    "normalizeAndExplainActivity",
    "generateBaselineInsight",
    "generatePatternInsights",
    "generateEvidencePackSummary",
    "recommendProjectAndGoals",
  ],

  aggregationNote:
    "Multi-user aggregation exposed stale cross-user reads when caches and keys weren’t fully user-scoped. Tightened query shapes, cache keys, and refresh behavior so aggregates stayed isolated and predictable.",

  outcomeMvpIntro: "The final MVP included:",
  outcomeMvpBullets: [
    "onboarding-based emissions baselines",
    "AI-generated sustainability insights",
    "activity normalization infrastructure",
    "contribution aggregation systems",
    "recommendation logic",
    "scalable backend AI pipelines",
    "user-scoped dashboard architecture",
  ],

  futureContextIntro:
    "The project was later discussed in the context of future:",
  futureContextBullets: [
    "verification systems",
    "sustainability registries",
    "certification workflows",
    "scalable contribution infrastructure",
  ],

  reflectionIntersectionIntro:
    "Persustain became one of my strongest explorations of the intersection between:",
  reflectionThemes: [
    "human-centered AI",
    "explainability",
    "sustainability systems",
    "backend architecture",
    "interaction design",
  ],

  reflectionLesson:
    "One of the most valuable lessons from the project was recognizing that backend decisions are also UX decisions.",

  reflectionInfluenceIntro:
    "The structure of emissions logic, aggregation systems, and AI explanations directly influenced:",
  reflectionInfluences: [
    "how users interpreted environmental impact",
    "how trustworthy the platform felt",
    "how sustainability behaviors were emotionally framed",
  ],

  reflectionClosing:
    "This project strengthened my interest in building AI systems that combine technical implementation with human-centered interaction design and systems thinking.",
};


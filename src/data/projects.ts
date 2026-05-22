export interface Project {
  slug: string;
  title: string;
  tags: string[];
  shortDescription: string;
  summary: string;
  overview: string;
  myRole: string;
  researchProcess: string;
  sections: {
    problem: string;
    process: string;
    keyInsights: string;
    designDevelopment: string;
    finalOutcome: string;
    reflection: string;
  };
  /** Larger cards on home when true */
  featured?: boolean;
  /** Editorial layout hint for home cards */
  layout?: "wide" | "tall" | "standard";
  /** Path under /public for listing and card visuals */
  coverImage?: string;
}

export const projects: Project[] = [
  {
    slug: "persustain-ai",
    title: "Persustain",
    tags: ["Explainable AI", "Backend", "Sustainability", "Firebase", "TypeScript"],
    shortDescription:
      "Backend MVP: Firebase pipelines, deterministic emissions logic, LLM summaries, and hardened user-scoped aggregation.",
    summary:
      "Built and integrated the MVP’s backend, Climatiq + OpenAI, Cloud Functions/Firestore, activity normalization, net vs avoided emissions semantics, dashboards, contributions, and aggregation fixes.",
    overview:
      "Deterministic totals with AI only for narratives; tightened Firestore and cache semantics for trustworthy rollups.",
    myRole:
      "AI/backend engineer: Cloud Functions, Firestore schemas and queries, Climatiq/OpenAI integrations, normalization, explanations, aggregation, and collaborating with frontend.",
    researchProcess:
      "Iterated on deterministic vs generative boundaries, emission semantics for sustainable behaviors, and user-scoped caching under multi-user loads.",
    featured: true,
    layout: "standard",
    coverImage: "/projects/persustain-cover.png",
    sections: {
      problem:
        "Sustainability UIs oscillate between gamified simplicity and inaccessible density; users distrust opaque metrics and cannot relate actions to system-level outcomes.",
      process:
        "Defined a deterministic core for all numeric carbon outputs; delegated natural-language rationales and caveats to generative models only after validation.",
      keyInsights:
        "Net-impact semantics needed actual, avoided, and net CO₂ so virtuous behaviors read as reductions; multi-user aggregation required strict cache/query scoping.",
      designDevelopment:
        "Second-gen Cloud Functions (normalizeAndExplainActivity, baseline and pattern insights, evidence summaries, goals/recommendations) plus tightened Firestore query and refresh semantics.",
      finalOutcome:
        "MVP with baselines, activity interpretation, dashboard narratives, contribution aggregation, scaled pipelines and honesty-first labeling of simulated surfaces.",
      reflection:
        "Backend schemas and aggregation semantics are inseparable from trust and emotional framing of sustainable behavior.",
    },
  },
  {
    slug: "the-endless-journey",
    title: "The Endless Journey",
    tags: ["Unity", "Narrative Design", "Environmental Storytelling", "HDRP"],
    shortDescription:
      "Narrative survival game: migration, emotional health systems, and atmospheric world-building in Unity HDRP.",
    summary:
      "A PC narrative survival game where a young refugee awakens in a symbolic world, exploration, emotional survival mechanics, and environmental storytelling replace exposition-heavy dialogue.",
    overview:
      "Unity 6.2 / HDRP desktop game (Sep–Dec 2025): three-act structure, emotional health and calorie systems, NPC recovery, and fog-forward environments translating migration research into play.",
    myRole:
      "Solo designer & developer: narrative structure, environment and systems design, Unity implementation (Cinemachine, Timeline, UI Toolkit), interviews, and rebuild after data loss.",
    researchProcess:
      "Semi-structured interviews with migrants plus documentary research; insight-to-mechanic mapping (emotional drain, sparse NPCs, fog, calorie depletion); iterative playtesting on pacing and atmosphere.",
    featured: true,
    layout: "wide",
    coverImage: "/projects/endless-journey-cover.png",
    sections: {
      problem:
        "Sensitive topics risk flattening into spectacle; the design challenge was to create space for empathy without prescribing a single interpretation.",
      process:
        "Iterative scene assembly, testing readability of environmental cues, and refining interaction timing to support contemplative play.",
      keyInsights:
        "Silence, distance, and indirect cues often carried more weight than explicit text. Small interactions needed clear affordances.",
      designDevelopment:
        "Unity scenes, basic shaders, and interaction triggers tuned through repeated playthrough notes.",
      finalOutcome:
        "A playable slice demonstrating direction of travel for the larger narrative arc, documented for critique.",
      reflection:
        "Deepened my interest in XR-adjacent interaction and how immersion changes the ethics of representation.",
    },
  },
  {
    slug: "healthsync-ai",
    title: "HealthSync AI",
    tags: ["Healthcare UX", "Human-Centered AI", "Wearables", "Product Design"],
    shortDescription:
      "Concept platform for chronic care: calm mobile + Apple Watch UI, contextual AI guidance, and collaborative care flows.",
    summary:
      "Conceptual healthcare platform turning wearable and behavioral data into emotionally supportive guidance for patients, caregivers, and clinicians, without overwhelming dashboards or clinical tone.",
    overview:
      "Heuristic and secondary research (Apple Health, Fitbit, Oura, MyChart) informed calm-by-default principles, progressive escalation, longitudinal journey design, and a full hi-fi mobile + Watch prototype.",
    myRole:
      "UX/UI designer: collaborated on research and heuristics; independently designed mobile and Apple Watch UI, AI interaction patterns, escalation flows, reporting dashboards, and the interactive prototype.",
    researchProcess:
      "Healthcare UX, wearables, RPM, and AI explainability research; insight synthesis on emotional tone, alert fatigue, and collaborative care; iterative Figma prototyping.",
    featured: true,
    layout: "wide",
    coverImage: "/projects/healthsync-cover.png",
    sections: {
      problem:
        "Chronic care apps overwhelm with alerts and dense metrics while caregivers lack day-to-day visibility, anxiety and fragmentation block preventive care.",
      process:
        "Heuristic analysis and competitive review; journey mapping from onboarding through escalation; calm visual language and progressive disclosure of AI guidance.",
      keyInsights:
        "Care is emotional and collaborative; users need guidance not raw data; alert fatigue erodes trust, shaping calm interactions and contextual AI.",
      designDevelopment:
        "Mobile dashboards, Watch quick-log, AI nudges with plain-language explanations, caregiver coordination, escalation, and longitudinal reporting in hi-fi prototype.",
      finalOutcome:
        "Fully interactive hi-fi prototype (mobile + Apple Watch): AI-powered nudges, care coordination, and reporting, not a deployed clinical product.",
      reflection:
        "Trust in health AI is shaped by emotional tone and clarity as much as features, systems should empower collaboration, not replace human care.",
    },
  },
  {
    slug: "financial-transition-support-program-ftsp",
    title: "Financial Transition Support Program (FTSP)",
    coverImage: "/projects/ftsp-cover.png",
    tags: ["Service Design", "Co-Design", "UX Research", "Journey Mapping"],
    shortDescription:
      "University service ecosystem helping students navigate financial independence through peer learning, reflection, and mentorship.",
    summary:
      "Research-driven service design for 18–24 students: co-design workshops, journey maps, and FTSP, a human-centered alternative to one-off financial literacy courses.",
    overview:
      "Explored emotional and behavioral barriers to taxes, credit, and planning; prototyped workbook, Notion tracker, and financial help desk within a peer-supported university program.",
    myRole:
      "UX research, co-design facilitation, service design, journey mapping, and prototyping with Dorsa Nazarimanesh (INTD-310, Fall 2025).",
    researchProcess:
      "Secondary research on literacy and emotional barriers; student co-design workshops; iterative facilitation redesign; current/future journeys, blueprints, and ecosystem maps.",
    featured: true,
    layout: "standard",
    sections: {
      problem:
        "Students manage daily spending but avoid intimidating systems (taxes, investing, loans); informal learning creates uneven knowledge and avoidance, not lack of motivation.",
      process:
        "Secondary research plus co-design with domestic and international students; refined workshops for clarity and scaffolding after early exercises proved too abstract.",
      keyInsights:
        "Independence is emotional; complex systems get avoided; learning is social; confidence builds through practice, reflection, and ongoing support.",
      designDevelopment:
        "FTSP ecosystem: weekly peer sessions, guided workbook, Notion budget tracker, and physical financial help desk, supported by service blueprints.",
      finalOutcome:
        "Documented service concept reducing anxiety and building decision confidence through structured tasks, peer environments, and continuous mentorship access.",
      reflection:
        "Financial literacy is a systems and accessibility problem shaped by anxiety and trust, support must feel approachable and sustainable.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

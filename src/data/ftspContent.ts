/**
 * Case study copy from Portfolio Case Studies-5.pdf (FTSP).
 */

import type { GallerySlide } from "@/components/CaseStudyImageGallery";

export const ftsp = {
  tagline:
    "A research-driven service design project exploring how university students navigate financial independence",

  heroMeta: {
    role: "UX Research, Co-Design Facilitation, Service Design, Journey Mapping, Prototyping",
    timeline: "Fall 2025",
    course: "INTD-310 · Core Studio in Interaction Design",
    team: "Mahtab Foroozandeh & Dorsa Nazarimanesh",
    tools: [
      "Co-design workshops",
      "Journey mapping",
      "Service blueprinting",
      "Notion",
      "Prototyping",
    ],
  },

  overviewIntro:
    "Financial literacy resources often assume students already understand how financial systems work. However, many university students enter adulthood without structured support for navigating taxes, budgeting, loans, investing, or long-term financial planning.",

  overviewBody:
    "This project explored how students aged 18–24 experience the transition into financial independence emotionally, socially, and behaviorally. Through research, co-design workshops, and iterative prototyping, we designed the Financial Transition Support Program (FTSP), a university-based service that supports students through peer learning, guided reflection, habit-building, and ongoing mentorship.",

  overviewClosing:
    "Rather than designing a traditional educational platform, the project evolved into a service ecosystem focused on reducing anxiety, building confidence, and making financial systems feel more approachable.",

  problemIntro:
    "Our research revealed that students were generally confident managing small daily expenses, but struggled when interacting with larger financial systems such as:",
  problemSystems: ["taxes", "investing", "loans", "credit", "financial planning"],
  problemBarrier:
    "Many participants described these systems as intimidating, confusing, or inaccessible. As a result, avoidance became a recurring behavior pattern.",
  problemLearningIntro: "We also found that most students learned about money informally through:",
  problemLearningSources: [
    "family",
    "friends",
    "partners",
    "social media",
    "online communities",
  ],
  problemLearningClosing:
    "This created uneven financial knowledge and inconsistent support systems.",

  centralInsight:
    "Students were not avoiding financial responsibility because they lacked motivation, they were avoiding systems that felt overwhelming and difficult to understand.",

  secondaryResearchIntro: "We began with secondary research around:",
  secondaryResearchTopics: [
    "financial literacy",
    "accessibility in educational systems",
    "emotional barriers in decision-making",
    "gender and financial inequality",
    "trust in institutional systems",
  ],
  secondaryResearchClosing:
    "This research helped frame financial literacy as both an informational and emotional challenge.",

  coDesignIntro:
    "We facilitated co-design sessions with university students, including both domestic and international students.",
  coDesignTopics: [
    "financial habits",
    "perceptions of independence",
    "emotional stress around money",
    "support systems students trust",
    "barriers to engaging with financial systems",
  ],
  coDesignClosing:
    "An important insight that emerged naturally during these sessions was the value of peer discussion. Participants frequently exchanged advice, reassured one another, and shared personal experiences around financial uncertainty. This shifted our direction from designing a purely digital solution toward creating a more human-centered support service.",

  iterationIntro:
    "The project involved multiple rounds of testing and iteration, not only of the solution itself, but also of our research activities.",
  iterationProblem:
    "Initially, some co-design exercises were too abstract and created confusion for participants. Through facilitation testing, we learned that:",
  iterationLessons: [
    "clarity is more important than novelty",
    "participants need structured guidance",
    "reducing cognitive overload improves engagement",
  ],
  iterationRedesignIntro: "We redesigned the workshops using:",
  iterationRedesign: [
    "clearer prompts",
    "structured ideation activities",
    "step-by-step scaffolding",
    "more relatable examples",
  ],
  iterationClosing:
    "This process became an important lesson in designing accessible participatory experiences.",

  researchGallery: [
    {
      src: "/projects/ftsp-ecosystem-map.png",
      alt: "Ecosystem map centered on university students aged 18–24, with concentric rings for peers and family, structured systems like tax and financial aid, and macro influences such as banks and social media",
      caption: "Ecosystem map · stakeholders and systems shaping financial independence",
    },
    {
      src: "/projects/ftsp-empathy-map.png",
      alt: "Empathy map for students pursuing financial independence: thinks, feels, says, and does around budgeting, saving, anxiety, and seeking advice from family and peers",
      caption: "Empathy map · emotional and behavioral drivers from co-design research",
    },
  ] satisfies GallerySlide[],

  keyInsights: [
    {
      title: "Financial independence is emotional",
      body: "Participants associated financial independence with freedom, stability, adulthood, autonomy, and security. Financial confidence was closely tied to emotional reassurance, not just technical knowledge.",
    },
    {
      title: "Students avoid complex financial systems",
      body: "Participants felt comfortable with budgeting, saving, and daily spending, but often avoided taxes, investing, loans, and long-term financial planning. Fear of making mistakes frequently led to avoidance behaviors.",
    },
    {
      title: "Financial learning is social",
      body: "Students primarily learned through trusted relationships rather than formal education systems. This highlighted the importance of peer learning, approachable communication, and collaborative support environments.",
    },
    {
      title: "Confidence develops through practice",
      body: "Understanding finances theoretically was not enough. Confidence developed gradually through repetition, real-life application, reflection, and ongoing support.",
    },
  ],

  designOpportunity:
    "How might we support students through the emotional and practical transition into financial independence in a way that feels approachable, supportive, and actionable?",

  solutionIntro:
    "The final concept was the Financial Transition Support Program (FTSP), a university-based support service designed as an ongoing ecosystem rather than a one-time financial literacy course.",
  solutionCombinesIntro: "The service combines:",
  solutionCombines: [
    "weekly peer-supported sessions",
    "guided learning",
    "budgeting tools",
    "structured reflection",
    "accessible mentorship",
  ],
  solutionClosing:
    "The goal was not only to teach financial concepts, but to reduce anxiety and help students gradually build confidence in decision-making.",

  ecosystemModules: [
    {
      title: "Workbook",
      body: "A guided workbook designed to help students reflect on financial habits, practice weekly exercises, and build awareness gradually. The workbook focused on reducing overwhelm by breaking financial topics into smaller, approachable tasks.",
    },
    {
      title: "Budget & expense tracker",
      body: "A Notion-based budgeting tool that supported expense tracking, habit-building, and financial organization. Rather than functioning as a rigid finance tool, it encouraged reflection and consistency.",
    },
    {
      title: "Financial help desk",
      body: "A physical help desk where students could ask questions, receive mentorship, and access support during or after the program. This directly addressed one of the strongest research findings: students often avoid financial systems because they do not know where to seek reliable help.",
    },
  ],

  systemsIntro:
    "To better understand the student experience, we created current-state journey maps, future-state journey maps, service blueprints, and ecosystem maps.",
  systemsVisualized: [
    "emotional states",
    "support gaps",
    "institutional systems",
    "long-term service interactions",
  ],
  systemsClosing:
    "The service blueprint was especially valuable in identifying the relationship between visible student interactions, backstage operations, and ongoing support systems.",

  systemsGallery: [
    {
      src: "/projects/ftsp-current-journey.png",
      alt: "Current state journey map across five stages from family-based understanding through seeking external guidance, with doing, thinking, feeling, pain points, and opportunities",
      caption: "Current state journey map · informal learning to unsupported responsibility",
    },
    {
      src: "/projects/ftsp-future-journey.png",
      alt: "Future state journey map across eight program stages from recognizing need to acting independently, with touchpoints and how the service addresses pain points",
      caption: "Future state journey map · FTSP touchpoints from discovery to independence",
    },
    {
      src: "/projects/ftsp-service-blueprint.png",
      alt: "FTSP service blueprint with seven stages from awareness through ongoing support, showing user actions, frontstage touchpoints, and backstage operations",
      caption: "Service blueprint · frontstage and backstage across the program lifecycle",
    },
  ] satisfies GallerySlide[],

  whyWorks: [
    {
      title: "Small, structured tasks",
      body: "Breaking complex topics into manageable actions reduced overwhelm and made participation feel achievable.",
    },
    {
      title: "Peer learning environments",
      body: "Students learned more comfortably from people they trusted, reducing fear of judgment and encouraging discussion.",
    },
    {
      title: "Ongoing support",
      body: "The service emphasized continuous access to help rather than one-time instruction, helping students build confidence over time.",
    },
  ],

  storyboardAlt:
    "Eight-panel storyboard of Sarah’s journey through FTSP: from financial overwhelm and campus discovery through workshops, workbook, Notion tracker, help desk, to confidence and independence",
  storyboardCaption: "User storyboard · Sarah’s experience from confusion to financial independence",

  reflectionIntro:
    "This project shifted my understanding of financial literacy from being primarily an information problem to being a systems and accessibility problem.",
  reflectionBody:
    "Through research and co-design, I learned how emotional factors such as anxiety, uncertainty, and social trust strongly shape people’s willingness to engage with complex systems.",
  reflectionSkillsIntro: "The project also strengthened my skills in:",
  reflectionSkills: [
    "participatory research",
    "co-design facilitation",
    "service design",
    "systems thinking",
    "journey mapping",
    "research synthesis",
  ],
  reflectionClosing:
    "Most importantly, it reinforced the importance of designing support systems that feel approachable, human-centered, and sustainable over time.",
};

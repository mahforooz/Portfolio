/**
 * Case study copy from Portfolio Case Studies-3.pdf (The Endless Journey).
 */

import type { GallerySlide } from "@/components/CaseStudyImageGallery";

export const endlessJourney = {
  tagline:
    "A narrative survival game exploring migration, emotional survival, and environmental storytelling through interaction design",

  heroMeta: {
    role: "Solo Designer & Developer",
    timeline: "September – December 2025",
    team: "Solo student project · INTD-300 / INTD-310, Emily Carr University",
    platform: "PC desktop game",
    tools: [
      "Unity 6.2",
      "HDRP",
      "Cinemachine",
      "Timeline",
      "C#",
      "Unity UI Toolkit",
    ],
  },

  overviewIntro:
    "The Endless Journey is a narrative survival game exploring how digital environments and gameplay systems can communicate emotional experiences of migration, uncertainty, and adaptation.",

  overviewStory:
    "The game follows a young Syrian refugee girl who loses consciousness while escaping across a border and awakens in an unfamiliar symbolic world. Through environmental exploration, resource gathering, and social interaction, players experience migration not through direct exposition, but through atmosphere, emotional survival systems, and environmental storytelling.",

  overviewReframe:
    "Rather than approaching migration strictly as a political event, the project reframes it as an ongoing human experience connected to movement, fear, survival, and rebuilding throughout history.",

  researchFocusIntro:
    "This project explores how environmental storytelling and interaction systems within digital game environments can communicate emotional experiences of displacement and uncertainty. The project investigates:",
  researchFocusBullets: [
    "emotional interaction through gameplay systems",
    "atmospheric world-building",
    "symbolic survival mechanics",
    "environmental storytelling",
    "player emotional interpretation through interaction",
  ],
  researchFocusClosing:
    "Instead of relying on dialogue-heavy storytelling, the experience focuses on how players emotionally interpret unfamiliar spaces through navigation, atmosphere, and survival systems.",

  researchInsightsIntro:
    "To better understand emotional experiences connected to migration and displacement, I conducted semi-structured interviews with migrants and researched documentaries and articles related to refugee experiences and survival narratives.",
  researchThemesIntro: "Several recurring themes emerged:",
  researchThemes: [
    "unfamiliar environments create emotional instability",
    "isolation intensifies uncertainty",
    "survival is both physical and emotional",
    "human connection supports emotional recovery",
  ],
  researchThemesClosing:
    "These insights directly shaped the gameplay systems and environmental design.",

  insightTable: [
    {
      insight: "Emotional instability after migration",
      translation: "Gradually draining emotional health system",
    },
    {
      insight: "Isolation and uncertainty",
      translation: "Sparse environments and distant NPC placement",
    },
    {
      insight: "Human connection supports recovery",
      translation: "NPC interactions restore emotional health",
    },
    {
      insight: "Fear of unfamiliar environments",
      translation: "Fog-heavy atmospheric world design",
    },
    {
      insight: "Continuous movement creates exhaustion",
      translation: "Calorie depletion through exploration",
    },
  ] as const,

  narrativeIntro: "The experience is divided into three acts.",

  narrativeGallery: [
    {
      src: "/projects/endless-journey-narrative-1.png",
      alt: "In-game view of a mountain lake bordered by forest and rocky shore, with emotional health and calorie HUD visible",
      caption: "Act II · lake and mountain vista with survival HUD",
    },
    {
      src: "/projects/endless-journey-narrative-2.png",
      alt: "View from inside a dark cave looking out into a sunlit evergreen forest",
      caption: "Emerging from darkness · cave mouth framing the journey",
    },
    {
      src: "/projects/endless-journey-game-intro.mp4",
      alt: "Game intro cinematic for The Endless Journey",
      caption: "Act I · opening cinematic (GameIntro)",
      kind: "video",
    },
  ] satisfies GallerySlide[],
  acts: [
    {
      title: "Act I, Collapse and Awakening",
      body: "The game begins with a cinematic sequence of a young refugee girl escaping across a border during a stormy night. After collapsing from exhaustion, she awakens in an unfamiliar symbolic landscape inspired by prehistoric migration and survival.",
    },
    {
      title: "Act II, The Journey",
      body: "The main gameplay experience focuses on exploration, resource gathering, environmental navigation, and emotional survival. Players move through uncertain environments while searching for stability and human connection.",
    },
    {
      title: "Act III, Arrival",
      body: "The final act was planned as a symbolic transition from survival toward rebuilding identity and belonging. Due to time limitations, this section was not fully implemented.",
    },
  ],

  gameplayGallery: [
    {
      src: "/projects/endless-journey-gameplay-1.png",
      alt: "Inventory grid UI open over a forest scene, showing collected mushrooms in the first slots",
      caption: "Inventory & resource gathering · minimal grid UI",
    },
    {
      src: "/projects/endless-journey-gameplay-2.png",
      alt: "Player character standing in a sunlit forest clearing with emotional health and calorie HUD",
      caption: "Exploration · character in the journey environment",
    },
    {
      src: "/projects/endless-journey-gameplay-3.png",
      alt: "First-person view of a collectible mushroom on mossy rocks with an interaction prompt",
      caption: "Calorie system · gathering mushrooms in the world",
    },
    {
      src: "/projects/endless-journey-gameplay-4.png",
      alt: "Close-up of emotional health and calorie status bars showing 499/500 and 995/1000",
      caption: "Emotional health system · dual survival meters",
    },
  ] satisfies GallerySlide[],

  gameplaySystems: [
    {
      title: "Emotional health system",
      body: "Instead of representing physical injury, the health system represents emotional stability. Isolation and uncertainty gradually decrease the player’s emotional state over time, reframing survival mechanics as emotional systems rather than combat systems.",
    },
    {
      title: "Calorie system",
      body: "Movement consumes calories, connecting exploration with exhaustion and vulnerability. Players gather mushrooms throughout the environment to restore energy and maintain survival.",
    },
    {
      title: "NPC interaction system",
      body: "NPCs function as emotional recovery points within the environment. Interacting with them restores emotional health, symbolizing the importance of belonging and human connection during displacement and adaptation.",
    },
    {
      title: "Inventory & resource gathering",
      body: "Players collect mushrooms, wood, and stones while exploring the environment. The inventory system was intentionally designed to remain minimal and unobtrusive to preserve immersion and environmental focus.",
    },
  ],

  environmentalIntro:
    "A major focus of the project was investigating how digital environments communicate emotion through atmosphere and spatial design.",
  environmentalUsesIntro: "The game uses:",
  environmentalUses: [
    "fog to create uncertainty",
    "dense forests to increase tension",
    "open fields to create temporary emotional relief",
    "atmospheric lighting to shape emotional pacing",
    "distant NPC placement to reinforce loneliness",
  ],
  environmentalClosing:
    "Rather than relying heavily on exposition, the environment itself becomes part of the narrative system.",

  environmentalGallery: [
    {
      src: "/projects/endless-journey-environment-1.png",
      alt: "First-person view down a steep forested valley toward distant snowy mountains",
      caption: "Dense forest and vertical scale · tension through elevation",
    },
    {
      src: "/projects/endless-journey-environment-2.png",
      alt: "Sunny mountain valley with a shallow stream, sand banks, and snow-capped peaks",
      caption: "Open valley and stream · temporary relief in the landscape",
    },
    {
      src: "/projects/endless-journey-environment-3.png",
      alt: "Sunlit pine forest with a misty stream and rocky banks",
      caption: "Atmospheric lighting · fog and water in the forest",
    },
    {
      src: "/projects/endless-journey-environment-4.png",
      alt: "Forest stream with dappled sunlight, undergrowth, and distant rocky peaks",
      caption: "Environmental pacing · exploration through varied terrain",
    },
  ] satisfies GallerySlide[],

  technicalIntro:
    "The project was developed in Unity 6.2 using HDRP to create cinematic environmental lighting and atmospheric depth.",
  technicalSystemsIntro: "Key systems included:",
  technicalSystems: [
    "player controller",
    "emotional health system",
    "calorie depletion system",
    "inventory system",
    "NPC interaction system",
    "environmental audio",
    "UI management system",
  ],
  technicalClosing:
    "Cinemachine and Timeline were used to create cinematic transitions, emotional pacing, and unstable camera movement during stressful moments.",

  technicalGallery: [
    {
      src: "/projects/endless-journey-technical-1.png",
      alt: "C# AI_Movement script in Unity showing animator, move speed, walk/wait counters, and walking state",
      caption: "NPC movement · AI_Movement script (C#)",
    },
    {
      src: "/projects/endless-journey-technical-2.png",
      alt: "Unity project folder of C# scripts including inventory, UI bars, player movement, NPC, and interaction systems",
      caption: "Project scripts · inventory, UI, player, and interaction systems",
    },
  ] satisfies GallerySlide[],

  challengesIntro:
    "Shortly before playtesting, Unity crashed and large portions of the project were lost due to incomplete backups, including scenes, mechanics, and gameplay systems.",
  challengesClosing:
    "Rebuilding the project under significant time pressure became one of the biggest challenges of the development process. Although difficult, the experience strengthened my technical resilience, debugging skills, and ability to prioritize emotional experience over feature quantity.",

  reflectionIntro:
    "The Endless Journey became one of my first explorations into how digital environments can shape emotional understanding through interaction, atmosphere, and navigation.",
  reflectionInterestsIntro: "Throughout development, I became increasingly interested in:",
  reflectionInterests: [
    "emotional interaction design",
    "environmental storytelling",
    "player perception",
    "spatial atmosphere",
    "narrative game systems",
    "emotional interpretation of digital spaces",
  ],
  reflectionLesson:
    "The project taught me that gameplay mechanics can function as emotional communication systems rather than purely mechanical structures.",
  reflectionExamplesIntro: "For example:",
  reflectionExamples: [
    "depletion systems can represent emotional exhaustion",
    "exploration can communicate uncertainty",
    "environmental openness can create relief",
    "social interaction systems can represent emotional recovery",
  ],
  reflectionClosing:
    "While this project was developed as a desktop narrative game, it sparked my interest in how emotional interaction and environmental storytelling could later evolve into more immersive formats such as VR and XR experiences.",

  futureIntro: "Future iterations of the project could explore:",
  futureBullets: [
    "expanded crafting systems",
    "adaptive emotional systems",
    "more advanced NPC interaction",
    "VR environmental immersion",
    "spatial audio systems",
    "embodied navigation in immersive environments",
  ],
  futureClosing:
    "The project ultimately became an important step toward my growing interests in immersive interaction design, emotional experience design, and future XR research directions.",
};

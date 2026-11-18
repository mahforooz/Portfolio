export type SkillCategory = {
  id: string;
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "research",
    label: "Research",
    skills: [
      "Interviews",
      "Diary studies",
      "Participatory design",
      "Usability testing",
      "Heuristic evaluation",
      "Surveys",
      "Affinity mapping",
    ],
  },
  {
    id: "programming",
    label: "Programming",
    skills: [
      "TypeScript / JavaScript",
      "Python",
      "C# (Unity)",
      "Arduino (C/C++)",
      "HTML / CSS",
    ],
  },
  {
    id: "ai-data",
    label: "AI & Data",
    skills: [
      "OpenAI API (structured outputs)",
      "Prompt design",
      "Firebase / Firestore",
      "Data visualization",
    ],
  },
  {
    id: "xr-physical",
    label: "XR & Physical",
    skills: [
      "Unity",
      "A-Frame (WebVR)",
      "Blender",
      "Meta Quest",
      "Arduino and sensors",
      "Max/MSP",
    ],
  },
  {
    id: "design-tools",
    label: "Design Tools",
    skills: ["Figma", "Adobe Creative Suite", "Miro", "Framer", "Spline"],
  },
  {
    id: "languages",
    label: "Languages",
    skills: ["English (fluent)", "Persian (native)", "French (A2)"],
  },
  {
    id: "training",
    label: "Training",
    skills: [
      "TCPS 2: CORE (research ethics)",
      "Google UX Research",
      "CalArts UI/UX Design",
      "CalArts Graphic Design",
    ],
  },
];

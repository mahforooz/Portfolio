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
      "User Interviews",
      "Usability Testing",
      "Journey Mapping",
      "Co-design",
      "Heuristic Evaluation",
    ],
  },
  {
    id: "design",
    label: "Design",
    skills: ["Figma", "Prototyping", "Service Design", "Design Systems"],
  },
  {
    id: "technical",
    label: "Technical",
    skills: ["Unity", "Python", "Processing", "HTML/CSS/JavaScript", "Firebase"],
  },
];

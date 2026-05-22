export type ExperienceEntry = {
  id: string;
  /** Two-letter or short initials shown in the logo square */
  logo: string;
  title: string;
  company: string;
  employmentType: string;
  dateRange: string;
  durationLabel: string;
  location: string;
  workMode: string;
  description?: string;
  /** Highlight line shown with a diamond (e.g. skills) */
  skillsHighlight?: string;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "ism-creative",
    logo: "ISM",
    title: "Designer",
    company: "ISM Creative",
    employmentType: "Contract Part-time",
    dateRange: "Aug 2025 – Present",
    durationLabel: "10 mos",
    location: "Vancouver, British Columbia, Canada",
    workMode: "Remote",
  },
  {
    id: "ecu-ra",
    logo: "ECU",
    title: "Research Assistant",
    company: "Emily Carr University of Art and Design",
    employmentType: "Contract Part-time",
    dateRange: "Sep 2025 – Dec 2025",
    durationLabel: "4 mos",
    location: "Vancouver, British Columbia, Canada",
    workMode: "Remote",
  },
  {
    id: "cuddles-learning",
    logo: "CL",
    title: "Visual Designer",
    company: "Cuddles Learning",
    employmentType: "Internship",
    dateRange: "Aug 2024 – Jan 2025",
    durationLabel: "6 mos",
    location: "Toronto, Ontario, Canada",
    workMode: "Remote",
    skillsHighlight: "Visual Design and Web Design",
  },
  {
    id: "skillhat",
    logo: "SH",
    title: "Product Designer",
    company: "SkillHat",
    employmentType: "Internship",
    dateRange: "Apr 2024 – Aug 2024",
    durationLabel: "5 mos",
    location: "Toronto, Ontario, Canada",
    workMode: "Remote",
  },
];

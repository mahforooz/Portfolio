export type EducationEntry = {
  id: string;
  title: string;
  institution: string;
  dateRange: string;
  details?: string;
};

export const educationEntries: EducationEntry[] = [
  {
    id: "ecu-bdes",
    title: "Interaction Design · BDes (in progress)",
    institution: "Emily Carr University of Art + Design",
    dateRange: "Sep 2023 – Present",
  },
];

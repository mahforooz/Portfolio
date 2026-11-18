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
    title: "Bachelor of Design (BDes), Interaction Design",
    institution: "Emily Carr University of Art + Design, Vancouver, BC",
    dateRange: "Sep 2023 – May 2027 (expected)",
    details:
      "CGPA: 3.7 / 4.0 · Relevant coursework: Design Research Methods; Computer Science; 3D Modelling for Mixed Realities",
  },
];

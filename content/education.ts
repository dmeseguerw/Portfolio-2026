export interface EducationEntry {
  dates: string;
  institution: string;
  degree: { en: string; es: string };
  description: { en: string; es: string };
}

export const education: EducationEntry[] = [
  {
    dates: "Aug 2023 — Aug 2025",
    institution: "Technical University of Denmark",
    degree: {
      en: "MSc, Computer Science & Engineering",
      es: "Maestría en Ciencias de la Computación e Ingeniería",
    },
    description: {
      en: "Relevant courses in Software Engineering, Data Analysis and Machine Learning. Thesis: developing a mobile health app for heart fitness prediction.",
      es: "Cursos relevantes en Ingeniería de Software, Análisis de Datos y Machine Learning. Tesis: desarrollo de una aplicación de salud móvil para la predicción de estado físico cardíaco.",
    },
  },
  {
    dates: "Mar 2017 — Oct 2021",
    institution: "Universidad de Costa Rica",
    degree: {
      en: "BEng, Electrical Engineering",
      es: "Licenciatura en Ingeniería Eléctrica",
    },
    description: {
      en: "Specialization in Computer Architecture and Computer Science.",
      es: "Especialización en Arquitectura de Computadores y Ciencias de la Computación.",
    },
  },
];

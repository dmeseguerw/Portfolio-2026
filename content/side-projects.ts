export interface SideProject {
  title: string;
  description: { en: string; es: string };
  slug?: string;
}

export const sideProjects: SideProject[] = [
  {
    title: "World Cup AI",
    description: {
      en: "An AI project built around World Cup predictions.",
      es: "Un proyecto de IA construido alrededor de predicciones del Mundial.",
    },
    slug: "world-cup-ai",
  },
  {
    title: "Personal Finance App",
    description: {
      en: "A personal finance app, built for fun.",
      es: "Una aplicación de finanzas personales, construida por diversión.",
    },
    slug: "personal-finance-app",
  },
  {
    title: "Hyrox Training with Claude",
    description: {
      en: "Using Claude Projects to plan and power up my Hyrox training and race prep.",
      es: "Usando Claude Projects para planificar y potenciar mi entrenamiento y preparación para carreras Hyrox.",
    },
  },
];

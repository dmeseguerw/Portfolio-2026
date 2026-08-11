export interface Activity {
  name: { en: string; es: string };
  description: { en: string; es: string };
}

export const activities: Activity[] = [
  {
    name: { en: "Volleyball", es: "Voleibol" },
    description: {
      en: "Playing competitive volleyball in first division leagues, and beach volleyball during leisure time.",
      es: "Juego voleibol competitivo en ligas de primera división, y voleibol de playa en mi tiempo libre.",
    },
  },
  {
    name: {
      en: "DTU Introduction Week Team",
      es: "Equipo de Semana de Introducción de DTU",
    },
    description: {
      en: "Helping new students get acquainted with DTU and life in Denmark during the introduction week.",
      es: "Ayudando a nuevos estudiantes a familiarizarse con DTU y la vida en Dinamarca durante la semana de introducción.",
    },
  },
  {
    name: { en: "Fitness", es: "Fitness" },
    description: {
      en: "Weight training, swimming, cycling and hiking.",
      es: "Entrenamiento de pesas, natación, ciclismo y senderismo.",
    },
  },
  {
    name: { en: "Reading", es: "Lectura" },
    description: {
      en: "Books on personal development, technology trends and fiction — currently exploring AI and world affairs.",
      es: "Libros sobre desarrollo personal, tendencias tecnológicas y ficción — actualmente explorando IA y asuntos mundiales.",
    },
  },
];

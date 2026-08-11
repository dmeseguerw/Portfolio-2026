export interface Hobby {
  title: { en: string; es: string };
  description: { en: string; es: string };
}

export const hobbies: Hobby[] = [
  {
    title: { en: "Hybrid Training", es: "Entrenamiento Híbrido" },
    description: {
      en: "Fitness enthusiast at heart — running, walking, and mixed strength and endurance work.",
      es: "Entusiasta del fitness de corazón — running, caminatas, y entrenamiento mixto de fuerza y resistencia.",
    },
  },
  {
    title: { en: "Cycling & Volleyball", es: "Ciclismo y Voleibol" },
    description: {
      en: "Cycling to unwind, plus competitive and beach volleyball.",
      es: "Ciclismo para desconectar, además de voleibol competitivo y de playa.",
    },
  },
  {
    title: { en: "Hiking", es: "Senderismo" },
    description: {
      en: "Getting outdoors on foot whenever I can.",
      es: "Saliendo al aire libre a pie siempre que puedo.",
    },
  },
  {
    title: { en: "Downtime", es: "Tiempo libre" },
    description: {
      en: "Binging TV shows and meeting up with friends.",
      es: "Viendo series y reuniéndome con amigos.",
    },
  },
];

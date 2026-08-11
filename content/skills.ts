export interface SkillCategory {
  name: { en: string; es: string };
  list: string;
}

export const skills: SkillCategory[] = [
  {
    name: { en: "Programming Languages", es: "Lenguajes de Programación" },
    list: "C/C++, Python, Java, TypeScript",
  },
  {
    name: { en: "Web Development", es: "Desarrollo Web" },
    list: "React, Next.js, RESTful APIs",
  },
  {
    name: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
    list: "AWS (Lambda, EC2, S3), CloudWatch, Kibana, Docker, CI/CD (GitHub Actions, Jenkins)",
  },
  {
    name: { en: "Data & AI", es: "Datos e IA" },
    list: "Deep Learning, Computer Vision, Data Visualization, Process Mining",
  },
  {
    name: { en: "Architecture", es: "Arquitectura" },
    list: "Lean UX Design, Event-Driven Architecture, Microservices",
  },
  {
    name: { en: "Project Management", es: "Gestión de Proyectos" },
    list: "Agile, Scrum, Stakeholder communication, Jira, Confluence",
  },
];

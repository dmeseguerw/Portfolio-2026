export interface ExperienceEntry {
  dates: string;
  company: string;
  role: { en: string; es: string };
  description: { en: string; es: string };
  achievements: { en: string[]; es: string[] };
}

export const experience: ExperienceEntry[] = [
  {
    dates: "Aug 2026 — Present",
    company: "Cisco",
    role: { en: "Software Engineer", es: "Ingeniero de Software" },
    description: { en: "Starting soon.", es: "Comenzando pronto." },
    achievements: { en: [], es: [] },
  },
  {
    dates: "Sep 2025 — Apr 2026",
    company: "The LEGO Group",
    role: {
      en: "Associate Software Engineer",
      es: "Ingeniero de Software Asociado",
    },
    description: {
      en: "Contributing to the development and operation of an event-driven Order Lifecycle Engine by building and maintaining serverless microservices that manage order state and processing workflows.",
      es: "Contribuyendo al desarrollo y operación de un motor de ciclo de vida de pedidos orientado a eventos, construyendo y manteniendo microservicios serverless que gestionan el estado y los flujos de procesamiento de pedidos.",
    },
    achievements: {
      en: [
        "Handled KTLO responsibilities by investigating and resolving production issues, reducing recurring failures and improving the stability of order processing services",
        "Redesigned and optimized data ingestion and ETL workflows, achieving an 85% reduction in processing time and improving downstream data availability",
      ],
      es: [
        "Responsable de tareas KTLO investigando y resolviendo incidentes en producción, reduciendo fallas recurrentes y mejorando la estabilidad de los servicios de procesamiento de pedidos",
        "Rediseñó y optimizó los flujos de ingesta de datos y ETL, logrando una reducción del 85% en el tiempo de procesamiento y mejorando la disponibilidad de datos aguas abajo",
      ],
    },
  },
  {
    dates: "Jul 2024 — Sep 2025",
    company: "The LEGO Group",
    role: {
      en: "Software Engineer Student Worker",
      es: "Ingeniero de Software (Estudiante)",
    },
    description: {
      en: "Building scalable serverless systems and developing features for post-order processing and manufacturing operations.",
      es: "Construyendo sistemas serverless escalables y desarrollando funcionalidades para el procesamiento post-pedido y operaciones de manufactura.",
    },
    achievements: {
      en: [
        "Built, deployed and maintained several API endpoints for post order actions using AWS Step Functions, Lambda, DynamoDB and API Gateway",
        "Developed frontend features for a Next.js (React) web app to improve operator experience in an external manufacturing site",
      ],
      es: [
        "Construyó, desplegó y mantuvo varios endpoints de API para acciones post-pedido usando AWS Step Functions, Lambda, DynamoDB y API Gateway",
        "Desarrolló funcionalidades de frontend para una aplicación web Next.js (React) para mejorar la experiencia del operador en un sitio de manufactura externo",
      ],
    },
  },
  {
    dates: "Aug 2021 — Jul 2023",
    company: "Intel Corporation",
    role: {
      en: "Product Development Engineer",
      es: "Ingeniero de Desarrollo de Producto",
    },
    description: {
      en: "Led functional testing module and workflow optimizations for product development.",
      es: "Lideró el módulo de pruebas funcionales y optimizaciones de flujo de trabajo para el desarrollo de producto.",
    },
    achievements: {
      en: [
        "Led the functional testing module as Product Owner, ensuring effective communication of requirements and roadmap alignment with key stakeholders",
        "Led the enablement of functional test content and developed automation tools with Python for test processing",
      ],
      es: [
        "Lideró el módulo de pruebas funcionales como Product Owner, asegurando la comunicación efectiva de requisitos y alineación de roadmap con los interesados clave",
        "Lideró la habilitación de contenido de pruebas funcionales y desarrolló herramientas de automatización con Python para el procesamiento de pruebas",
      ],
    },
  },
  {
    dates: "Feb 2021 — Jul 2021",
    company: "Avionyx, S.A",
    role: { en: "Junior Software Engineer", es: "Ingeniero de Software Junior" },
    description: {
      en: "Developed automation tools for avionics embedded software verification.",
      es: "Desarrolló herramientas de automatización para la verificación de software embebido de aviónica.",
    },
    achievements: {
      en: [
        "Led and executed a new automation tool (Java, JavaScript and C++) for the verification process in avionics embedded software, resulting in a 4-month time reduction",
      ],
      es: [
        "Lideró y ejecutó una nueva herramienta de automatización (Java, JavaScript y C++) para el proceso de verificación en software embebido de aviónica, logrando una reducción de 4 meses en el tiempo",
      ],
    },
  },
];

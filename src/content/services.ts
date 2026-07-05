import type {
  PageContent,
  SectionIntro,
  ServiceEcosystemSection,
  ServiceItem,
} from "@/content/types";

export const servicesSection: {
  intro: SectionIntro;
  items: ServiceItem[];
} = {
  intro: {
    eyebrow: "Servicios",
    title: "Palancas concretas para negocios que viven en la operación.",
  },
  items: [
    {
      title: "Ritmo operativo y estándares",
      description:
        "Cuando cada turno resuelve a su manera, ayudamos a definir rutinas, roles y criterios de servicio para ganar consistencia sin volver rígido al equipo.",
      icon: "settings",
    },
    {
      title: "Margen, costes y reporting",
      description:
        "Ordenamos ventas, compras, costes, ticket, ocupación y mix para que dirección vea dónde se escapa margen y qué decisiones priorizar.",
      icon: "barChart",
    },
    {
      title: "Experiencia y recurrencia",
      description:
        "Conectamos reservas, no-shows, reputación, servicio y seguimiento comercial para mejorar la experiencia y favorecer que el cliente vuelva.",
      icon: "concierge",
    },
    {
      title: "Crecimiento con control",
      description:
        "Diseñamos acciones comerciales y de expansión que encajan con la capacidad operativa real, evitando crecer a costa de perder calidad o foco.",
      icon: "lineChart",
    },
  ],
};

export const serviceEcosystemSection: ServiceEcosystemSection = {
  intro: {
    eyebrow: "Ecosistema de servicios",
    title: "Áreas donde A-Medida puede intervenir",
    description:
      "A-Medida trabaja sobre las piezas que condicionan el rendimiento real de un negocio hostelero: operación, equipo, rentabilidad, comercialización, espacios, compras, digitalización y experiencia de cliente.",
  },
  groups: [
    {
      title: "Operación y equipo",
      description:
        "Estandarización de rutinas, formación de equipos, seguridad alimentaria, propuesta gastronómica y consistencia del servicio.",
      items: [
        "Operativas y formaciones",
        "RRHH",
        "Seguridad alimentaria",
        "Gastronomía",
      ],
    },
    {
      title: "Rentabilidad y control",
      description:
        "Control de costes, compras, márgenes, visibilidad de datos, digitalización útil y seguimiento de prioridades.",
      items: [
        "Control financiero",
        "Compras & digitalización",
        "Reporting",
        "Seguimiento de acciones",
      ],
    },
    {
      title: "Crecimiento y cliente",
      description:
        "Acciones comerciales, comunicación, percepción de marca, fidelización y mejora de la experiencia del cliente.",
      items: [
        "Marketing & comunicación",
        "Comercialización externa",
        "Experiencia de cliente",
        "Recurrencia",
      ],
    },
    {
      title: "Espacios y expansión",
      description:
        "Acompañamiento en decisiones de localización, adecuación de espacios, reformas, aperturas y evolución del concepto.",
      items: [
        "Sector inmobiliario",
        "Interiorismo & reformas",
        "Aperturas",
        "Reposicionamiento de locales",
      ],
    },
  ],
  note:
    "No todos los proyectos necesitan actuar en todas las áreas. El diagnóstico define qué palancas conviene priorizar y cómo conectarlas en un modelo operativo útil.",
};

export const servicesPageContent: PageContent = {
  slug: "servicios",
  seo: {
    title: "Servicios",
    description:
      "Servicios de consultoría operativa, reporting, experiencia de cliente y crecimiento para restaurantes, hoteles y grupos de hostelería.",
  },
  hero: {
    eyebrow: "Servicios",
    title: "Mejorar el negocio desde lo que ocurre cada día.",
    description:
      "Trabajamos sobre las áreas que condicionan margen, servicio y crecimiento: cómo se organiza el equipo, qué se mide, cómo se decide y cómo se da seguimiento a las mejoras.",
  },
  cta: {
    title:
      "Si hay muchas prioridades abiertas, empecemos por ordenar impacto y urgencia.",
    description:
      "Revisamos el contexto del negocio y convertimos los frentes abiertos en una secuencia de actuación clara.",
    primaryCta: {
      label: "Contactar",
      href: "/contacto",
    },
  },
};

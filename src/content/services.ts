import type {
  CompactServiceListSection,
  PageContent,
  SectionIntro,
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

export const compactServiceListSection: CompactServiceListSection = {
  intro: {
    eyebrow: "Bloques de servicio",
    title: "Servicios clave de A-Medida",
    description:
      "Trabajamos sobre las áreas que condicionan el rendimiento real de un negocio hostelero. Cada proyecto se prioriza según diagnóstico, alcance y momento del negocio.",
  },
  items: [
    {
      title: "RRHH",
      description:
        "Selección, organización, formación y seguimiento de equipos para una operación más estable.",
    },
    {
      title: "Sector inmobiliario",
      description:
        "Búsqueda, análisis y valoración de ubicaciones para nuevos proyectos o expansión.",
    },
    {
      title: "Interiorismo & reformas",
      description:
        "Definición del concepto, distribución del espacio y acompañamiento en reformas.",
    },
    {
      title: "Comercialización externa",
      description:
        "Acciones comerciales para captar oportunidades, alianzas y nuevos canales de venta.",
    },
    {
      title: "Marketing & comunicación",
      description:
        "Posicionamiento, mensajes, campañas y comunicación adaptada al negocio hostelero.",
    },
    {
      title: "Compras & digitalización",
      description:
        "Optimización de compras, proveedores, herramientas y procesos digitales útiles.",
    },
    {
      title: "Seguridad alimentaria",
      description:
        "Revisión de criterios, controles y rutinas para asegurar cumplimiento y consistencia.",
    },
    {
      title: "Gastronomía",
      description:
        "Diseño y mejora de carta, producto, propuesta gastronómica y rendimiento operativo.",
    },
    {
      title: "Control financiero",
      description:
        "Seguimiento de costes, márgenes, indicadores y prioridades para la toma de decisiones.",
    },
    {
      title: "Operativas y formaciones",
      description:
        "Estandarización de procesos, rutinas de servicio y formación práctica de equipos.",
    },
  ],
  note:
    "No todos los proyectos requieren todos los servicios. El valor está en elegir qué bloques activar, en qué orden y con qué nivel de profundidad.",
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

import type { PageContent, SectionIntro, ServiceItem } from "@/content/types";

export const servicesSection: {
  intro: SectionIntro;
  items: ServiceItem[];
} = {
  intro: {
    eyebrow: "Servicios",
    title: "Palancas para mejorar con foco.",
  },
  items: [
    {
      title: "Operaciones y procesos",
      description:
        "Ordenamos rutinas, responsabilidades e indicadores para que el equipo trabaje con menos fricción y más criterio.",
      icon: "settings",
    },
    {
      title: "Rentabilidad y reporting",
      description:
        "Convertimos datos dispersos en lectura ejecutiva: ventas, costes, márgenes, ocupación, mix y decisiones prioritarias.",
      icon: "barChart",
    },
    {
      title: "Experiencia de cliente",
      description:
        "Alineamos servicio, sala, recepción y seguimiento comercial para elevar la percepción sin perder eficiencia operativa.",
      icon: "concierge",
    },
    {
      title: "Crecimiento comercial",
      description:
        "Diseñamos palancas de captación, recurrencia y ticket medio adaptadas al tipo de negocio y a su capacidad real.",
      icon: "lineChart",
    },
  ],
};

export const servicesPageContent: PageContent = {
  slug: "servicios",
  seo: {
    title: "Servicios",
    description:
      "Servicios de consultoría operativa, reporting, experiencia de cliente y crecimiento para negocios hospitality.",
  },
  hero: {
    eyebrow: "Servicios",
    title: "Palancas concretas para mejorar operación, margen y crecimiento.",
    description:
      "Trabajamos sobre los puntos que más condicionan el resultado del negocio: cómo se organiza el equipo, cómo se mide, cómo se vende y cómo se entrega la experiencia.",
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

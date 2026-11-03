import type { PageCTA, SEOContent } from "@/content/types";

export const siteContent = {
  name: "A-Medida",
  url: "https://www.somosamedida.es",
  locale: "es_ES",
  defaultSeo: {
    title: "A-Medida | Consultoría de gestión integral",
    description:
      "Consultoría de gestión integral para hostelería y retail de moda. Diagnóstico, implantación y seguimiento para mejorar operaciones, equipos y rentabilidad.",
  } satisfies SEOContent,
  openGraphDescription:
    "A-Medida acompaña a negocios de hostelería y retail de moda desde el diagnóstico hasta la implantación y el seguimiento.",
  footer: {
    description:
      "Consultoría de gestión integral para hostelería y retail de moda. Trabajamos con el negocio, los equipos y las decisiones que mueven los resultados.",
    copyright: "© 2026 A-Medida. Todos los derechos reservados.",
    locationLine: "Hostelería · Retail de moda · Gestión integral",
  },
};

export const defaultPageCta: PageCTA = {
  title: "Hablemos de dónde está el negocio y qué debería cambiar primero.",
  description:
    "Una primera conversación sirve para entender contexto, prioridades y si A-Medida puede aportar valor de forma concreta.",
  primaryCta: {
    label: "Contactar",
    href: "/contacto",
  },
};

import type { CardItem, PageContent } from "@/content/types";

export const technologyPageContent: PageContent & {
  sections: {
    pillars: {
      items: CardItem[];
    };
  };
} = {
  slug: "tecnologia",
  seo: {
    title: "Tecnología",
    description:
      "Tecnología, reporting y herramientas digitales aplicadas a operaciones hospitality con foco en adopción real.",
  },
  hero: {
    eyebrow: "Tecnología",
    title: "Herramientas digitales cuando aportan claridad y ahorran trabajo.",
    description:
      "La tecnología debe ordenar la operación, no añadir otra capa de ruido. A-Medida ayuda a definir indicadores, flujos y herramientas que los equipos puedan usar de verdad.",
  },
  sections: {
    pillars: {
      items: [
        {
          title: "Herramientas al servicio del equipo",
          description:
            "Seleccionamos, ordenamos o diseñamos herramientas digitales solo cuando reducen trabajo manual y mejoran la toma de decisiones.",
          icon: "wrench",
        },
        {
          title: "Datos que se pueden accionar",
          description:
            "Estructuramos indicadores para que dirección y mandos intermedios sepan qué mirar, cuándo actuar y cómo medir avance.",
          icon: "clipboard",
        },
        {
          title: "Adopción real",
          description:
            "La tecnología no termina en la implantación: documentamos, formamos y ajustamos para que el uso sobreviva al proyecto.",
          icon: "users",
        },
      ],
    },
  },
  cta: {
    title:
      "Antes de elegir herramientas, conviene saber qué decisión deben mejorar.",
    description:
      "Ordenamos indicadores, rutinas y responsabilidades antes de sumar tecnología a la operación.",
    primaryCta: {
      label: "Contactar",
      href: "/contacto",
    },
  },
};

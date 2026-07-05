import { defaultPageCta } from "@/content/site";
import type { EvidenceSection, PageContent } from "@/content/types";

export const homePageContent: PageContent & {
  sections: {
    proofPoints: {
      title: string;
      items: string[];
    };
    operationalEvidence: EvidenceSection;
  };
} = {
  slug: "",
  seo: {
    title: "A-Medida | Consultoría operativa para hospitality",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que necesitan ordenar operaciones, proteger margen y crecer sin perder control.",
  },
  hero: {
    eyebrow: "Consultoría hospitality",
    title: "Más control operativo para negocios de hostelería que quieren crecer.",
    description:
      "A-Medida trabaja con restaurantes, hoteles y grupos para ordenar prioridades, reducir fricción entre turnos o unidades, conectar datos con decisiones y convertir las mejoras en seguimiento real.",
    primaryCta: {
      label: "Empezar conversación",
      href: "/contacto",
    },
  },
  sections: {
    proofPoints: {
      title: "Consultoría pegada a lo que ocurre durante el servicio.",
      items: [
        "Margen bajo presión por costes, compras, producto y decisiones poco visibles.",
        "Equipos que trabajan distinto según turno, responsable o ubicación.",
        "Herramientas y reporting fragmentados que no aclaran qué hacer primero.",
        "Planes de mejora que se deciden, pero no siempre se siguen hasta el resultado.",
      ],
    },
    operationalEvidence: {
      intro: {
        eyebrow: "Dónde intervenimos",
        title: "Donde A-Medida entra en el negocio",
        description:
          "El trabajo empieza en la operación real: cómo se vende, cómo se sirve, cómo se controla y cómo se revisa el avance con dirección y equipos.",
      },
      items: [
        {
          title: "Operación diaria",
          description:
            "Rutinas, estándares y responsabilidades para que el servicio no dependa solo de la persona que esté de turno.",
          items: [
            "Flujo de sala, cocina, recepción o F&B",
            "Roles por turno y criterios de servicio",
            "Seguimiento de tareas y acciones pendientes",
          ],
        },
        {
          title: "Rentabilidad y control",
          description:
            "Lectura clara de lo que vende, cuesta y deja margen, con foco en decisiones que dirección pueda tomar a tiempo.",
          items: [
            "Compras, proveedores y costes clave",
            "Rendimiento de carta, producto o unidad",
            "Ocupación, demanda, ticket y mix de venta",
          ],
        },
        {
          title: "Experiencia de cliente",
          description:
            "Conectamos estándares de servicio, recurrencia y reputación con la forma en que el equipo opera cada día.",
          items: [
            "Reservas, no-shows y gestión de demanda",
            "Momentos críticos de la experiencia",
            "Recurrencia, reputación y oportunidades comerciales",
          ],
        },
        {
          title: "Seguimiento y reporting",
          description:
            "Instalamos un ritmo de gestión para que los datos, reuniones y compromisos no se queden en una presentación.",
          items: [
            "Cuadros de mando accionables",
            "Reuniones de seguimiento y responsables",
            "Prioridades por semana, unidad o área",
          ],
        },
      ],
    },
  },
  cta: defaultPageCta,
};

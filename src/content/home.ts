import { defaultPageCta } from "@/content/site";
import type {
  DiagnosticSection,
  EvidenceSection,
  OperatingRhythmSection,
  PageContent,
} from "@/content/types";

export const homePageContent: PageContent & {
  sections: {
    diagnostic: DiagnosticSection;
    operationalEvidence: EvidenceSection;
    methodPreview: OperatingRhythmSection;
  };
} = {
  slug: "",
  seo: {
    title: "A-Medida | Consultoría operativa para hospitality",
    description:
      "Consultoría para restaurantes, hoteles y grupos de hostelería que necesitan ordenar operaciones, proteger margen y crecer sin perder control.",
  },
  hero: {
    eyebrow: "Consultoría operativa para hospitality",
    title: "Más control para crecer sin perder margen, servicio ni foco.",
    description:
      "A-Medida ayuda a restaurantes, hoteles y grupos de hostelería a detectar qué está frenando el negocio, ordenar prioridades y convertir las mejoras en rutinas, responsables y seguimiento real.",
    primaryCta: {
      label: "Empezar conversación",
      href: "/contacto",
    },
    secondaryCta: {
      label: "Ver diagnóstico operativo",
      href: "#diagnostico-operativo",
    },
    proofPoints: [
      "Para restaurantes, hoteles y grupos con operaciones vivas.",
      "Foco en margen, estándares de servicio, reporting y crecimiento.",
      "Planes de acción que bajan a equipo, responsables y ritmo de gestión.",
    ],
  },
  sections: {
    diagnostic: {
      slug: "diagnostico-operativo",
      intro: {
        eyebrow: "Diagnóstico operativo",
        title: "Lo que suele estar frenando el negocio",
        description:
          "Antes de proponer acciones, miramos dónde se pierde control: en el margen, en el servicio, en la coordinación del equipo o en la forma de tomar decisiones.",
      },
      items: [
        {
          title: "Márgenes presionados con poca visibilidad real",
          description:
            "El negocio vende, pero compras, producto, horas, desperdicio o mix no se leen con suficiente claridad para actuar a tiempo.",
        },
        {
          title: "Equipos trabajando con criterios distintos",
          description:
            "Cada turno, responsable o unidad resuelve de forma diferente, y eso termina afectando estándares, experiencia y control.",
        },
        {
          title: "Herramientas y reporting desconectados",
          description:
            "Reservas, TPV, hojas de cálculo, PMS o informes conviven sin una lectura común para dirección y mandos.",
        },
        {
          title: "Acciones de mejora que no se siguen",
          description:
            "Se detectan problemas y se acuerdan cambios, pero faltan responsables, fechas, revisión y una cadencia que sostenga el avance.",
        },
        {
          title: "Decisiones tomadas tarde o con datos incompletos",
          description:
            "La información llega cuando el margen, la demanda o la reputación ya han dado señales claras de tensión.",
        },
        {
          title: "Experiencia de cliente inconsistente",
          description:
            "La promesa del negocio no siempre se traduce igual en reservas, bienvenida, servicio, seguimiento y recurrencia.",
        },
      ],
      summary:
        "El objetivo no es hacer más informes: es que dirección y equipo sepan qué mirar, qué decidir y qué revisar cada semana.",
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
    methodPreview: {
      slug: "ritmo-de-trabajo",
      intro: {
        eyebrow: "Método de trabajo",
        title: "Un ritmo operativo para que la mejora no se diluya",
        description:
          "La intervención combina diagnóstico, prioridades y acompañamiento. La clave es mantener una cadencia de decisiones, implantación y revisión que el equipo pueda sostener.",
      },
      items: [
        {
          title: "Diagnosticar",
          description:
            "Leer operación, datos, equipo, herramientas y experiencia para entender dónde se atasca el negocio.",
        },
        {
          title: "Priorizar",
          description:
            "Separar ruido de impacto y decidir qué palancas deben moverse primero.",
        },
        {
          title: "Implantar",
          description:
            "Bajar las decisiones a rutinas, responsables, estándares y acciones concretas.",
        },
        {
          title: "Medir",
          description:
            "Revisar indicadores, tareas y resultados con una lectura clara para dirección.",
        },
        {
          title: "Ajustar",
          description:
            "Corregir lo que no funciona y consolidar lo que ya está cambiando el negocio.",
        },
      ],
      note:
        "Cada proyecto mantiene foco en rentabilidad, experiencia y adopción: no basta con diseñar una solución si el equipo no puede usarla.",
    },
  },
  cta: defaultPageCta,
};

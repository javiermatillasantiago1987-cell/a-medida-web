import {
  BarChart3,
  Building2,
  ClipboardCheck,
  ConciergeBell,
  Hotel,
  LineChart,
  Settings2,
  Sparkles,
  Store,
  UsersRound,
  Wrench,
} from "lucide-react";

export const navItems = [
  { href: "/servicios", label: "Servicios" },
  { href: "/metodo", label: "Método" },
  { href: "/sectores", label: "Sectores" },
  { href: "/tecnologia", label: "Tecnología" },
  { href: "/contacto", label: "Contacto" },
];

export const services = [
  {
    title: "Operaciones y procesos",
    description:
      "Ordenamos rutinas, responsabilidades e indicadores para que el equipo trabaje con menos fricción y más criterio.",
    icon: Settings2,
  },
  {
    title: "Rentabilidad y reporting",
    description:
      "Convertimos datos dispersos en lectura ejecutiva: ventas, costes, márgenes, ocupación, mix y decisiones prioritarias.",
    icon: BarChart3,
  },
  {
    title: "Experiencia de cliente",
    description:
      "Alineamos servicio, sala, recepción y seguimiento comercial para elevar la percepción sin perder eficiencia operativa.",
    icon: ConciergeBell,
  },
  {
    title: "Crecimiento comercial",
    description:
      "Diseñamos palancas de captación, recurrencia y ticket medio adaptadas al tipo de negocio y a su capacidad real.",
    icon: LineChart,
  },
];

export const methodSteps = [
  {
    title: "Diagnóstico operativo",
    description:
      "Leemos el negocio desde dentro: números, equipo, flujos, herramientas, puntos de venta y experiencia del cliente.",
  },
  {
    title: "Plan de actuación",
    description:
      "Priorizamos las palancas con más impacto y las convertimos en un plan claro, medible y asumible por la operación.",
  },
  {
    title: "Implementación acompañada",
    description:
      "Trabajamos con dirección y equipos para instalar hábitos, procesos, cuadros de mando y herramientas que se usen.",
  },
  {
    title: "Seguimiento y mejora",
    description:
      "Revisamos resultados, corregimos desviaciones y dejamos una forma de trabajo más visible, repetible y rentable.",
  },
];

export const sectors = [
  {
    title: "Restaurantes",
    description:
      "Negocios independientes y grupos que necesitan mejorar sala, cocina, márgenes, reservas, turnos y recurrencia.",
    icon: Store,
  },
  {
    title: "Hoteles",
    description:
      "Equipos hoteleros que buscan conectar operación, revenue, restauración, reputación y experiencia del huésped.",
    icon: Hotel,
  },
  {
    title: "Grupos de hostelería",
    description:
      "Organizaciones con varias unidades que necesitan método, reporting común y escalabilidad sin perder identidad.",
    icon: Building2,
  },
];

export const technologyPillars = [
  {
    title: "Herramientas al servicio del equipo",
    description:
      "Seleccionamos, ordenamos o diseñamos herramientas digitales solo cuando reducen trabajo manual y mejoran la toma de decisiones.",
    icon: Wrench,
  },
  {
    title: "Datos que se pueden accionar",
    description:
      "Estructuramos indicadores para que dirección y mandos intermedios sepan qué mirar, cuándo actuar y cómo medir avance.",
    icon: ClipboardCheck,
  },
  {
    title: "Adopción real",
    description:
      "La tecnología no termina en la implantación: documentamos, formamos y ajustamos para que el uso sobreviva al proyecto.",
    icon: UsersRound,
  },
];

export const proofPoints = [
  "Consultoría pegada a la operación diaria.",
  "Lenguaje claro para dirección y equipos.",
  "Decisiones conectadas con rentabilidad, servicio y crecimiento.",
  "Métodos preparados para escalar sin convertir el negocio en una plantilla genérica.",
];

export const contactReasons = [
  "Revisar la operación antes de abrir o escalar.",
  "Detectar por qué el negocio vende pero no convierte en margen.",
  "Ordenar reporting, procesos y responsabilidades.",
  "Acompañar a equipos directivos en una etapa de cambio.",
];

export const accentIcon = Sparkles;

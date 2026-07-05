import type { ComponentType, SVGProps } from "react";
import {
  BarChart3,
  Building2,
  ClipboardCheck,
  ConciergeBell,
  Hotel,
  LineChart,
  Settings2,
  Store,
  UsersRound,
  Wrench,
} from "lucide-react";

import type { CardItem, IconName, SectionIntro } from "@/content/types";

const iconMap = {
  barChart: BarChart3,
  building: Building2,
  clipboard: ClipboardCheck,
  concierge: ConciergeBell,
  hotel: Hotel,
  lineChart: LineChart,
  settings: Settings2,
  store: Store,
  users: UsersRound,
  wrench: Wrench,
} satisfies Record<IconName, ComponentType<SVGProps<SVGSVGElement>>>;

type CardGridProps = {
  intro?: SectionIntro;
  items: CardItem[];
  columns?: "two" | "three";
  headingLevel?: 2 | 3;
  shadow?: boolean;
};

export function CardGrid({
  intro,
  items,
  columns = "three",
  headingLevel = 3,
  shadow = false,
}: CardGridProps) {
  const Heading = `h${headingLevel}` as "h2" | "h3";

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
      {intro ? (
        <div className="max-w-2xl">
          {intro.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {intro.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            {intro.title}
          </h2>
          {intro.description ? (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {intro.description}
            </p>
          ) : null}
        </div>
      ) : null}
      <div
        className={
          columns === "two"
            ? "mt-9 grid gap-4 sm:grid-cols-2"
            : "mt-9 grid gap-4 md:grid-cols-3"
        }
      >
        {items.map((item) => {
          const Icon = item.icon ? iconMap[item.icon] : null;

          return (
            <article
              className={`group rounded-lg border bg-card p-6 transition-colors hover:border-primary/30 hover:bg-white ${shadow ? "shadow-sm" : ""}`}
              key={item.title}
            >
              {Icon ? (
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-soft text-primary transition-colors group-hover:bg-pink-soft">
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </span>
              ) : null}
              <Heading className="mt-5 text-xl font-semibold">
                {item.title}
              </Heading>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
              <span aria-hidden="true" className="mt-6 block h-px w-16 accent-rule" />
            </article>
          );
        })}
      </div>
    </section>
  );
}

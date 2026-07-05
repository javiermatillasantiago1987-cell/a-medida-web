import { CardGrid } from "@/components/sections/card-grid";
import type { SectionIntro, ServiceItem } from "@/content/types";

type ServiceCardsProps = {
  intro: SectionIntro;
  items: ServiceItem[];
};

export function ServiceCards({ intro, items }: ServiceCardsProps) {
  return <CardGrid columns="two" intro={intro} items={items} shadow />;
}

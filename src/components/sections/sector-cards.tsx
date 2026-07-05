import { CardGrid } from "@/components/sections/card-grid";
import type { SectionIntro, SectorItem } from "@/content/types";

type SectorCardsProps = {
  intro: SectionIntro;
  items: SectorItem[];
};

export function SectorCards({ intro, items }: SectorCardsProps) {
  return <CardGrid columns="three" intro={intro} items={items} />;
}

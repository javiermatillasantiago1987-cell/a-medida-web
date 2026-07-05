export type SEOContent = {
  title: string;
  description: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
};

export type SectionIntro = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export type IconName =
  | "barChart"
  | "building"
  | "clipboard"
  | "concierge"
  | "hotel"
  | "lineChart"
  | "settings"
  | "store"
  | "users"
  | "wrench";

export type CardItem = {
  title: string;
  description: string;
  icon?: IconName;
};

export type ServiceItem = CardItem & {
  icon: IconName;
};

export type MethodStep = {
  title: string;
  description: string;
};

export type SectorItem = CardItem & {
  icon: IconName;
};

export type PageCTA = {
  title: string;
  description: string;
  primaryCta: CTA;
};

export type PageContent = {
  slug: string;
  seo: SEOContent;
  hero: HeroContent;
  cta?: PageCTA;
};

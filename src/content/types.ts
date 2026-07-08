export type SEOContent = {
  title: string;
  description: string;
};

export type CTA = {
  label: string;
  href: string;
};

export type HeroVisualPanelItem = {
  label: string;
  value: string;
};

export type HeroVisualPanel = {
  eyebrow: string;
  title: string;
  items: HeroVisualPanelItem[];
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: CTA;
  secondaryCta?: CTA;
  proofPoints?: string[];
  visualPanel?: HeroVisualPanel;
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

export type EvidenceItem = {
  title: string;
  description: string;
  items: string[];
};

export type EvidenceSection = {
  intro: SectionIntro;
  items: EvidenceItem[];
};

export type DiagnosticItem = {
  title: string;
  description: string;
};

export type DiagnosticSection = {
  slug: string;
  intro: SectionIntro;
  items: DiagnosticItem[];
  summary?: string;
};

export type RhythmStep = {
  title: string;
  description: string;
};

export type OperatingRhythmSection = {
  slug: string;
  intro: SectionIntro;
  items: RhythmStep[];
  note?: string;
};

export type ServiceItem = CardItem & {
  icon: IconName;
};

export type CompactServiceItem = {
  title: string;
  description: string;
};

export type CompactServiceListSection = {
  intro: SectionIntro;
  items: CompactServiceItem[];
  note?: string;
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

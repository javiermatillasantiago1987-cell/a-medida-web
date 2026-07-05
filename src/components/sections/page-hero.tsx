import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { HeroContent } from "@/content/types";

type PageHeroProps = HeroContent;

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofPoints,
  visualPanel,
}: PageHeroProps) {
  return (
    <section className="surface-hero border-b">
      <div className="relative mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.04] text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {proofPoints?.length ? (
            <div className="mt-8 grid gap-3 text-sm leading-6 text-muted-foreground sm:grid-cols-3">
              {proofPoints.map((point) => (
                <p className="border-l border-primary/35 pl-4" key={point}>
                  {point}
                </p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="gradient-panel relative overflow-hidden rounded-lg border bg-card/85 p-5 shadow-md md:p-6">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 accent-rule" />
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
          {visualPanel ? (
            <div className="mt-6 rounded-md border bg-background/75 p-4 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-primary uppercase">
                    {visualPanel.eyebrow}
                  </p>
                  <p className="mt-1 text-sm font-semibold">{visualPanel.title}</p>
                </div>
                <span aria-hidden="true" className="block h-2 w-16 rounded-full accent-rule" />
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {visualPanel.items.map((item) => (
                  <div className="diagnostic-marker rounded-md bg-card p-3 shadow-sm" key={item.label}>
                    <p className="text-xs font-semibold text-foreground">{item.label}</p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button asChild size="lg">
                  <Link href={primaryCta.href}>
                    {primaryCta.label}
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

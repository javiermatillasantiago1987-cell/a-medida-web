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
}: PageHeroProps) {
  return (
    <section className="border-b bg-section">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-24">
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
        <div className="rounded-lg border bg-card/85 p-5 shadow-sm md:p-6">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
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

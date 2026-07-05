import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaHref,
}: PageHeroProps) {
  return (
    <section className="border-b bg-[#f4efe6]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:py-24">
        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </div>
        <div className="md:pb-2">
          <p className="text-base leading-7 text-muted-foreground sm:text-lg">
            {description}
          </p>
          {ctaLabel && ctaHref ? (
            <Button asChild className="mt-7" size="lg">
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

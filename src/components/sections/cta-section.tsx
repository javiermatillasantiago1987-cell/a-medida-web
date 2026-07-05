import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { PageCTA } from "@/content/types";

type CtaSectionProps = {
  content: PageCTA;
};

export function CtaSection({ content }: CtaSectionProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight">
            {content.title}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-primary-foreground/80">
            {content.description}
          </p>
        </div>
        <Button
          asChild
          className="border-white/45 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          size="lg"
          variant="outline"
        >
          <Link href={content.primaryCta.href}>
            {content.primaryCta.label}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

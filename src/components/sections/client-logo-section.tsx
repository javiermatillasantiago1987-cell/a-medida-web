import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ClientLogo } from "@/components/brand/client-logo";
import { Button } from "@/components/ui/button";
import type { ClientLogoSection as ClientLogoSectionContent } from "@/content/types";

type ClientLogoSectionProps = {
  content: ClientLogoSectionContent;
  variant?: "home" | "page";
};

export function ClientLogoSection({
  content,
  variant = "page",
}: ClientLogoSectionProps) {
  return (
    <section className={variant === "home" ? "border-y bg-section/55" : ""}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            {content.intro.eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {content.intro.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              {content.intro.title}
            </h2>
            {content.intro.description ? (
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {content.intro.description}
              </p>
            ) : null}
          </div>
          {content.cta ? (
            <Button asChild variant="outline">
              <Link href={content.cta.href}>
                {content.cta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          ) : null}
        </div>

        <div
          className="mt-9 grid [--client-logo-min:9.5rem] gap-3 sm:[--client-logo-min:12rem] lg:[--client-logo-min:13rem]"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, var(--client-logo-min)), 1fr))",
          }}
        >
          {content.items.map((client) => (
            <ClientLogo client={client} key={client.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

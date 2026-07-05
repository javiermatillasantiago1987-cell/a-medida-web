import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactPageContent } from "@/content/contact";
import { createPageMetadata } from "@/content/metadata";

export const metadata = createPageMetadata(contactPageContent);

export default function ContactoPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.95fr_1.05fr] md:py-24">
      <div>
        <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
          {contactPageContent.hero.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
          {contactPageContent.hero.title}
        </h1>
        <p className="mt-6 text-base leading-7 text-muted-foreground">
          {contactPageContent.hero.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={contactPageContent.contact.emailCta.href}>
              <Mail aria-hidden="true" className="h-4 w-4" />
              {contactPageContent.contact.emailCta.label}
            </a>
          </Button>
          {contactPageContent.contact.secondaryCta ? (
            <Button asChild size="lg" variant="outline">
              <a href={contactPageContent.contact.secondaryCta.href}>
                {contactPageContent.contact.secondaryCta.label}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
      <div className="space-y-5">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            {contactPageContent.contact.reasonsTitle}
          </h2>
          <ul className="mt-6 space-y-4">
            {contactPageContent.contact.reasons.map((reason) => (
              <li
                className="border-l border-primary/30 pl-4 text-sm leading-6 text-muted-foreground"
                key={reason}
              >
                {reason}
              </li>
            ))}
          </ul>
          <div className="mt-8 rounded-md border bg-section p-5">
            <p className="text-sm font-semibold">
              {contactPageContent.contact.response.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {contactPageContent.contact.response.description}
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-section p-6">
          <h2 className="text-xl font-semibold">
            {contactPageContent.contact.nextSteps.title}
          </h2>
          <div className="mt-5 grid gap-4">
            {contactPageContent.contact.nextSteps.items.map((step, index) => (
              <article className="grid gap-3 sm:grid-cols-[2.25rem_1fr]" key={step.title}>
                <p className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-sm font-semibold text-primary-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

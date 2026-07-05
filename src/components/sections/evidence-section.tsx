import type { EvidenceSection as EvidenceSectionContent } from "@/content/types";

type EvidenceSectionProps = {
  content: EvidenceSectionContent;
};

export function EvidenceSection({ content }: EvidenceSectionProps) {
  return (
    <section className="gradient-soft border-y">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:py-16">
        <div>
          {content.intro.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {content.intro.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold leading-tight">
            {content.intro.title}
          </h2>
          {content.intro.description ? (
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              {content.intro.description}
            </p>
          ) : null}
        </div>
        <div className="relative divide-y overflow-hidden rounded-lg border bg-background/85 shadow-sm">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 accent-rule" />
          {content.items.map((item) => (
            <article className="grid gap-4 p-5 sm:grid-cols-[0.7fr_1fr]" key={item.title}>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <ul className="grid gap-2 text-sm leading-6 text-muted-foreground">
                {item.items.map((detail) => (
                  <li className="border-l border-primary/30 pl-3" key={detail}>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

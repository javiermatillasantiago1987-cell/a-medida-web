import type { OperatingRhythmSection as OperatingRhythmSectionContent } from "@/content/types";

type OperatingRhythmSectionProps = {
  content: OperatingRhythmSectionContent;
};

export function OperatingRhythmSection({ content }: OperatingRhythmSectionProps) {
  return (
    <section className="relative overflow-hidden bg-dark text-primary-foreground" id={content.slug}>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px accent-rule opacity-80"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-8 h-72 w-72 rounded-full bg-pink/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-20 bottom-4 h-72 w-72 rounded-full bg-teal/30 blur-3xl"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            {content.intro.eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] text-dark-muted uppercase">
                {content.intro.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              {content.intro.title}
            </h2>
          </div>
          {content.intro.description ? (
            <p className="text-sm leading-6 text-dark-muted">
              {content.intro.description}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {content.items.map((step, index) => (
            <article className="border-l border-dark-muted/35 pl-4" key={step.title}>
              <p className="text-xs font-semibold text-dark-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-dark-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        {content.note ? (
          <p className="mt-10 max-w-3xl rounded-md border border-dark-muted/30 p-5 text-sm leading-6 text-dark-muted">
            {content.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}

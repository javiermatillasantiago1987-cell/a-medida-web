import type { DiagnosticSection as DiagnosticSectionContent } from "@/content/types";

type DiagnosticSectionProps = {
  content: DiagnosticSectionContent;
};

export function DiagnosticSection({ content }: DiagnosticSectionProps) {
  return (
    <section className="bg-background" id={content.slug}>
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div className="md:sticky md:top-24">
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
          {content.summary ? (
            <p className="mt-6 border-l border-primary/40 pl-4 text-sm font-medium leading-6">
              {content.summary}
            </p>
          ) : null}
        </div>
        <div className="gradient-panel rounded-lg border bg-card shadow-sm">
          {content.items.map((item, index) => (
            <article
              className="grid gap-4 border-b p-5 last:border-b-0 sm:grid-cols-[3rem_1fr]"
              key={item.title}
            >
              <p className="diagnostic-marker flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

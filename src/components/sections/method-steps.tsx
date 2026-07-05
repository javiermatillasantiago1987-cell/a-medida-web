import type { MethodStep, SectionIntro } from "@/content/types";

type MethodStepsProps = {
  intro: SectionIntro;
  items: MethodStep[];
};

export function MethodSteps({ intro, items }: MethodStepsProps) {
  return (
    <section className="bg-section">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          {intro.eyebrow ? (
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {intro.eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold">{intro.title}</h2>
          {intro.description ? (
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              {intro.description}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {items.map((step, index) => (
            <article className="border-l border-primary/30 pl-5" key={step.title}>
              <p className="text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

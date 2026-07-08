import type { CompactServiceListSection as CompactServiceListSectionContent } from "@/content/types";

type CompactServiceListProps = {
  content: CompactServiceListSectionContent;
};

export function CompactServiceList({ content }: CompactServiceListProps) {
  return (
    <section className="gradient-soft border-y">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.82fr_1.18fr]">
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
          {content.note ? (
            <p className="mt-6 border-l-2 border-primary/40 pl-4 text-sm leading-6 text-foreground">
              {content.note}
            </p>
          ) : null}
        </div>

        <div className="relative overflow-hidden rounded-lg border bg-background/90 shadow-sm">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 accent-rule" />
          <div className="grid sm:grid-cols-2">
            {content.items.map((item) => (
              <article
                className="group border-b p-4 last:border-b-0 sm:min-h-32 sm:border-r sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(2n)]:border-r-0"
                key={item.title}
              >
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full accent-rule"
                  />
                  <div>
                    <h3 className="text-base font-semibold leading-6">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

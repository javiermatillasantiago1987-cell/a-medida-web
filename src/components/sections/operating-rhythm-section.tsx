import type { OperatingRhythmSection as OperatingRhythmSectionContent } from "@/content/types";

type OperatingRhythmSectionProps = {
  content: OperatingRhythmSectionContent;
};

export function OperatingRhythmSection({ content }: OperatingRhythmSectionProps) {
  return (
    <section className="bg-[#22201d] text-[#f7f4ed]" id={content.slug}>
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            {content.intro.eyebrow ? (
              <p className="text-xs font-semibold tracking-[0.18em] text-[#d7c9ae] uppercase">
                {content.intro.eyebrow}
              </p>
            ) : null}
            <h2 className="mt-3 text-3xl font-semibold leading-tight">
              {content.intro.title}
            </h2>
          </div>
          {content.intro.description ? (
            <p className="text-sm leading-6 text-[#d7c9ae]">
              {content.intro.description}
            </p>
          ) : null}
        </div>
        <div className="mt-10 grid gap-3 md:grid-cols-5">
          {content.items.map((step, index) => (
            <article className="border-l border-[#d7c9ae]/35 pl-4" key={step.title}>
              <p className="text-xs font-semibold text-[#d7c9ae]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#d7c9ae]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
        {content.note ? (
          <p className="mt-10 max-w-3xl rounded-md border border-[#d7c9ae]/30 p-5 text-sm leading-6 text-[#d7c9ae]">
            {content.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}

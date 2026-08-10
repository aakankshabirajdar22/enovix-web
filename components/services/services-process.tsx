import type { ServiceProcessStep } from "@/types/content";

type ServicesProcessProps = Readonly<{ steps: readonly ServiceProcessStep[] }>;

export function ServicesProcess({ steps }: ServicesProcessProps) {
  return (
    <section className="section-shell grid gap-14 py-16 sm:gap-16 sm:py-20 lg:gap-20 lg:py-24">
      {steps.map((step, index) => (
        <div
          className="grid gap-3 sm:grid-cols-[1fr_2fr] sm:items-start sm:gap-8"
          key={`${step.title}-${index}`}
        >
          <h2 className="display-heading text-3xl sm:text-4xl">{step.title}</h2>
          <p className="body-copy max-w-xl text-xs leading-relaxed text-muted">
            {step.description}
          </p>
        </div>
      ))}
    </section>
  );
}

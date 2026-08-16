import type { CaseStudy } from "@/types/content";

type CaseStudyInfoProps = Readonly<{ study: CaseStudy }>;

export function CaseStudyInfo({ study }: CaseStudyInfoProps) {
  const meta = [
    [study.category, "Project Domain"],
    [study.duration, "Project Timeline"],
    [study.developmentType, "Tech Stack"],
  ] as const;

  return (
    <section className="section-shell grid gap-10 py-16 sm:py-20 lg:grid-cols-[.8fr_1.4fr] lg:gap-16 lg:py-24">
      <div className="grid gap-8">
        {meta.map(([value, label]) => (
          <div key={label}>
            <p className="display-heading text-xl text-brand sm:text-2xl">{value}</p>
            <p className="body-copy mt-1 text-xs text-muted">{label}</p>
          </div>
        ))}
      </div>
      <p className="body-copy max-w-2xl leading-relaxed text-muted">{study.description}</p>
    </section>
  );
}
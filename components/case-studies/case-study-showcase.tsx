import { CaseStudyMedia } from "@/components/case-studies/case-study-media";
import type { CaseStudy } from "@/types/content";

type CaseStudyShowcaseProps = Readonly<{ study: CaseStudy }>;

export function CaseStudyShowcase({ study }: CaseStudyShowcaseProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <CaseStudyMedia image={study.productShots} placeholderLabel="Product shots" tone="light" />
      <div className="section-shell mt-16 grid gap-14 sm:gap-16 lg:gap-20">
        {study.showcaseSections.map((item, index) => (
          <div className="grid gap-6 sm:grid-cols-[.6fr_1.4fr] sm:items-start sm:gap-10" key={index}>
            <h3 className="display-heading heading-3">{item.title}</h3>
            <div>
              <CaseStudyMedia aspectRatio="3/2" contained={false} image={item.image} tone="muted" />
              <p className="body-copy mt-4 max-w-xl leading-relaxed text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
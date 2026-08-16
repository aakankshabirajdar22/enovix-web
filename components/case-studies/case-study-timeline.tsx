import { CaseStudyMedia } from "@/components/case-studies/case-study-media";
import type { CaseStudy } from "@/types/content";

type CaseStudyTimelineProps = Readonly<{ study: CaseStudy }>;

export function CaseStudyTimeline({ study }: CaseStudyTimelineProps) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="section-shell grid gap-6 sm:grid-cols-[.6fr_1.4fr] sm:items-start sm:gap-10">
        <h2 className="font-display text-2xl font-black sm:text-3xl">Timeline</h2>
        <div>
          <CaseStudyMedia aspectRatio="16/9" contained={false} image={study.timeline.image} tone="light" />
          <p className="body-copy mt-4 max-w-xl leading-relaxed">{study.timeline.description}</p>
        </div>
      </div>
    </section>
  );
}
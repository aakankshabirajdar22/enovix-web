import { Reveal } from "@/components/shared/reveal";
import type { CaseStudy } from "@/types/content";

type CaseStudyHeroProps = Readonly<{ study: CaseStudy }>;

export function CaseStudyHero({ study }: CaseStudyHeroProps) {
  return (
    <section className="section-shell pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pb-16 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.4fr] lg:items-start">
        <Reveal><h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl">{study.title}<br /><span className="text-brand">{study.service}</span></h1></Reveal>
        <div className="mt-4 grid grid-cols-6 gap-x-5 gap-y-6 self-start opacity-80 lg:mt-6" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i className="h-px bg-line" key={index} />)}</div>
      </div>
    </section>
  );
}
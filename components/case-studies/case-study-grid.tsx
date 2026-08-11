import { CaseStudyCard } from "@/components/case-studies/case-study-card";
import type { RecentWorkItem } from "@/types/content";

type CaseStudyGridProps = Readonly<{ items: readonly RecentWorkItem[] }>;

export function CaseStudyGrid({ items }: CaseStudyGridProps) {
  return (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 sm:gap-8">
      {items.map((item, index) => (
        <CaseStudyCard item={item} key={index} />
      ))}
    </div>
  );
}
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid";
import { recentWork } from "@/content/recent-work";

export function CaseStudyRecentWork() {
  return (
    <section className="section-shell py-16 sm:py-20 lg:py-24">
      <h2 className="font-display text-3xl font-black text-muted sm:text-4xl">Recent Work</h2>
      <CaseStudyGrid items={recentWork} />
    </section>
  );
}
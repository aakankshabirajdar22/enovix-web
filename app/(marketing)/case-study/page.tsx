import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyContact } from "@/components/case-studies/case-study-contact";
import { CaseStudyHero } from "@/components/case-studies/case-study-hero";
import { CaseStudyInfo } from "@/components/case-studies/case-study-info";
import { CaseStudyMedia } from "@/components/case-studies/case-study-media";
import { CaseStudyRecentWork } from "@/components/case-studies/case-study-recent-work";
import { CaseStudyShowcase } from "@/components/case-studies/case-study-showcase";
import { CaseStudyTimeline } from "@/components/case-studies/case-study-timeline";
import { DecorativeGrid } from "@/components/shared/decorative-grid";
import { caseStudies } from "@/content/case-studies";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

const study = caseStudies[0];

export const metadata: Metadata = study
  ? createMetadata({ title: study.title, description: siteConfig.description })
  : createMetadata({ title: "Case Studies", description: siteConfig.description });

export default function CaseStudyPage() {
  if (!study) notFound();

  return (
    <>
      <CaseStudyHero study={study} />
      <CaseStudyMedia image={study.heroImage} tone="light" />
      <CaseStudyInfo study={study} />
      {study.contentImages.map((image, index) => <CaseStudyMedia image={image} key={index} tone="muted" />)}
      <CaseStudyShowcase study={study} />
      <CaseStudyTimeline study={study} />
      <div className="section-shell py-6 sm:py-8">
        <DecorativeGrid />
      </div>
      <CaseStudyRecentWork />
      <CaseStudyContact />
    </>
  );
}
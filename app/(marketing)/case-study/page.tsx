import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({ title: "Case Studies", description: siteConfig.description });

export default function CaseStudyPage() {
  return null;
}

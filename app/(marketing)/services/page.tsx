import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/content/services";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

const content = servicePages.uiux;

export const metadata: Metadata = createMetadata({ title: content.metaTitle, description: siteConfig.description });

export default function ServicesPage() {
  return <ServicePageTemplate content={content} />;
}

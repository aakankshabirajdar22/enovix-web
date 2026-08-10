import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/services/service-page-template";
import { servicePages } from "@/content/services";
import { siteConfig } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

type ServiceDetailPageProps = Readonly<{ params: Promise<{ slug: string }> }>;

function getContent(slug: string) {
  if (slug === "uiux") return undefined;
  return servicePages[slug];
}

export function generateStaticParams() {
  return Object.keys(servicePages)
    .filter((slug) => slug !== "uiux")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = getContent(slug);
  if (!content) return createMetadata({ title: "Services", description: siteConfig.description });
  return createMetadata({ title: content.metaTitle, description: siteConfig.description });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const content = getContent(slug);
  if (!content) notFound();
  return <ServicePageTemplate content={content} />;
}
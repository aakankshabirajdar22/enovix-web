import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

type PageMetadata = {
  title: string;
  description: string;
};

export function createMetadata({ title, description }: PageMetadata): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, siteName: siteConfig.name },
  };
}

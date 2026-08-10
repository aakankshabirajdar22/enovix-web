import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { AboutTeam } from "@/components/home/about-team";
import { ContactSection } from "@/components/home/contact-section";
import { FaqSection } from "@/components/home/faq-section";
import { Hero } from "@/components/home/hero";
import { MissionVision } from "@/components/home/mission-vision";
import { ServicesPreview } from "@/components/home/services-preview";
import { WorkCarousel } from "@/components/home/work-carousel";
import { ScrollToHash } from "@/components/shared/scroll-to-hash";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Digital Experiences Built for Growth",
  description: siteConfig.description,
});

export default function HomePage() {
  return <div id="top"><ScrollToHash /><Hero /><MissionVision /><ServicesPreview /><WorkCarousel /><AboutTeam /><FaqSection /><ContactSection /></div>;
}

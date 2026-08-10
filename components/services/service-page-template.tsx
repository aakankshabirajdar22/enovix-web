import { FaqSection } from "@/components/home/faq-section";
import { ServicesContact } from "@/components/services/services-contact";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesProcess } from "@/components/services/services-process";
import type { ServicePageContent } from "@/types/content";

export function ServicePageTemplate({ content }: Readonly<{ content: ServicePageContent }>) {
  return (
    <>
      <ServicesHero image={content.heroImage} titleHighlight={content.heroTitleHighlight} titleTop={content.heroTitleTop} />
      <ServicesProcess steps={content.process} />
      <FaqSection defaultOpenFirst items={content.faq} />
      <ServicesContact />
    </>
  );
}

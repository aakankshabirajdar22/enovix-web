import Image from "next/image";
import { ArrowButton } from "@/components/shared/arrow-button";
import type { RecentWorkItem } from "@/types/content";

type CaseStudyCardProps = Readonly<{ item: RecentWorkItem }>;

export function CaseStudyCard({ item }: CaseStudyCardProps) {
  return (
    <article className="relative border border-brand-muted p-4 transition hover:border-brand sm:p-5">
      <div className="relative w-full overflow-hidden bg-[#0c1011]" style={{ aspectRatio: "4/3" }}>
        <Image alt={item.image.alt} className="object-cover" fill sizes="(min-width: 640px) 50vw, 100vw" src={item.image.src} />
      </div>
      <div className="mt-4 pr-14">
        <h3 className="display-heading text-lg text-brand sm:text-xl">{item.title}</h3>
        <p className="body-copy mt-2 text-xs leading-relaxed">{item.description}</p>
      </div>
      <ArrowButton className="absolute bottom-4 right-4 border-brand text-brand hover:bg-brand hover:text-background sm:bottom-5 sm:right-5" />
    </article>
  );
}
import Image from "next/image";
import { DoubleLining } from "@/components/shared/double-lining";
import { Reveal } from "@/components/shared/reveal";
import type { ServicePageContent } from "@/types/content";

type ServicesHeroProps = Readonly<{
  titleTop: string;
  titleHighlight: string;
  image: ServicePageContent["heroImage"];
}>;

export function ServicesHero({ titleTop, titleHighlight, image }: ServicesHeroProps) {
  return (
    <section className="section-shell pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-32 lg:pt-16">
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.4fr] lg:items-center">
        <Reveal><h1 className="display-heading heading-1">{titleTop}<br /><span className="text-brand">{titleHighlight}</span></h1></Reveal>
        <DoubleLining className="opacity-80" />
      </div>
      <div className="relative mt-10 w-full sm:mt-14 lg:mt-16">
        <Image alt={image.alt} className="h-auto w-full" height={image.height} priority sizes="100vw" src={image.src} width={image.width} />
      </div>
    </section>
  );
}

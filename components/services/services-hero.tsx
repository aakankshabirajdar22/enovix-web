import Image from "next/image";
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
      <div className="grid gap-8 lg:grid-cols-[.8fr_1.4fr] lg:items-start">
        <Reveal><h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl">{titleTop}<br /><span className="text-brand">{titleHighlight}</span></h1></Reveal>
        <div className="mt-4 grid grid-cols-6 gap-x-5 gap-y-6 self-start opacity-80 lg:mt-8" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i className="h-px bg-line" key={index} />)}</div>
      </div>
      <div className="relative mt-10 w-full sm:mt-14 lg:mt-16">
        <Image alt={image.alt} className="h-auto w-full" height={image.height} priority sizes="100vw" src={image.src} width={image.width} />
      </div>
    </section>
  );
}

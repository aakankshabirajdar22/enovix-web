import { Reveal } from "@/components/shared/reveal";

export function Hero() {
  return (
    <section className="relative isolate min-h-[580px] overflow-hidden py-16 sm:min-h-[680px] lg:min-h-[780px] lg:py-24">
      <video aria-hidden="true" autoPlay className="absolute inset-0 -z-10 size-full object-cover object-center" loop muted playsInline preload="metadata">
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-black/55" />
      <div className="section-shell relative flex min-h-[calc(580px-4rem)] flex-col justify-between sm:min-h-[calc(680px-6rem)] lg:min-h-[calc(780px-6rem)]">
        <Reveal><h1 className="display-heading max-w-3xl text-[clamp(3.25rem,7.3vw,7rem)]">Our goal is,<br />your <span className="text-brand">success</span></h1></Reveal>
        <Reveal><p className="body-copy ml-auto max-w-xl text-right sm:text-base lg:text-xl">We design modern websites and digital experiences that help businesses grow faster, build trust, and convert more customers. From strategy to launch, EnovixWeb creates user-first websites tailored for ambitious startups, brands, and businesses across Pune and worldwide.</p></Reveal>
      </div>
    </section>
  );
}

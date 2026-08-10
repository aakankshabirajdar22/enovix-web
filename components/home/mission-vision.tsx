"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const cards = [
  {
    key: "mission",
    title: "Mission",
    image: "/images/mission-vision/mission.png",
    detail: "Our mission is to build exceptional digital experiences that combine beautiful design, intuitive usability, and measurable business impact. Every project is crafted to help brands stand out, connect with users, and achieve sustainable online growth through purposeful design.",
  },
  {
    key: "vision",
    title: "Vission",
    image: "/images/mission-vision/vision.png",
    detail: "We envision EnovixWeb becoming a globally trusted, AI-powered product design agency that helps businesses innovate faster through intelligent design systems, scalable digital products, and future-ready web experiences built for the next generation.",
  },
] as const;

type CardKey = (typeof cards)[number]["key"];

export function MissionVision() {
  const [active, setActive] = useState<CardKey>("mission");

  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.65fr] lg:items-start"><Reveal><h2 className="display-heading text-4xl sm:text-5xl">Our mission,<br />our <span className="text-brand">vission</span></h2></Reveal><div className="mt-4 grid grid-cols-6 gap-x-5 gap-y-6 opacity-80" aria-hidden="true">{Array.from({ length: 18 }, (_, index) => <i className="h-px bg-line" key={index} />)}</div></div>
      <p className="eyebrow mt-14 text-sm">Hover for more ↓</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2" onMouseLeave={() => setActive("mission")}>
        {cards.map((card) => {
          const isActive = active === card.key;
          return (
            <motion.article
              animate={{ borderColor: isActive ? "#c8ff00" : "#6f7678" }}
              aria-pressed={isActive}
              className="group relative flex min-h-85 flex-col overflow-hidden border p-5 sm:min-h-100 sm:p-7 lg:min-h-120"
              initial={false}
              key={card.key}
              onClick={() => setActive(card.key)}
              onFocus={() => setActive(card.key)}
              onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActive(card.key); } }}
              onMouseEnter={() => setActive(card.key)}
              role="button"
              tabIndex={0}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div className={cn("flex items-center justify-center", !isActive && "flex-1")} layout="position" transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}><h3 className="display-heading text-center text-4xl">{card.title}</h3></motion.div>
              <AnimatePresence>
                {isActive && <motion.div animate={{ opacity: 1 }} className="mt-5 flex flex-1 flex-col" exit={{ opacity: 0 }} initial={{ opacity: 0 }} transition={{ duration: 0.25, delay: 0.1 }}>
                  <div className="relative aspect-video w-full shrink-0 overflow-hidden"><Image alt={card.title} className="object-cover" fill sizes="(min-width: 1024px) 45vw, 90vw" src={card.image} /></div>
                  <p className="body-copy mt-5 text-xs">{card.detail}</p>
                </motion.div>}
              </AnimatePresence>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

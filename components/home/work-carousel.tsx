"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowButton } from "@/components/shared/arrow-button";

const projects = [
  {
    title: "IVL Website Revamp",
    summary:
      "Redesigned and developed a modern corporate website focused on improving user experience, information architecture, mobile responsiveness, and lead generation while strengthening the company's digital presence.",
    tags: [
      "UIUX",
      "SEO",
      "Branding",
      "Logo Design",
      "Web Design",
      "Web Development",
    ],
    image: "/images/work/IVL.png",
  },
  {
    title: "Indipath Website",
    summary:
      "Lorem ipsum dolor sit amet consectetur. Odio sed ac sed facilisis amet. Aliquam cursus donec diam lacus. Vitae integer viverra curabitur aliquam lectus egestas platea egestas lectus. Vulputate in at tempor eros nunc purus mi risus.",
    tags: [
      "UIUX",
      "SEO",
      "Branding",
      "Logo Design",
      "Web Design",
      "Web Development",
    ],
    image: "/images/work/indipath.png",
  },
] as const;

export function WorkCarousel() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const shift = (direction: 1 | -1) =>
    setActive(
      (current) => (current + direction + projects.length) % projects.length,
    );
  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40" id="work">
      <div className="flex items-end justify-between">
        <div>
          <p className="eyebrow text-3xl">Work</p>
          <h2 className="display-heading heading-2 mt-2">
            We&apos;ve done
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            aria-label="Previous project"
            className="p-2 text-foreground hover:text-brand"
            onClick={() => shift(-1)}
            type="button"
          >
            <ChevronLeft size={39} />
          </button>
          <button
            aria-label="Next project"
            className="p-2 text-brand hover:text-foreground"
            onClick={() => shift(1)}
            type="button"
          >
            <ChevronRight size={39} />
          </button>
        </div>
      </div>
      <div className="mt-8 overflow-hidden border border-brand-muted">
        <AnimatePresence mode="wait">
          <motion.article
            animate={{ opacity: 1, x: 0 }}
            className="relative bg-brand text-background"
            exit={{ opacity: 0, x: -24 }}
            initial={{ opacity: 0, x: 24 }}
            key={project.title}
            transition={{ duration: 0.28 }}
          >
            <div className="relative h-64 overflow-hidden bg-[#e4e4e4] sm:h-100">
              {project.image ? (
                <Image
                  alt={project.title}
                  className="object-cover"
                  fill
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  src={project.image}
                />
              ) : (
                <>
                  <div className="absolute left-[17%] top-[26%] h-[56%] w-[48%] rotate-[-8deg] rounded border-8 border-neutral-900 bg-linear-to-br from-[#045c65] via-[#dce4e1] to-[#f4f4f2] shadow-2xl" />
                  <div className="absolute right-[16%] top-[13%] h-[64%] w-[26%] rotate-3 rounded border-8 border-neutral-900 bg-linear-to-b from-[#ecf0ec] to-[#0d5962] shadow-xl" />
                  <div className="absolute right-[8%] top-[33%] h-[45%] w-[13%] rounded-[.8rem] border-6 border-neutral-900 bg-[#eef0ed] shadow-xl" />
                </>
              )}
            </div>
            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.4fr_.8fr] lg:items-end">
              <div>
                <h3 className="display-heading text-3xl sm:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-3 max-w-2xl text-xs">
                  {project.summary}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-xs font-medium">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <ArrowButton className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8" />
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  );
}

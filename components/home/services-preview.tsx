"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

const services = [
  ["UIUX Designing", "Create intuitive interfaces, user journeys, wireframes, prototypes, and engaging digital experiences designed to improve usability, customer satisfaction, and product success.", "/services"],
  ["Website Design + Development", "Modern responsive websites built with performance, accessibility, SEO, and conversion optimization in mind for startups, growing businesses, and established brands.", "/services/website-development"],
  ["Branding", "Build memorable visual identities, brand systems, and digital assets that strengthen recognition, create trust, and position your business for long-term growth.", "/services/branding"],
] as const;

export function ServicesPreview() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section-shell py-20 sm:py-28 lg:py-40">
      <Reveal><p className="eyebrow text-3xl">Services</p><h2 className="display-heading mt-2 text-4xl sm:text-5xl">We offer</h2></Reveal>
      <div className="mt-10">
        {services.map(([title, description, href], index) => {
          const isActive = hovered === index;
          return (
            <motion.article
              animate={{
                borderTopColor: isActive ? "#c8ff00" : "transparent",
                borderRightColor: isActive ? "#c8ff00" : "transparent",
                borderBottomColor: isActive ? "#c8ff00" : "#6f7678",
                borderLeftColor: isActive ? "#c8ff00" : "transparent",
                backgroundColor: isActive ? "rgba(200,255,0,0.06)" : "rgba(200,255,0,0)",
              }}
              className="grid gap-6 border px-4 py-7 md:grid-cols-[1.4fr_.8fr] md:items-center md:px-7"
              initial={false}
              key={title}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <h3 className={cn("display-heading text-2xl transition-colors duration-300 sm:text-3xl", isActive ? "text-brand" : "text-foreground")}>{title}</h3>
              <div>
                <p className="body-copy text-xs">{description}</p>
                <Link className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase text-brand hover:text-foreground" href={href}>Learn more <ArrowUpRight size={15} /></Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

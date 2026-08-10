"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Sparkle, X } from "lucide-react";
import { LimeButton } from "@/components/shared/lime-button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/services", label: "Services we offer" },
  { href: "/case-study", label: "Our Work" },
  { href: "/#contact", label: "Work with Us" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function MobileMenu() {
  const pathname = usePathname();
  const ctaLabel = pathname === "/services" ? "Virtual Meetup?" : "Book Free Strategy Call";
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") { setIsOpen(false); return; }
    if (event.key !== "Tab") return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
    if (!focusable?.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }

  return (
    <>
      <div className="flex items-center gap-3 sm:gap-4">
        <button aria-controls="site-navigation" aria-expanded={isOpen} aria-label="Open navigation menu" className="grid size-10 place-items-center text-foreground transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:size-11" onClick={() => setIsOpen(true)} type="button"><Menu size={26} strokeWidth={1.75} /></button>
        <LimeButton aria-controls="site-navigation" aria-expanded={isOpen} className="relative rounded-full px-6 py-2.5 text-xs normal-case after:absolute after:right-[-3px] after:top-1/2 after:size-0 after:-translate-y-1/2 after:border-y-[7px] after:border-l-[9px] after:border-y-transparent after:border-l-brand after:content-[''] hover:after:border-l-brand-muted sm:text-sm" onClick={() => setIsOpen(true)}>{ctaLabel}</LimeButton>
      </div>
      <AnimatePresence>
        {isOpen && <motion.div animate={{ opacity: 1 }} className="fixed inset-x-0 top-full z-[100] h-[580px] sm:h-[680px] lg:h-[780px]" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onKeyDown={handleKeyDown} role="presentation">
          <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} aria-label="Site navigation" aria-modal="true" className="relative flex h-full w-full overflow-hidden bg-brand px-7 py-9 text-background sm:px-12 sm:py-11 lg:px-[7vw] lg:py-16" exit={{ opacity: 0, scale: 0.98, y: -12 }} id="site-navigation" initial={{ opacity: 0, scale: 0.985, y: -20 }} ref={dialogRef} role="dialog" transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}>
            <Sparkle aria-hidden="true" className="pointer-events-none absolute -right-[14vw] top-1/2 size-[76vw] -translate-y-1/2 text-[#dfff55] sm:-right-[8vw] sm:size-[46vw]" fill="currentColor" stroke="none" />
            <Sparkle aria-hidden="true" className="pointer-events-none absolute right-[4vw] top-1/2 size-[40vw] -translate-y-1/2 rotate-[16deg] text-[#e8ffa0] sm:right-[8vw] sm:size-[22vw]" fill="currentColor" stroke="none" />
            <button aria-label="Close navigation menu" className="absolute right-6 top-6 z-10 grid size-11 place-items-center text-background transition hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:right-10 sm:top-10" onClick={() => setIsOpen(false)} ref={closeButtonRef} type="button"><X size={25} strokeWidth={1.75} /></button>
            <nav className="relative z-10 flex w-full items-center" aria-label="Primary navigation"><ul className="grid w-full max-w-5xl gap-x-12 gap-y-7 text-[clamp(2.4rem,5.2vw,5.6rem)] leading-[.85] sm:grid-cols-2 lg:gap-y-12">{links.map((link) => <li key={link.label}><Link className="group inline-flex flex-col font-display font-black focus-visible:outline-none" href={link.href} onClick={() => setIsOpen(false)}><span>{link.label}</span><span aria-hidden="true" className={cn("mt-2 h-1 bg-background transition-all duration-300 group-hover:w-full group-focus-visible:w-full", link.label === "About Us" ? "w-full" : "w-0")} /></Link></li>)}</ul></nav>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}

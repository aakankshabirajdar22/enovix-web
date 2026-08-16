"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FourPointStar } from "@/components/shared/four-point-star";
import { LimeButton } from "@/components/shared/lime-button";
import { scrollToHashTarget } from "@/components/shared/scroll-to-hash";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services we offer" },
  { href: "/#work", label: "Our Work" },
  { href: "/#contact", label: "Contact Us" },
] as const;

export function MobileMenu() {
  const pathname = usePathname();
  const ctaLabel = pathname === "/services/ui-ux" || pathname.startsWith("/case-study") ? "Virtual Meetup?" : "Book Free Strategy Call";
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

  function handleNavLinkClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    setIsOpen(false);
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return;
    const targetPath = href.slice(0, hashIndex) || "/";
    const hash = href.slice(hashIndex);
    if (pathname !== targetPath) return;
    // Already on the target page: Next's Link won't fire a hashchange event for this
    // (it uses history.pushState, which doesn't), so scroll directly instead of navigating.
    event.preventDefault();
    if (scrollToHashTarget(hash)) window.history.replaceState(null, "", hash);
  }

  return (
    <>
      <div className="flex items-center gap-3 sm:gap-4">
        <button aria-controls="site-navigation" aria-expanded={isOpen} aria-label="Open navigation menu" className="grid size-10 place-items-center text-foreground transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:size-11" onClick={() => setIsOpen(true)} type="button"><Menu size={26} strokeWidth={1.75} /></button>
        <LimeButton className="px-7 py-2.5 text-xs normal-case sm:text-sm" href={siteConfig.calendlyUrl} rel="noopener noreferrer" style={{ clipPath: "polygon(0.65rem 0, calc(100% - 0.65rem) 0, 100% 50%, calc(100% - 0.65rem) 100%, 0.65rem 100%, 0 50%)" }} target="_blank">{ctaLabel}</LimeButton>
      </div>
      <AnimatePresence>
        {isOpen && <motion.div animate={{ opacity: 1 }} className="fixed inset-x-0 top-full z-[100] h-90 sm:h-100 lg:h-110" exit={{ opacity: 0 }} initial={{ opacity: 0 }} onKeyDown={handleKeyDown} role="presentation">
          <motion.div animate={{ opacity: 1, scale: 1, y: 0 }} aria-label="Site navigation" aria-modal="true" className="relative flex h-full w-full overflow-hidden bg-brand px-7 py-6 text-background sm:px-10 sm:py-7 lg:px-[6vw] lg:py-9" exit={{ opacity: 0, scale: 0.98, y: -12 }} id="site-navigation" initial={{ opacity: 0, scale: 0.985, y: -20 }} ref={dialogRef} role="dialog" transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}>
            <FourPointStar className="-right-[14vw] top-1/2 size-[76vw] -translate-y-1/2 sm:-right-[8vw] sm:size-[46vw]" />
            <button aria-label="Close navigation menu" className="absolute right-6 top-6 z-10 grid size-11 place-items-center text-background transition hover:rotate-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background sm:right-10 sm:top-10" onClick={() => setIsOpen(false)} ref={closeButtonRef} type="button"><X size={25} strokeWidth={1.75} /></button>
            <nav className="relative z-10 flex w-full items-center" aria-label="Primary navigation"><ul className="grid w-full max-w-5xl gap-x-10 gap-y-3 text-[clamp(1.6rem,3vw,3rem)] leading-[.9] sm:grid-cols-2 lg:gap-y-5">{links.map((link) => <li key={link.label}><Link className="group inline-flex flex-col font-display font-black focus-visible:outline-none" href={link.href} onClick={(event) => handleNavLinkClick(event, link.href)} scroll={false}><span>{link.label}</span><span aria-hidden="true" className={cn("mt-1 h-1 bg-background transition-all duration-300 group-hover:w-full group-focus-visible:w-full", link.label === "About Us" ? "w-full" : "w-0")} /></Link></li>)}</ul></nav>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}

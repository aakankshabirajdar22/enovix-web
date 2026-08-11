"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function scrollToHashTarget(hash: string): boolean {
  if (!hash) return false;
  const target = document.querySelector(hash);
  if (!target) return false;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export function ScrollToHash() {
  const pathname = usePathname();

  useEffect(() => {
    function tryScroll() {
      return scrollToHashTarget(window.location.hash);
    }

    if (!window.location.hash || tryScroll()) return;

    // The target section may not be mounted yet right after a route change.
    // Watch the DOM until it appears, instead of guessing with a fixed delay.
    const observer = new MutationObserver(() => {
      if (tryScroll()) observer.disconnect();
    });
    observer.observe(document.body, { childList: true, subtree: true });

    // Safety net so the observer never runs forever if the target never appears.
    const timeoutId = setTimeout(() => observer.disconnect(), 3000);

    window.addEventListener("hashchange", tryScroll);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
      window.removeEventListener("hashchange", tryScroll);
    };
  }, [pathname]);

  return null;
}

"use client";

import { useEffect } from "react";

export function ScrollToHash() {
  useEffect(() => {
    function scrollToCurrentHash() {
      const hash = window.location.hash;
      if (!hash) return;
      const target = document.querySelector(hash);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Two passes: an early attempt, and a correction once late layout (images, fonts) has settled.
    const timeouts = [setTimeout(scrollToCurrentHash, 80), setTimeout(scrollToCurrentHash, 500)];
    window.addEventListener("hashchange", scrollToCurrentHash);
    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener("hashchange", scrollToCurrentHash);
    };
  }, []);

  return null;
}
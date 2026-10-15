"use client";

import { useEffect, useState } from "react";

const OFFSET = 120; // header (64px) + sticky anchor strip (~56px)

/**
 * Returns the `href` of the last section whose top is above the offset.
 * Pass an array like `["#harga", "#spesifikasi", ...]`.
 */
export function useScrollSpy(sectionHrefs: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const ids = sectionHrefs.map((href) => href.replace("#", ""));

    function compute() {
      let latest: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= OFFSET) {
          latest = `#${id}`;
        }
      }
      setActive(latest);
    }

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute, { passive: true });

    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [sectionHrefs]);

  return active;
}

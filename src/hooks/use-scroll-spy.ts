"use client";

import { useEffect, useState, useRef, useCallback } from "react";

/** Shared offset for scroll-spy and anchor scrolling (header + sticky nav + tolerance). */
export const SCROLL_SPY_OFFSET = 132;

const BOTTOM_THRESHOLD = 8;

/**
 * Returns the `href` of the last section whose top is above the offset.
 * Pass an array like `["#harga", "#spesifikasi", ...]`.
 */
export function useScrollSpy(sectionHrefs: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastActiveRef = useRef<string | null>(null);

  const compute = useCallback(() => {
    const ids = sectionHrefs.map((href) => href.replace("#", ""));
    let latest: string | null = null;

    for (const id of ids) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= SCROLL_SPY_OFFSET) {
        latest = `#${id}`;
      }
    }

    // Force the last section active when we have reached the bottom of the page.
    const lastId = ids[ids.length - 1];
    if (lastId) {
      const lastEl = document.getElementById(lastId);
      if (lastEl) {
        const lastRect = lastEl.getBoundingClientRect();
        if (lastRect.bottom <= window.innerHeight + BOTTOM_THRESHOLD) {
          latest = `#${lastId}`;
        }
      }
    }

    if (latest !== lastActiveRef.current) {
      lastActiveRef.current = latest;
      setActive(latest);
    }
  }, [sectionHrefs]);

  useEffect(() => {
    compute();

    const onScroll = () => {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        compute();
        rafRef.current = null;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [compute]);

  return active;
}

/** Programmatically scroll to a section and immediately set it active. */
export function scrollToSection(href: string, setActive?: (href: string) => void) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - SCROLL_SPY_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  setActive?.(href);
}

"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { Locale } from "@/types";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

const VALID_LOCALES: Locale[] = ["id", "en", "fil"];

function getLocaleFromSearch(): Locale | null {
  if (typeof window === "undefined") return null;
  const raw = new URLSearchParams(window.location.search).get("lang");
  if (raw === "en" || raw === "fil") return raw;
  return null;
}

function updateUrlLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (locale === "id") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", locale);
  }
  window.history.replaceState({}, "", url.toString());
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const fromUrl = getLocaleFromSearch();
    if (fromUrl && fromUrl !== locale) {
      setLocaleState(fromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setLocale = useCallback((next: Locale) => {
    if (!VALID_LOCALES.includes(next)) return;
    setLocaleState(next);
    updateUrlLocale(next);
  }, []);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}

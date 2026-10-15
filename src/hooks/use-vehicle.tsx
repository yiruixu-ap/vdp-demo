"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import type { VehicleDetail, VehicleVariant } from "@/types";
import { variantToSlug } from "@/lib/format";

interface VehicleContextValue extends VehicleDetail {
  selectedVariantIndex: number;
  setSelectedVariantIndex: (index: number) => void;
}

const VehicleContext = createContext<VehicleContextValue | undefined>(undefined);

function getVariantIndexFromSearch(variants: VehicleVariant[]): number {
  if (typeof window === "undefined") return -1;
  const slug = new URLSearchParams(window.location.search).get("varian");
  if (!slug) return -1;
  return variants.findIndex((v) => variantToSlug(v.name) === slug);
}

function updateUrlVariant(variants: VehicleVariant[], index: number) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (index === 0) {
    url.searchParams.delete("varian");
  } else {
    url.searchParams.set("varian", variantToSlug(variants[index].name));
  }
  window.history.replaceState({}, "", url.toString());
}

/**
 * Supplies the current vehicle and the user-selected variant to every section.
 * Sections read `useVehicle()` for the vehicle object and
 * `useSelectedVariant()` for the active variant + setter.
 *
 * Demo uses a `?varian=<slug>` query parameter so the selected variant is
 * shareable and restorable without adding per-variant static pages. Production
 * should migrate to `/mobil/<brand>/<model>/<variant>/` sub-paths once that
 * route layer is implemented.
 */
export function VehicleProvider({ vehicle, children }: { vehicle: VehicleDetail; children: ReactNode }) {
  const [selectedVariantIndex, setSelectedVariantIndexState] = useState(0);

  useEffect(() => {
    const fromUrl = getVariantIndexFromSearch(vehicle.variants);
    if (fromUrl >= 0 && fromUrl !== selectedVariantIndex) {
      setSelectedVariantIndexState(fromUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const setSelectedVariantIndex = useCallback(
    (index: number) => {
      setSelectedVariantIndexState(index);
      updateUrlVariant(vehicle.variants, index);
    },
    [vehicle.variants],
  );

  return (
    <VehicleContext.Provider
      value={{ ...vehicle, selectedVariantIndex, setSelectedVariantIndex }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicle(): VehicleDetail {
  const ctx = useContext(VehicleContext);
  if (!ctx) {
    throw new Error("useVehicle must be used within VehicleProvider");
  }
  return ctx;
}

export function useSelectedVariant(): {
  variant: VehicleVariant;
  index: number;
  setIndex: (index: number) => void;
} {
  const ctx = useContext(VehicleContext);
  if (!ctx) {
    throw new Error("useSelectedVariant must be used within VehicleProvider");
  }
  const { variants, selectedVariantIndex, setSelectedVariantIndex } = ctx;
  return {
    variant: variants[selectedVariantIndex],
    index: selectedVariantIndex,
    setIndex: setSelectedVariantIndex,
  };
}

"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { VehicleDetail, VehicleVariant } from "@/types";

interface VehicleContextValue extends VehicleDetail {
  selectedVariantIndex: number;
  setSelectedVariantIndex: (index: number) => void;
}

const VehicleContext = createContext<VehicleContextValue | undefined>(undefined);

/**
 * Supplies the current vehicle and the user-selected variant to every section.
 * Sections read `useVehicle()` for the vehicle object and
 * `useSelectedVariant()` for the active variant + setter.
 */
export function VehicleProvider({ vehicle, children }: { vehicle: VehicleDetail; children: ReactNode }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
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

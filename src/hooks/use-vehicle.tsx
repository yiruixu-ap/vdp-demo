"use client";

import { createContext, useContext, ReactNode } from "react";
import type { VehicleDetail } from "@/types";

const VehicleContext = createContext<VehicleDetail | undefined>(undefined);

/**
 * Supplies the current vehicle to every section component.
 * Sections read `useVehicle()` instead of importing a specific model's data,
 * so the same components render any vehicle in the registry.
 */
export function VehicleProvider({ vehicle, children }: { vehicle: VehicleDetail; children: ReactNode }) {
  return <VehicleContext.Provider value={vehicle}>{children}</VehicleContext.Provider>;
}

export function useVehicle(): VehicleDetail {
  const ctx = useContext(VehicleContext);
  if (!ctx) {
    throw new Error("useVehicle must be used within VehicleProvider");
  }
  return ctx;
}

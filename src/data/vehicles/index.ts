import type { VehicleDetail, VehicleSeed } from "@/types";
import { getBrand } from "@/data/brands";
import { rushSeed } from "./rush";

/**
 * Every seed registered here becomes a routable detail page at
 * /mobil/[brand]/[model].
 *
 * Adding a new model = add one seed file + one line below.
 * Adding a new brand = add one entry to `src/data/brands.ts` too.
 */
const seeds: VehicleSeed[] = [rushSeed];

export const vehicleRegistry: Record<string, VehicleDetail> = Object.fromEntries(
  seeds.map((seed) => [
    `${seed.brandSlug}/${seed.modelSlug}`,
    {
      ...seed,
      brandInfo: getBrand(seed.brandSlug) ?? {
        name: seed.brand,
        intro: "",
        serviceNote: "",
        dealerNote: "",
        resaleNote: "",
      },
    } satisfies VehicleDetail,
  ]),
);

export function getVehicleDetail(brand: string, model: string): VehicleDetail | undefined {
  return vehicleRegistry[`${brand.toLowerCase()}/${model.toLowerCase()}`];
}

export const allVehicles = Object.values(vehicleRegistry);

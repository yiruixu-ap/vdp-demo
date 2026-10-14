/**
 * Shared plain-language definitions for vehicle parameters.
 * All copy is stored by locale; components import from here.
 */

import { Locale } from "@/types";

export const paramsDictionary: Record<string, Record<Locale, string>> = {
  Mesin: {
    id: "Kapasitas mesin dalam cc. Makin besar umumnya makin bertenaga.",
    en: "Engine displacement in cc. Larger usually means more power.",
    fil: "Laki ng makina sa cc. Mas malaki kadalasan ay mas malakas.",
  },
  Tenaga: {
    id: "Kekuatan mesin, makin besar makin kuat saat menanjak atau muatan penuh.",
    en: "Engine power; higher is better for hills and full loads.",
    fil: "Lakas ng makina; mas mataas ay mas maganda sa ahon at puno.",
  },
  Torsi: {
    id: "Tenaga putar mesin. Besar torsi = tarikan enteng dari posisi berhenti.",
    en: "Twisting force of the engine. More torque = easier acceleration from a stop.",
    fil: "Lakas ng pag-ikot ng makina. Mas mataas = mas madaling umandar.",
  },
  Transmisi: {
    id: "Cara mobil menyalurkan tenaga ke roda. Manual perlu oper gigi, otomatis lebih praktis.",
    en: "How power reaches the wheels. Manual needs gear shifts; automatic is more convenient.",
    fil: "Paraan ng pagpasa ng lakas sa gulong. Manual ay may cambio; automatic ay mas praktikal.",
  },
  "Bahan Bakar": {
    id: "Jenis bahan bakar yang digunakan. Bensin paling umum di Indonesia.",
    en: "Fuel type. Gasoline is most common in Indonesia.",
    fil: "Uri ng gasolina. Gasolina ang pinakakaraniwan sa Indonesia.",
  },
  "Konsumsi BBM": {
    id: "Jarak yang bisa ditempuh per 1 liter bahan bakar. Makin tinggi makin hemat.",
    en: "Distance travelled per 1 litre of fuel. Higher is more economical.",
    fil: "Distansyang kayang takbuhin kada 1 litro. Mas mataas ay mas matipid.",
  },
  "Kapasitas Bagasi": {
    id: "Volume ruang bagasi. Makin besar makin muat barang bawaan keluarga.",
    en: "Trunk volume. Larger means more family cargo space.",
    fil: "Laki ng compartment. Mas malaki ay mas maraming kasya.",
  },
  Kursi: {
    id: "Jumlah penumpang maksimal. 7 kursi cocok untuk keluarga besar.",
    en: "Maximum passenger count. 7 seats suit larger families.",
    fil: "Dami ng pasahero. 7 upuan ay angkop sa malaking pamilya.",
  },
  "Tipe Body": {
    id: "Bentuk karoseri. SUV biasanya lebih tinggi dan cocok untuk jalan tidak rata.",
    en: "Body shape. SUVs are usually taller and handle rough roads better.",
    fil: "Hugis ng katawan. Ang SUV ay karaniwang mas mataas at angkop sa hindi patag na kalsada.",
  },
  Dimensi: {
    id: "Panjang × lebar × tinggi kendaraan dalam mm.",
    en: "Length × width × height of the vehicle in mm.",
    fil: "Haba × lapad × taas ng sasakyan sa mm.",
  },
  "Jarak sumbu roda": {
    id: "Jarak antara pusat roda depan dan belakang. Lebih panjang biasanya lebih stabil dan lapang.",
    en: "Distance between the front and rear wheel centers. Longer usually means more stability and cabin space.",
    fil: "Distansya sa pagitan ng sentro ng gulong sa harap at likod. Mas mahaba ay karaniwang mas matatag at maluwag.",
  },
  "Ground clearance": {
    id: "Jarak terendah dari bodi ke tanah. Lebih tinggi lebih aman di jalan tidak rata.",
    en: "Lowest distance from the body to the ground. Higher is safer on uneven roads.",
    fil: "Pinakamababang distansya mula sa katawan hanggang sa lupa. Mas mataas ay mas ligtas sa hindi patag na kalsada.",
  },
  "Kapasitas tangki": {
    id: "Volume tangki bahan bakar. Lebih besar bisa lebih jarang isi bensin.",
    en: "Fuel tank volume. Larger means fewer refuelling stops.",
    fil: "Dami ng gasolina ang kayang saluhin ng tangke. Mas malaki ay mas madalang maggasolina.",
  },
};

export function explainParam(key: string, locale: Locale): string | undefined {
  return paramsDictionary[key]?.[locale];
}

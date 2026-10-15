import type { Metadata } from "next";
import { Lato, Poppins } from "next/font/google";
import { LocaleProvider } from "@/hooks/use-locale";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// 仅演示站防收录：该开关只由 GitHub Pages 部署工作流打开，
// 生产环境不设；删掉 deploy.yml 里 NEXT_PUBLIC_NOINDEX 那一行即恢复可收录。
const noindex = process.env.NEXT_PUBLIC_NOINDEX === "true";

export const metadata: Metadata = {
  title: "Toyota Rush 2026 - Harga OTR, Cicilan & Ulasan | otochannel",
  description:
    "Detail Toyota Rush 2026: harga OTR Jakarta, varian, cicilan, biaya bulanan, spesifikasi, ulasan pengguna & ahli.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://otochannel.com"),
  robots: noindex
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: { index: false, follow: false },
      }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${lato.variable} ${poppins.variable} antialiased`}>
      <body className="flex min-h-full flex-col font-[family-name:var(--font-lato)]">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}

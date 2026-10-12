import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: { unoptimized: true },
  // Allow GitHub Pages subpath deploy without breaking Vercel/root deploys.
  basePath: process.env.BASE_PATH || undefined,
};

export default nextConfig;

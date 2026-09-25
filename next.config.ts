import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // The dev-mode indicator badge renders on top of the page and corrupts every
  // pixel-diff score in scripts/diff.mjs. Keep it off — QA runs against `npm run dev`.
  devIndicators: false,
  images: {
    qualities: [75, 93],
  },
};

export default nextConfig;

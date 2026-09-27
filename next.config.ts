import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  serverExternalPackages: ["pg"],
  // The dev-mode indicator badge renders on top of the page and corrupts every
  // pixel-diff score in scripts/diff.mjs. Keep it off — QA runs against `npm run dev`.
  devIndicators: false,
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/index.html" }],
    };
  },
};

export default nextConfig;

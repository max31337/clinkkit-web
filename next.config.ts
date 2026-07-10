import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Force Next.js to compile pages into plain HTML/CSS/JS files
  output: 'export',

  // 2. Disable default image resizing server requirement
  images: {
    unoptimized: true,
  },

  // 3. Optional: Hide the development layout badge
  devIndicators: false,
};

export default nextConfig;

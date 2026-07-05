import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    // The project directory is on a slow/network-mapped drive, and Turbopack's
    // persistent dev cache writes to .next/dev fail intermittently there,
    // causing "Failed to write app endpoint" panics and dropped requests.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "specials-images.forbesimg.com" }],
  },
};

export default nextConfig;

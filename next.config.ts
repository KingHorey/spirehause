import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["https://randomuser.me"],
    remotePatterns: [
      {
        hostname: "randomuser.me",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

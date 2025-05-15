import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'themewagon.github.io',
        pathname: '/**', // Match all paths under the domain
      },
    ],
  },
};

export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  i18n: {
    locales: ['ja'],
    defaultLocale: 'ja',
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
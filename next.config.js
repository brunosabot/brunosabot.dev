const {
  default: withPWAInit,
  runtimeCaching,
} = require("@ducanh2912/next-pwa");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next-pwa').PWAConfig} */
const withPWA = withPWAInit({
  dest: "public",
  runtimeCaching,
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    poweredByHeader: false,
    generateEtags: false,
    reactStrictMode: true,
    trailingSlash: true,
    images: {
      formats: ["image/avif", "image/webp"],
      minimumCacheTTL: 864000,
      remotePatterns: [
        {
          protocol: "https",
          hostname: "storage.googleapis.com",
          port: "",
          pathname: "/brunosabot.dev/**",
        },
      ],
    },
  }),
);

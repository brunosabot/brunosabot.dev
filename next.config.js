const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    poweredByHeader: false,
    generateEtags: false,
    reactStrictMode: true,
    trailingSlash: true,
    pwa: {
      dest: "public",
      runtimeCaching,
      exclude: [/googletagmanager/],
      offlineGoogleAnalytics: false,
      disable: process.env.NODE_ENV !== "production",
    },
    images: {
      minimumCacheTTL: 864000,
      domains: [
        "storage.googleapis.com",
        "lh3.googleusercontent.com",
        "dodgemsandfloss.com",
        "preview.redd.it",
        "i3.ytimg.com",
        "ifttd.io",
        "img.youtube.com",
        "images.unsplash.com",
      ],
    },
  })
);

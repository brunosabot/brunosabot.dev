const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  pwa: {
    dest: "public",
    runtimeCaching,
    exclude: [/googletagmanager/],
    offlineGoogleAnalytics: false,
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
});

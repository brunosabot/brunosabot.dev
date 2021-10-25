const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    exclude: [/googletagmanager/],
    offlineGoogleAnalytics: false,
  },
  reactStrictMode: true,
  images: {
    domains: [
      "storage.googleapis.com",
      "lh3.googleusercontent.com",
      "dodgemsandfloss.com",
      "preview.redd.it",
      "i3.ytimg.com",
      "ifttd.io",
      "img.youtube.com",
    ],
  },
});

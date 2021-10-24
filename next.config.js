const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
  reactStrictMode: true,
});
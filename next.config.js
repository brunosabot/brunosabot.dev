/** @type {import('next').NextConfig} */
module.exports = {
  poweredByHeader: false,
  generateEtags: false,
  reactStrictMode: true,
  trailingSlash: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    deviceSizes: [340, 680, 1020, 1360, 1700, 2040],
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
};

/** @type {import('next').NextConfig} */
export default {
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
    formats: ["image/webp"],
    minimumCacheTTL: 864000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        port: "",
        pathname: "/brunosabot.dev/**",
      },
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/9d0ee465-6d64-4012-8faf-0525571d0bd5/**",
      },
    ],
  },
};

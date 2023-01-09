module.exports = {
  siteUrl: "https://brunosabot.dev",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/rss.xml", "/server-sitemap.xml", "/posts/*"],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: ["https://brunosabot.dev/server-sitemap.xml"],
  },
};

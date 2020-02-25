module.exports = {
  siteMetadata: {
    title: "Bruno Sabot's website",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@brunosabot",
    siteUrl: "https://brunosabot.com"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        short_name: "Bruno Sabot",
        name: "Bruno Sabot's homepage",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#005000",
        display: "fullscreen",
        icon: "static/images/favicon-maskable.png",
        icon_options: {
          purpose: "maskable"
        }
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap"
  ]
};

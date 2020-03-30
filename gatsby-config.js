module.exports = {
  siteMetadata: {
    title: "Bruno Sabot's website",
    description:
      "Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",
    author: "@brunosabot",
    siteUrl: "https://brunosabot.dev",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        short_name: "Bruno Sabot",
        name: "Bruno Sabot's homepage",
        description:
          "Bruno Sabot's home on the web. Everything you need to know about him",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#005000",
        display: "fullscreen",
        icon: "static/images/favicon-maskable.png",
        icon_options: {
          purpose: "maskable any",
        },
      },
    },
    {
      resolve: "gatsby-plugin-humans-txt",
      options: {
        team: [
          {
            Developer: "Bruno Sabot",
            Contact: "bruno [at] sabot [dot] me",
            GitHub: "brunosabot",
            Twitter: "@brunosabot",
            Location: "Bordeaux, France",
          },
        ],
        thanks: ["Gatsby", "Node"],
        site: {
          "Last update": "2020/03/11",
          Standards: "HTML5, CSS3, JavaScript",
          Components: "Google Fonts, Google Analytics, Gatsby",
          Softwares: "Visual Studio Code",
        },
        note: "Made with love ❤️",
      },
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-client-side-redirect", // keep it in last in list
  ],
};

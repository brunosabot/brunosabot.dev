const path = require("path");

module.exports = {
  siteMetadata: {
    title: "Bruno Sabot's website",
    description:
      "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
    author: "@brunosabot",
    siteUrl: "https://brunosabot.dev",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "static", "images"),
      },
    },
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
          "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
        lang: "en",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ab804d",
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
          "Last update": "2020/04/01",
          Standards: "HTML5, CSS3, JavaScript",
          Components: "Google Fonts, Google Analytics, Gatsby",
          Softwares: "Visual Studio Code",
        },
        note: "Made with love ❤️",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-2395369-1",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              includeDefaultCss: true,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-plugin-transition-link",
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-client-side-redirect", // keep it in last in list
  ],
};

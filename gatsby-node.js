/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const articles = [
    {
      language: "🇺🇸",
      platform: "Medium",
      title: "New year resolutions the right way",
      href:
        "https://medium.com/@brunosabot/new-year-resolutions-the-right-way-de4ba67627cc",
      date: "2020-01-31"
    },
    {
      language: "🇺🇸",
      platform: "Medium",
      title: "Publish your Cloud Run App with GitHub Actions",
      href:
        "https://medium.com/better-programming/publish-your-cloud-run-app-with-github-actions-6c18ff5c5ee4",
      date: "2019-09-23"
    },
    {
      language: "🇺🇸",
      platform: "Medium",
      title: "Deploy Your ZEIT Now App With GitHub Actions",
      href:
        "https://medium.com/better-programming/deploy-your-zeit-now-app-with-github-actions-ca3977806b40",
      date: "2019-09-02"
    },
    {
      language: "🇺🇸",
      platform: "Medium",
      title: "A Complete Pre-Commit Workflow",
      href:
        "https://medium.com/better-programming/a-complete-pre-commit-workflow-cea6e34f0032",
      date: "2019-08-21"
    },
    {
      language: "🇫🇷",
      platform: "Blog Zenika",
      title: "Learning expedition Zenika: Ce qu'en pensent les devs",
      href:
        "https://blog.zenika.com/2019/07/30/learning-expedition-zenika-ce-quen-pensent-les-devs/",
      date: "2019-07-30"
    },
    {
      language: "🇺🇸",
      platform: "Medium",
      title: "How I dropped Redux for the Context API",
      href:
        "https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179",
      date: "2019-07-25"
    }
  ];
  const talks = [
    {
      conferenceName: "Snowcamp",
      language: "🇫🇷",
      title: "L'intégration, ce purgatoire",
      date: "2020-01-23",
      slides:
        "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE"
    },
    {
      youtubeId: "jnxkdHo8OEk",
      conferenceName: "Breizh Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2019-03-21",
      slides:
        "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA"
    },
    {
      youtubeId: "H2KWVDH64EY",
      conferenceName: "Jug Summer Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2018-09-14",
      slides:
        "https://drive.google.com/open?id=1S2RmcMKZ74Bhc4IQUMm7-xDjVwD-_UCFc5iWCEdy5S8"
    },
    {
      youtubeId: "h0MAi-1GdZQ",
      conferenceName: "BDX I/O",
      language: "🇫🇷",
      title: "Les nouveautés de React 16 - Fiber",
      date: "2017-11-10",
      slides:
        "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po"
    }
  ];
  const projects = [
    {
      url: "https://www.answwr.com",
      image: "/images/answwr.png",
      title:
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
      description: [
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
        "With Answwr you’ll be able to decide between choices in the most elegant ways, meaning you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and unbiased random result.",
        "It's important to precise the result will be totally fair and unbiased, that's why we made the Redo button."
      ]
    }
  ];

  articles.forEach(article => {
    const node = {
      date: article.date,
      href: article.href,
      language: article.language,
      platform: article.platform,
      title: article.title,
      id: createNodeId(`article-${article.title}`),
      internal: {
        type: "article",
        contentDigest: createContentDigest(article)
      }
    };
    actions.createNode(node);
  });

  talks.forEach(talk => {
    const node = {
      conferenceName: talk.conferenceName,
      date: talk.date,
      language: talk.language,
      slides: talk.slides,
      title: talk.title,
      youtubeId: talk.youtubeId,
      id: createNodeId(`talk-${talk.conferenceName}-${talk.title}`),
      internal: {
        type: "talk",
        contentDigest: createContentDigest(talk)
      }
    };
    actions.createNode(node);
  });

  projects.forEach(project => {
    const node = {
      url: project.url,
      image: project.image,
      title: project.title,
      description: project.description,
      id: createNodeId(`project-${project.title}`),
      internal: {
        type: "project",
        contentDigest: createContentDigest(project)
      }
    };
    actions.createNode(node);
  });
};

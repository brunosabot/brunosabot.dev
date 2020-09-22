/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const fs = require(`fs`);
const {
  createRemoteFileNode,
  createFileNodeFromBuffer,
} = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "/about",
    toPath: "/",
    isPermanent: true,
    force: true,
  });
  createRedirect({
    fromPath: "/articles",
    toPath: "/posts",
    isPermanent: true,
    force: true,
  });

  const blogPostTemplate = path.resolve(`src/templates/Posts.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    actions.createPage({
      path: node.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    });
  });
};

// You can delete this file if you're not using it
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const posts = [
    {
      language: "en",
      platform: "Medium",
      title: "My Journey From React to React Native",
      href:
        "https://medium.com/better-programming/my-journey-from-react-to-react-native-e876c31a46a4",
      date: "2020-09-21",
      image: "https://miro.medium.com/max/10368/0*LU6uhsVVbB9jS_o5",
      description:
        "I've recently started working on an Android application, and as a React developer, I made the easy choice to use and test React Native to do so because it helped me stay in my comfort zone and also gives me the opportunity to explore iOS someday.",
    },
    {
      language: "en",
      platform: "Medium",
      title: "An Opinionated Way to Structure React Apps",
      href:
        "https://medium.com/better-programming/an-opinionated-way-to-structure-react-apps-10f87bf29952",
      date: "2020-05-05",
      image: "https://miro.medium.com/max/10528/0*maZNyBAhbf1Ol2Uj",
      description:
        "When we first develop a React app, we can just put every component in a folder and it works. But when it comes to larger projects, it might be difficult to find our way between files if we keep using React this way.",
    },
    {
      language: "en",
      platform: "Medium",
      title: "How to Debug a React Context API App",
      href:
        "https://medium.com/better-programming/how-to-debug-a-react-context-api-app-547b75818754",
      date: "2020-03-17",
      image: "https://miro.medium.com/max/1200/0*fOZCyvfBcdHuXOQk",
      description:
        "Some time ago, I shared how I dropped Redux for the Context API when I’m creating a React application. The post got some great feedback, but I also had some people saying that it’s pretty hard to…",
    },
    {
      language: "en",
      platform: "Medium",
      title: "New year resolutions the right way",
      href:
        "https://medium.com/@brunosabot/new-year-resolutions-the-right-way-de4ba67627cc",
      date: "2020-01-31",
      image: "https://miro.medium.com/max/2400/1*5X15ZdvuMGE9oQ26s6y8EA.jpeg",
      description:
        "We made new resolutions every year, but we usually fail them. In 2019, I was able to complete them. Here is a feedback on how I managed to do that.",
    },
    {
      language: "en",
      platform: "Medium",
      title: "Publish your Cloud Run App with GitHub Actions",
      href:
        "https://medium.com/better-programming/publish-your-cloud-run-app-with-github-actions-6c18ff5c5ee4",
      date: "2019-09-23",
      image: "https://miro.medium.com/max/7984/1*HmM_NqNjtCWw36t3Pr1DWA.jpeg",
      description:
        "Google recently announced Cloud Run, a new Google Cloud Platform (GCP) feature, to deploy your Docker applications fast and easily. This guide will explain how to build and deploy a simple static…",
    },
    {
      language: "en",
      platform: "Medium",
      title: "Deploy Your ZEIT Now App With GitHub Actions",
      href:
        "https://medium.com/better-programming/deploy-your-zeit-now-app-with-github-actions-ca3977806b40",
      date: "2019-09-02",
      image: "https://miro.medium.com/max/2400/1*BZ_jv-xjX_FfJR5fQH_6UQ.png",
      description:
        "I recently got access to GitHub Actions and I decided to test it with a simple deployment in ZEIT Now. My first steps were to look at this wonderful post from Leonhard Melzer. It contains a lot…",
    },
    {
      language: "en",
      platform: "Medium",
      title: "A Complete Pre-Commit Workflow",
      href:
        "https://medium.com/better-programming/a-complete-pre-commit-workflow-cea6e34f0032",
      date: "2019-08-21",
      image: "https://miro.medium.com/max/1300/1*AxYei5T1-heT9sc3Hka3xA.png",
      description:
        "I really like making perfect commits, and I particularly hate appending or creating a new commit because of a guideline mistake. So I needed a tool that would bark at me when I was about to make a…",
    },
    {
      language: "fr",
      platform: "Blog Zenika",
      title: "Learning expedition Zenika: Ce qu'en pensent les devs",
      href:
        "https://blog.zenika.com/2019/07/30/learning-expedition-zenika-ce-quen-pensent-les-devs/",
      date: "2019-07-30",
      image:
        "https://i1.wp.com/blog.zenika.com/wp-content/uploads/2019/07/Blog-Zenika-Learning-expedition-par-les-devs-1.jpg?resize=800%2C445&ssl=1",
      description:
        "La Silicon Valley, c’est le rêve américain de tout développeur qui s’intéresse de près à tout ce qui se fait de nouveau dans le monde du high-tech, c’est l’endroit ou l’on retrouve les plus grands…",
    },
    {
      language: "en",
      platform: "Medium",
      title: "How I dropped Redux for the Context API",
      href:
        "https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179",
      date: "2019-07-25",
      image: "https://miro.medium.com/max/2400/1*NyHpepOw2vFFKVFdeRvzWg.png",
      description:
        "React 16 introduced a new Context API to replace the deprecated one. OK, it’s been more than a year since the release of version 16.3, but it still seems fresh in the React ecosystem. This new API…",
    },
  ];
  const talks = [
    {
      conferenceName: "Snowcamp",
      language: "fr",
      title: "L'intégration, ce purgatoire",
      date: "2020-01-23",
      slides:
        "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE",
      description:
        "Vous avez déjà connu cette situation où vous commencez à travailler sur votre CSS, vous vous sentez en totale maitrise et le chef de projet arrive avec plein d'écrans à intégrer avec son lot de…",
      image:
        "https://lh3.googleusercontent.com/oqNVvVVjAXfblJtAJpeSCxqS12yrkAKp7pouKfu99BMO5-OPhakNYEKN8sZEkLtr-_tco26MALvYWtM2luaSf_7fdGHYPVI7tGcpsBb_Bymgnrg4SbLMIZaQHFcVF8hmcQAYPeVYfJI=w800",
    },
    {
      youtubeId: "jnxkdHo8OEk",
      conferenceName: "Breizh Camp",
      language: "fr",
      title: "UX : les formulaires",
      date: "2019-03-21",
      slides:
        "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA",
      description:
        "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
      image:
        "https://dodgemsandfloss.com/wp-content/uploads/2018/06/Ketchup.png",
    },
    {
      youtubeId: "H2KWVDH64EY",
      conferenceName: "Jug Summer Camp",
      language: "fr",
      title: "UX : les formulaires",
      date: "2018-09-14",
      slides:
        "https://drive.google.com/open?id=1S2RmcMKZ74Bhc4IQUMm7-xDjVwD-_UCFc5iWCEdy5S8",
      description:
        "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
      image:
        "https://preview.redd.it/6i8oiq3iyxd41.jpg?width=640&height=360&crop=smart&auto=webp&s=79ea73ed139da4c1227f8649213bc18711dd8c66",
    },
    {
      youtubeId: "h0MAi-1GdZQ",
      conferenceName: "BDX I/O",
      language: "fr",
      title: "Les nouveautés de React 16 - Fiber",
      date: "2017-11-10",
      slides:
        "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po",
      description:
        "Tout le monde connait React, ce framework est de plus en plus utilisé dans le domaine professionnel. Après de longs mois, bloqués à la version 15, une nouvelle version majeure va bientôt arriver que…",
      image: "http://i3.ytimg.com/vi/h0MAi-1GdZQ/maxresdefault.jpg",
    },
  ];
  const projects = [
    {
      url: "https://www.answwr.com",
      image: "./static/images/answwr.png",
      title:
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
      description: [
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
        "With Answwr you’ll be able to decide between choices in the most elegant ways, meaning you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and unbiased random result.",
        "It's important to precise the result will be totally fair and unbiased, that's why we made the Redo button.",
      ],
    },
  ];
  const jobs = [
    {
      companyName: "Zenika Bordeaux",
      companyWebsite: "http://bordeaux.zenika.com",
      details: [
        "Mission de consulting pour Banque Casino, Dotic, FATEC.",
        "Animation d'évènements Zenika (NightClazz React).",
        "Développement Front-end, Conférences, Formations, IA.",
      ],
      endDate: "Actuellement",
      startDate: "Août 2017",
      job: "Consultant",
    },
    {
      companyName: "NETINTERACTIVE",
      companyWebsite: "http://www.netinteractive.fr/",
      details: [
        "Développement de la partie Front-office des produits de la société (Vanilla JS, CSS).",
        "Management des équipes Front-office locales et à l'étranger.",
        "Mise en place de l'administration sous React.",
        "Conseils ergonomiques, Conseils expérience utilisateur.",
      ],
      endDate: "Février 2017",
      startDate: "Septembre 2013",
      job: "Lead Front-end",
    },
    {
      companyName: "OWLIENT",
      companyWebsite: "http://owlient.eu/",
      details: [
        "Mise en place et développement de la webapp du jeu Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Mise à jour de la partie Back-office pour supporter la webapp (PHP)..",
        "Réflexions et concertation sur l'ergonomie mobile.",
      ],
      endDate: "Octobre 2011",
      startDate: "Juin 2013",
      job: "Développeur Webapp",
      subtitles: ["Régie pour GLOBALIS media system"],
    },
    {
      companyName: "WEBEDIA",
      companyWebsite: "http://www.webedia.fr/",
      details: [
        "Intégration des sites Puremedias et Pureshopping",
        "Mise en place de l'administration des sites Puremedias et Pureshopping",
        "Conseils technologiques (migration prototypeJS vers jQuery).",
      ],
      endDate: "Septembre 2011",
      startDate: "Mars 2011",
      job: "Développeur PHP, Intégrateur",
      subtitles: ["Régie pour GLOBALIS media system"],
    },
    {
      companyName: "UBIQUS",
      companyWebsite: "http://www.ubiqus.fr/",
      details: [
        "Développements Back-office pour la société (PHP, MySQL).",
        "Développements Front-office de sites événementiels pour la société (HTML, jQuery).",
      ],
      endDate: "Octobre 2010",
      startDate: "Mars 2010",
      job: "Développeur PHP",
      subtitles: ["Régie pour GLOBALIS media system"],
    },
    {
      companyName: "GLOBALIS media systems",
      companyWebsite: "http://globalis-ms.com/",
      details: [
        "Régies pour : Institut Curie, Ubiqus (6 mois), Webedia (7 mois), Owlient (21 mois).",
        "Forfaits pour : Marketshot, CNRS, GUINOT.",
        "Audits de performance pour : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information.",
      ],
      endDate: "Mai 2013",
      startDate: "Septembre 2009",
      job: "Développeur web",
    },
  ];
  const jobsEn = [
    {
      companyName: "Zenika Bordeaux",
      companyWebsite: "http://bordeaux.zenika.com",
      details: [
        "Consulting missions for Banque Casino, Dotic, FATEC.",
        "Zenika events animation (NightClazz React).",
        "Front-end development, conferences, training, AI.",
      ],
      endDate: "Currently",
      startDate: "August 2017",
      job: "Consultant",
    },
    {
      companyName: "NETINTERACTIVE",
      companyWebsite: "http://www.netinteractive.fr/",
      details: [
        "Company Front-end product development (Vanilla JS, CSS)",
        "Local and offshore Front-office team management",
        "Administration implementation with React",
        "Ergonomy advising, user experience advising",
      ],
      endDate: "February 2017",
      startDate: "September 2013",
      job: "Front-end Lead",
    },
    {
      companyName: "OWLIENT",
      companyWebsite: "http://owlient.eu/",
      details: [
        "Webapp implementation and development for the game Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Back-office update to support the webapp needs (PHP)",
        "Adiving and dialogue on the mobile ergonomy",
      ],
      endDate: "October 2011",
      startDate: "June 2013",
      job: "Webapp developer",
      subtitles: ["Skill delegation for GLOBALIS media syste"],
    },
    {
      companyName: "WEBEDIA",
      companyWebsite: "http://www.webedia.fr/",
      details: [
        "Integration of the websites Puremedias and Pureshopping",
        "Administration implementation of the websites Puremedias and Pureshopping",
        "Technological advising (prototypeJS to jQuery migration)",
      ],
      endDate: "September 2011",
      startDate: "March 2011",
      job: "PHP developer, Integrator",
      subtitles: ["Skill delegation for GLOBALIS media system"],
    },
    {
      companyName: "UBIQUS",
      companyWebsite: "http://www.ubiqus.fr/",
      details: [
        "Back-office developments for the company (PHP, MySQL)",
        "Front-office developments for the event websites sold by the company (HTML, jQuery)",
      ],
      endDate: "October 2010",
      startDate: "March 2010",
      job: "PHP developer",
      subtitles: ["Skill delegation for GLOBALIS media system"],
    },
    {
      companyName: "GLOBALIS media systems",
      companyWebsite: "http://globalis-ms.com/",
      details: [
        "Skill delegation for : Institut Curie, Ubiqus (6 month), Webedia (7 month), Owlient (21 month)",
        "Fixed-price contracts for : Marketshot, CNRS, GUINOT",
        "Performance audits for : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information",
      ],
      endDate: "May 2013",
      startDate: "September 2009",
      job: "Web developer",
    },
  ];
  const trainings = [
    {
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["Mention Bien", "Major de promotion"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Conception et Maintenance de Service Intranet Internet"],
    },
    {
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&T",
      subtitles: ["Réseaux et Télécommunications"],
    },
    {
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      details: [
        "Option Sciences de l'ingénieur",
        "Spécialité Mathématiques",
        "Mention Assez Bien",
      ],
      endDate: "2005",
      startDate: "2003",
      diploma: "Baccalauréat",
      subtitles: ["Baccalauréat Scientifique SI"],
    },
  ];
  const trainingsEn = [
    {
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["With honors", "Head of the class"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Intranet Internet service conception and maintenance"],
    },
    {
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&T",
      subtitles: ["Network and Telecommunications"],
    },
    {
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      details: ["Engineering option", "Maths field", "With honors"],
      endDate: "2005",
      startDate: "2003",
      diploma: "Baccalauréat",
      subtitles: ["Scientific Baccalauréat"],
    },
  ];
  const videos = [
    {
      date: "2020-03-09",
      language: "fr",
      title: "Un Café Avec Bruno & Manuel : CSS Flexbox",
      youtubeId: "t9XFUI_qZ3g",
      description:
        "Nous avons l'habitude de dire qu'aligner les éléments en CSS s'avère difficile.  Découvrez avec Manuel et Bruno que de nos jours cela est vraiment facile et à la portée de tous ! #flexbox",
      image: "https://img.youtube.com/vi/t9XFUI_qZ3g/maxresdefault.jpg",
    },
  ];

  const podcasts = [
    {
      date: "2020-08-14",
      language: "fr",
      title: "Compilé - Etre dev sénior et sénior",
      url: "https://ifttd.io/50-etre-dev-senior-et-senior-jacques-ducloy/",
      description:
        "Compilé de l'épisode 50 du podcast IFTTD, Etre dev sénior et sénior par Jacques Ducloy. Si vous avez peu de temps, je résume le contenu de l'épisodes en 10 minutes.",
      image: "https://ifttd.io/wp-content/uploads/2020/07/11-2-1200x690.jpg",
      platform: "IFTTD",
    },
    {
      date: "2020-08-19",
      language: "fr",
      title:
        "Arrêter le “script” de javascript pour améliorer les performances",
      url:
        "https://ifttd.io/54-arreter-le-script-de-javascript-pour-ameliorer-les-performances-anthony-le-goas-et-bruno-sabot/",
      description:
        "Javascript a connu jQuery, puis AngularJS, puis node, puis vue et react. Autrement dit le petit langage de scripting pour “animer un peu de texte” sur une page a beaucoup changé !",
      image: "https://ifttd.io/wp-content/uploads/2020/08/IFTTD-54.jpg",
      platform: "IFTTD",
    },
  ];

  posts.forEach((post) => {
    const node = {
      date: post.date,
      href: post.href,
      language: post.language,
      platform: post.platform,
      title: post.title,
      description: post.description,
      originalImage: post.image,
      id: createNodeId(`post-${post.title}`),
      internal: {
        type: "post",
        contentDigest: createContentDigest(post),
      },
    };
    actions.createNode(node);
  });

  talks.forEach((talk) => {
    const node = {
      conferenceName: talk.conferenceName,
      date: talk.date,
      language: talk.language,
      slides: talk.slides,
      title: talk.title,
      youtubeId: talk.youtubeId,
      description: talk.description,
      originalImage: talk.image,
      id: createNodeId(`talk-${talk.conferenceName}-${talk.title}`),
      internal: {
        type: "talk",
        contentDigest: createContentDigest(talk),
      },
    };
    actions.createNode(node);
  });

  projects.forEach((project) => {
    const node = {
      url: project.url,
      localImage: project.image,
      title: project.title,
      description: project.description,
      id: createNodeId(`project-${project.title}`),
      internal: {
        type: "project",
        contentDigest: createContentDigest(project),
      },
    };
    actions.createNode(node);
  });

  jobs.forEach((job) => {
    const node = {
      language: "fr",
      companyName: job.companyName,
      companyWebsite: job.companyWebsite,
      job: job.job,
      details: job.details,
      endDate: job.endDate,
      startDate: job.startDate,
      subtitles: job.subtitles,
      id: createNodeId(`job-${job.companyName}-fr`),
      internal: {
        type: "jobs",
        contentDigest: createContentDigest(job),
      },
    };
    actions.createNode(node);
  });

  trainings.forEach((training) => {
    const node = {
      language: "fr",
      schoolName: training.schoolName,
      schoolWebsite: training.schoolWebsite,
      diploma: training.diploma,
      details: training.details,
      endDate: training.endDate,
      startDate: training.startDate,
      subtitles: training.subtitles,
      id: createNodeId(`training-${training.schoolName}-fr`),
      internal: {
        type: "trainings",
        contentDigest: createContentDigest(training),
      },
    };
    actions.createNode(node);
  });

  jobsEn.forEach((job) => {
    const node = {
      language: "en",
      companyName: job.companyName,
      companyWebsite: job.companyWebsite,
      job: job.job,
      details: job.details,
      endDate: job.endDate,
      startDate: job.startDate,
      subtitles: job.subtitles,
      id: createNodeId(`job-${job.companyName}-en`),
      internal: {
        type: "jobs",
        contentDigest: createContentDigest(job),
      },
    };
    actions.createNode(node);
  });

  trainingsEn.forEach((training) => {
    const node = {
      language: "en",
      schoolName: training.schoolName,
      schoolWebsite: training.schoolWebsite,
      diploma: training.diploma,
      details: training.details,
      endDate: training.endDate,
      startDate: training.startDate,
      subtitles: training.subtitles,
      id: createNodeId(`training-${training.schoolName}-en`),
      internal: {
        type: "trainings",
        contentDigest: createContentDigest(training),
      },
    };
    actions.createNode(node);
  });

  videos.forEach((video) => {
    const node = {
      date: video.date,
      language: video.language,
      title: video.title,
      youtubeId: video.youtubeId,
      id: createNodeId(`video-${video.title}`),
      description: video.description,
      originalImage: video.image,
      internal: {
        type: "video",
        contentDigest: createContentDigest(video),
      },
    };
    actions.createNode(node);
  });

  podcasts.forEach((podcast) => {
    const node = {
      date: podcast.date,
      language: podcast.language,
      title: podcast.title,
      url: podcast.url,
      id: createNodeId(`podcast-${podcast.title}`),
      description: podcast.description,
      originalImage: podcast.image,
      platform: podcast.platform,
      internal: {
        type: "podcast",
        contentDigest: createContentDigest(podcast),
      },
    };
    actions.createNode(node);
  });
};

const makeRemoteImage = async (
  node,
  createNode,
  createNodeId,
  cache,
  store,
  imageKey
) => {
  let url = node.originalImage;
  if (url === undefined && node.frontmatter !== undefined) {
    url = node.frontmatter.originalImage;
  }

  if (url !== undefined) {
    const fileNode = await createRemoteFileNode({
      url,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
      name: node.id,
    });

    if (fileNode) {
      // eslint-disable-next-line no-param-reassign
      node.image___NODE = fileNode.id;
    }
  }
};
const makeImage = async (
  node,
  createNode,
  createNodeId,
  cache,
  store,
  imageKey
) => {
  if (node[imageKey] !== undefined) {
    const value = fs.readFileSync(node[imageKey]);
    const fileNode = await createFileNodeFromBuffer({
      buffer: value,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
      name: node.id,
    });

    if (fileNode) {
      // eslint-disable-next-line no-param-reassign
      node.image___NODE = fileNode.id;
    }
  }
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  store,
  cache,
  createNodeId,
}) => {
  // Posts
  await makeRemoteImage(node, createNode, createNodeId, cache, store);
  // Projects
  await makeImage(node, createNode, createNodeId, cache, store, "localImage");
};

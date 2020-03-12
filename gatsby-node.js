/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: "https://brunosabot.com/*",
    toPath: "https://brunosabot.dev/:splat",
    isPermanent: true,
    force: true
  });
  createRedirect({
    fromPath: "https://www.brunosabot.com/*",
    toPath: "https://brunosabot.dev/:splat",
    isPermanent: true,
    force: true
  });
  createRedirect({
    fromPath: "https://www.brunosabot.dev/*",
    toPath: "https://brunosabot.dev/:splat",
    isPermanent: true,
    force: true
  });
};

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
  const jobs = [
    {
      companyName: "Zenika Bordeaux",
      companyWebsite: "http://bordeaux.zenika.com",
      details: [
        "Mission de consulting pour Banque Casino, Dotic, FATEC.",
        "Animation d'évènements Zenika (NightClazz React).",
        "Développement Front-end, Conférences, Formations, IA."
      ],
      endDate: "Actuellement",
      startDate: "Août 2017",
      job: "Consultant"
    },
    {
      companyName: "NETINTERACTIVE",
      companyWebsite: "http://www.netinteractive.fr/",
      details: [
        "Développement de la partie Front-office des produits de la société (Vanilla JS, CSS).",
        "Management des équipes Front-office locales et à l'étranger.",
        "Mise en place de l'administration sous React.",
        "Conseils ergonomiques, Conseils expérience utilisateur."
      ],
      endDate: "Février 2017",
      startDate: "Septembre 2013",
      job: "Lead Front-end"
    },
    {
      companyName: "OWLIENT",
      companyWebsite: "http://owlient.eu/",
      details: [
        "Mise en place et développement de la webapp du jeu Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Mise à jour de la partie Back-office pour supporter la webapp (PHP)..",
        "Réflexions et concertation sur l'ergonomie mobile."
      ],
      endDate: "Octobre 2011",
      startDate: "Juin 2013",
      job: "Développeur Webapp",
      subtitles: ["Régie pour GLOBALIS media system"]
    },
    {
      companyName: "WEBEDIA",
      companyWebsite: "http://www.webedia.fr/",
      details: [
        "Intégration des sites Puremedias et Pureshopping",
        "Mise en place de l'administration des sites Puremedias et Pureshopping",
        "Conseils technologiques (migration prototypeJS vers jQuery)."
      ],
      endDate: "Septembre 2011",
      startDate: "Mars 2011",
      job: "Développeur PHP, Intégrateur",
      subtitles: ["Régie pour GLOBALIS media system"]
    },
    {
      companyName: "UBIQUS",
      companyWebsite: "http://www.ubiqus.fr/",
      details: [
        "Développements Back-office pour la société (PHP, MySQL).",
        "Développements Front-office de sites événementiels pour la société (HTML, jQuery)."
      ],
      endDate: "Octobre 2010",
      startDate: "Mars 2010",
      job: "Développeur PHP",
      subtitles: ["Régie pour GLOBALIS media system"]
    },
    {
      companyName: "GLOBALIS media systems",
      companyWebsite: "http://globalis-ms.com/",
      details: [
        "Régies pour : Institut Curie, Ubiqus (6 mois), Webedia (7 mois), Owlient (21 mois).",
        "Forfaits pour : Marketshot, CNRS, GUINOT.",
        "Audits de performance pour : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information."
      ],
      endDate: "Mai 2013",
      startDate: "Septembre 2009",
      job: "Développeur web"
    }
  ];
  const jobsEn = [
    {
      companyName: "Zenika Bordeaux",
      companyWebsite: "http://bordeaux.zenika.com",
      details: [
        "Consulting missions for Banque Casino, Dotic, FATEC.",
        "Zenika events animation (NightClazz React).",
        "Front-end development, conferences, training, AI."
      ],
      endDate: "Currently",
      startDate: "August 2017",
      job: "Consultant"
    },
    {
      companyName: "NETINTERACTIVE",
      companyWebsite: "http://www.netinteractive.fr/",
      details: [
        "Company Front-end product development (Vanilla JS, CSS)",
        "Local and offshore Front-office team management",
        "Administration implementation with React",
        "Ergonomy advising, user experience advising"
      ],
      endDate: "February 2017",
      startDate: "September 2013",
      job: "Front-end Lead"
    },
    {
      companyName: "OWLIENT",
      companyWebsite: "http://owlient.eu/",
      details: [
        "Webapp implementation and development for the game Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Back-office update to support the webapp needs (PHP)",
        "Adiving and dialogue on the mobile ergonomy"
      ],
      endDate: "October 2011",
      startDate: "June 2013",
      job: "Webapp developer",
      subtitles: ["Skill delegation for GLOBALIS media syste"]
    },
    {
      companyName: "WEBEDIA",
      companyWebsite: "http://www.webedia.fr/",
      details: [
        "Integration of the websites Puremedias and Pureshopping",
        "Administration implementation of the websites Puremedias and Pureshopping",
        "Technological advising (prototypeJS to jQuery migration)"
      ],
      endDate: "September 2011",
      startDate: "March 2011",
      job: "PHP developer, Integrator",
      subtitles: ["Skill delegation for GLOBALIS media system"]
    },
    {
      companyName: "UBIQUS",
      companyWebsite: "http://www.ubiqus.fr/",
      details: [
        "Back-office developments for the company (PHP, MySQL)",
        "Front-office developments for the event websites sold by the company (HTML, jQuery)"
      ],
      endDate: "October 2010",
      startDate: "March 2010",
      job: "PHP developer",
      subtitles: ["Skill delegation for GLOBALIS media system"]
    },
    {
      companyName: "GLOBALIS media systems",
      companyWebsite: "http://globalis-ms.com/",
      details: [
        "Skill delegation for : Institut Curie, Ubiqus (6 month), Webedia (7 month), Owlient (21 month)",
        "Fixed-price contracts for : Marketshot, CNRS, GUINOT",
        "Performance audits for : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information"
      ],
      endDate: "May 2013",
      startDate: "September 2009",
      job: "Web developer"
    }
  ];
  const trainings = [
    {
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["Mention Bien", "Major de promotion"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Conception et Maintenance de Service Intranet Internet"]
    },
    {
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&amp;T",
      subtitles: ["Réseaux et Télécommunications"]
    },
    {
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      details: [
        "Option Sciences de l'ingénieur",
        "Spécialité Mathématiques",
        "Mention Assez Bien"
      ],
      endDate: "2005",
      startDate: "2003",
      diploma: "Baccalauréat",
      subtitles: ["Baccalauréat Scientifique SI"]
    }
  ];
  const trainingsEn = [
    {
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["With honors", "Head of the class"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Intranet Internet service conception and maintenance"]
    },
    {
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&amp;T",
      subtitles: ["Network and Telecommunications"]
    },
    {
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      details: ["Engineering option", "Maths field", "With honors"],
      endDate: "2005",
      startDate: "2003",
      diploma: "Baccalauréat",
      subtitles: ["Scientific Baccalauréat"]
    }
  ];
  const videos = [
    {
      date: "2020-03-09",
      language: "🇫🇷",
      title: "Un Café Avec Bruno & Manuel : CSS Flexbox",
      youtubeId: "t9XFUI_qZ3g"
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

  jobs.forEach(job => {
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
        contentDigest: createContentDigest(job)
      }
    };
    actions.createNode(node);
  });

  trainings.forEach(training => {
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
        contentDigest: createContentDigest(training)
      }
    };
    actions.createNode(node);
  });

  jobsEn.forEach(job => {
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
        contentDigest: createContentDigest(job)
      }
    };
    actions.createNode(node);
  });

  trainingsEn.forEach(training => {
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
        contentDigest: createContentDigest(training)
      }
    };
    actions.createNode(node);
  });

  videos.forEach(video => {
    const node = {
      date: video.date,
      language: video.language,
      title: video.title,
      youtubeId: video.youtubeId,
      id: createNodeId(`video-${video.title}`),
      internal: {
        type: "video",
        contentDigest: createContentDigest(video)
      }
    };
    actions.createNode(node);
  });
};

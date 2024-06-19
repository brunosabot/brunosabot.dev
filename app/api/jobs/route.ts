import { NextRequest } from "next/server";
import Job from "../../../types/Job";

export const revalidate = 21600;

interface Jobs {
  en: Job[];
  fr: Job[];
}

const jobs: Jobs = {
  en: [
    {
      id: "playplay",
      companyName: "PlayPlay",
      companyWebsite: "https://playplay.com/",
      details: [
        "Front-End community animation",
        "Video edition product development",
        "Member of the enabling team and the architecture committee",
      ],
      endDate: "Currently",
      startDate: "September 2022",
      job: "Staff Software Engineer",
      subtitles: [],
    },
    {
      id: "cdiscount",
      companyName: "Cdiscount",
      companyWebsite: "https://www.cdiscount.com/",
      details: [
        "Website performance monitoring and analysis",
        "Team support on the web performance topics",
        "Internal tool development (TypeScript, React)",
      ],
      endDate: "June 2022",
      startDate: "September 2020",
      job: "Consultant",
      subtitles: ["Skill delegation for Zenika"],
    },
    {
      id: "fatec",
      companyName: "FATEC Group",
      companyWebsite: "https://www.fatec-group.com/",
      details: [
        "Implementation of the requested features for the company product (Vue.js)",
        "Architecture, code quality and tests recommendations",
        "Training and helping the dev team on Front-end technologies",
      ],
      endDate: "January 2020",
      startDate: "December 2018",
      job: "Consultant",
      subtitles: ["Skill delegation for Zenika"],
    },
    {
      id: "zenika",
      companyName: "Zenika (Bordeaux)",
      companyWebsite: "https://zenika.com",
      details: [
        "Consulting missions for Banque Casino, Dotic, FATEC, NP6, Cdiscount.",
        "Code quality and Performance audits for Asphalte",
        "Zenika events animation (NightClazz React).",
        "JavaScript development, conferences, training, AI.",
      ],
      endDate: "June 2022",
      startDate: "August 2017",
      job: "Consultant",
      subtitles: [],
    },
    {
      id: "netinteractive",
      companyName: "NETINTERACTIVE",
      companyWebsite: "https://webpublication.fr/",
      details: [
        "Company Front-end product development (Vanilla JS, CSS)",
        "Local and offshore Front-office team management",
        "Administration implementation with React",
        "Ergonomy advising, user experience advising",
      ],
      endDate: "February 2017",
      startDate: "September 2013",
      job: "Front-end Lead",
      subtitles: [],
    },
    {
      id: "owlient",
      companyName: "OWLIENT",
      companyWebsite: "https://www.equideow.com/",
      details: [
        "Webapp implementation and development for the game Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Back-office update to support the webapp needs (PHP)",
        "Adiving and dialogue on the mobile ergonomy",
      ],
      endDate: "June 2013",
      startDate: "October 2011",
      job: "Webapp developer",
      subtitles: ["Skill delegation for GLOBALIS media system"],
    },
    {
      id: "webedia",
      companyName: "WEBEDIA",
      companyWebsite: "https://webedia-group.com/",
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
      id: "ubiqus",
      companyName: "UBIQUS",
      companyWebsite: "https://www.acolad.com/",
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
      id: "globalis",
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
      subtitles: [],
    },
  ],
  fr: [
    {
      id: "playplay",
      companyName: "PlayPlay",
      companyWebsite: "https://playplay.com/",
      details: [
        "Animation de la communauté Front-End",
        "Développement du produit d'édition vidéo",
        "Membre de l'enabling team et du comité d'architecture",
      ],
      endDate: "Actuellement",
      startDate: "Septembre 2022",
      job: "Staff Software Engineer",
      subtitles: [],
    },
    {
      id: "cdiscount",
      companyName: "Cdiscount",
      companyWebsite: "https://www.cdiscount.com/",
      details: [
        "Suivi et analyse des performances du site",
        "Support aux équipes sur les sujets web performance",
        "Développement de produits internes (TypeScript, React)",
      ],
      endDate: "Juin 2022",
      startDate: "Septembre 2020",
      job: "Consultant",
      subtitles: ["Régie pour Zenika"],
    },
    {
      id: "fatec",
      companyName: "FATEC Group",
      companyWebsite: "https://www.fatec-group.com/",
      details: [
        "Implémentation des fonctionnalités sur le produit applicatif (Vue.js)",
        "Recommandations sur l'architecture, la qualité de code et les tests",
        "Formation et encadrement des équipes de dev sur les technologies Front-end",
      ],
      endDate: "Janvier 2020",
      startDate: "Décembre 2018",
      job: "Consultant",
      subtitles: ["Régie pour Zenika"],
    },
    {
      id: "zenika",
      companyName: "Zenika (Bordeaux)",
      companyWebsite: "https://zenika.com",
      details: [
        "Mission de consulting pour Banque Casino, Dotic, FATEC, NP6, Cdiscount.",
        "Audits qualité de code et performance pour Asphalte",
        "Animation d'évènements Zenika (NightClazz React).",
        "Développement JavaScript, Conférences, Formations, IA.",
      ],
      endDate: "Juin 2022",
      startDate: "Août 2017",
      job: "Consultant",
      subtitles: [],
    },
    {
      id: "netinteractive",
      companyName: "NETINTERACTIVE",
      companyWebsite: "https://webpublication.fr/",
      details: [
        "Développement de la partie Front-office des produits de la société (Vanilla JS, CSS).",
        "Management des équipes Front-office locales et à l'étranger.",
        "Mise en place de l'administration sous React.",
        "Conseils ergonomiques, Conseils expérience utilisateur.",
      ],
      endDate: "Février 2017",
      startDate: "Septembre 2013",
      job: "Lead Front-end",
      subtitles: [],
    },
    {
      id: "owlient",
      companyName: "OWLIENT",
      companyWebsite: "https://www.equideow.com/",
      details: [
        "Mise en place et développement de la webapp du jeu Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
        "Mise à jour de la partie Back-office pour supporter la webapp (PHP)..",
        "Réflexions et concertation sur l'ergonomie mobile.",
      ],
      endDate: "Juin 2013",
      startDate: "Octobre 2011",
      job: "Développeur Webapp",
      subtitles: ["Régie pour GLOBALIS media system"],
    },
    {
      id: "webedia",
      companyName: "WEBEDIA",
      companyWebsite: "https://webedia-group.com/",
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
      id: "ubiqus",
      companyName: "UBIQUS",
      companyWebsite: "https://www.acolad.com/",
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
      id: "globalis",
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
      subtitles: [],
    },
  ],
};

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") as keyof Jobs;

  if (lang === undefined) return new Response("NOT FOUND", { status: 404 });
  if (lang === null) return new Response("NOT FOUND", { status: 404 });
  if (["fr", "en"].includes(lang) === false)
    return new Response("NOT FOUND", { status: 404 });

  return new Response(JSON.stringify(jobs[lang]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

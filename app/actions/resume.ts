"use server";

const resume = {
  en: {
    about:
      "Staff Software Engineer at PlayPlay, I'm not looking for new opportunities.",
    follow: "Subscribe to these social medias for updates",
    intro:
      "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
    seo: {
      alternate: "fr",
      alternateLabel: "FR",
      description:
        "Front-End Craftsman: Bruno Sabot leverages JS, CSS & webperf expertise to build impactful web experiences.",
      title: "Bruno Sabot, Front-end developer",
    },
    subIntro:
      "I had the privilege of working with companies such as PlayPlay, Cdiscount, Fatec, Webedia Group, Owlient, L’Oréal group, De Beers & more.",
    titleJobs: "Professional experiences",
    titleTraining: "Training",
  },
  fr: {
    about:
      "Staff Software Engineer chez PlayPlay, je ne suis pas à la recherche de nouvelles opportunités.",
    follow: "Suivez-moi sur ces réseaux sociaux",
    intro:
      "Je suis Bruno Sabot, un développeur Front-end résidant à Bordeaux, en France.",
    seo: {
      alternate: "en",
      alternateLabel: "EN",
      description:
        "Artisan Front-End: L'expertise en JS, CSS et webperf permet à Bruno Sabot de créer des expériences web marquantes.",
      title: "Bruno Sabot, développeur Front-end",
    },
    subIntro:
      "J'ai eu le privilège de travailler avec des sociétés comme PlayPlay, Cdiscount, Fatec, Webedia Group, Owlient, L’Oréal group, De Beers.",
    titleJobs: "Expériences professionnelles",
    titleTraining: "Formation",
  },
};

export async function getResumeByLang(lang: "en" | "fr") {
  return resume[lang];
}

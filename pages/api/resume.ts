// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Resume from "../../types/Resume";

interface Resumes {
  en: Resume[];
  fr: Resume[];
}
const resume = {
  en: {
    seo: {
      description: "Bruno Sabot, un développeur Front-end",
      title: "Bruno Sabot, développeur Front-end",
      alternate: "fr",
      alternateLabel: "FR",
    },
    follow: "Subscribe to these social medias for updates",
    intro:
      "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
    subIntro:
      "I had the privilege of working with companies such as Cdiscount, Webedia, Owlient, L’Oréal group, De Beers, Saint Gobain, Natura Brasil &amp; more.",
    about:
      "Staff Software Engineer at PlayPlay, I&apos;m not looking for new opportunities.",
    titleJobs: "Professional experiences",
    titleTraining: "Training",
  },
  fr: {
    seo: {
      description: "Bruno Sabot, a Front-end developer",
      title: "Bruno Sabot, Front-end developer",
      alternate: "en",
      alternateLabel: "EN",
    },
    follow: "Suivez-moi sur ces réseaux sociaux",
    intro:
      "Je suis Bruno Sabot, un développeur Front-end résidant à Bordeaux, en France.",
    subIntro:
      "J'ai eu le privilège de travailler avec des sociétés comme Cdiscount, Webedia, Owlient, L’Oréal group, De Beers, Saint Gobain, Natura Brasil.",
    about:
      "Staff Software Engineer chez Zenika, je ne suis page à la recherche de nouvelles opportunités.",
    titleJobs: "Expériences professionnelles",
    titleTraining: "Formation",
  },
};

export default function handler(req: NextApiRequest, res: NextApiResponse<{}>) {
  if (req.query.lang === undefined) return res.status(404).end();
  if (req.query.lang instanceof Array) return res.status(404).end();
  if (["fr", "en"].includes(req.query.lang) === false)
    return res.status(404).end();

  const lang = req.query.lang as keyof Resumes;
  res.status(200).json(resume[lang]);
}

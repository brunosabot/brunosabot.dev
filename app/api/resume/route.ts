// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextRequest } from "next/server";
import Resume from "../../../types/Resume";

export const revalidate = 3600 * 6;

interface Resumes {
  en: Resume[];
  fr: Resume[];
}
const resume = {
  en: {
    seo: {
      description:
        "Front-End Craftsman: Bruno Sabot leverages JS, CSS & webperf expertise to build impactful web experiences.",
      title: "Bruno Sabot, Front-end developer",
      alternate: "fr",
      alternateLabel: "FR",
    },
    follow: "Subscribe to these social medias for updates",
    intro:
      "I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.",
    subIntro:
      "I had the privilege of working with companies such as PlayPlay, Cdiscount, Fatec, Webedia Group, Owlient, L’Oréal group, De Beers & more.",
    about:
      "Staff Software Engineer at PlayPlay, I'm not looking for new opportunities.",
    titleJobs: "Professional experiences",
    titleTraining: "Training",
  },
  fr: {
    seo: {
      description:
        "Artisan Front-End: L'expertise en JS, CSS et webperf permet à Bruno Sabot de créer des expériences web marquantes.",
      title: "Bruno Sabot, développeur Front-end",
      alternate: "en",
      alternateLabel: "EN",
    },
    follow: "Suivez-moi sur ces réseaux sociaux",
    intro:
      "Je suis Bruno Sabot, un développeur Front-end résidant à Bordeaux, en France.",
    subIntro:
      "J'ai eu le privilège de travailler avec des sociétés comme PlayPlay, Cdiscount, Fatec, Webedia Group, Owlient, L’Oréal group, De Beers.",
    about:
      "Staff Software Engineer chez PlayPlay, je ne suis pas à la recherche de nouvelles opportunités.",
    titleJobs: "Expériences professionnelles",
    titleTraining: "Formation",
  },
};

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") as keyof Resumes;

  if (lang === undefined) return new Response("NOT FOUND", { status: 404 });
  if (lang === null) return new Response("NOT FOUND", { status: 404 });
  if (["fr", "en"].includes(lang) === false)
    return new Response("NOT FOUND", { status: 404 });

  return new Response(JSON.stringify(resume[lang]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

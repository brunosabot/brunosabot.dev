// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest } from "next/server";
import Training from "../../../types/Training";

export const revalidate = 3600 * 6;

interface Trainings {
  en: Training[];
  fr: Training[];
}

const trainings: Trainings = {
  en: [
    {
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["With honors", "Head of the class"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Intranet Internet service conception and maintenance"],
    },
    {
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&T",
      subtitles: ["Network and Telecommunications"],
    },
    {
      id: "boissy",
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      details: ["Engineering option", "Maths field", "With honors"],
      endDate: "2005",
      startDate: "2003",
      diploma: "Baccalauréat",
      subtitles: ["Scientific Baccalauréat"],
    },
  ],
  fr: [
    {
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      details: ["Mention Bien", "Major de promotion"],
      endDate: "2009",
      startDate: "2008",
      diploma: "Licence professionnelle CMSII",
      subtitles: ["Conception et Maintenance de Service Intranet Internet"],
    },
    {
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      details: [],
      endDate: "2008",
      startDate: "2005",
      diploma: "DUT R&T",
      subtitles: ["Réseaux et Télécommunications"],
    },
    {
      id: "boissy",
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
  ],
};

export async function GET(request: NextRequest) {
  const lang = request.nextUrl.searchParams.get("lang") as keyof Trainings;

  if (lang === undefined) return new Response("NOT FOUND", { status: 404 });
  if (lang === null) return new Response("NOT FOUND", { status: 404 });
  if (["fr", "en"].includes(lang) === false)
    return new Response("NOT FOUND", { status: 404 });

  return new Response(JSON.stringify(trainings[lang]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

"use server";

import Training from "../../types/Training";

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

export async function getTrainingsByLang(lang: "fr" | "en") {
  return trainings[lang];
}

"use server";

import Training from "../../types/Training";

interface Trainings {
  en: Training[];
  fr: Training[];
}

const trainings: Trainings = {
  en: [
    {
      details: ["With honors", "Head of the class"],
      diploma: "Licence professionnelle CMSII",
      endDate: "2009",
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      startDate: "2008",
      subtitles: ["Intranet Internet service conception and maintenance"],
    },
    {
      details: [],
      diploma: "DUT R&T",
      endDate: "2008",
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      startDate: "2005",
      subtitles: ["Network and Telecommunications"],
    },
    {
      details: ["Engineering option", "Maths field", "With honors"],
      diploma: "Baccalauréat",
      endDate: "2005",
      id: "boissy",
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      startDate: "2003",
      subtitles: ["Scientific Baccalauréat"],
    },
  ],
  fr: [
    {
      details: ["Mention Bien", "Major de promotion"],
      diploma: "Licence professionnelle CMSII",
      endDate: "2009",
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      startDate: "2008",
      subtitles: ["Conception et Maintenance de Service Intranet Internet"],
    },
    {
      details: [],
      diploma: "DUT R&T",
      endDate: "2008",
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      startDate: "2005",
      subtitles: ["Réseaux et Télécommunications"],
    },
    {
      details: [
        "Option Sciences de l'ingénieur",
        "Spécialité Mathématiques",
        "Mention Assez Bien",
      ],
      diploma: "Baccalauréat",
      endDate: "2005",
      id: "boissy",
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      startDate: "2003",
      subtitles: ["Baccalauréat Scientifique SI"],
    },
  ],
};

export async function getTrainingsByLang(lang: "en" | "fr") {
  return trainings[lang];
}

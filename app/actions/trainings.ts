"use server";

import Training from "../../types/Training";

interface Trainings {
  en: Training[];
  fr: Training[];
}

const trainings: Trainings = {
  en: [
    {
      details: [
        "Intranet Internet service conception and maintenance",
        "With honors",
        "Head of the class",
      ],
      diploma: "Licence professionnelle CMSII",
      endDate: "2009",
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      startDate: "2008",
      subtitles: [],
    },
    {
      details: ["Network and Telecommunications"],
      diploma: "DUT R&T",
      endDate: "2008",
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      startDate: "2005",
      subtitles: [],
    },
    {
      details: [
        "Scientific Baccalauréat",
        "Engineering option",
        "Maths field",
        "With honors",
      ],
      diploma: "Baccalauréat",
      endDate: "2005",
      id: "boissy",
      schoolName: "Lycée Boissy D'Anglas",
      schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
      startDate: "2003",
      subtitles: [],
    },
  ],
  fr: [
    {
      details: [
        "Conception et Maintenance de Service Intranet Internet",
        "Mention Bien",
        "Major de promotion",
      ],
      diploma: "Licence professionnelle CMSII",
      endDate: "2009",
      id: "reims",
      schoolName: "Université de Reims Champagne Ardenne",
      schoolWebsite: "https://www.univ-reims.fr/",
      startDate: "2008",
      subtitles: [],
    },
    {
      details: ["Réseaux et Télécommunications"],
      diploma: "DUT R&T",
      endDate: "2008",
      id: "valence",
      schoolName: "IUT Valence",
      schoolWebsite: "https://www.iut-valence.fr/",
      startDate: "2005",
      subtitles: [],
    },
    {
      details: [
        "Baccalauréat Scientifique SI",
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
      subtitles: [],
    },
  ],
};

export async function getTrainingsByLang(lang: "en" | "fr") {
  return trainings[lang];
}

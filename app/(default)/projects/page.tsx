import PageTitle from "../../../components/typography/PageTitle";
import DetailCard from "../../../components/card/DetailCard";
import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Play fun and engaging games by Bruno Sabot! Explore and enjoy a variety of casual and exciting apps for everyone.",
      title: "Projects",
    },
    "/projects/",
  );
}

const getProjects = async () => {
  const projectPromises = [
    {
      id: "answwr",
      url: "https://www.answwr.com",
      image: "https://storage.googleapis.com/brunosabot.dev/img/answwr.png",
      title:
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
      description: [
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
        "With Answwr you’ll be able to decide between choices in the most elegant ways, meaning you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and unbiased random result.",
        "It's important to precise the result will be totally fair and unbiased, that's why we made the Redo button.",
      ],
      lang: "🇺🇸 🇫🇷",
    },
    {
      id: "afkalc",
      url: "https://afkalc.com",
      image: "https://storage.googleapis.com/brunosabot.dev/img/afkalc.png",
      title:
        "AFKalc is a tool to help guilds from AFK Arena to improve their organisation and evolution.",
      description: [
        "AFKalc is a tool to help guilds from AFK Arena to improve their organisation and evolution.",
        "Players have access to an interface that allow to manage and show off their accounts or to create and share their favorite teams.",
        "Guilds can follow players evolutions and organise guild versus guild events by creating tiers lists and give instructions.",
      ],
      lang: "🇩🇪 🇺🇸‍ 🇪🇸 🇫🇷 🇮🇹 🇧🇷 🇷🇺 🇺🇦",
    },
    {
      id: "charlotteannequin",
      url: "https://charlotteannequin.com/",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/projects/charlotteannequin.png",
      title: "Charlotte Annequin - Photographe",
      description: [
        "Charlotte Annequin, photographe depuis 2015, spécialisée dans le portrait artistique. Son coeur d'activité s'étend du mariage à la naissance, en passant par la grossesse",
        "Elle réalise également des séances photo de famille, des portraits artistiques, ou des photographies boudoir",
        "En somme, une photographe des beaux évènements de la vie.",
      ],
      lang: "🇫🇷",
    },
    // {
    //   id: "latelierdeliz",
    //   url: "https://latelierdeliz.fr/",
    //   image:
    //     "https://storage.googleapis.com/brunosabot.dev/img/projects/latelierdeliz.png",
    //   title: "L'atelier de Liz, couture d'accessoires pour bébé",
    //   description: [
    //     "L'atelier de Liz, c'est une maman qui a décidé, lors de la venue au monde de sa fille de faire ses réalisations pour répondre à ses exigences de valeur et de qualité.",
    //     "Vous pouvez retrouver des réalisations de gigoteuses, de sorties de bains, de paniers et lingettes réutilisables de tapis d'éveil,de sur-matelas à langer et bien d'autres encore !",
    //   ],
    //   lang: "🇫🇷",
    // },
  ];

  return Promise.all(projectPromises);
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <PageTitle>Project list</PageTitle>

      {projects.map((project, index) => (
        <DetailCard
          image={project.image}
          title={project.title}
          description={project.description}
          url={project.url}
          key={project.id}
          lang={project.lang}
          priority={index === 0}
        />
      ))}

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Projects", "/projects/"],
        ]}
      />
    </>
  );
}

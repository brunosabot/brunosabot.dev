import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import List from "./components/List";
import Project from "./components/Project";

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
      description: [
        "The Les 2 Alpes Trail association offers a multitude of routes and segments around the resort to help you discover the mountains' sumptuous landscapes.",
        "The Galaxy is a digital passport that allows you to connect your Strava account to automatically validate your achievements and visualize your exploration progress.",
        "In addition to segments, you can collect badges by participating in association events, whether racing or volunteering.",
      ],
      id: "galaxieles2alpestrail",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/projects/galaxieles2alpestrail.png",
      lang: "🇫🇷",
      title: "Galaxie Les 2 Alpes Trail: Digital Passport.",
      url: "https://galaxie.les2alpestrail.com/",
    },
    {
      description: [
        "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
        "With Answwr you’ll be able to decide between choices in the most elegant ways, meaning you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and unbiased random result.",
        "It's important to precise the result will be totally fair and unbiased, that's why we made the Redo button.",
      ],
      id: "answwr",
      image: "https://storage.googleapis.com/brunosabot.dev/img/answwr.png",
      lang: "🇺🇸 🇫🇷",
      title: "Answwr is a cool and modern decision maker.",
      url: "https://www.answwr.com",
    },
    {
      description: [
        "AFKalc is a tool to help guilds from AFK Arena to improve their organisation and evolution.",
        "Players have access to an interface that allow to manage and show off their accounts or to create and share their favorite teams.",
        "Guilds can follow players evolutions and organise guild versus guild events by creating tiers lists and give instructions.",
      ],
      id: "afkalc",
      image: "https://storage.googleapis.com/brunosabot.dev/img/afkalc.png",
      lang: "🇩🇪 🇺🇸‍ 🇪🇸 🇫🇷 🇮🇹 🇧🇷 🇷🇺 🇺🇦",
      title: "AFKalc: toolkit for AFK Arena.",
      url: "https://afkalc.com",
    },
    {
      description: [
        "Charlotte Annequin, photographe depuis 2015, spécialisée dans le portrait artistique. Son coeur d'activité s'étend du mariage à la naissance, en passant par la grossesse",
        "Elle réalise également des séances photo de famille, des portraits artistiques, ou des photographies boudoir",
        "En somme, une photographe des beaux évènements de la vie.",
      ],
      id: "charlotteannequin",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/projects/charlotteannequin.png",
      lang: "🇫🇷",
      title: "Charlotte Annequin - Photographe",
      url: "https://charlotteannequin.com/",
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
      <Title>Experiments & Ventures</Title>
      <ParagraphSecondary>
        A playground for side projects, tools, and fun apps.
      </ParagraphSecondary>

      <List>
        {projects.map((project, index) => (
          <Project
            description={project.description}
            image={project.image}
            key={project.id}
            priority={index === 0}
            title={project.title}
            to={project.url}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Projects", "/projects/"],
        ]}
      />
    </>
  );
}

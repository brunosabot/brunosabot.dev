import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import List from "./components/List";
import OpenSourceProject from "./components/OpenSourceProject";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Open-source your projects with Bruno Sabot! Explore dev, home automation, and more in his code repositories. Contribute and join the community.",
      title: "Open Source",
    },
    "/opensource/",
  );
}

const getProjects = async () => {
  const projects = [
    {
      description:
        "Streamline your Lovelace configuration with with a card template system: A Home Assistant plugin",
      name: "Streamline Card",
      role: "Maintainer",
      slug: "brunosabot/streamline-card",
      url: "https://github.com/brunosabot/streamline-card",
    },
    {
      description:
        "Manage your AFK Arena account and guild though a web interface. List heroes, create your guild and more!",
      name: "AFKalc",
      role: "Maintainer",
      slug: "brunosabot/afkalc",
      url: "https://github.com/brunosabot/afkalc",
    },
    {
      description:
        "A database containing of my tech discovery and learnings in a lot of various domains.",
      name: "Private Knowledge Database",
      role: "Maintainer",
      slug: "brunosabot/pkdb",
      url: "https://github.com/brunosabot/pkdb",
    },
    {
      description:
        "Bubble Card is a minimalist and customizable card collection for Home Assistant with a nice pop-up touch.",
      name: "Bubble Card",
      role: "Contributor",
      slug: "Clooos/Bubble-Card",
      url: "https://github.com/Clooos/Bubble-Card",
    },
  ];

  return projects;
};

export default async function OpensourcePage() {
  const projects = await getProjects();

  return (
    <>
      <Title>Open Source & Community</Title>
      <ParagraphSecondary>
        A collection of projects I maintain and contributions to the open source
        ecosystem.
      </ParagraphSecondary>

      <List>
        {projects.map((project) => (
          <OpenSourceProject
            description={project.description}
            key={project.slug}
            name={project.name}
            role={project.role}
            slug={project.slug}
            url={project.url}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Open Source", "/opensource/"],
        ]}
      />
    </>
  );
}

import PageTitle from "../../../components/typography/PageTitle";
import CardOpensource from "../../../components/card/CardOpenSource";
import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Title from "../../../generic/typography/Title";
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
      name: "Streamline Card",
      slug: "brunosabot/streamline-card",
      url: "https://github.com/brunosabot/streamline-card",
      description:
        "Streamline your Lovelace configuration with with a card template system: A Home Assistant plugin",
      role: "Maintainer",
    },
    {
      name: "AFKalc",
      slug: "brunosabot/afkalc",
      url: "https://github.com/brunosabot/afkalc",
      description:
        "Manage your AFK Arena account and guild though a web interface. List heroes, create your guild and more!",
      role: "Maintainer",
    },
    {
      name: "Private Knowledge Database",
      slug: "brunosabot/pkdb",
      url: "https://github.com/brunosabot/pkdb",
      description:
        "A database containing of my tech discovery and learnings in a lot of various domains.",
      role: "Maintainer",
    },
    {
      name: "Bubble Card",
      slug: "Clooos/Bubble-Card",
      url: "https://github.com/Clooos/Bubble-Card",
      description:
        "Bubble Card is a minimalist and customizable card collection for Home Assistant with a nice pop-up touch.",
      role: "Contributor",
    },
  ];

  return projects;
};

export default async function OpensourcePage() {
  const projects = await getProjects();

  return (
    <>
      <Title>My open source projects</Title>

      <div style={{ paddingTop: "24px" }}>
        {projects.map((project) => (
          <OpenSourceProject
            key={project.slug}
            name={project.name}
            slug={project.slug}
            description={project.description}
            url={project.url}
            role={project.role}
          />
        ))}
      </div>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Open Source", "/opensource/"],
        ]}
      />
    </>
  );
}

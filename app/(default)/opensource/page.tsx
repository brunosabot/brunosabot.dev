import React from "react";
import PageTitle from "../../../components/typography/PageTitle";
import CardOpensource from "../../../components/card/CardOpenSource";
import { getMetaData } from "../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description:
      "All the open sources project initiated by Bruno Sabot. Check it out!",
    title: "Open Source",
  });
}

const getProjects = async () => {
  const projects = [
    {
      name: "brunosabot/lovelace-nonow-calendar",
      url: "https://github.com/brunosabot/lovelace-nonow-calendar",
    },
    {
      name: "brunosabot/lovelace-nonow-aqi",
      url: "https://github.com/brunosabot/lovelace-nonow-aqi",
    },
    {
      name: "brunosabot/lovelace-nonow-age",
      url: "https://github.com/brunosabot/lovelace-nonow-age",
    },
    {
      name: "brunosabot/afkalc",
      url: "https://github.com/brunosabot/afkalc",
    },
    {
      name: "brunosabot/pkdb",
      url: "https://github.com/brunosabot/pkdb",
    },
    {
      name: "brunosabot/tools-for-front",
      url: "https://github.com/brunosabot/tools-for-front",
    },
  ];

  return projects;
};

export default async function OpensourcePage() {
  const projects = await getProjects();

  return (
    <>
      <PageTitle>Open source project list</PageTitle>

      <div style={{ paddingTop: "24px" }}>
        {projects.map((project) => (
          <CardOpensource
            key={project.name}
            name={project.name}
            url={project.url}
          />
        ))}
      </div>
    </>
  );
}

import { GetStaticProps } from "next";
import React from "react";
import CardOpenSource from "../components/card/CardOpenSource";
import Layout from "../components/layout/DefaultLayout";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface OpenSource {
  id: string;
  name: string;
  url: string;
}

interface Props {
  projects: OpenSource[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: [
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
      ],
    },
  };
};

const OpenSources: React.FC<Props> = ({ projects }) => (
  <Layout>
    <SEO
      description="All the open sources project initiated by Bruno Sabot. Check it out!"
      title="Open Source - Bruno Sabot"
    />
    <main className="content">
      <PageTitle>Open source project list</PageTitle>
      {projects.map((project) => (
        <CardOpenSource
          key={project.id}
          name={project.name}
          url={project.url}
        />
      ))}
    </main>
  </Layout>
);

export default OpenSources;

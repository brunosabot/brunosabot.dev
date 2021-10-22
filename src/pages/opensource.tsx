import { graphql } from "gatsby";
import React from "react";
import CardOpenSource from "../components/card/CardOpenSource";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface OpenSource {
  id: string;
  name: string;
  url: string;
}

interface Node {
  nodes: OpenSource[];
}

interface Query {
  allOpenSourceProject: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query OpenSourceQuery {
    allOpenSourceProject {
      nodes {
        id
        name
        url
      }
    }
  }
`;

const OpenSources: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All the open sources project initiated by Bruno Sabot. Check it out!"
      title="Open Source - Bruno Sabot"
    />
    <main className="content">
      <PageTitle>Open source project list</PageTitle>
      {data.allOpenSourceProject.nodes.map((project) => (
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

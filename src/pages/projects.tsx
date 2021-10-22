import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import DetailCard from "../components/card/DetailCard";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface Image {
  gatsbyImageData: IGatsbyImageData;
}

interface File {
  childImageSharp: Image;
}

interface Project {
  description: string[];
  id: string;
  image: File;
  title: string;
  url: string;
}

interface Node {
  nodes: Project[];
}

interface Query {
  allProject: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query ProjectQuery {
    allProject {
      nodes {
        id
        url
        image {
          childImageSharp {
            gatsbyImageData(width: 398, layout: FIXED)
          }
        }
        title
        description
      }
    }
  }
`;

const Projects: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="Projects imaginated and created by Bruno Sabot. Check it out!"
      title="Projects - Bruno Sabot"
    />
    <main className="content">
      <PageTitle>Project list</PageTitle>
      {data.allProject.nodes.map((project) => (
        <DetailCard
          image={project.image.childImageSharp.gatsbyImageData}
          title={project.title}
          description={project.description}
          url={project.url}
          key={project.id}
        />
      ))}
    </main>
  </Layout>
);

export default Projects;

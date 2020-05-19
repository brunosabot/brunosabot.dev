import { graphql } from "gatsby";
import React from "react";
import DetailCard from "../components/card/DetailCard";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";

interface Fixed {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
  width: number;
}

interface Image {
  fixed: Fixed;
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
            fixed(width: 398) {
              ...GatsbyImageSharpFixed_withWebp
            }
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
      {data.allProject.nodes.map((project) => (
        <DetailCard
          image={project.image.childImageSharp.fixed}
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

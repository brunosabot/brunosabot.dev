import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import DetailCard from "../components/card/DetailCard";

export const query = graphql`
  query ProjectQuery {
    allProject {
      nodes {
        id
        url
        image
        title
        description
      }
    }
  }
`;

const Projects = ({ data }) => (
  <Layout>
    <SEO
      description="Projects imaginated and created by Bruno Sabot. Check it out!"
      title="Projects - Bruno Sabot"
    />
    <main className="project">
      {data.allProject.nodes.map(project => (
        <DetailCard
          image={project.image}
          title={project.title}
          description={project.description}
          url={project.url}
          key={project.id}
        />
      ))}
    </main>
  </Layout>
);

Projects.propTypes = {
  data: PropTypes.shape({
    allProject: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          image: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
        })
      )
    })
  }).isRequired
};

export default Projects;

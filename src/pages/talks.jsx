import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import CardTalk from "../components/card/CardTalk";

export const query = graphql`
  query TalkQuery {
    allTalk {
      nodes {
        id
        conferenceName
        date
        language
        slides
        title
        youtubeId
      }
    }
  }
`;

const Talks = ({ data }) => (
  <Layout>
    <SEO
      description="All the conference talks given by Bruno Sabot. Check it out!"
      title="Talks - Bruno Sabot"
    />
    <main className="talk">
      {data.allTalk.nodes.map(talk => (
        <CardTalk {...talk} key={talk.id} />
      ))}
    </main>
  </Layout>
);

Talks.propTypes = {
  data: PropTypes.shape({
    allTalk: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          conferenceName: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          language: PropTypes.string.isRequired,
          slides: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          youtubeId: PropTypes.string
        })
      )
    })
  }).isRequired
};

export default Talks;

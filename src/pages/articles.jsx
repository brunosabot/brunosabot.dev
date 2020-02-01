import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import SEO from "../components/Seo";
import Layout from "../components/Layout";
import Card from "../components/card/Card";

export const query = graphql`
  query ArticleQuery {
    allArticle {
      nodes {
        id
        date
        href
        language
        platform
        title
      }
    }
  }
`;

const Articles = ({ data }) => (
  <Layout>
    <SEO
      description="All articles publicated by Bruno Sabot on various plateforms. Check it out!"
      title="Articles - Bruno Sabot"
    />
    <main className="article">
      {data.allArticle.nodes.map(article => (
        <Card
          icon={article.language}
          title={article.title}
          subtitle={article.platform}
          date={article.date}
          to={article.href}
          key={article.id}
        />
      ))}
    </main>
  </Layout>
);

Articles.propTypes = {
  data: PropTypes.shape({
    allArticle: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          date: PropTypes.string.isRequired,
          href: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired
        })
      )
    })
  }).isRequired
};

export default Articles;

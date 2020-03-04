import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card/Card";
import Layout from "../components/Layout";
import SEO from "../components/Seo";

interface Article {
  id: string;
  date: string;
  href: string;
  title: string;
  language: string;
  platform: string;
}

interface Node {
  nodes: Article[];
}

interface Query {
  allArticle: Node;
}

interface Props {
  data: Query;
}

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

const Articles: React.FC<Props> = ({ data }) => (
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

export default Articles;

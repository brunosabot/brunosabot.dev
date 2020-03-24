import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card/Card";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";

interface FixedImage {
  srcWebp: string;
}

interface ChildImageSharp {
  fixed: FixedImage;
}

interface Image {
  childImageSharp: ChildImageSharp;
}

interface Article {
  id: string;
  date: string;
  href: string;
  title: string;
  description: string;
  image: Image;
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
        image {
          childImageSharp {
            fixed(width: 348, webpQuality: 100) {
              srcWebp
            }
          }
        }
        language
        platform
        title
        description
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
    <main className="content content-cols">
      {data.allArticle.nodes.map((article) => (
        <Card
          image={article.image.childImageSharp.fixed.srcWebp}
          description={article.description}
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

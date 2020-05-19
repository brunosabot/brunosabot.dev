import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card/Card";
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

interface ChildImageSharp {
  fixed: Fixed;
}

interface Image {
  childImageSharp: ChildImageSharp;
}

interface Post {
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
  nodes: Post[];
}

interface Query {
  allPost: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query PostQuery {
    allPost {
      nodes {
        id
        date
        href
        image {
          childImageSharp {
            fixed(width: 348, height: 232, webpQuality: 100) {
              ...GatsbyImageSharpFixed_withWebp
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

const Posts: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All posts publicated by Bruno Sabot on various plateforms. Check it out!"
      title="Posts - Bruno Sabot"
    />
    <main className="content content-cols">
      {data.allPost.nodes.map((post) => (
        <Card
          fixed={post.image.childImageSharp.fixed}
          description={post.description}
          icon={post.language}
          title={post.title}
          subtitle={post.platform}
          date={post.date}
          to={post.href}
          key={post.id}
        />
      ))}
    </main>
  </Layout>
);

export default Posts;

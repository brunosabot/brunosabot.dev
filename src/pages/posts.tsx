import { graphql } from "gatsby";
import React from "react";
import Card from "../components/card/Card";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

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

interface Frontmatter {
  lang: string;
  platform: string;
  title: string;
  path: string;
  date: string;
}

interface Post {
  excerpt: string;
  image: Image;
  id: string;
  timeToRead: number;
  frontmatter: Frontmatter;
}

interface Node {
  nodes: Post[];
}

interface Query {
  allMarkdownRemark: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`query PostQuery {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      excerpt
      frontmatter {
        lang
        platform
        date(fromNow: true)
        canonical
        path
        title
      }
      id
      timeToRead
      image {
        childImageSharp {
          gatsbyImageData(
            width: 348
            height: 232
            quality: 100
            placeholder: BLURRED
            layout: FIXED
          )
        }
      }
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
      <PageTitle>Post list</PageTitle>
      {data.allMarkdownRemark.nodes.map((post) => (
        <Card
          fixed={post.image.childImageSharp.gatsbyImageData}
          description={post.excerpt}
          icon={post.frontmatter.lang}
          title={post.frontmatter.title}
          subtitle={post.frontmatter.platform}
          date={post.frontmatter.date}
          to={post.frontmatter.path}
          key={post.id}
        />
      ))}
    </main>
  </Layout>
);

export default Posts;

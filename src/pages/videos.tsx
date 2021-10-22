import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import CardVideo from "../components/card/CardVideo";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

interface Image {
  childImageSharp: ChildImageSharp;
}

interface Video {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  youtubeId: string;
  description: string;
  image: Image;
}

interface Node {
  nodes: Video[];
}

interface Query {
  allVideo: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query VideoQuery {
    allVideo {
      nodes {
        id
        date
        language
        title
        youtubeId
        description
        image {
          childImageSharp {
            gatsbyImageData(width: 348, quality: 100, layout: FIXED)
          }
        }
      }
    }
  }
`;

const Videos: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All the videos made by or with Bruno Sabot"
      title="Videos - Bruno Sabot"
    />
    <main className="content">
      <PageTitle>Video list</PageTitle>
      {data.allVideo.nodes.map((video) => (
        <CardVideo
          fixed={
            video.image
              ? video.image.childImageSharp.gatsbyImageData
              : undefined
          }
          description={video.description}
          language={video.language}
          title={video.title}
          date={video.date}
          id={video.id}
          key={video.id}
          youtubeId={video.youtubeId}
        />
      ))}
    </main>
  </Layout>
);

export default Videos;

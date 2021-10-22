import { graphql } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import CardPodcast from "../components/card/CardPodcast";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface ChildImageSharp {
  gatsbyImageData: IGatsbyImageData;
}

interface Image {
  childImageSharp: ChildImageSharp;
}

interface Podcast {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  url: string;
  description: string;
  image: Image;
  platform: string;
}

interface Node {
  nodes: Podcast[];
}

interface Query {
  allPodcast: Node;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query PodcastQuery {
    allPodcast {
      nodes {
        id
        date
        language
        title
        url
        description
        platform
        image {
          childImageSharp {
            gatsbyImageData(width: 348, quality: 100, layout: FIXED)
          }
        }
      }
    }
  }
`;

const Podcasts: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All the podcasts with Bruno Sabot"
      title="Podcasts - Bruno Sabot"
    />
    <main className="content content-cols">
      <PageTitle>Podcast list</PageTitle>
      {data.allPodcast.nodes.map((podcast) => (
        <CardPodcast
          fixed={
            podcast.image
              ? podcast.image.childImageSharp.gatsbyImageData
              : undefined
          }
          description={podcast.description}
          language={podcast.language}
          title={podcast.title}
          date={podcast.date}
          id={podcast.id}
          key={podcast.id}
          url={podcast.url}
          platform={podcast.platform}
        />
      ))}
    </main>
  </Layout>
);

export default Podcasts;

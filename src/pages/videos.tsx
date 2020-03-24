import { graphql } from "gatsby";
import React from "react";
import CardVideo from "../components/card/CardVideo";
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
            fixed(width: 348, webpQuality: 100) {
              srcWebp
            }
          }
        }
      }
    }
  }
`;

const Videos: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All the videos made or with by Bruno Sabot"
      title="Videos - Bruno Sabot"
    />
    <main className="content">
      {data.allVideo.nodes.map((video) => (
        <CardVideo
          image={video.image ? video.image.childImageSharp.fixed.srcWebp : ""}
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

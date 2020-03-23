import { graphql } from "gatsby";
import React from "react";
import CardVideo from "../components/card/CardVideo";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";

interface Video {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  youtubeId: string;
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
        <CardVideo {...video} key={video.id} />
      ))}
    </main>
  </Layout>
);

export default Videos;

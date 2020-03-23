import { graphql } from "gatsby";
import React from "react";
import CardTalk from "../components/card/CardTalk";
import Layout from "../components/layout/Default";
import SEO from "../components/Seo";

interface Talk {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  youtubeId?: string;
}

interface Node {
  nodes: Talk[];
}

interface Query {
  allTalk: Node;
}

interface Props {
  data: Query;
}

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

const Talks: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO
      description="All the conference talks given by Bruno Sabot. Check it out!"
      title="Talks - Bruno Sabot"
    />
    <main className="content">
      {data.allTalk.nodes.map((talk) => (
        <CardTalk {...talk} key={talk.id} />
      ))}
    </main>
  </Layout>
);

export default Talks;

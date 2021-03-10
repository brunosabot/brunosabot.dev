import { graphql } from "gatsby";
import React from "react";
import CardTalk from "../components/card/CardTalk";
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

interface Talk {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  description: string;
  image: Image;
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

export const query = graphql`query TalkQuery {
  allTalk {
    nodes {
      id
      conferenceName
      date
      image {
        childImageSharp {
          gatsbyImageData(width: 348, height: 196, quality: 100, layout: FIXED)
        }
      }
      description
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
    <main className="content content-cols">
      <PageTitle>Talk list</PageTitle>
      {data.allTalk.nodes.map((talk) => (
        <CardTalk
          fixed={talk.image ? talk.image.childImageSharp.gatsbyImageData : undefined}
          description={talk.description}
          language={talk.language}
          title={talk.title}
          conferenceName={talk.conferenceName}
          date={talk.date}
          id={talk.id}
          key={talk.id}
          slides={talk.slides}
          youtubeId={talk.youtubeId}
        />
      ))}
    </main>
  </Layout>
);

export default Talks;

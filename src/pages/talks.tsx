import { graphql } from "gatsby";
import React from "react";
import CardTalk from "../components/card/CardTalk";
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

export const query = graphql`
  query TalkQuery {
    allTalk {
      nodes {
        id
        conferenceName
        date
        image {
          childImageSharp {
            fixed(width: 348, webpQuality: 100) {
              srcWebp
            }
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
      {data.allTalk.nodes.map((talk) => (
        <CardTalk
          image={talk.image ? talk.image.childImageSharp.fixed.srcWebp : ""}
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

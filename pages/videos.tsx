import { GetStaticProps } from "next";
import React from "react";
import { getPlaiceholder } from "plaiceholder";
import CardVideo from "../components/card/CardVideo";
import DefaultLayout from "../components/layout/DefaultLayout";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface Video {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  youtubeId: string;
  description: string;
  image: string;
}

interface Props {
  videos: Video[];
}

export const getStaticProps: GetStaticProps = async () => {
  const videoPromises = [
    {
      id: "1",
      date: "2020-03-09",
      language: "fr",
      title: "Un Café Avec Bruno & Manuel : CSS Flexbox",
      youtubeId: "t9XFUI_qZ3g",
      description:
        "Nous avons l'habitude de dire qu'aligner les éléments en CSS s'avère difficile.  Découvrez avec Manuel et Bruno que de nos jours cela est vraiment facile et à la portée de tous ! #flexbox",
      image: "https://img.youtube.com/vi/t9XFUI_qZ3g/maxresdefault.jpg",
    },
  ].map(async (post) => {
    const imageRes = await fetch(post.image);
    const arrayBuffer = await imageRes.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { img, base64 } = await getPlaiceholder(buffer);
    const imageHeight = (img.height * 680) / img.width;

    return {
      ...post,
      imagePlaceholder: base64,
      imageHeight,
    };
  });

  const videos = await Promise.all(videoPromises);

  return {
    props: {
      videos,
    },
  };
};

const Videos: React.FC<Props> = ({ videos }) => (
  <DefaultLayout type="columns">
    <SEO
      description="All the videos made by or with Bruno Sabot"
      title="Videos - Bruno Sabot"
    />
    <PageTitle>Video list</PageTitle>
    {videos.map((video, index) => (
      <CardVideo
        image={video.image ? video.image : undefined}
        description={video.description}
        language={video.language}
        title={video.title}
        date={video.date}
        id={video.id}
        key={video.id}
        youtubeId={video.youtubeId}
        priority={index === 0}
      />
    ))}
  </DefaultLayout>
);

export default Videos;

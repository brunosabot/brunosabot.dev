import { GetStaticProps } from "next";
import React from "react";
import { getPlaiceholder } from "plaiceholder";
import CardPodcast from "../components/card/CardPodcast";
import DefaultLayout from "../components/layout/DefaultLayout";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface Podcast {
  id: string;
  conferenceName: string;
  date: string;
  language: string;
  slides: string;
  title: string;
  url: string;
  description: string;
  image: string;
  imagePlaceholder: string;
  platform: string;
}

interface Props {
  podcasts: Podcast[];
}

export const getStaticProps: GetStaticProps = async () => {
  const podcastPromises = [
    {
      date: "2020-08-14",
      language: "fr",
      title: "Compilé - Etre dev sénior et sénior",
      url: "https://ifttd.io/50-etre-dev-senior-et-senior-jacques-ducloy/",
      description:
        "Compilé de l'épisode 50 du podcast IFTTD, Etre dev sénior et sénior par Jacques Ducloy. Si vous avez peu de temps, je résume le contenu de l'épisodes en 10 minutes.",
      image: "https://ifttd.io/wp-content/uploads/2020/07/11-2-1200x690.jpg",
      platform: "IFTTD",
    },
    {
      date: "2020-08-19",
      language: "fr",
      title:
        "Arrêter le “script” de javascript pour améliorer les performances",
      url: "https://ifttd.io/54-arreter-le-script-de-javascript-pour-ameliorer-les-performances-anthony-le-goas-et-bruno-sabot/",
      description:
        "Javascript a connu jQuery, puis AngularJS, puis node, puis vue et react. Autrement dit le petit langage de scripting pour “animer un peu de texte” sur une page a beaucoup changé !",
      image: "https://ifttd.io/wp-content/uploads/2020/08/IFTTD-54.jpg",
      platform: "IFTTD",
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

  const podcasts = await Promise.all(podcastPromises);

  return {
    props: {
      podcasts,
    },
  };
};

const Podcasts: React.FC<Props> = ({ podcasts }) => (
  <DefaultLayout type="columns">
    <SEO
      description="All the podcasts with Bruno Sabot"
      title="Podcasts - Bruno Sabot"
    />
    <PageTitle>Podcast list</PageTitle>
    {podcasts.map((podcast, index) => (
      <CardPodcast
        image={podcast.image ? podcast.image : undefined}
        description={podcast.description}
        language={podcast.language}
        title={podcast.title}
        date={podcast.date}
        id={podcast.id}
        key={podcast.id}
        url={podcast.url}
        platform={podcast.platform}
        priority={index === 0}
        imagePlaceholder={podcast.imagePlaceholder}
      />
    ))}
  </DefaultLayout>
);

export default Podcasts;

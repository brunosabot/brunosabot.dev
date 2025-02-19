import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Podcast from "./components/Podcast";
import List from "./components/List";
import Title from "../../../generic/typography/Title";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Hear Bruno Sabot on podcasts! Dive into dev, React, JavaScript, and more with insightful discussions and expert tips.",
      title: "Podcasts",
    },
    "/podcasts/",
  );
}

const getPodcasts = async () => {
  const podcastPromises = [
    {
      id: "ifttd-senior",
      date: "2020-08-14",
      language: "fr",
      title: "Compilé - Etre dev sénior et sénior",
      url: "https://ifttd.io/50-etre-dev-senior-et-senior-jacques-ducloy/",
      description:
        "Compilé de l'épisode 50 du podcast IFTTD, Etre dev sénior et sénior par Jacques Ducloy. Si vous avez peu de temps, je résume le contenu de l'épisodes en 10 minutes.",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/11-2-1200x690.jpeg",
      platform: "IFTTD",
    },
    {
      id: "ifttd-javascript",
      date: "2020-08-19",
      language: "fr",
      title:
        "Arrêter le “script” de javascript pour améliorer les performances",
      url: "https://ifttd.io/54-arreter-le-script-de-javascript-pour-ameliorer-les-performances-anthony-le-goas-et-bruno-sabot/",
      description:
        "Javascript a connu jQuery, puis AngularJS, puis node, puis vue et react. Autrement dit le petit langage de scripting pour “animer un peu de texte” sur une page a beaucoup changé !",
      image: "https://storage.googleapis.com/brunosabot.dev/img/IFTTD-54.jpeg",
      platform: "IFTTD",
    },
  ];

  return Promise.all(podcastPromises);
};

export default async function PodcastsPage() {
  const podcasts = await getPodcasts();

  return (
    <>
      <Title>Podcast list</Title>

      <List>
        {podcasts.map((podcast, index) => (
          <Podcast
            image={podcast.image ? podcast.image : undefined}
            description={podcast.description}
            lang={podcast.language}
            title={podcast.title}
            date={podcast.date}
            key={podcast.title}
            url={podcast.url}
            platform={podcast.platform}
            priority={index === 0}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Podcasts", "/podcasts/"],
        ]}
      />
    </>
  );
}

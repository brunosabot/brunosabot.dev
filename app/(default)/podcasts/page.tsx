import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import List from "./components/List";
import Podcast from "./components/Podcast";

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
      date: "2020-08-14",
      description:
        "Compilé de l'épisode 50 du podcast IFTTD, Etre dev sénior et sénior par Jacques Ducloy. Si vous avez peu de temps, je résume le contenu de l'épisodes en 10 minutes.",
      id: "ifttd-senior",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/11-2-1200x690.jpeg",
      language: "fr",
      platform: "IFTTD",
      title: "Compilé - Etre dev sénior et sénior",
      url: "https://ifttd.io/50-etre-dev-senior-et-senior-jacques-ducloy/",
    },
    {
      date: "2020-08-19",
      description:
        "Javascript a connu jQuery, puis AngularJS, puis node, puis vue et react. Autrement dit le petit langage de scripting pour “animer un peu de texte” sur une page a beaucoup changé !",
      id: "ifttd-javascript",
      image: "https://storage.googleapis.com/brunosabot.dev/img/IFTTD-54.jpeg",
      language: "fr",
      platform: "IFTTD",
      title:
        "Arrêter le “script” de javascript pour améliorer les performances",
      url: "https://ifttd.io/54-arreter-le-script-de-javascript-pour-ameliorer-les-performances-anthony-le-goas-et-bruno-sabot/",
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
            date={podcast.date}
            description={podcast.description}
            image={podcast.image ? podcast.image : undefined}
            key={podcast.title}
            lang={podcast.language}
            platform={podcast.platform}
            priority={index === 0}
            title={podcast.title}
            url={podcast.url}
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

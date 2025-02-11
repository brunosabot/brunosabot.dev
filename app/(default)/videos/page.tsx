import PageTitle from "../../../components/typography/PageTitle";
import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Video from "./components/Video";
import Title from "../../../generic/typography/Title";

export async function generateMetadata() {
  return getMetaData(
    {
      description: "See Bruno in action! Learn from his videos on dev topics.",
      title: "Videos",
    },
    "/videos/",
  );
}

const getVideos = async () => {
  const videoPromises = [
    {
      id: "1",
      date: "2020-03-09",
      language: "fr",
      title: "Un Café Avec Bruno & Manuel : CSS Flexbox",
      youtubeId: "t9XFUI_qZ3g",
      description:
        "Nous avons l'habitude de dire qu'aligner les éléments en CSS s'avère difficile.  Découvrez avec Manuel et Bruno que de nos jours cela est vraiment facile et à la portée de tous ! #flexbox",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/t9XFUI_qZ3g.jpeg",
    },
  ];

  return Promise.all(videoPromises);
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <>
      <Title>Video list</Title>

      {videos.map((video, index) => (
        <Video
          image={video.image ? video.image : undefined}
          description={video.description}
          lang={video.language}
          title={video.title}
          date={video.date}
          key={video.id}
          youtubeId={video.youtubeId}
          priority={index === 0}
        />
      ))}

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Videos", "/videos/"],
        ]}
      />
    </>
  );
}

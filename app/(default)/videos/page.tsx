import PageTitle from "../../../components/typography/PageTitle";
import CardVideo from "../../../components/card/CardVideo";
import { getMetaData } from "../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description: "All the videos made by or with Bruno Sabot",
    title: "Videos",
  });
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
    </>
  );
}

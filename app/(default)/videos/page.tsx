import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import List from "./components/List";
import Video from "./components/Video";

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
      date: "2020-03-09",
      description:
        "Nous avons l'habitude de dire qu'aligner les éléments en CSS s'avère difficile.  Découvrez avec Manuel et Bruno que de nos jours cela est vraiment facile et à la portée de tous ! #flexbox",
      id: "1",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/t9XFUI_qZ3g.jpeg",
      language: "fr",
      title: "Un Café Avec Bruno & Manuel : CSS Flexbox",
      youtubeId: "t9XFUI_qZ3g",
    },
  ];

  return Promise.all(videoPromises);
};

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <>
      <Title>Screen Time</Title>
      <ParagraphSecondary>
        A collection of video explorations, tutorials, and casual coding
        sessions.
      </ParagraphSecondary>

      <List>
        {videos.map((video, index) => (
          <Video
            date={new Date(video.date)}
            description={video.description}
            image={video.image ? video.image : undefined}
            key={video.id}
            lang={video.language}
            priority={index === 0}
            title={video.title}
            youtubeId={video.youtubeId}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Videos", "/videos/"],
        ]}
      />
    </>
  );
}

import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getStreamlineCards } from "../../actions/streamline";
import StreamlineCard from "./components/StreamlineCard";
import Prism from "prismjs";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";
import List from "./components/List";
import Title from "../../../generic/typography/Title";

export const revalidate = 21600;

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Find your perfect streamline card templates for your Home Assistant configuration.",
      title: "Streamline Cards",
    },
    "/streamline-cards/",
  );
}

export default async function StreamlineCardsPage() {
  const streamlineCards = await getStreamlineCards();

  return (
    <>
      <Title>Streamline Cards</Title>
      <List>
        {streamlineCards.map((streamlineCard) => (
          <StreamlineCard
            description={streamlineCard.description}
            key={streamlineCard.id}
            title={streamlineCard.title}
            tags={streamlineCard.tags}
            author={streamlineCard.author}
            image={streamlineCard.image}
            language={streamlineCard.language}
          >
            {Prism.highlight(streamlineCard.code, Prism.languages.yaml, "yaml")}
          </StreamlineCard>
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Streamline Cards", "/streamline-cards/"],
        ]}
      />
    </>
  );
}

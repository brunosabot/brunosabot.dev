import Prism from "prismjs";

import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import { getStreamlineCards } from "../../actions/streamline";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";

import List from "./components/List";
import StreamlineCard from "./components/StreamlineCard";

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
            author={streamlineCard.author}
            description={streamlineCard.description}
            image={streamlineCard.image}
            key={streamlineCard.id}
            language={streamlineCard.language}
            tags={streamlineCard.tags}
            title={streamlineCard.title}
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

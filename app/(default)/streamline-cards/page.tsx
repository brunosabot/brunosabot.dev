import PageTitle from "../../../components/typography/PageTitle";
import { getMetaData } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getStreamlineCards } from "../../actions/streamline";
import StreamlineCard from "./components/StreamlineCard";
import Prism from "prismjs";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";

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
      <PageTitle>Streamline Cards</PageTitle>
      {streamlineCards.map((streamlineCard) => (
        <StreamlineCard
          key={streamlineCard.id}
          id={streamlineCard.id}
          title={streamlineCard.title}
          tags={streamlineCard.tags}
          author={streamlineCard.author}
          image={streamlineCard.image}
          language={streamlineCard.language}
        >
          {Prism.highlight(streamlineCard.code, Prism.languages.yaml, "yaml")}
        </StreamlineCard>
      ))}

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Streamline Cards", "/streamline-cards/"],
        ]}
      />
    </>
  );
}

import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import TitleSecondary from "../../../../../generic/typography/TitleSecondary";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolEnduranceIndex from "./_components/ToolEnduranceIndex";
import ToolReverseEnduranceIndex from "./_components/ToolReverseEnduranceIndex";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/endurance-index/",
      description:
        "Calculate your race endurance index or estimate your race duration with this scientific tool for runners and coaches.",
      title: "Endurance Index Tool",
    },
    "/tools/endurance-index/",
  );
}

export default function Page() {
  return (
    <>
      <Title>Endurance Index Tool</Title>
      <ParagraphSecondary>
        Calculate your race endurance index or estimate your race duration with
        this scientific tool for runners and coaches.
      </ParagraphSecondary>

      <TitleSecondary>Endurance Index Calculator</TitleSecondary>
      <ToolEnduranceIndex />

      <TitleSecondary>Reverse Endurance Index Calculator</TitleSecondary>
      <ToolReverseEnduranceIndex />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Endurance Index Tool", "/tools/endurance-index"],
        ]}
      />
    </>
  );
}

import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolAlcohol from "./_components/ToolAlcohol";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/alcohol/",
      description:
        "Calculate the Absolute and Relative Amount of Alcohol in Your Drinks",
      title: "Alcohol Quantities Tool",
    },
    "/tools/alcohol/",
  );
}

export default function ToolAlcoholPage() {
  return (
    <>
      <Title>Alcohol Calculator</Title>

      <ParagraphSecondary>
        Calculate the absolute and relative amount of alcohol in your drinks.
      </ParagraphSecondary>

      <ToolAlcohol />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Alcohol Calculator", "/tools/alcohol"],
        ]}
      />
    </>
  );
}

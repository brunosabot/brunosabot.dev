import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolCharsCount from "./_components/ToolCharsCount";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/chars-count/",
      description:
        "Craft Compelling Content with Ease: The Ultimate Text Analysis Tool",
      title: "Character Count",
    },
    "/tools/chars-count/",
  );
}

export default function ToolCharsCountPage() {
  return (
    <>
      <Title>Character Counter</Title>
      <ParagraphSecondary>
        Craft Compelling Content with Ease: The Ultimate Text Analysis Tool
      </ParagraphSecondary>

      <ToolCharsCount />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Character Count", "/tools/chars-count"],
        ]}
      />
    </>
  );
}

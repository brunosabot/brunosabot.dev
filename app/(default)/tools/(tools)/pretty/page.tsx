import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolPretty from "./_components/ToolPretty";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/pretty/",
      description:
        "Effortlessly Format and Beautify Your JSON Data for Enhanced Readability and Debugging",
      title: "JSON Pretty Tool",
    },
    "/tools/pretty/",
  );
}

export default function ToolPrettyPage() {
  return (
    <>
      <Title>JSON Pretty Tool</Title>

      <ParagraphSecondary>
        Effortlessly Format and Beautify Your JSON Data for Enhanced Readability
        and Debugging
      </ParagraphSecondary>

      <ToolPretty />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["JSON Pretty Tool", "/tools/pretty"],
        ]}
      />
    </>
  );
}

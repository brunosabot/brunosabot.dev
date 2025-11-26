import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolBase64 from "./_components/ToolBase64";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/base-64/",
      description:
        "Effortlessly Convert Strings Between Text and Base64 Format",
      title: "Base 64 Conversion Tool",
    },
    "/tools/base-64/",
  );
}

export default function ToolBase64Page() {
  return (
    <>
      <Title>Base 64 Tool</Title>
      <ParagraphSecondary>
        Effortlessly Convert Strings Between Text and Base64 Format
      </ParagraphSecondary>

      <ToolBase64 />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Base 64 Conversion Tool", "/tools/base-64"],
        ]}
      />
    </>
  );
}

import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolTimestamp from "./_components/ToolTimestamp";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/timestamp/",
      description:
        "Effortlessly Convert Timestamps to Readable Dates and Vice Versa with This Handy Tool",
      title: "Timestamp Converter",
    },
    "/tools/timestamp/",
  );
}

export default function ToolTimestampPage() {
  return (
    <>
      <Title>Timestamp Converter</Title>

      <ParagraphSecondary>
        Effortlessly Convert Timestamps to Readable Dates and Vice Versa with
        This Handy Tool
      </ParagraphSecondary>

      <ToolTimestamp />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Timestamp Converter", "/tools/timestamp"],
        ]}
      />
    </>
  );
}

import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolSpeedConvertor from "./_components/ToolSpeedConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/speed-convertor/",
      description:
        "Instantly Convert Speed Units Between Kilometers per Hour, Miles per Hour, and More",
      title: "Speed Converter Tool",
    },
    "/tools/speed-convertor/",
  );
}

export default function ToolSpeedConvertorPage() {
  return (
    <>
      <Title>Speed Convertor Tool</Title>

      <ParagraphSecondary>
        Instantly Convert Speed Units Between Kilometers per Hour, Miles per
        Hour, and More
      </ParagraphSecondary>

      <ToolSpeedConvertor />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Speed Convertor Tool", "/tools/speed-convertor"],
        ]}
      />
    </>
  );
}

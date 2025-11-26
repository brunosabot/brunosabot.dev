import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolRgbConvertor from "./_components/ToolRgbConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/rgb-convertor/",
      description:
        "Convert Colors Between RGB and HEX Formats with Ease and Precision",
      title: "Color Converter Tool",
    },
    "/tools/rgb-convertor/",
  );
}

export default function ToolRgbConvertorPage() {
  return (
    <>
      <Title>Color Converter Tool</Title>

      <ParagraphSecondary>
        Convert Colors Between RGB and HEX Formats with Ease and Precision
      </ParagraphSecondary>

      <ToolRgbConvertor />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Color Converter Tool", "/tools/rgb-convertor"],
        ]}
      />
    </>
  );
}

import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolPhotoshopShadow from "./_components/ToolPhotoshopShadow";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/photoshop-shadow/",
      description:
        "Bridging Design: Effortlessly Convert Photoshop Shadows to CSS with Visualization",
      title: "Photoshop Shadow Converter",
    },
    "/tools/photoshop-shadow/",
  );
}

export default function ToolPhotoshopShadowPage() {
  return (
    <>
      <Title>Photoshop Shadow Converter</Title>
      <ParagraphSecondary>
        Bridging Design: Effortlessly Convert Photoshop Shadows to CSS with
        Visualization
      </ParagraphSecondary>

      <ToolPhotoshopShadow />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Photoshop Shadow Converter", "/tools/photoshop-shadow"],
        ]}
      />
    </>
  );
}

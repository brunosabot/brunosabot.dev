import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolBezierCurves from "./_components/ToolBezierCurves";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/bezier-curves/",
      description:
        "Craft Stunning Animations with This Cubic-Bezier Curve Generator",
      title: "Bezier Curves",
    },
    "/tools/bezier-curves/",
  );
}

export default function ToolBezierCurvesPage() {
  return (
    <>
      <Title>Bezier Curves Generator</Title>
      <ParagraphSecondary>
        Craft Stunning Animations with This Cubic-Bezier Curve Generator
      </ParagraphSecondary>

      <ToolBezierCurves />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Bezier Curves", "/tools/bezier-curves"],
        ]}
      />
    </>
  );
}

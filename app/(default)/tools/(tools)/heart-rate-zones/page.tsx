import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolHeartRateZones from "./_components/ToolHeartRateZones";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/heart-rate-zones/",
      description:
        "Calculate your heart rate training zones using Max HR or Karvonen formula.",
      title: "Heart Rate Zones Calculator",
    },
    "/tools/heart-rate-zones/",
  );
}

export default function ToolHeartRateZonesPage() {
  return (
    <>
      <Title>Heart Rate Zones</Title>

      <ParagraphSecondary>
        Calculate your heart rate training zones using Max HR or Karvonen
        formula.
      </ParagraphSecondary>

      <ToolHeartRateZones />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Heart Rate Zones", "/tools/heart-rate-zones"],
        ]}
      />
    </>
  );
}

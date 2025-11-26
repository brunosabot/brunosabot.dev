import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolUuid from "./_components/ToolUuid";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/uuid/",
      description:
        "Generate Universally Unique Identifiers (UUIDs) Instantly for Your Applications",
      title: "UUID Generation Tool",
    },
    "/tools/uuid/",
  );
}

export default function ToolUuidPage() {
  return (
    <>
      <Title>UUID Generation Tool</Title>

      <ParagraphSecondary>
        Generate Universally Unique Identifiers (UUIDs) Instantly for Your
        Applications
      </ParagraphSecondary>

      <ToolUuid />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["UUID Generation Tool", "/tools/uuid"],
        ]}
      />
    </>
  );
}

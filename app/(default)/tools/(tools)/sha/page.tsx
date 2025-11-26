import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolSha from "./_components/ToolSha";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/sha/",
      description:
        "Fortify Your Data Security: Generate Secure Hashes with Our SHA Hash Calculator",
      title: "Sha Generation Tool",
    },
    "/tools/sha/",
  );
}

export default function ToolShaPage() {
  return (
    <>
      <Title>Sha Generation Tool</Title>

      <ParagraphSecondary>
        Fortify Your Data Security: Generate Secure Hashes with Our SHA Hash
        Calculator
      </ParagraphSecondary>

      <ToolSha />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Sha Generation Tool", "/tools/sha"],
        ]}
      />
    </>
  );
}

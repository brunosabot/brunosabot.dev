import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolUrlEncodeDecode from "./_components/ToolUrlEncodeDecode";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/url-encode-decode/",
      description:
        "Easily Encode or Decode URLs for Safe Web Transmission and Readability",
      title: "URL Encode and Decode Tool",
    },
    "/tools/url-encode-decode/",
  );
}

export default function ToolUrlEncodeDecodePage() {
  return (
    <>
      <Title>URL Encode And Decode Tool</Title>

      <ParagraphSecondary>
        Easily Encode or Decode URLs for Safe Web Transmission and Readability
      </ParagraphSecondary>

      <ToolUrlEncodeDecode />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["URL Tool", "/tools/url-encode-decode"],
        ]}
      />
    </>
  );
}

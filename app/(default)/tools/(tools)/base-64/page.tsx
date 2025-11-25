import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBase64 from "./ToolBase64";

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
      <PageTitle>Base 64 Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Base 64 Conversion Tool", "/tools/base-64"],
        ]}
      />

      <ToolBase64 />

      <SimpleCard>
        <BlockTitle>
          Base64 Converter: Instantly Encode & Decode Text and Data
        </BlockTitle>

        <p>
          The Base64 Converter Tool is your all-in-one solution for encoding and
          decoding text, files, or images using the Base64 standard. Whether
          you’re a developer, data analyst, or simply need to convert data for
          web or email, this tool offers fast, accurate, and secure Base64
          transformations—right in your browser, with no data ever sent to a
          server.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Encoding & Decoding:</strong> Convert text, files,
            or binary data to and from Base64 in real time.
          </li>
          <li>
            <strong>Supports All Data Types:</strong> Easily handle plain text,
            images, and binary files—perfect for developers and power users.
          </li>
          <li>
            <strong>Copy & Export:</strong> Quickly copy results or export
            encoded/decoded data for use in code, emails, or documentation.
          </li>
          <li>
            <strong>Developer-Friendly Interface:</strong> Clean, intuitive
            design for productivity and ease of use.
          </li>
          <li>
            <strong>Privacy First:</strong> All operations happen locally in
            your browser—your data never leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>Encoding files or images for web, email, or API transmission.</li>
          <li>
            Decoding Base64 data for debugging, analysis, or data recovery.
          </li>
          <li>Storing binary data in text-based formats (JSON, XML, etc.).</li>
          <li>Learning and teaching about data encoding and security.</li>
        </ul>

        <p>
          Streamline your workflow and ensure safe, efficient data handling with
          the Base64 Converter Tool—your trusted resource for all things Base64.
        </p>
      </SimpleCard>
    </>
  );
}

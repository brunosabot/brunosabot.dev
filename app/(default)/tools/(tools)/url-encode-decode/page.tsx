import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolUrlEncodeDecode from "./ToolUrlEncodeDecode";

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
      <PageTitle>URL Encode And Decode Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["URL Tool", "/tools/url-encode-decode"],
        ]}
      />
      <ToolUrlEncodeDecode />

      <SimpleCard>
        <BlockTitle>
          URL Encode & Decode Tool: Instantly Prepare and Read Web Data Safely
        </BlockTitle>
        <p>
          The URL Encode & Decode Tool makes it easy to convert text to and from
          safe, web-ready URL formats. Instantly encode special characters or
          decode encoded URLs for seamless web communication, data sharing, and
          debugging. Whether you’re a developer, marketer, or student, this tool
          ensures your links and data are always valid, readable, and secure—all
          with privacy in mind.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Encoding & Decoding:</strong> Convert URLs or text
            with special characters in real time for fast, accurate results.
          </li>
          <li>
            <strong>Error Handling:</strong> Automatically detects and manages
            malformed input, ensuring reliable conversions every time.
          </li>
          <li>
            <strong>Copy & Export:</strong> Easily copy encoded or decoded
            output for use in web apps, APIs, or documentation.
          </li>
          <li>
            <strong>Developer-Friendly Interface:</strong> Simple, intuitive
            design for quick adoption by any user.
          </li>
          <li>
            <strong>Privacy First:</strong> All operations happen locally in
            your browser—no data is sent to any server.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Preparing URLs for safe transmission in APIs, forms, or web apps.
          </li>
          <li>Debugging and inspecting encoded URLs in web development.</li>
          <li>
            Teaching and learning about URL encoding standards and web safety.
          </li>
          <li>
            Sharing links in emails, chats, or documentation without breaking
            formatting.
          </li>
          <li>
            Ensuring compliance with web standards for internationalization and
            special characters.
          </li>
        </ul>

        <p>
          Simplify your workflow and guarantee safe, readable URLs every time
          with the URL Encode & Decode Tool—your essential resource for web data
          preparation and debugging.
        </p>
      </SimpleCard>
    </>
  );
}

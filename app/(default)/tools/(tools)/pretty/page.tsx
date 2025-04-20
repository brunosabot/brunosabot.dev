import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolPretty from "./ToolPretty";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Effortlessly Format and Beautify Your JSON Data for Enhanced Readability and Debugging",
      title: "JSON Pretty Tool",
      canonical: "https://brunosabot.dev/tools/pretty/",
    },
    "/tools/pretty/",
  );
}

export default function ToolPrettyPage() {
  return (
    <>
      <PageTitle>JSON Pretty Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["JSON Pretty Tool", "/tools/pretty"],
        ]}
      />

      <ToolPretty />

      <SimpleCard>
        <BlockTitle>
          JSON Formatter & Pretty Print Tool: Instantly Beautify and Debug Your
          Data
        </BlockTitle>
        <p>
          The JSON Pretty Tool makes it easy to format, beautify, and inspect
          your JSON data for enhanced readability and error detection. Instantly
          transform compact or minified JSON into a clean, indented
          structure—perfect for developers, data analysts, and anyone working
          with APIs or configuration files. Whether you’re debugging, reviewing,
          or sharing JSON, this tool ensures your data is always clear and
          accessible.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant JSON Formatting:</strong> Paste your minified or
            messy JSON and see it instantly beautified with proper indentation
            and structure.
          </li>
          <li>
            <strong>Error Highlighting:</strong> Quickly spot syntax errors and
            invalid JSON with real-time feedback.
          </li>
          <li>
            <strong>Copy & Export:</strong> Easily copy the formatted JSON or
            export it for use in your projects or documentation.
          </li>
          <li>
            <strong>Developer-Friendly Interface:</strong> Clean, intuitive UI
            designed for productivity and ease of use.
          </li>
          <li>
            <strong>Privacy First:</strong> All formatting happens locally in
            your browser—your data never leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>Debugging and reviewing API responses in web development.</li>
          <li>
            Beautifying configuration files for easier editing and
            collaboration.
          </li>
          <li>
            Teaching and learning JSON structure in coding classrooms or
            tutorials.
          </li>
          <li>
            Sharing readable JSON with teammates, clients, or stakeholders.
          </li>
          <li>Validating JSON before deploying to production systems.</li>
        </ul>

        <p>
          Experience effortless JSON formatting and error detection—streamline
          your workflow and make your data more readable with the JSON Pretty
          Tool.
        </p>
      </SimpleCard>
    </>
  );
}

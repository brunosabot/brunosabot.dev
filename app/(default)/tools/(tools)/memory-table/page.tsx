import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolMemoryTable from "./ToolMemoryTable";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Sharpen Your Mind with the Fun and Challenging Number-Object Memory Game!",
      title: "Memory Table Tool",
      canonical: "https://brunosabot.dev/tools/memory-table/",
    },
    "/tools/memory-table/",
  );
}

export default function ToolMemoryTablePage() {
  return (
    <>
      <PageTitle>Memory Table Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Memory Table Tool", "/tools/memory-table"],
        ]}
      />

      <ToolMemoryTable />

      <SimpleCard>
        <BlockTitle>
          Memory Table Tool: Instantly Convert Bytes, KB, MB, GB, and More
        </BlockTitle>
        <p>
          The Memory Table Tool is your fast, reliable solution for converting
          between digital storage units. Whether you’re a developer, student, IT
          professional, or just curious about file sizes, this tool provides
          instant, accurate conversions for bytes, kilobytes, megabytes,
          gigabytes, terabytes, and beyond. No more manual math—get clear
          answers in seconds, right in your browser.
        </p>
        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Unit Conversion:</strong> Convert between bytes, KB,
            MB, GB, TB, PB, and EB with a single click.
          </li>
          <li>
            <strong>Accurate & Reliable:</strong> All calculations are precise
            and up-to-date with industry standards.
          </li>
          <li>
            <strong>Developer & Student Friendly:</strong> Clean, intuitive
            interface for quick lookups and learning.
          </li>
          <li>
            <strong>Privacy First:</strong> All conversions happen locally—your
            data never leaves your device.
          </li>
        </ul>
        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Quickly convert file sizes for uploads, downloads, or storage
            planning.
          </li>
          <li>Understand device storage requirements and limitations.</li>
          <li>
            Compare memory usage between apps, devices, or cloud services.
          </li>
          <li>
            Teach or learn about digital storage units and data management.
          </li>
        </ul>
        <p>
          Simplify your digital life with the Memory Table Tool—your trusted
          resource for all things data storage.
        </p>
      </SimpleCard>
    </>
  );
}

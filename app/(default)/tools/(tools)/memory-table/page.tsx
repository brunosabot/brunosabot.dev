import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import About from "./_components/About";
import ToolMemoryTable from "./_components/ToolMemoryTable";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/memory-table/",
      description:
        "Sharpen Your Mind with the Fun and Challenging Number-Object Memory Game!",
      title: "Memory Table Tool",
    },
    "/tools/memory-table/",
  );
}

export default function ToolMemoryTablePage() {
  return (
    <>
      <Title>Memory Table</Title>
      <ParagraphSecondary>
        Master the Major System and Improve Your Memory
      </ParagraphSecondary>

      <ToolMemoryTable />

      <About />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Memory Table Tool", "/tools/memory-table"],
        ]}
      />
    </>
  );
}

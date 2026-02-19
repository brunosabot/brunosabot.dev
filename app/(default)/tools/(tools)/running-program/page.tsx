import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../../../generic/typography/ParagraphSecondary";
import Title from "../../../../../generic/typography/Title";
import { getMetaData } from "../../../../../lib/metadata";
import ToolRunningProgram from "./_components/ToolRunningProgram";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/running-program/",
      description:
        "Calculate distance, duration, and pace for your custom running program.",
      title: "Running Program Calculator",
    },
    "/tools/running-program/",
  );
}

export default function ToolRunningProgramPage() {
  return (
    <>
      <Title>Running Program Calculator</Title>

      <ParagraphSecondary>
        Calculate the total distance, duration, and average pace of your running
        session.
      </ParagraphSecondary>

      <ToolRunningProgram />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Running Program", "/tools/running-program"],
        ]}
      />
    </>
  );
}

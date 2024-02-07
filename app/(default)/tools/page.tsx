import PageTitle from "../../../components/typography/PageTitle";
import { getMetaData } from "../../../lib/metadata";
import Tools from "./Tools";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Boost your dev/sport/health/memory with Bruno's easy tools. Free and effective!",
      title: "Web tools",
    },
    "/tools/",
  );
}

export default function ToolsPage() {
  return (
    <>
      <PageTitle>Tool list</PageTitle>

      <Tools />
    </>
  );
}

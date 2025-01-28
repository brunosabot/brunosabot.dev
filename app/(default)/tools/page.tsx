import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import Title from "../../../generic/typography/Title";
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
      <Title>Tool list</Title>

      <Tools />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
        ]}
      />
    </>
  );
}

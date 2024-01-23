import PageTitle from "../../../components/typography/PageTitle";
import { getMetaData } from "../../../lib/metadata";
import Tools from "./Tools";

export async function generateMetadata() {
  return getMetaData({
    description: "Web and developer tools by Bruno Sabot",
    title: "Web tools",
  });
}

export default function ToolsPage() {
  return (
    <>
      <PageTitle>Tool list</PageTitle>

      <Tools />
    </>
  );
}

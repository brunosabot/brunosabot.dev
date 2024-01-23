import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolPhotoshopShadow from "./ToolPhotoshopShadow";

export async function generateMetadata() {
  return getMetaData({
    description: "Photoshop shadow conversion tool by Bruno Sabot",
    title: "Photoshop Shadow",
  });
}

export default function ToolPhotoshopShadowPage() {
  return (
    <>
      <PageTitle>Photoshop Shadow</PageTitle>

      <ToolPhotoshopShadow />

      <SimpleCard>
        The tool is a Photoshop shadow to CSS shadow converter with a
        visualization guide. It helps you quickly and easily convert Photoshop
        shadow styles to CSS shadow values and provides a visual representation
        of the shadow so you can see exactly what it looks like. The tool takes
        a Photoshop shadow style as input and generates the equivalent CSS
        shadow value, ready to be used in your CSS code. The generated CSS
        shadow value is an exact representation of the original shadow style,
        allowing you to maintain the same look and feel across your designs. In
        addition to the CSS shadow value, the tool also provides a visual guide
        to help you understand what the shadow looks like, making it easier to
        fine-tune your shadow designs. Whether you&apos;re a web developer,
        designer, or simply looking for an easy way to convert your Photoshop
        shadow styles to CSS, this tool is a must-have tool for your toolkit.
      </SimpleCard>
    </>
  );
}

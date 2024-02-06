import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolRgbConvertor from "./ToolRgbConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      description: "JSON prettifier tool by Bruno Sabot",
      title: "JSON pretty tool",
    },
    "/tools/rgb-convertor/",
  );
}

export default function ToolRgbConvertorPage() {
  return (
    <>
      <PageTitle>Color converter Tool</PageTitle>

      <ToolRgbConvertor />

      <SimpleCard>
        The tool is a color converter with a favorites system. It helps you
        quickly and easily convert between RGB, HEX, HSL, and CMYK color models
        and saves your favorite colors for quick access. It is designed to make
        it easy to switch between different color models, allowing you to choose
        the best color representation for your needs, and saves time by allowing
        you to quickly access your frequently used colors. The tool takes a
        color in one of the supported color models as input and generates the
        equivalent representation in the other color models. The conversion is
        done in real-time, making it easy to see the results and make any
        necessary adjustments. The favorites system allows you to save your most
        commonly used colors, making it easier and faster to access them when
        you need them. Whether you&apos;re a designer, developer, or simply need
        to work with different color models, this tool is a must-have tool for
        your toolkit. With its simple and intuitive interface, you can easily
        convert colors back and forth between RGB, HEX, HSL, and CMYK, and
        quickly access your favorite colors with just a few clicks.
      </SimpleCard>
    </>
  );
}

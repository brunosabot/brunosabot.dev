import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolRgbConvertor from "./ToolRgbConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      canonical: "https://brunosabot.dev/tools/rgb-convertor/",
      description:
        "Convert Colors Between RGB and HEX Formats with Ease and Precision",
      title: "Color Converter Tool",
    },
    "/tools/rgb-convertor/",
  );
}

export default function ToolRgbConvertorPage() {
  return (
    <>
      <PageTitle>Color Converter Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Color Converter Tool", "/tools/rgb-convertor"],
        ]}
      />

      <ToolRgbConvertor />

      <SimpleCard>
        <BlockTitle>
          Color Converter Tool: Effortlessly Convert Between RGB, HEX, and More
        </BlockTitle>

        <p>
          The Color Converter Tool is your essential resource for converting
          colors between popular formats such as RGB, HEX, HSL, and CMYK.
          Perfect for designers, developers, and anyone working with digital
          color, this tool enables you to seamlessly translate color codes for
          web design, graphic projects, and application development. Say goodbye
          to manual calculations and ensure color accuracy every time.
        </p>

        <BlockParagraphTitle>Why Use a Color Converter?</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Multi-Format Support:</strong> Instantly convert colors
            between RGB, HEX, HSL, and CMYK, covering all your design and
            development needs.
          </li>
          <li>
            <strong>Real-Time Conversion:</strong> See your color values update
            immediately as you enter or adjust inputs, streamlining your
            workflow.
          </li>
          <li>
            <strong>Precision and Consistency:</strong> Eliminate guesswork and
            ensure your colors match perfectly across different platforms and
            tools.
          </li>
          <li>
            <strong>User-Friendly Design:</strong> The intuitive interface makes
            color conversion accessible for everyone, from professionals to
            hobbyists.
          </li>
          <li>
            <strong>Privacy and Security:</strong> All conversions are handled
            locally in your browser, so your color data stays private.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Web designers converting brand colors between HEX and RGB for
            consistent site styling.
          </li>
          <li>
            Developers ensuring accurate color representation in CSS, SVG, and
            graphic assets.
          </li>
          <li>
            Artists and illustrators managing palettes across different digital
            formats.
          </li>
          <li>
            Anyone needing to quickly check or convert a color value for digital
            projects.
          </li>
        </ul>

        <p>
          With the Color Converter Tool, you can achieve perfect color
          consistency and streamline your creative process—no more manual
          conversions or mismatched hues.
        </p>
      </SimpleCard>
    </>
  );
}

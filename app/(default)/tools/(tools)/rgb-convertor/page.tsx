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
      description:
        "Conquer Color Conversions with Ease: Introducing Your Color Conversion Companion with Favorites",
      title: "Color Converter Tool",
    },
    "/tools/rgb-convertor/",
  );
}

export default function ToolRgbConvertorPage() {
  return (
    <>
      <PageTitle>Color Converter Tool</PageTitle>

      <ToolRgbConvertor />

      <SimpleCard>
        <BlockTitle>
          Conquer Color Conversions with Ease: Introducing Your Color Conversion
          Companion with Favorites
        </BlockTitle>
        <BlockParagraphTitle>
          Streamline your workflow and conquer color conversions with our
          intuitive Color Converter, a versatile tool designed to empower
          designers, developers, and anyone who works with color.
        </BlockParagraphTitle>

        <BlockParagraphTitle>
          Effortless Conversion Across Color Models:
        </BlockParagraphTitle>

        <ul>
          <li>
            Bridge the gap seamlessly: Effortlessly convert between RGB, HEX,
            HSL, and CMYK, choosing the perfect representation for your needs.
          </li>
          <li>
            Real-time results: Witness instant conversions as you adjust values,
            allowing for precise color selection and fine-tuning.
          </li>
          <li>
            No more calculations: Leave the complex conversions behind! Our tool
            handles the calculations behind the scenes, delivering accurate
            results instantly.
          </li>
        </ul>

        <BlockParagraphTitle>Favorites at Your Fingertips:</BlockParagraphTitle>

        <ul>
          <li>
            Never forget your go-to hues: Save your frequently used colors as
            favorites for instant access, eliminating time spent searching.
          </li>
          <li>
            Organize your palette: Create personalized color groups within your
            favorites to maintain order and streamline your workflow.
          </li>
          <li>
            Share your palette: Collaborate with ease by sharing your favorite
            color collections with colleagues or clients.
          </li>
        </ul>

        <BlockParagraphTitle>
          Designed for Simplicity, Built for Everyone:
        </BlockParagraphTitle>

        <ul>
          <li>
            Intuitive interface: Navigate effortlessly with a user-friendly
            design, making color conversion accessible to all skill levels.
          </li>
          <li>
            Accessible online: Use our tool from anywhere, anytime, without the
            need for software installation.
          </li>
          <li>
            Free to use: Uncover the power of color conversion without any cost
            barriers.
          </li>
        </ul>

        <BlockParagraphTitle>
          Embrace the Power of Color Conversion Today:
        </BlockParagraphTitle>

        <p>
          Unleash the efficiency and convenience of our Color Converter!
          Simplify your workflow, organize your color palette, and access your
          favorite shades with ease. Start exploring the world of color with
          confidence and precision today!
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>
            Real-time conversion between RGB, HEX, HSL, and CMYK color models
          </li>
          <li>
            Intuitive interface for effortless color selection and manipulation
          </li>
          <li>
            Favorites system for storing and accessing frequently used colors
          </li>
          <li>User-friendly design suitable for all skill levels</li>
          <li>Free to use and accessible online</li>
        </ul>

        <p>
          Stop juggling calculations and complicated tools. Embrace the ease and
          efficiency of our Color Converter and let your creativity flourish
          with the perfect color palette!
        </p>
      </SimpleCard>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Color Converter Tool", "/tools/rgb-convertor"],
        ]}
      />
    </>
  );
}

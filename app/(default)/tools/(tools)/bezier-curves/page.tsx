import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBezierCurves from "./ToolBezierCurves";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Craft Stunning Animations with This Cubic-Bezier Curve Generator",
      title: "Bezier Curves",
    },
    "/tools/bezier-curves/",
  );
}

export default function ToolBezierCurvesPage() {
  return (
    <>
      <PageTitle>Bezier curves</PageTitle>

      <ToolBezierCurves />

      <SimpleCard>
        <BlockTitle>
          Craft Stunning Animations with This Cubic-Bezier Curve Generator
        </BlockTitle>

        <p>
          Elevate your web design with this intuitive Cubic-Bezier Curve
          Generator, a powerful tool that simplifies the process of creating
          captivating animations. This tool empowers you to effortlessly craft
          smooth and fluid transitions, adding a touch of elegance to your web
          creations.
        </p>

        <BlockParagraphTitle>
          Visualize Your Curves with Ease
        </BlockParagraphTitle>

        <p>
          This tool features a dynamically interactive graph that lets you
          visualize the shape and trajectory of your curves in real-time. This
          visual representation provides a clear understanding of the
          animation&apos;s behavior, ensuring you achieve the desired motion.
        </p>

        <BlockParagraphTitle>
          Preview Your Transitions Before Implementing
        </BlockParagraphTitle>

        <p>
          Immerse yourself in the actual effect of your Cubic-Bezier curves by
          previewing them as CSS transitions. This tool seamlessly integrates
          with CSS, allowing you to instantly see the impact of your curve
          choices on the animation&apos;s appearance.
        </p>

        <BlockParagraphTitle>
          Unlock the Power of Cubic-Bezier Curves
        </BlockParagraphTitle>

        <p>Utilize this Cubic-Bezier Curve Generator to:</p>

        <ul>
          <li>Create smooth and fluid animations</li>
          <li>Add life and dynamism to your web elements</li>
          <li>Enhance user engagement and interaction</li>
          <li>Master the art of CSS transitions</li>
        </ul>

        <BlockParagraphTitle>
          Embrace the Simplicity of Curve Creation
        </BlockParagraphTitle>

        <p>
          This tool simplifies the creation of Cubic-Bezier curves, making it
          accessible to designers of all skill levels. This intuitive interface
          and real-time feedback ensure a seamless and rewarding experience.
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>Interactive curve graph for visual representation</li>
          <li>Integrated CSS transition preview</li>
          <li>Easy-to-use interface for effortless curve creation</li>
          <li>Free to use and accessible online</li>
        </ul>

        <BlockParagraphTitle>
          Transform your web designs into masterpieces with this Cubic-Bezier
          Curve Generator and unleash the power of captivating animations.
        </BlockParagraphTitle>
      </SimpleCard>
    </>
  );
}

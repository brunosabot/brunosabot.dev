import SimpleCard from "../../../../../components/card/SimpleCard";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolPhotoshopShadow from "./ToolPhotoshopShadow";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Bridging Design: Effortlessly Convert Photoshop Shadows to CSS with Visualization",
      title: "Photoshop Shadow",
    },
    "/tools/photoshop-shadow/",
  );
}

export default function ToolPhotoshopShadowPage() {
  return (
    <>
      <PageTitle>Photoshop Shadow</PageTitle>

      <ToolPhotoshopShadow />

      <SimpleCard>
        <BlockTitle>
          Bridging Design: Effortlessly Convert Photoshop Shadows to CSS with
          Visualization
        </BlockTitle>

        <p>
          Streamline your design workflow with our Photoshop Shadow to CSS
          Converter, a powerful tool that seamlessly translates your intricate
          shadow styles into clean, web-ready CSS code. Say goodbye to tedious
          manual conversions and hello to a world of design efficiency!
        </p>

        <BlockParagraphTitle>
          Effortless Conversion, Guaranteed Accuracy:
        </BlockParagraphTitle>

        <ul>
          <li>
            Effortlessly bridge the gap: Simply input your Photoshop shadow
            style, and our tool instantly generates the equivalent CSS code,
            preserving every detail.
          </li>
          <li>
            Pixel-perfect precision: Rest assured, the generated CSS code is an
            exact replica of your original shadow, ensuring seamless integration
            into your web designs.
          </li>
          <li>
            No coding required: Focus on your creative vision, not technical
            complexities. Our tool handles the code conversion, freeing you to
            explore design possibilities.
          </li>
        </ul>

        <BlockParagraphTitle>
          Visualize Your Shadows, Refine Your Designs:
        </BlockParagraphTitle>

        <ul>
          <li>
            See it before you code it: Our intuitive visual guide provides a
            real-time preview of your shadow, allowing you to fine-tune its
            properties and achieve the perfect look.
          </li>
          <li>
            Experiment with confidence: Visualize the impact of different shadow
            adjustments before committing them to code, ensuring design
            decisions are informed and effective.
          </li>
          <li>
            Collaboration made easy: Share the visual representation with your
            team or clients, fostering clear communication and achieving design
            consensus.
          </li>
        </ul>

        <BlockParagraphTitle>
          Empower Your Design Workflow, Regardless of Expertise:
        </BlockParagraphTitle>

        <ul>
          <li>
            Web developers rejoice: Simplify your CSS coding process and save
            valuable time with our automated shadow conversion.
          </li>
          <li>
            Designers, unite: Focus on your creative vision while maintaining
            design consistency across platforms.
          </li>
          <li>
            Beginners, welcome: Our user-friendly interface makes shadow
            conversion accessible to everyone, regardless of technical
            knowledge.
          </li>
        </ul>

        <p>
          Unleash the power of design efficiency with our Photoshop Shadow to
          CSS Converter. Convert, visualize, and refine your shadows with ease,
          and elevate your design workflow to new heights. Start creating
          stunning web experiences today!
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>Effortless conversion of Photoshop shadow styles to CSS code</li>
          <li>Pixel-perfect accuracy for seamless design integration</li>
          <li>
            Real-time visual representation of your shadow for design refinement
          </li>
          <li>
            User-friendly interface for smooth adoption by all skill levels
          </li>
          <li>Free to use and accessible online</li>
        </ul>

        <p>
          Stop struggling with manual conversions and embrace the power of
          visual design. Convert your Photoshop shadows to CSS today and unlock
          a world of creative possibilities!
        </p>
      </SimpleCard>
    </>
  );
}

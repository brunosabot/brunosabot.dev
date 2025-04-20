import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBezierCurves from "./ToolBezierCurves";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Craft Stunning Animations with This Cubic-Bezier Curve Generator",
      title: "Bezier Curves",
      canonical: "https://brunosabot.dev/tools/bezier-curves/",
    },
    "/tools/bezier-curves/",
  );
}

export default function ToolBezierCurvesPage() {
  return (
    <>
      <PageTitle>Bezier curves</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Bezier Curves", "/tools/bezier-curves"],
        ]}
      />

      <ToolBezierCurves />

      <SimpleCard>
        <BlockTitle>
          Cubic-Bezier Curve Generator: Design Smooth CSS Animations
          Effortlessly
        </BlockTitle>

        <p>
          The Bezier Curves Tool empowers designers and developers to craft
          custom cubic-bezier curves for CSS transitions and animations.
          Instantly visualize, tweak, and export your perfect timing
          functions—making your web animations smoother, more engaging, and
          visually stunning. Whether you&apos;re fine-tuning UI micro-interactions or
          building complex animation sequences, this tool helps you achieve
          pixel-perfect motion with ease.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Live Preview:</strong> See your animation curve in action as
            you adjust control points in real time.
          </li>
          <li>
            <strong>Easy CSS Export:</strong> Instantly copy the cubic-bezier()
            function for direct use in your stylesheets.
          </li>
          <li>
            <strong>Intuitive Controls:</strong> Drag-and-drop interface for
            precise curve manipulation, suitable for beginners and experts.
          </li>
          <li>
            <strong>Developer-Friendly:</strong> Perfect for prototyping,
            teaching, or debugging animation timing.
          </li>
          <li>
            <strong>Private & Secure:</strong> All calculations and previews run
            locally in your browser—no data leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Designing custom CSS transitions and keyframe animations for web
            apps and websites.
          </li>
          <li>
            Prototyping and previewing animation timing before implementation.
          </li>
          <li>
            Tuning UI micro-interactions for buttons, modals, sliders, and
            menus.
          </li>
          <li>
            Teaching and learning about cubic-bezier curves and animation
            principles.
          </li>
          <li>
            Optimizing user experience by creating smooth, natural motion
            effects.
          </li>
        </ul>

        <p>
          Elevate your web animations with the Bezier Curves Tool—your go-to
          solution for mastering cubic-bezier timing functions and delivering
          professional-grade motion design.
        </p>
      </SimpleCard>
    </>
  );
}

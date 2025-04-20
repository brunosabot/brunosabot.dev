import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
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
      title: "Photoshop Shadow Converter",
      canonical: "https://brunosabot.dev/tools/photoshop-shadow/",
    },
    "/tools/photoshop-shadow/",
  );
}

export default function ToolPhotoshopShadowPage() {
  return (
    <>
      <PageTitle>Photoshop Shadow Converter</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Photoshop Shadow Converter", "/tools/photoshop-shadow"],
        ]}
      />

      <ToolPhotoshopShadow />

      <SimpleCard>
        <p>
          The Photoshop Shadow Tool empowers designers and developers to create
          stunning, realistic drop shadows for web projects—no Photoshop
          required! Instantly preview, customize, and copy CSS shadow code that
          mimics the look and feel of professional design tools. Perfect for
          buttons, cards, images, and UI elements, all in your browser with zero
          hassle.
        </p>
        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Live Shadow Preview:</strong> See your shadow updates in
            real time as you tweak parameters.
          </li>
          <li>
            <strong>Full Customization:</strong> Adjust offset, blur, spread,
            color, and opacity for pixel-perfect results.
          </li>
          <li>
            <strong>Copy-Ready CSS:</strong> Instantly copy the generated CSS
            code for use in any project.
          </li>
          <li>
            <strong>Designer & Developer Friendly:</strong> Intuitive interface
            for rapid prototyping and handoff.
          </li>
          <li>
            <strong>Privacy First:</strong> All calculations and previews happen
            locally—your designs stay private.
          </li>
        </ul>
        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Designing beautiful buttons, cards, and UI elements with
            professional shadows.
          </li>
          <li>Enhancing web layouts with subtle or dramatic shadow effects.</li>
          <li>Quickly generating and sharing CSS with teammates or clients.</li>
          <li>Learning about shadow properties and CSS best practices.</li>
        </ul>
        <p>
          Elevate your web design instantly—use the Photoshop Shadow Tool to
          create eye-catching, professional shadows with ease.
        </p>
        <p>
          The Photoshop Shadow Tool empowers designers and developers to create
          stunning, realistic drop shadows for web projects—no Photoshop
          required! Instantly preview, customize, and copy CSS shadow code that
          mimics the look and feel of professional design tools. Perfect for
          buttons, cards, images, and UI elements, all in your browser with zero
          hassle.
        </p>
        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Live Shadow Preview:</strong> See your shadow updates in
            real time as you tweak parameters.
          </li>
          <li>
            <strong>Full Customization:</strong> Adjust offset, blur, spread,
            color, and opacity for pixel-perfect results.
          </li>
          <li>
            <strong>Copy-Ready CSS:</strong> Instantly copy the generated CSS
            code for use in any project.
          </li>
          <li>
            <strong>Designer & Developer Friendly:</strong> Intuitive interface
            for rapid prototyping and handoff.
          </li>
          <li>
            <strong>Privacy First:</strong> All calculations and previews happen
            locally—your designs stay private.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Designing beautiful buttons, cards, and UI elements with
            professional shadows.
          </li>
          <li>Enhancing web layouts with subtle or dramatic shadow effects.</li>
          <li>Quickly generating and sharing CSS with teammates or clients.</li>
          <li>Learning about shadow properties and CSS best practices.</li>
        </ul>

        <p>
          Elevate your web design instantly—use the Photoshop Shadow Tool to
          create eye-catching, professional shadows with ease.
        </p>
      </SimpleCard>
    </>
  );
}

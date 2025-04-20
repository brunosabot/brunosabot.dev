import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolSpeedConvertor from "./ToolSpeedConvertor";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Instantly Convert Speed Units Between Kilometers per Hour, Miles per Hour, and More",
      title: "Speed Converter Tool",
      canonical: "https://brunosabot.dev/tools/speed-convertor/",
    },
    "/tools/speed-convertor/",
  );
}

export default function ToolSpeedConvertorPage() {
  return (
    <>
      <PageTitle>Speed Convertor Tool</PageTitle>

      <ToolSpeedConvertor />

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Speed Convertor Tool", "/tools/speed-convertor"],
        ]}
      />

      <SimpleCard>
        <BlockTitle>
          Speed Converter Tool: Instantly Convert and Compare Speed Units
        </BlockTitle>

        <p>
          The Speed Converter Tool is designed for athletes, travelers,
          engineers, and anyone who needs to convert speed or pace units quickly
          and accurately. Effortlessly switch between kilometers per hour
          (km/h), miles per hour (mph), meters per second (m/s), and pace
          formats like minutes per mile or kilometer. This tool eliminates the
          hassle of manual calculations, ensuring you always have the right
          conversion at your fingertips.
        </p>

        <BlockParagraphTitle>Why Use a Speed Converter?</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Versatile Unit Support:</strong> Instantly convert between
            km/h, mph, m/s, min/km, min/mile, and more, covering all common
            speed and pace measurements.
          </li>
          <li>
            <strong>Accurate, Real-Time Results:</strong> See conversions update
            immediately as you enter your values, with no waiting or page
            reloads.
          </li>
          <li>
            <strong>Customizable Output:</strong> Choose your preferred units
            for both input and output, making the tool adaptable to your needs.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> The intuitive design
            ensures anyone can use the tool, from professional athletes to
            casual users.
          </li>
          <li>
            <strong>Privacy and Convenience:</strong> All calculations happen in
            your browser, so your data is never sent to a server.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>
            Runners and cyclists comparing training speeds across different
            units.
          </li>
          <li>
            Travelers converting speed limits between metric and imperial
            systems.
          </li>
          <li>
            Engineers and students needing quick conversions for calculations or
            reports.
          </li>
          <li>
            Anyone tracking progress or setting goals in their preferred speed
            or pace format.
          </li>
        </ul>

        <p>
          With the Speed Converter Tool, you can convert and compare speeds in
          seconds, making it an essential resource for anyone working with speed
          or pace data.
        </p>
      </SimpleCard>
    </>
  );
}

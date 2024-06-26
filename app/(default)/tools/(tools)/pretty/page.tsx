import SimpleCard from "../../../../../components/card/SimpleCard";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolPretty from "./ToolPretty";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Conquer Chaotic JSON: Indent and Beautify with our Effortless Formatter!",
      title: "JSON Pretty Tool",
    },
    "/tools/pretty/",
  );
}

export default function ToolPrettyPage() {
  return (
    <>
      <PageTitle>JSON Pretty Tool</PageTitle>

      <ToolPretty />

      <SimpleCard>
        <BlockTitle>
          Conquer Chaotic JSON: Indent and Beautify with our Effortless
          Formatter!
        </BlockTitle>
        <p>
          Unleash the clarity hidden within your compact JSON strings with our
          powerful JSON Formatter. This intuitive tool effortlessly transforms
          dense, unreadable data into a visually stunning, well-structured
          format, empowering you to review, debug, and understand JSON with
          ease.
        </p>

        <BlockParagraphTitle>
          From Compact Chaos to Readable Harmony:
        </BlockParagraphTitle>

        <ul>
          <li>
            Tame the tangle: Simply paste your compact JSON string, and our tool
            instantly works its magic, presenting you with a beautifully
            indented, human-friendly format.
          </li>
          <li>
            Farewell, frustration: Bid adieu to squinting at illegible code. Our
            formatter unravels intricate data structures, presenting them in a
            clear, organized manner.
          </li>
          <li>
            Effortless understanding: Grasp the meaning behind your JSON
            effortlessly. Indentation and spacing create a hierarchy that makes
            comprehension a breeze.
          </li>
        </ul>

        <BlockParagraphTitle>
          Review and Debug with Power and Precision:
        </BlockParagraphTitle>

        <ul>
          <li>
            Spot errors swiftly: The clear, structured format highlights
            potential issues within your JSON data, aiding in rapid debugging
            and error correction.
          </li>
          <li>
            Simplify complex structures: Nested hierarchies and arrays become
            easily navigable, allowing you to delve deeper into your data with
            confidence.
          </li>
          <li>
            Effortless collaboration: Share formatted JSON with colleagues or
            clients for clear communication and improved understanding.
          </li>
        </ul>

        <BlockParagraphTitle>For Devs and Non-Devs Alike:</BlockParagraphTitle>

        <ul>
          <li>
            Developers, rejoice: Streamline your workflow and enhance your JSON
            debugging capabilities.
          </li>
          <li>
            Content creators, unite: Make your JSON data easily accessible and
            understandable for various audiences.
          </li>
          <li>
            Non-technical users, welcome: Gain valuable insights into JSON data
            without needing expertise.
          </li>
        </ul>

        <p>
          Embrace the power of clarity and unlock the true potential of your
          JSON data. Start using our JSON Formatter today and experience the joy
          of well-structured, easily digestible information!
        </p>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>
            Effortless conversion of compact JSON strings to human-readable
            format
          </li>
          <li>Beautiful indentation and spacing for enhanced clarity</li>
          <li>Ideal for reviewing, debugging, and understanding JSON data</li>
          <li>
            User-friendly interface for smooth adoption by all skill levels
          </li>
          <li>Free to use and accessible online</li>
        </ul>

        <p>
          Don&apos;t let cryptic JSON stand in your way. Format your data today
          and unlock a world of understanding!
        </p>
      </SimpleCard>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["JSON Pretty Tool", "/tools/pretty"],
        ]}
      />
    </>
  );
}

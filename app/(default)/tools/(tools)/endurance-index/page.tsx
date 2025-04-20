import PageTitle from "../../../../../components/typography/PageTitle";
import ToolEnduranceIndex from "./ToolEnduranceIndex";
import ToolReverseEnduranceIndex from "./ToolReverseEnduranceIndex";
import { getMetaData } from "../../../../../lib/metadata";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";
import SimpleCard from "../../../../../components/card/SimpleCard";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Calculate your race endurance index or estimate your race duration with this scientific tool for runners and coaches.",
      title: "Endurance Index Tool",
      canonical: "https://brunosabot.dev/tools/endurance-index/",
    },
    "/tools/endurance-index/",
  );
}

export default function Page() {
  return (
    <>
      <PageTitle>Endurance Index Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Endurance Index Tool", "/tools/endurance-index"],
        ]}
      />

      <ToolEnduranceIndex />
      <ToolReverseEnduranceIndex />

      <SimpleCard>
        <BlockTitle>
          Endurance Index Calculator: Optimize Your Race Strategy
        </BlockTitle>

        <p>
          The Endurance Index Tool is built for runners, endurance athletes, and
          coaches who want to unlock deeper insights into race performance and
          training. Effortlessly calculate your endurance index or estimate race
          duration—using science-backed formulas trusted by professionals.
          Whether you’re training for a marathon, half-marathon, or any
          distance, this tool helps you plan smarter and perform better.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Endurance Index Calculation:</strong> Enter your
            Maximal Aerobic Speed (MAS), race distance, and time to get your
            endurance index in real time.
          </li>
          <li>
            <strong>Reverse Calculation:</strong> Predict your race duration for
            any distance based on your MAS and endurance index—perfect for goal
            setting.
          </li>
          <li>
            <strong>Personalized Insights:</strong> Benchmark your endurance,
            track progress, and tailor your training plan for maximum results.
          </li>
          <li>
            <strong>Coach-Friendly:</strong> Analyze and compare athletes’
            endurance profiles for more precise, individualized coaching.
          </li>
          <li>
            <strong>Privacy First:</strong> All calculations are performed
            locally in your browser—your data never leaves your device.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>Setting realistic race goals and pacing strategies.</li>
          <li>
            Tracking endurance improvements over a season or training cycle.
          </li>
          <li>Comparing performance across different race distances.</li>
          <li>Coaches analyzing athletes’ strengths and weaknesses.</li>
        </ul>

        <p>
          Take your training to the next level—use the Endurance Index Tool to
          make data-driven decisions, optimize performance, and achieve your
          running goals.
        </p>
      </SimpleCard>
    </>
  );
}

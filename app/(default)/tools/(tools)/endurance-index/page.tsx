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
    },
    "/tools/endurance-index/",
  );
}

export default function Page() {
  return (
    <>
      <PageTitle>Endurance Index Tool</PageTitle>

      <ToolEnduranceIndex />
      <ToolReverseEnduranceIndex />

      <SimpleCard>
        <BlockTitle>
          Endurance Index & Race Duration Calculator
        </BlockTitle>
        <BlockParagraphTitle>
          Optimize your training and race strategy with science-backed tools
        </BlockParagraphTitle>
        <p>
          The Endurance Index Tool is designed for runners, endurance athletes, and coaches who want to gain deeper insights into race performance and training effectiveness. Whether you are preparing for a marathon, half-marathon, or any distance event, understanding your endurance index can help tailor your workouts and pacing for optimal results.
        </p>
        <p>
          <strong>What is the Endurance Index?</strong> The Endurance Index is a calculated value that reflects your ability to sustain a high percentage of your maximal aerobic speed (MAS) over a prolonged period. It is especially useful for comparing performances across different race distances and tracking improvements over time.
        </p>
        <ul>
          <li>
            <strong>Calculate Endurance Index:</strong> Enter your MAS, race distance, and race time to compute your endurance index. This value helps you understand how well you maintain speed as race duration increases, and can be used to benchmark your endurance against other athletes or your past performances.
          </li>
          <li>
            <strong>Estimate Race Duration:</strong> Use the Reverse Endurance Index Tool to predict your expected race time for a given distance, based on your MAS and endurance index. This feature is invaluable for setting realistic race goals and planning pacing strategies.
          </li>
        </ul>
        <BlockParagraphTitle>
          Why Use These Tools?
        </BlockParagraphTitle>
        <ul>
          <li>
            <strong>Personalized Training:</strong> Adjust your workouts based on your endurance profile to maximize gains and avoid overtraining.
          </li>
          <li>
            <strong>Scientific Race Planning:</strong> Make data-driven decisions for pacing and goal-setting using your actual physiological metrics.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Monitor your endurance improvements season after season and evaluate the effectiveness of your training plans.
          </li>
          <li>
            <strong>Coach Support:</strong> Coaches can use these tools to analyze athletes&apos; strengths and weaknesses, enabling more precise and individualized coaching.
          </li>
        </ul>
        <BlockParagraphTitle>
          How to Use:
        </BlockParagraphTitle>
        <ol>
          <li>
            Enter your Maximal Aerobic Speed (MAS) in km/h. This is typically determined from a lab test or field test.
          </li>
          <li>
            For the Endurance Index calculator, input your race distance (in meters) and your race time (hours, minutes, seconds). The tool will instantly display your endurance index.
          </li>
          <li>
            For the Reverse Endurance Index tool, enter your MAS, race distance, and a target endurance index. The tool will estimate your expected race duration.
          </li>
        </ol>
        <p>
          These calculators are ideal for athletes of all levels, from beginners seeking to understand their endurance to elite competitors optimizing their race strategy. Try different scenarios to see how changes in MAS or endurance index affect your predicted race times!
        </p>
      </SimpleCard>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Endurance Index Tool", "/tools/endurance-index"],
        ]}
      />
    </>
  );
}

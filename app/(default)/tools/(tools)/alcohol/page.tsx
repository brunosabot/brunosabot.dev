import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolAlcohol from "./ToolAlcohol";
import BlockTitle from "../../../../../components/typography/BlockTitle";
import BlockParagraphTitle from "../../../../../components/typography/BlockParagraphTitle";
import SeoBreadcrumb from "../../../../../components/seo/Breadcrumb";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Calculate the Absolute and Relative Amount of Alcohol in Your Drinks",
      title: "Alcohol Quantities Tool",
      canonical: "https://brunosabot.dev/tools/alcohol/",
    },
    "/tools/alcohol/",
  );
}

export default function ToolAlcoholPage() {
  return (
    <>
      <PageTitle>Alcohol Tool</PageTitle>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Tools", "/tools/"],
          ["Alcohol Quantities Tool", "/tools/alcohol"],
        ]}
      />

      <ToolAlcohol />

      <SimpleCard>
        <BlockTitle>
          Alcohol Content Calculator: Instantly Know What’s in Your Drink
        </BlockTitle>

        <p>
          The Alcohol Content Calculator is your essential companion for making
          informed decisions about your beverages. Effortlessly determine the
          absolute and relative amount of alcohol in any drink—whether you’re a
          mindful drinker, a party planner, or simply curious about what’s in
          your glass. No more guesswork or manual calculations—get precise
          results in seconds, right in your browser.
        </p>

        <BlockParagraphTitle>Key Features</BlockParagraphTitle>
        <ul>
          <li>
            <strong>Instant Calculations:</strong> Enter the volume and alcohol
            percentage to get immediate results—no waiting or page reloads.
          </li>
          <li>
            <strong>Absolute & Relative Values:</strong> See both the total
            grams of pure alcohol and how your drink compares to standard
            servings.
          </li>
          <li>
            <strong>User-Friendly Interface:</strong> Clean, intuitive design
            for anyone—from casual users to health-conscious individuals.
          </li>
          <li>
            <strong>Privacy First:</strong> All calculations are performed
            locally in your browser—your data never leaves your device.
          </li>
          <li>
            <strong>Free & Accessible:</strong> Use the tool anytime, anywhere,
            without registration or fees.
          </li>
        </ul>

        <BlockParagraphTitle>Common Use Cases</BlockParagraphTitle>
        <ul>
          <li>Tracking your alcohol intake for health or fitness goals.</li>
          <li>
            Comparing the strength of different beverages at parties or events.
          </li>
          <li>
            Learning about the relationship between drink volume, alcohol
            percentage, and total intake.
          </li>
          <li>Educating friends or clients about responsible drinking.</li>
        </ul>

        <p>
          Take control of your drinking experience—use the Alcohol Content
          Calculator to make smarter, safer, and more informed choices every
          time you pour a drink.
        </p>
      </SimpleCard>
    </>
  );
}

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
    },
    "/tools/alcohol/",
  );
}

export default function ToolAlcoholPage() {
  return (
    <>
      <PageTitle>Alcohol Tool</PageTitle>

      <ToolAlcohol />

      <SimpleCard>
        <BlockTitle>
          Calculate the Absolute and Relative Amount of Alcohol in Your Drinks
        </BlockTitle>

        <p>
          This handy tool allows you to quickly and easily determine the exact
          amount of alcohol in your beverages, both in absolute terms and
          relative to the total volume of the drink. Whether you&apos;re a
          seasoned drinker or simply seeking to make informed choices about your
          alcohol consumption, this tool is an invaluable resource.
        </p>

        <BlockParagraphTitle>
          Simply input the volume of your beverage and the alcohol percentage,
          and this tool will calculate the exact amount of alcohol contained
          within.
        </BlockParagraphTitle>

        <ul>
          <li>
            <b>Absolute Quantity</b>: Know exactly how many grams of alcohol are
            in your drink.
          </li>
          <li>
            <b>Relative Quantity</b>: Understand how many drinks the beverage
            you had is equivalent to.
          </li>
        </ul>

        <p>
          This tool is easy to use and provides accurate results, making it a
          trusted resource for anyone interested in understanding alcohol
          content.
        </p>

        <BlockParagraphTitle>Use this tool to:</BlockParagraphTitle>

        <ul>
          <li>
            Monitor your alcohol intake and make informed choices about your
            drinks.
          </li>
          <li>Compare alcohol content between different beverages.</li>
          <li>
            Understand the relationship between alcohol volume and overall drink
            volume.
          </li>
          <li>
            Empower yourself with knowledge and make informed decisions about
            your alcohol consumption with this easy-to-use tool.
          </li>
        </ul>

        <BlockParagraphTitle>Key Features:</BlockParagraphTitle>

        <ul>
          <li>Accurate calculations</li>
          <li>Easy-to-use interface</li>
          <li>Comprehensive results</li>
          <li>Free to use</li>
        </ul>

        <BlockParagraphTitle>
          Embark on a journey of informed alcohol consumption with this simple
          yet powerful tool!
        </BlockParagraphTitle>

        <SeoBreadcrumb
          items={[
            ["Home", "/"],
            ["Tools", "/tools/"],
            ["Alcohol Quantities Tool", "/tools/alcohol"],
          ]}
        />
      </SimpleCard>
    </>
  );
}

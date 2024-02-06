import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolAlcohol from "./ToolAlcohol";
import BlockTitle from "../../../../../components/typography/BlockTitle";

export async function generateMetadata() {
  return getMetaData(
    {
      description: "Alcohol quantity calculation tool by Bruno Sabot",
      title: "Alcohol tool",
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
          Alcohol Calculator Tool Helps You Drink Responsibly
        </BlockTitle>

        <p>
          Our alcohol calculator tool helps you determine the amount of pure
          alcohol in a drink and calculates the corresponding dose for human
          consumption. It takes into account the size of the drink and the
          percentage of alcohol by volume to provide an accurate measurement of
          the alcohol content. The tool does not factor in the user&apos;s
          weight, gender, or time elapsed since consuming the drink as it
          provides a general estimate of the alcohol content.
        </p>

        <p>
          This tool can help individuals to monitor and regulate their alcohol
          intake for responsible and safe drinking. By knowing how much alcohol
          you are consuming, you can make informed decisions about your drinking
          habits and make sure that you are not overdoing it.
        </p>

        <p>
          The alcohol calculator tool is easy to use. Simply enter the type of
          drink, the size of the drink, and the percentage of alcohol by volume.
          The tool will then calculate the amount of pure alcohol in the drink
          and the corresponding dose for human consumption.
        </p>

        <p>
          The alcohol calculator tool is a valuable resource for anyone who
          wants to drink responsibly. By using this tool, you can make sure that
          you are not overdoing it and that you are drinking in a safe and
          responsible manner.
        </p>

        <p>
          <b>
            Here are some additional benefits of using the alcohol calculator
            tool:
          </b>
        </p>

        <ul>
          <li>
            It can help you track your alcohol intake and make sure that you are
            not overdoing it.
          </li>
          <li>
            It can help you make informed decisions about your drinking habits.
          </li>
          <li>
            It can help you stay safe and avoid alcohol-related accidents.
          </li>
          <li>It can help you improve your overall health and well-being.</li>
        </ul>
        <p>
          <b>
            If you are looking for a way to drink responsibly, the alcohol
            calculator tool is a great resource. It is easy to use and it can
            help you make informed decisions about your drinking habits.
          </b>
        </p>
      </SimpleCard>
    </>
  );
}

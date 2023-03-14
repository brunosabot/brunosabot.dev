import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolAlcohol from "./ToolAlcohol";

export async function generateMetadata() {
  return getMetaData({
    description: "Alcohol quantity calculation tool by Bruno Sabot",
    title: "Alcohol tool",
  });
}

export default function ToolAlcoholPage() {
  return (
    <>
      <PageTitle>Alcohol Tool</PageTitle>

      <ToolAlcohol />

      <SimpleCard>
        The tool is a beverage alcohol calculator that determines the quantity
        of pure alcohol in a drink and calculates the corresponding dose for
        human consumption. It takes into account the size of the drink and the
        percentage of alcohol by volume to provide an accurate measurement of
        the alcohol content. The tool does not factor in the user&apos;s weight,
        gender, or time elapsed since consuming the drink as it provides a
        general estimate of the alcohol content. This tool helps individuals to
        monitor and regulate their alcohol intake for responsible and safe
        drinking.
      </SimpleCard>
    </>
  );
}

import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolTimestamp from "./ToolTimestamp";

export async function generateMetadata() {
  return getMetaData({
    description: "Timestamp and date converter tool by Bruno Sabot",
    title: "Timestamp converter",
  });
}

export default function ToolShaPage() {
  return (
    <>
      <PageTitle>Timestamp converter</PageTitle>

      <ToolTimestamp />

      <SimpleCard>
        The tool is a timestamp to datetime converter that helps you quickly and
        easily convert between timestamps and human-readable datetime values. It
        is designed to make it easy to switch between the two representations,
        allowing you to choose the best representation for your needs. The tool
        takes a timestamp or datetime value as input and generates the
        equivalent representation in the other format. The conversion is done in
        real-time, making it easy to see the results and make any necessary
        adjustments. Whether you&apos;re a developer, data analyst, or simply
        need to work with timestamps and datetime values, this tool is a
        must-have tool for your toolkit. With its simple and intuitive
        interface, you can easily convert between timestamps and datetime values
        with just a few clicks.
      </SimpleCard>
    </>
  );
}

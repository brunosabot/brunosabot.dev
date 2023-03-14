import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolPretty from "./ToolPretty";

export async function generateMetadata() {
  return getMetaData({
    description: "JSON prettifier tool by Bruno Sabot",
    title: "JSON pretty tool",
  });
}

export default function ToolPrettyPage() {
  return (
    <>
      <PageTitle>JSON pretty Tool</PageTitle>

      <ToolPretty />

      <SimpleCard>
        The tool is a JSON formatter that helps you format compact JSON strings
        into a human-readable format. It is designed to make it easier to read
        and understand JSON data by transforming compact, unreadable JSON
        strings into a visually appealing, indented format. The tool takes a
        compact JSON string as input and generates an indented, easy-to-read
        format as output. The resulting output is organized and easy to scan,
        making it ideal for reviewing and debugging JSON data. Whether
        you&apos;re a developer working with JSON data or simply need to view a
        JSON string in a more readable format, this tool is a must-have tool for
        your toolkit.
      </SimpleCard>
    </>
  );
}

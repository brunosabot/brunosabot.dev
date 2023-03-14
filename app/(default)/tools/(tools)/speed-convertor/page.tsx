import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolSpeedConvertor from "./ToolSpeedConvertor";

export async function generateMetadata() {
  return getMetaData({
    description: "Speed convertor tool by Bruno Sabot",
    title: "Speed convertor tool",
  });
}

export default function ToolSpeedConvertorPage() {
  return (
    <>
      <PageTitle>Speed convertor</PageTitle>

      <ToolSpeedConvertor />

      <SimpleCard>
        The tool is a speed and pace converter that helps you quickly and easily
        convert between speed and pace, and see the comparison to other speeds.
        It is designed to make it easy to switch between different units of
        measurement, allowing you to choose the best representation for your
        needs. The tool takes a speed or pace value as input and generates the
        equivalent representation in the other unit. The conversion is done in
        real-time, making it easy to see the results and make any necessary
        adjustments. Additionally, the tool displays the input speed or pace as
        a percentage compared to other common speeds, making it easy to
        understand the relative pace or speed. Whether you&apos;re a runner,
        cyclist, or simply need to work with different units of speed and pace,
        this tool is a must-have tool for your toolkit. With its simple and
        intuitive interface, you can easily convert between speed and pace, and
        see the comparison to other speeds with just a few clicks.
      </SimpleCard>
    </>
  );
}

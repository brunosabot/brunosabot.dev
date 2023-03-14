import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBase64 from "./ToolBase64";

export async function generateMetadata() {
  return getMetaData({
    description: "Base 64 encode and decode tool by Bruno Sabot",
    title: "Base 64 tool",
  });
}

export default function ToolBase64Page() {
  return (
    <>
      <PageTitle>Base 64 Tool</PageTitle>

      <ToolBase64 />

      <SimpleCard>
        The tool is a base 64 string converter that helps you convert encoded
        base 64 strings to regular strings and vice versa. It allows you to
        encode regular strings into base 64 format for data transfer and storage
        purposes, as well as decode base 64 strings back into their original
        form for use in your applications. The tool is easy to use, simply enter
        the string you wish to convert, and the tool will perform the conversion
        for you. The resulting output is a precise representation of the
        original string in either regular or encoded base 64 format. This tool
        is an essential tool for developers and can save time and effort in
        working with base 64 encoded strings.
      </SimpleCard>
    </>
  );
}

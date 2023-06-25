import React from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import PageTitle from "../../../../../components/typography/PageTitle";
import { getMetaData } from "../../../../../lib/metadata";
import ToolBase64 from "./ToolBase64";
import BlockTitle from "../../../../../components/typography/BlockTitle";

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
        <BlockTitle> Base64 String Converter Tool</BlockTitle>

        <p>
          Our base64 string converter tool helps you convert encoded base64
          strings to regular strings and vice versa. It allows you to encode
          regular strings into base64 format for data transfer and storage
          purposes, as well as decode base64 strings back into their original
          form for use in your applications.
        </p>

        <p>
          The tool is easy to use. Simply enter the string you wish to convert,
          and the tool will perform the conversion for you. The resulting output
          is a precise representation of the original string in either regular
          or encoded base64 format.
        </p>

        <p>
          This tool is an essential tool for developers and can save time and
          effort in working with base64 encoded strings.
        </p>

        <p>
          <b>
            Here are some of the benefits of using the base64 string converter
            tool:
          </b>
        </p>

        <ul>
          <li>
            It can help you encode regular strings into base64 format for data
            transfer and storage purposes.
          </li>
          <li>
            It can help you decode base64 strings back into their original form
            for use in your applications.
          </li>
          <li>It is easy to use.</li>
          <li>It is precise and accurate.</li>
          <li>It is an essential tool for developers.</li>
        </ul>
        <p>
          <b>
            If you are looking for a way to convert between base64 strings and
            regular strings, the base64 string converter tool is a great
            resource. It is easy to use and it can save you time and effort.
          </b>
        </p>
      </SimpleCard>
    </>
  );
}

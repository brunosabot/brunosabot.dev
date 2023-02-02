"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Input from "../../../../../components/form/Input";

const encode = (value: string) =>
  encodeURIComponent(value).replace(/'/g, "%27").replace(/"/g, "%22");
const decode = (value: string) => decodeURIComponent(value.replace(/\+/g, " "));

export default function ToolUrlEncodeDecodePage() {
  const [string, setString] = useState("");

  const onEncodedUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setString(value);
  };

  const onDecodedUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setString(encode(value));
  };

  return (
    <>
      <PageTitle>URL Tool</PageTitle>

      <Label label="Encoded String">
        <Input onChange={onEncodedUrlChange} value={string} />
      </Label>
      <Label label="Decoded String">
        <Input onChange={onDecodedUrlChange} value={decode(string)} />
      </Label>

      <SimpleCard>
        The tool is a URL encoding and decoding tool that helps you quickly and
        easily convert between encoded URL strings and regular strings. It is
        designed to make it easy to switch between the two representations,
        allowing you to choose the best representation for your needs. The tool
        takes an encoded URL string or a regular string as input and generates
        the equivalent representation in the other format. The conversion is
        done in real-time, making it easy to see the results and make any
        necessary adjustments. Whether you&apos;re a developer, data analyst, or
        simply need to work with URL strings, this tool is a must-have tool for
        your toolkit. With its simple and intuitive interface, you can easily
        convert between encoded URL strings and regular strings with just a few
        clicks.
      </SimpleCard>
    </>
  );
}

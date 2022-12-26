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

      <SimpleCard>
        This tool is aimed to help you converting encoded URL strings to regular
        strings and regular strings to encoded URL string
      </SimpleCard>

      <Label label="Encoded String">
        <Input onChange={onEncodedUrlChange} value={string} />
      </Label>
      <Label label="Decoded String">
        <Input onChange={onDecodedUrlChange} value={decode(string)} />
      </Label>
    </>
  );
}

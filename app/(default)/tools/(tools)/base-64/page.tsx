"use client";

import React, { useCallback, useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Textarea from "../../../../../components/form/Textarea";

export default function ToolBase64Page() {
  const [valid, setValid] = useState(true);
  const [string, setString] = useState("");

  const onEncodedStringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    const decoded = Buffer.from(string, "base64").toString();
    const reEncoded = Buffer.from(decoded).toString("base64");

    setString(value);
    setValid(value === reEncoded);
  };

  const onDecodedStringChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setString(Buffer.from(value).toString("base64"));
    setValid(true);
  };

  return (
    <>
      <PageTitle>Base 64 Tool</PageTitle>

      <SimpleCard>
        This tool is aimed to help you converting encoded base 64 strings to
        regular strings and regular strings to encoded base 64 string
      </SimpleCard>

      <Label label="Encoded String">
        <Textarea
          onChange={onEncodedStringChange}
          value={string}
          aria-invalid={valid === false}
        />
      </Label>

      <Label label="Decoded String">
        <Textarea
          onChange={onDecodedStringChange}
          value={Buffer.from(string, "base64").toString()}
        />
      </Label>
    </>
  );
}

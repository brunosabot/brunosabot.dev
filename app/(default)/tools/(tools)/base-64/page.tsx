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

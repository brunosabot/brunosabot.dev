"use client";

import React, { useState } from "react";
import Label from "../../../../../components/form/Label";
import Textarea from "../../../../../components/form/Textarea";

export default function ToolBase64() {
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
      <Label label="Encoded String">
        <Textarea
          onChange={onEncodedStringChange}
          value={string}
          aria-invalid={valid === false}
          rows={5}
        />
      </Label>

      <Label label="Decoded String">
        <Textarea
          onChange={onDecodedStringChange}
          value={Buffer.from(string, "base64").toString()}
          rows={5}
        />
      </Label>
    </>
  );
}

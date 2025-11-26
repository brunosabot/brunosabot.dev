"use client";

import { FileText, VenetianMask } from "lucide-react";
import React, { useState } from "react";

import TextareaWithIcon from "../../../../../../generic/form/TextareaWithIcon";
import classes from "./ToolBase64.module.css";

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
    <div className={classes.Wrapper}>
      <TextareaWithIcon
        aria-invalid={valid === false}
        Icon={VenetianMask}
        label="Encoded String"
        onChange={onEncodedStringChange}
        rows={5}
        value={string}
      />

      <TextareaWithIcon
        Icon={FileText}
        label="Decoded String"
        onChange={onDecodedStringChange}
        rows={5}
        value={Buffer.from(string, "base64").toString()}
      />
    </div>
  );
}

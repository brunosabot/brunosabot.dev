"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Textarea from "../../../../../components/form/Textarea";
import readingTime from "reading-time";

export default function ToolCharsCountPage() {
  const [string, setString] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setString(e.target.value);
  };

  const wordsLength = string
    .replace(/\s+/g, " ")
    .split(" ")
    .filter((e) => e).length;
  const stringLength = string.length;
  const nonWhiteCharsLength = string.replace(/\s+/g, "").length;
  const timeToRead = readingTime(string);

  return (
    <>
      <PageTitle>Chars counter</PageTitle>

      <SimpleCard>This tool count words and chars from a sentence</SimpleCard>

      <Label label="Sentence to count">
        <Textarea onChange={onChange} value={string} />
      </Label>
      <SimpleCard>
        <p>Words: {wordsLength}</p>
        <p>Chars: {stringLength}</p>
        <p>Non white chars: {nonWhiteCharsLength}</p>
        <p>Duration: {timeToRead.text}</p>
      </SimpleCard>
    </>
  );
}

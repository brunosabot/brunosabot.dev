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

      <Label label="Sentence to count">
        <Textarea onChange={onChange} value={string} />
      </Label>
      <SimpleCard>
        <p>Words: {wordsLength}</p>
        <p>Chars: {stringLength}</p>
        <p>Non white chars: {nonWhiteCharsLength}</p>
        <p>Duration: {timeToRead.text}</p>
      </SimpleCard>

      <SimpleCard>
        The tool is a text analyzer that counts the number of words and
        characters in a sentence and provides an estimated reading time. It is
        designed to be a simple and efficient tool for analyzing text, making it
        ideal for writers, journalists, and students. With just one click, you
        can quickly get a word count and character count for your text.
        Additionally, the tool estimates the time it would take to read the text
        out loud, making it easy to gauge the length and complexity of your
        content. Whether you&apos;re writing an article, a short story, or just
        need to get a quick sense of the length of your text, this tool provides
        fast and accurate results. Whether you&apos;re a professional writer or
        a student, this tool is a useful tool to have in your toolkit.
      </SimpleCard>
    </>
  );
}

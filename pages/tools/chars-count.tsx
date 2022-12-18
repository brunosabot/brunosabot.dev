import React, { useCallback, useState } from "react";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import Textarea from "../../components/form/Textarea";
import SimpleCard from "../../components/card/SimpleCard";
import readingTime from "reading-time";

export default function Pretty() {
  const [string, setString] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setString(value);
  }, []);

  const wordsLength = string
    .replace(/\s+/g, " ")
    .split(" ")
    .filter((e) => e).length;
  const stringLength = string.length;
  const nonWhiteCharsLength = string.replace(/\s+/g, "").length;
  const timeToRead = readingTime(string);

  return (
    <DefaultLayout type="short">
      <SEO
        description="JSON prettifier tool by Bruno Sabot"
        title="JSON pretty tool - Bruno Sabot"
      />
      <PageTitle>Chars counter</PageTitle>
      <NavigationBack />
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
    </DefaultLayout>
  );
}

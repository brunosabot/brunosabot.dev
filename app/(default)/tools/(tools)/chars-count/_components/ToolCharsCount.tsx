"use client";

import { FileText } from "lucide-react";
import React, { useState } from "react";
import readingTime from "reading-time";

import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import TextareaWithIcon from "../../../../../../generic/form/TextareaWithIcon";
import classes from "./ToolCharsCount.module.css";

export default function ToolCharsCount() {
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
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <TextareaWithIcon
          Icon={FileText}
          label="Sentence to count"
          onChange={onChange}
          value={string}
        />
      </div>

      <ResultCard>
        <ResultItem label="Words" value={wordsLength} />
        <ResultItem label="Chars" value={stringLength} />
        <ResultItem label="Non white chars" value={nonWhiteCharsLength} />
        <ResultItem label="Duration" value={timeToRead.text} />
      </ResultCard>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Textarea from "../../../../../components/form/Textarea";

export default function ToolPrettyPage() {
  const [valid, setValid] = useState(true);
  const [string, setString] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setString(value);

    try {
      JSON.stringify(JSON.parse(value));
      setValid(true);
    } catch (e) {
      setValid(false);
    }
  };

  return (
    <>
      <PageTitle>JSON pretty Tool</PageTitle>

      <Label label="Unformatted string">
        <Textarea
          onChange={onChange}
          value={string}
          aria-invalid={valid === false}
        />
      </Label>
      <SimpleCard>
        <pre style={{ margin: 0 }}>
          {string && valid
            ? JSON.stringify(JSON.parse(string), null, 2)
            : string}
        </pre>
      </SimpleCard>

      <SimpleCard>
        The tool is a JSON formatter that helps you format compact JSON strings
        into a human-readable format. It is designed to make it easier to read
        and understand JSON data by transforming compact, unreadable JSON
        strings into a visually appealing, indented format. The tool takes a
        compact JSON string as input and generates an indented, easy-to-read
        format as output. The resulting output is organized and easy to scan,
        making it ideal for reviewing and debugging JSON data. Whether
        you&apos;re a developer working with JSON data or simply need to view a
        JSON string in a more readable format, this tool is a must-have tool for
        your toolkit.
      </SimpleCard>
    </>
  );
}

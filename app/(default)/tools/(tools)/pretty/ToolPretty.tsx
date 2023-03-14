"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import Textarea from "../../../../../components/form/Textarea";

export default function ToolPretty() {
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
    </>
  );
}

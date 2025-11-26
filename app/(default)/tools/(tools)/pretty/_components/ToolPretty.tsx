"use client";

import { FileJson } from "lucide-react";
import React, { useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import TextareaWithIcon from "../../../../../../generic/form/TextareaWithIcon";
import classes from "./ToolPretty.module.css";

export default function ToolPretty() {
  const [valid, setValid] = useState(true);
  const [string, setString] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setString(value);

    try {
      JSON.stringify(JSON.parse(value));
      setValid(true);
    } catch {
      setValid(false);
    }
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <TextareaWithIcon
          aria-invalid={valid === false}
          Icon={FileJson}
          label="Unformatted string"
          onChange={onChange}
          value={string}
        />
      </div>

      {string !== "" ? (
        <ResultCard>
          <pre className={classes.Result}>
            {string && valid
              ? JSON.stringify(JSON.parse(string), null, 2)
              : string}
          </pre>
        </ResultCard>
      ) : null}
    </div>
  );
}

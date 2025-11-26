"use client";

import { FileText, Link } from "lucide-react";
import React, { useMemo, useState } from "react";

import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolUrlEncodeDecode.module.css";

const encode = (value: string) =>
  encodeURIComponent(value).replace(/'/g, "%27").replace(/"/g, "%22");
const decode = (value: string) => decodeURIComponent(value.replace(/\+/g, " "));

export default function ToolUrlEncodeDecode() {
  const [string, setString] = useState("");

  const onEncodedUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setString(value);
  };

  const onDecodedUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setString(encode(value));
  };

  const decodedValue = useMemo(() => {
    try {
      return decode(string);
    } catch {
      return "";
    }
  }, [string]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Grid}>
        <InputWithIcon
          Icon={Link}
          label="Encoded String"
          onChange={onEncodedUrlChange}
          value={string}
        />
        <InputWithIcon
          Icon={FileText}
          label="Decoded String"
          onChange={onDecodedUrlChange}
          value={decodedValue}
        />
      </div>
    </div>
  );
}

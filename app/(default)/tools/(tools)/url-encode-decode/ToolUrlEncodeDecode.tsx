"use client";

import React, { useState } from "react";

import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";

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

  return (
    <>
      <Label label="Encoded String">
        <Input onChange={onEncodedUrlChange} value={string} />
      </Label>
      <Label label="Decoded String">
        <Input onChange={onDecodedUrlChange} value={decode(string)} />
      </Label>
    </>
  );
}

"use client";

import { Hash, Settings } from "lucide-react";
import React, { useState } from "react";
import shajs from "sha.js";

import ResultCard from "../../../../../../generic/common/ResultCard";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import SelectWithIcon from "../../../../../../generic/form/SelectWithIcon";
import classes from "./ToolSha.module.css";

enum ShaType {
  SHA = "sha",
  SHA1 = "sha1",
  SHA224 = "sha224",
  SHA256 = "sha256",
  SHA384 = "sha384",
  SHA512 = "sha512",
}

export default function ToolSha() {
  const [type, setType] = useState<ShaType>(ShaType.SHA);
  const [input, setInput] = useState<string>("");

  const onChangeType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value as ShaType);
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <InputWithIcon
          Icon={Hash}
          label="Input"
          onChange={onChangeInput}
          value={input}
        />

        <SelectWithIcon
          Icon={Settings}
          label="Algorithm"
          onChange={onChangeType}
          value={type}
        >
          <option value={ShaType.SHA}>SHA</option>
          <option value={ShaType.SHA1}>SHA-1</option>
          <option value={ShaType.SHA224}>SHA-224</option>
          <option value={ShaType.SHA256}>SHA-256</option>
          <option value={ShaType.SHA384}>SHA-384</option>
          <option value={ShaType.SHA512}>SHA-512</option>
        </SelectWithIcon>
      </div>

      <ResultCard>{shajs(type).update(input).digest("hex")}</ResultCard>
    </div>
  );
}

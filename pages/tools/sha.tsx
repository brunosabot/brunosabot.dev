import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import Option from "../../components/form/Option";
import Select from "../../components/form/Select";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import shajs from "sha.js";
import SimpleCard from "../../components/card/SimpleCard";
import NavigationBack from "../../components/header/NavigationBack";

enum ShaType {
  SHA = "sha",
  SHA1 = "sha1",
  SHA224 = "sha224",
  SHA256 = "sha256",
  SHA384 = "sha384",
  SHA512 = "sha512",
}

export default function Sha() {
  const [type, setType] = useState<ShaType>(ShaType.SHA);
  const [input, setInput] = useState<string>("");

  const onChangeType = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setType(e.target.value as ShaType);
    },
    []
  );

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    []
  );

  return (
    <DefaultLayout type="short">
      <SEO
        description="Sha Generation tool by Bruno Sabot"
        title="Sha tool - Bruno Sabot"
      />
      <PageTitle>Sha Tool</PageTitle>
      <NavigationBack />

      <Label label="Input">
        <Input onChange={onChangeInput} value={input} />
      </Label>

      <Label label="Algorithm">
        <Select onChange={onChangeType} value={type}>
          <Option value={ShaType.SHA}>SHA</Option>
          <Option value={ShaType.SHA1}>SHA-1</Option>
          <Option value={ShaType.SHA224}>SHA-224</Option>
          <Option value={ShaType.SHA256}>SHA-256</Option>
          <Option value={ShaType.SHA384}>SHA-384</Option>
          <Option value={ShaType.SHA512}>SHA-512</Option>
        </Select>
      </Label>

      <SimpleCard>{shajs(type).update(input).digest("hex")}</SimpleCard>
    </DefaultLayout>
  );
}

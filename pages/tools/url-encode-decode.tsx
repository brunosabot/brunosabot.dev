import React, { useCallback, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";

export const encode = (value: string) =>
  encodeURIComponent(value).replace(/'/g, "%27").replace(/"/g, "%22");
export const decode = (value: string) =>
  decodeURIComponent(value.replace(/\+/g, " "));

enum UrlType {
  ENCODED,
  DECODED,
}

export default function UrlEncodeDecode() {
  const [string, setString] = useState("");

  const onChange = useCallback(
    (type: UrlType) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (type === UrlType.ENCODED) {
        setString(value);
      } else {
        setString(encode(value));
      }
    },
    []
  );

  return (
    <DefaultLayout type="short">
      <SEO
        description="URL encode and decode tool by Bruno Sabot"
        title="URL tool - Bruno Sabot"
      />
      <PageTitle>URL Tool</PageTitle>
      <NavigationBack />
      <Label label="Encoded String">
        <Input onChange={onChange(UrlType.ENCODED)} value={string} />
      </Label>
      <Label label="Decoded String">
        <Input onChange={onChange(UrlType.DECODED)} value={decode(string)} />
      </Label>
    </DefaultLayout>
  );
}

import React, { useCallback, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import SimpleCard from "../../components/card/SimpleCard";

enum Base64Type {
  ENCODED,
  DECODED,
}

export default function Base64() {
  const [valid, setValid] = useState(true);
  const [string, setString] = useState("");

  const onChange = useCallback(
    (type: Base64Type) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      if (type === Base64Type.ENCODED) {
        const decoded = Buffer.from(string, "base64").toString();
        const reencoded = Buffer.from(decoded).toString("base64");

        setString(value);
        setValid(value === reencoded);
      } else {
        setString(Buffer.from(value).toString("base64"));
        setValid(true);
      }
    },
    [string]
  );

  return (
    <DefaultLayout type="short">
      <SEO
        description="Base 64 encode and decode tool by Bruno Sabot"
        title="Base 64 tool - Bruno Sabot"
      />
      <PageTitle>Base 64 Tool</PageTitle>
      <NavigationBack />
      <SimpleCard>
        This tool is aimed to help you converting encoded base 64 strings to
        regular strings and regular strings to encoded base 64 string
      </SimpleCard>
      <Label label="Encoded String">
        <Input
          onChange={onChange(Base64Type.ENCODED)}
          value={string}
          aria-invalid={valid === false}
        />
      </Label>
      <Label label="Decoded String">
        <Input
          onChange={onChange(Base64Type.DECODED)}
          value={Buffer.from(string, "base64").toString()}
        />
      </Label>
    </DefaultLayout>
  );
}

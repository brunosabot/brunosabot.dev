import React, { useCallback, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import Textarea from "../../components/form/Textarea";
import SimpleCard from "../../components/card/SimpleCard";

export default function Pretty() {
  const [valid, setValid] = useState(true);
  const [string, setString] = useState("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setString(value);

    try {
      JSON.stringify(JSON.parse(value));
      setValid(true);
    } catch (e) {
      setValid(false);
    }
  }, []);

  return (
    <DefaultLayout type="short">
      <SEO
        description="JSON prettifier tool by Bruno Sabot"
        title="JSON pretty tool - Bruno Sabot"
      />
      <PageTitle>JSON pretty Tool</PageTitle>
      <NavigationBack />
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
    </DefaultLayout>
  );
}

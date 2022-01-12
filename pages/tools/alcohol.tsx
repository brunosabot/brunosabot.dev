import React, { useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import SimpleCard from "../../components/card/SimpleCard";
import Dl from "../../components/display/Dl";
import Dt from "../../components/display/Dt";
import Dd from "../../components/display/Dd";

const ALCOHOL_DENSITY = 0.78924;

export default function Alcohol() {
  const [quantity, setQuantity] = useState(500);
  const [strength, setStrength] = useState(6);

  const pureQuantity =
    Math.round((10 * quantity * strength * ALCOHOL_DENSITY) / 100) / 10;

  return (
    <DefaultLayout type="short">
      <SEO
        description="Alcohol quantity calculation tool by Bruno Sabot"
        title="Alcohol tool - Bruno Sabot"
      />
      <PageTitle>Alcohol Tool</PageTitle>
      <NavigationBack />
      <SimpleCard>
        This tools is aimed to help you calculate the quantity of alcohol inside
        a beverage
      </SimpleCard>
      <Label label="Quantity (ml)">
        <Input
          onChange={(e) => setQuantity(parseFloat(e.target.value))}
          value={`${quantity}`}
        />
      </Label>
      <Label label="Strength (%)">
        <Input
          onChange={(e) => setStrength(parseFloat(e.target.value))}
          value={`${strength}`}
        />
      </Label>
      <SimpleCard>
        <Dl>
          <Dt>Pure alcohol quantity:</Dt>
          <Dd>{pureQuantity} ml</Dd>
        </Dl>

        <Dl>
          <Dt>Relative drink quantity:</Dt>
          <Dd>{Math.round((100 * pureQuantity) / 12.7) / 100}</Dd>
        </Dl>
      </SimpleCard>
    </DefaultLayout>
  );
}

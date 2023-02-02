"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import Input from "../../../../../components/form/Input";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Dd from "../../../../../components/display/Dd";
import PageTitle from "../../../../../components/typography/PageTitle";

const ALCOHOL_DENSITY = 0.78924;

export default function ToolAlcoholPage() {
  const [quantity, setQuantity] = useState(500);
  const [strength, setStrength] = useState(6);

  const pureQuantity =
    Math.round((10 * quantity * strength * ALCOHOL_DENSITY) / 100) / 10;

  return (
    <>
      <PageTitle>Alcohol Tool</PageTitle>

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

      <SimpleCard>
        The tool is a beverage alcohol calculator that determines the quantity
        of pure alcohol in a drink and calculates the corresponding dose for
        human consumption. It takes into account the size of the drink and the
        percentage of alcohol by volume to provide an accurate measurement of
        the alcohol content. The tool does not factor in the user&apos;s weight,
        gender, or time elapsed since consuming the drink as it provides a
        general estimate of the alcohol content. This tool helps individuals to
        monitor and regulate their alcohol intake for responsible and safe
        drinking.
      </SimpleCard>
    </>
  );
}

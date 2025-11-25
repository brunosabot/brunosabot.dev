"use client";

import React, { useState } from "react";

import SimpleCard from "../../../../../components/card/SimpleCard";
import Dd from "../../../../../components/display/Dd";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";

const ALCOHOL_DENSITY = 0.78924;

export default function ToolAlcohol() {
  const [quantity, setQuantity] = useState(500);
  const [strength, setStrength] = useState(6);

  const pureQuantity =
    Math.round((10 * quantity * strength * ALCOHOL_DENSITY) / 100) / 10;

  return (
    <>
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
    </>
  );
}

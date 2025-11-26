"use client";

import { Beaker, Percent } from "lucide-react";
import { useMemo, useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolAlcohol.module.css";

const ALCOHOL_DENSITY = 0.78924;

export default function ToolAlcohol() {
  const [quantity, setQuantity] = useState("500");
  const [strength, setStrength] = useState("6");

  const pureQuantity = useMemo(() => {
    const quantityNumber = parseFloat(quantity);
    const strengthNumber = parseFloat(strength);

    if (isNaN(quantityNumber) || isNaN(strengthNumber)) return 0;

    return (
      Math.round(
        (10 * quantityNumber * strengthNumber * ALCOHOL_DENSITY) / 100,
      ) / 10
    );
  }, [quantity, strength]);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <InputWithIcon
          Icon={Beaker}
          label="Quantity (ml)"
          onChange={(e) => setQuantity(e.target.value)}
          type="number"
          value={quantity}
        />

        <InputWithIcon
          Icon={Percent}
          label="Strength (%)"
          onChange={(e) => setStrength(e.target.value)}
          type="number"
          value={strength}
        />
      </div>

      <ResultCard>
        <ResultItem
          label="Pure alcohol quantity"
          unit="ml"
          value={pureQuantity}
        />

        <ResultItem
          label="Relative drink quantity"
          unit="units"
          value={Math.round((100 * pureQuantity) / 12.7) / 100}
        />
      </ResultCard>
    </div>
  );
}

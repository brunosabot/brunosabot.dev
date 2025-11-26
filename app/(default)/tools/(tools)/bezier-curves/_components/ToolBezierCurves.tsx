"use client";

import { MoveHorizontal, MoveVertical } from "lucide-react";
import React, { useState } from "react";

import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import CubicBezierBlock from "./CubicBezierBlock";
import classes from "./ToolBezierCurves.module.css";

export default function ToolBezierCurves() {
  const [x1, setX1] = useState("0.25");
  const [y1, setY1] = useState("0.1");
  const [x2, setX2] = useState("0.25");
  const [y2, setY2] = useState("1");

  return (
    <>
      <div className={classes.Form}>
        <InputWithIcon
          Icon={MoveHorizontal}
          label="X1"
          onChange={(e) => setX1(e.target.value)}
          value={x1}
        />

        <InputWithIcon
          Icon={MoveVertical}
          label="Y1"
          onChange={(e) => setY1(e.target.value)}
          value={y1}
        />

        <InputWithIcon
          Icon={MoveHorizontal}
          label="X2"
          onChange={(e) => setX2(e.target.value)}
          value={x2}
        />

        <InputWithIcon
          Icon={MoveVertical}
          label="Y2"
          onChange={(e) => setY2(e.target.value)}
          value={y2}
        />
      </div>

      <div className={classes.CubicBezierBlocks}>
        <CubicBezierBlock
          x1={enrich(x1)}
          x2={enrich(x2)}
          y1={enrich(y1)}
          y2={enrich(y2)}
        />
        <CubicBezierBlock x1={0} x2={1} y1={0} y2={1} />
        <CubicBezierBlock x1={0} x2={0.2} y1={0} y2={1} />
        <CubicBezierBlock x1={0.4} x2={0.6} y1={0} y2={1} />
        <CubicBezierBlock x1={0.86} x2={0.07} y1={0} y2={1} />
        <CubicBezierBlock x1={0.22} x2={0.36} y1={0.61} y2={1} />
      </div>
    </>
  );
}

function enrich(value: string) {
  const intValue = parseFloat(value);
  const intNumber = isNaN(intValue) ? 0 : intValue;
  const withMax = Math.max(0, intNumber);
  const withMin = Math.min(1, withMax);

  return withMin;
}

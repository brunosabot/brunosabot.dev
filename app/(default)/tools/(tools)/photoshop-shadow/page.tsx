"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Input from "../../../../../components/form/Input";
import Columns from "../../../../../components/Columns";

const round = (value: number, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};
const getRGBA = (r: number, g: number, b: number, a: number) =>
  `rgba(${r}, ${g}, ${b}, ${a / 100})`;
const psToRadiant = (angle: number) => ((180 - angle) * Math.PI) / 180;
const psToHShadow = (angle: number, distance: number) =>
  Math.cos(angle) * distance;
const psToVShadow = (angle: number, distance: number) =>
  Math.sin(angle) * distance;
const psToCssSpread = (size: number, spread: number) => size * (spread / 100);
const psToBlur = (size: number, cssSpread: number) => size - cssSpread;
const psToInset = (inner: boolean) => (inner ? " inset" : "");
const psToBoxShadowValue = (
  h: number,
  v: number,
  blur: number,
  cssSpread: number,
  color: string,
  inset: string
) => `${h}px ${v}px ${blur}px ${cssSpread}px ${color}${inset}`;

const getBoxShadow = (
  angle: number,
  distance: number,
  size: number,
  spread: number,
  inner: boolean,
  color: string
) => {
  const radiant = psToRadiant(angle);
  const hShadow = round(psToHShadow(radiant, distance), 0);
  const vShadow = round(psToVShadow(radiant, distance), 0);
  const cssSpread = round(psToCssSpread(size, spread), 0);
  const blur = round(psToBlur(size, cssSpread), 0);

  const inset = psToInset(inner);

  return psToBoxShadowValue(hShadow, vShadow, blur, cssSpread, color, inset);
};

export default function ToolPhotoshopShadowPage() {
  const [angle, setAngle] = useState(90);
  const [distance, setDistance] = useState(3);
  const [spread, setSpread] = useState(0);
  const [size, setSize] = useState(7);
  const [inner, setInner] = useState(false);
  const [r, setR] = useState(0);
  const [g, setG] = useState(0);
  const [b, setB] = useState(0);
  const [opacity, setOpacity] = useState(15);

  const color = getRGBA(r, g, b, opacity);
  const boxShadow = getBoxShadow(angle, distance, size, spread, inner, color);

  return (
    <>
      <PageTitle>Photoshop Shadow</PageTitle>

      <SimpleCard>
        This tool is aimed to convert shadows from the photoshop format into CSS
        shadow, with a live visualization
      </SimpleCard>

      <Columns cols={4}>
        <Label label="R">
          <Input onChange={(e) => setR(+e.target.value)} value={`${r}`} />
        </Label>

        <Label label="G">
          <Input onChange={(e) => setG(+e.target.value)} value={`${g}`} />
        </Label>

        <Label label="B">
          <Input onChange={(e) => setB(+e.target.value)} value={`${b}`} />
        </Label>

        <Label label="Opacity">
          <Input
            onChange={(e) => setOpacity(+e.target.value)}
            value={`${opacity}`}
          />
        </Label>

        <Label label="Angle">
          <Input
            onChange={(e) => setAngle(+e.target.value)}
            value={`${angle}`}
          />
        </Label>

        <Label label="Distance">
          <Input
            onChange={(e) => setDistance(+e.target.value)}
            value={`${distance}`}
          />
        </Label>

        <Label label="Spread">
          <Input
            onChange={(e) => setSpread(+e.target.value)}
            value={`${spread}`}
          />
        </Label>

        <Label label="Size">
          <Input onChange={(e) => setSize(+e.target.value)} value={`${size}`} />
        </Label>

        <Label label="Inner Shadow">
          <Input
            type="checkbox"
            onChange={(e) => setInner(e.target.checked)}
            checked={inner}
          />
        </Label>
      </Columns>

      <SimpleCard style={{ boxShadow }}>box-shadow: {boxShadow}</SimpleCard>
    </>
  );
}

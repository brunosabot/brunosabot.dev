"use client";

import {
  Expand,
  Eye,
  Layers,
  Maximize,
  MoveDiagonal,
  Palette,
  RotateCw,
} from "lucide-react";
import { useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import CheckboxWithIcon from "../../../../../../generic/form/CheckboxWithIcon";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolPhotoshopShadow.module.css";

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
  inset: string,
) => `${h}px ${v}px ${blur}px ${cssSpread}px ${color}${inset}`;

const getBoxShadow = (
  angle: number,
  distance: number,
  size: number,
  spread: number,
  inner: boolean,
  color: string,
) => {
  const radiant = psToRadiant(angle);
  const hShadow = round(psToHShadow(radiant, distance), 0);
  const vShadow = round(psToVShadow(radiant, distance), 0);
  const cssSpread = round(psToCssSpread(size, spread), 0);
  const blur = round(psToBlur(size, cssSpread), 0);

  const inset = psToInset(inner);

  return psToBoxShadowValue(hShadow, vShadow, blur, cssSpread, color, inset);
};

export default function ToolPhotoshopShadow() {
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
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <InputWithIcon
          Icon={Palette}
          label="R"
          onChange={(e) => setR(+e.target.value)}
          value={`${r}`}
        />

        <InputWithIcon
          Icon={Palette}
          label="G"
          onChange={(e) => setG(+e.target.value)}
          value={`${g}`}
        />

        <InputWithIcon
          Icon={Palette}
          label="B"
          onChange={(e) => setB(+e.target.value)}
          value={`${b}`}
        />

        <InputWithIcon
          Icon={Eye}
          label="Opacity"
          onChange={(e) => setOpacity(+e.target.value)}
          value={`${opacity}`}
        />

        <InputWithIcon
          Icon={RotateCw}
          label="Angle"
          onChange={(e) => setAngle(+e.target.value)}
          value={`${angle}`}
        />

        <InputWithIcon
          Icon={MoveDiagonal}
          label="Distance"
          onChange={(e) => setDistance(+e.target.value)}
          value={`${distance}`}
        />

        <InputWithIcon
          Icon={Expand}
          label="Spread"
          onChange={(e) => setSpread(+e.target.value)}
          value={`${spread}`}
        />

        <InputWithIcon
          Icon={Maximize}
          label="Size"
          onChange={(e) => setSize(+e.target.value)}
          value={`${size}`}
        />

        <CheckboxWithIcon
          checked={inner}
          Icon={Layers}
          label="Inner Shadow"
          onChange={(e) => setInner(e.target.checked)}
        />
      </div>

      <ResultCard style={{ boxShadow }}>box-shadow: {boxShadow}</ResultCard>
    </div>
  );
}

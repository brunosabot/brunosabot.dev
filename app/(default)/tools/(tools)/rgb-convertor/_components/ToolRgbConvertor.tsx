"use client";

import { Hash, Palette, Percent, RotateCw, Trash } from "lucide-react";
import React, { useCallback, useEffect, useReducer, useState } from "react";

import Table from "../../../../../../components/table/Table";
import Td from "../../../../../../components/table/Td";
import Th from "../../../../../../components/table/Th";
import Tr from "../../../../../../components/table/Tr";
import Button from "../../../../../../generic/common/Button";
import ResultCard from "../../../../../../generic/common/ResultCard";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import {
  CMYKToRGB,
  hexToCMYK,
  hexToHSL,
  hexToName,
  hexToRGB,
  HSLToRGB,
  RGBToCMYK,
  RGBToHex,
  RGBToHSL,
} from "../../../../../../lib/color";
import Block from "./Block";
import classes from "./ToolRgbConvertor.module.css";

interface IAction {
  type:
    | "cmyk-c"
    | "cmyk-k"
    | "cmyk-m"
    | "cmyk-y"
    | "hex"
    | "hsl-h"
    | "hsl-l"
    | "hsl-s"
    | "rgb-b"
    | "rgb-g"
    | "rgb-r";
  value: string;
}

interface IState {
  cmyk: [number, number, number, number];
  hex: string;
  hsl: [number, number, number];
  rgb: [number, number, number];
}

const initialState: IState = {
  cmyk: [0, 0, 0, 0],
  hex: "#000000",
  hsl: [0, 0, 0],
  rgb: [0, 0, 0],
};

type Reducer<S, A> = (prevState: S, action: A) => S;

const reducer: Reducer<IState, IAction> = (state, action) => {
  const numberValue = parseFloat(action.value);
  let hex: IState["hex"];
  let rgb: IState["rgb"];
  let cmyk: IState["cmyk"];
  let hsl: IState["hsl"];

  switch (action.type) {
    case "cmyk-c":
      cmyk = [numberValue, state.cmyk[1], state.cmyk[2], state.cmyk[3]];
      rgb = CMYKToRGB(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    case "cmyk-k":
      cmyk = [state.cmyk[0], state.cmyk[1], state.cmyk[2], numberValue];
      rgb = CMYKToRGB(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    case "cmyk-m":
      cmyk = [state.cmyk[0], state.cmyk[1], numberValue, state.cmyk[3]];
      rgb = CMYKToRGB(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    case "cmyk-y":
      cmyk = [state.cmyk[0], numberValue, state.cmyk[2], state.cmyk[3]];
      rgb = CMYKToRGB(cmyk[0], cmyk[1], cmyk[2], cmyk[3]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    case "hex":
      hex = action.value.indexOf("#") === 0 ? action.value : "#" + action.value;
      rgb = hexToRGB(hex);
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);

      break;

    case "hsl-h":
      hsl = [numberValue, +state.hsl[1], +state.hsl[2]];
      rgb = HSLToRGB(hsl[0], hsl[1], hsl[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      break;

    case "hsl-l":
      hsl = [+state.hsl[0], +state.hsl[1], numberValue];
      rgb = HSLToRGB(hsl[0], hsl[1], hsl[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      break;

    case "hsl-s":
      hsl = [+state.hsl[0], numberValue, +state.hsl[2]];
      rgb = HSLToRGB(hsl[0], hsl[1], hsl[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      break;
    case "rgb-b":
      rgb = [state.rgb[0], state.rgb[1], numberValue];
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;
    case "rgb-g":
      rgb = [state.rgb[0], numberValue, state.rgb[2]];
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    case "rgb-r":
      rgb = [numberValue, state.rgb[1], state.rgb[2]];
      cmyk = RGBToCMYK(rgb[0], rgb[1], rgb[2]);
      hsl = RGBToHSL(rgb[0], rgb[1], rgb[2]);
      hex = RGBToHex(rgb[0], rgb[1], rgb[2]);
      break;

    default:
      throw new Error();
  }

  return {
    cmyk: cmyk,
    hex: hex,
    hsl: hsl,
    rgb: rgb,
  };
};

export default function ToolRgbConvertor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [saves, setLocalSaves] = useState<string[]>([]);

  useEffect(() => {
    setLocalSaves(
      JSON.parse(window.localStorage.getItem("rgbConvertor") || "[]"),
    );
  }, []);

  const setSave = useCallback(() => {
    const storageSaves = JSON.parse(
      window.localStorage.getItem("rgbConvertor") || "[]",
    );
    const updatedSaves = new Set<string>(storageSaves);
    updatedSaves.add(state.hex);
    const newArray = Array.from(updatedSaves);

    setLocalSaves(newArray);
    window.localStorage.setItem("rgbConvertor", JSON.stringify(newArray));
  }, [state.hex]);

  const setUnsave = useCallback((value: string) => {
    const storageSaves = JSON.parse(
      window.localStorage.getItem("rgbConvertor") || "[]",
    );
    const updatedSaves = new Set<string>(storageSaves);
    updatedSaves.delete(value);
    const newArray = Array.from(updatedSaves);

    setLocalSaves(newArray);
    window.localStorage.setItem("rgbConvertor", JSON.stringify(newArray));
  }, []);

  const onChange = useCallback(
    (type: IAction["type"]) => (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type, value: e.target.value }),
    [],
  );

  const colorName = hexToName(state.hex);

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <div className={classes.Grid}>
          <InputWithIcon
            Icon={Palette}
            label="R"
            onChange={onChange("rgb-r")}
            value={`${state.rgb[0]}`}
          />
          <InputWithIcon
            Icon={Palette}
            label="G"
            onChange={onChange("rgb-g")}
            value={`${state.rgb[1]}`}
          />
          <InputWithIcon
            Icon={Palette}
            label="B"
            onChange={onChange("rgb-b")}
            value={`${state.rgb[2]}`}
          />
          <span />
        </div>

        <div className={classes.Grid}>
          <InputWithIcon
            Icon={Percent}
            label="C"
            onChange={onChange("cmyk-c")}
            value={`${state.cmyk[0]}`}
          />
          <InputWithIcon
            Icon={Percent}
            label="M"
            onChange={onChange("cmyk-m")}
            value={`${state.cmyk[1]}`}
          />
          <InputWithIcon
            Icon={Percent}
            label="Y"
            onChange={onChange("cmyk-y")}
            value={`${state.cmyk[2]}`}
          />
          <InputWithIcon
            Icon={Percent}
            label="K"
            onChange={onChange("cmyk-k")}
            value={`${state.cmyk[3]}`}
          />
        </div>

        <div className={classes.Grid}>
          <InputWithIcon
            Icon={RotateCw}
            label="H"
            onChange={onChange("hsl-h")}
            value={`${state.hsl[0]}`}
          />
          <InputWithIcon
            Icon={Percent}
            label="S"
            onChange={onChange("hsl-s")}
            value={`${state.hsl[1]}`}
          />
          <InputWithIcon
            Icon={Percent}
            label="L"
            onChange={onChange("hsl-l")}
            value={`${state.hsl[2]}`}
          />
          <span />
        </div>

        <div className={classes.Grid}>
          <InputWithIcon
            Icon={Hash}
            label="Hex"
            onChange={onChange("hex")}
            value={state.hex}
          />
          <Block color={state.hex} />
          {colorName ? (
            <div className={classes.ColorName}>{colorName}</div>
          ) : (
            <span />
          )}
          <span />
        </div>
      </div>

      <div className={classes.Actions}>
        <Button onClick={setSave} type="button">
          Save the color
        </Button>
      </div>

      {saves.length > 0 ? (
        <ResultCard className={classes.ResultCard}>
          <Table>
            <thead>
              <tr>
                <Th>&nbsp;</Th>
                <Th>Hex</Th>
                <Th>RGB</Th>
                <Th>CMYK</Th>
                <Th>HSL</Th>
                <Th>&nbsp;</Th>
              </tr>
            </thead>
            <tbody>
              {saves.map((h) => {
                const rgb = hexToRGB(h);
                const cmyk = hexToCMYK(h);
                const hsl = hexToHSL(h);

                return (
                  <Tr key={h}>
                    <Td>
                      <Block color={h} />
                    </Td>
                    <Td>{h}</Td>
                    <Td>
                      rgb({rgb[0]}, {rgb[1]}, {rgb[2]})
                    </Td>
                    <Td>
                      cmyk({cmyk[0]}, {cmyk[1]}, {cmyk[2]}, {cmyk[3]})
                    </Td>
                    <Td>
                      hsl({hsl[0]}, {hsl[1]}%, {hsl[2]}%)
                    </Td>
                    <Td>
                      <Button onClick={() => setUnsave(h)}>
                        <Trash size={20} />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </tbody>
          </Table>
        </ResultCard>
      ) : null}
    </div>
  );
}

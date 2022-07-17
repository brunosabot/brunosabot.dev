import React, { useCallback, useEffect, useReducer, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import Columns from "../../components/Columns";
import {
  hexToRGB,
  hexToCMYK,
  RGBToCMYK,
  RGBToHex,
  CMYKToRGB,
  hexToName,
  CMYKToHex,
} from "../../lib/color";
import Block from "../../components/rgb/Block";
import Text from "../../components/rgb/Text";
import Button from "../../components/form/Button";
import Table from "../../components/table/Table";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";
import SvgButton from "../../components/button/SvgButton";
import Th from "../../components/table/Th";
import SimpleCard from "../../components/card/SimpleCard";

interface IState {
  r: string;
  g: string;
  b: string;
  c: string;
  y: string;
  m: string;
  k: string;
  hex: string;
}

interface IAction {
  type: keyof IState;
  value: string;
}

const initialState: IState = {
  r: "0",
  g: "0",
  b: "0",
  c: "0",
  y: "0",
  m: "0",
  k: "0",
  hex: "#000000",
};

type Reducer<S, A> = (prevState: S, action: A) => S;

const reducer: Reducer<IState, IAction> = (state, action) => {
  const numberValue = parseFloat(action.value);
  let hex, r, g, b, c, y, m, k;

  switch (action.type) {
    case "r":
      [c, y, m, k] = RGBToCMYK(numberValue, +state.g, +state.b);
      hex = RGBToHex(numberValue, +state.g, +state.b);
      r = action.value;
      g = state.g;
      b = state.b;
      break;

    case "g":
      [c, y, m, k] = RGBToCMYK(+state.r, numberValue, +state.b);
      hex = RGBToHex(+state.r, numberValue, +state.b);
      r = state.r;
      g = action.value;
      b = state.b;
      break;

    case "b":
      [c, y, m, k] = RGBToCMYK(+state.r, +state.g, numberValue);
      hex = RGBToHex(+state.r, +state.g, numberValue);
      r = state.r;
      g = state.g;
      b = action.value;
      break;

    case "c":
      [r, g, b] = CMYKToRGB(numberValue, +state.y, +state.m, +state.k);
      hex = CMYKToHex(numberValue, +state.y, +state.m, +state.k);
      c = action.value;
      m = state.m;
      y = state.y;
      k = state.k;
      break;

    case "y":
      [r, g, b] = CMYKToRGB(+state.c, numberValue, +state.m, +state.k);
      hex = CMYKToHex(+state.c, numberValue, +state.m, +state.k);
      c = state.c;
      m = action.value;
      y = state.y;
      k = state.k;
      break;

    case "m":
      [r, g, b] = CMYKToRGB(+state.c, +state.y, numberValue, +state.k);
      hex = CMYKToHex(+state.c, +state.y, numberValue, +state.k);
      c = state.c;
      m = state.m;
      y = action.value;
      k = state.k;
      break;

    case "k":
      [r, g, b] = CMYKToRGB(+state.c, +state.y, +state.m, numberValue);
      hex = CMYKToHex(+state.c, +state.y, +state.m, numberValue);
      c = state.c;
      m = state.m;
      y = state.y;
      k = action.value;
      break;

    case "hex":
      hex = action.value.indexOf("#") === 0 ? action.value : "#" + action.value;
      [r, g, b] = hexToRGB(hex);
      [c, y, m, k] = hexToCMYK(hex);

      break;

    default:
      throw new Error();
  }

  return {
    r: `${r}`,
    g: `${g}`,
    b: `${b}`,
    c: `${c}`,
    m: `${m}`,
    y: `${y}`,
    k: `${k}`,
    hex: `${hex}`,
  };
};

export default function RgbConvertor() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [saves, setLocalSaves] = useState<string[]>([]);

  useEffect(() => {
    setLocalSaves(
      JSON.parse(window.localStorage.getItem("rgbConvertor") || "[]")
    );
  }, []);

  const setSave = useCallback(() => {
    const storageSaves = JSON.parse(
      window.localStorage.getItem("rgbConvertor") || "[]"
    );
    const updatedSaves = new Set<string>(storageSaves);
    updatedSaves.add(state.hex);
    const newArray = Array.from(updatedSaves);

    setLocalSaves(newArray);
    window.localStorage.setItem("rgbConvertor", JSON.stringify(newArray));
  }, [state.hex]);

  const setUnsave = useCallback((value: string) => {
    const storageSaves = JSON.parse(
      window.localStorage.getItem("rgbConvertor") || "[]"
    );
    const updatedSaves = new Set<string>(storageSaves);
    updatedSaves.delete(value);
    const newArray = Array.from(updatedSaves);

    setLocalSaves(newArray);
    window.localStorage.setItem("rgbConvertor", JSON.stringify(newArray));
  }, []);

  const onChange = useCallback(
    (type: keyof IState) => (e: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type, value: e.target.value }),
    []
  );

  const colorName = hexToName(state.hex);

  return (
    <DefaultLayout type="short">
      <SEO
        description="Color coverter tool by Bruno Sabot"
        title="Color coverter tool - Bruno Sabot"
      />
      <PageTitle>Color converter Tool</PageTitle>
      <NavigationBack />
      <SimpleCard>
        This tool is aimed to convert colors from and into the RGB, CYMK and hex
        formats back and forward, with a saving system to keep your favorite
        colors
      </SimpleCard>

      <Columns cols={4}>
        <Label label="R">
          <Input onChange={onChange("r")} value={`${state.r}`} />
        </Label>
        <Label label="G">
          <Input onChange={onChange("g")} value={`${state.g}`} />
        </Label>
        <Label label="B">
          <Input onChange={onChange("b")} value={`${state.b}`} />
        </Label>
        <span />
      </Columns>

      <Columns cols={4}>
        <Label label="C">
          <Input onChange={onChange("c")} value={`${state.c}`} />
        </Label>
        <Label label="Y">
          <Input onChange={onChange("y")} value={`${state.y}`} />
        </Label>
        <Label label="M">
          <Input onChange={onChange("m")} value={`${state.m}`} />
        </Label>
        <Label label="K">
          <Input onChange={onChange("k")} value={`${state.k}`} />
        </Label>
      </Columns>

      <Columns cols={4}>
        <Label label="Hex">
          <Input onChange={onChange("hex")} value={state.hex} />
        </Label>
        <Block color={state.hex} />
        {colorName ? <Text>{colorName}</Text> : <span />}
        <span />
      </Columns>

      <div style={{ margin: "32px 0" }}>
        <Button type="button" onClick={setSave}>
          Save the color
        </Button>
      </div>

      {saves.length > 0 ? (
        <Table>
          <thead>
            <tr>
              <Th>&nbsp;</Th>
              <Th>Hex</Th>
              <Th>RGB</Th>
              <Th>CMYK</Th>
              <Th>&nbsp;</Th>
            </tr>
          </thead>
          <tbody>
            {saves.map((h) => {
              const [r, g, b] = hexToRGB(h);
              const [c, m, y, k] = hexToCMYK(h);

              return (
                <Tr key={h}>
                  <Td>
                    <Block color={h} noMargin />
                  </Td>
                  <Td>{h}</Td>
                  <Td>
                    rgb({r}, {g}, {b})
                  </Td>
                  <Td>
                    cmyk({c}, {m}, {y}, {k})
                  </Td>
                  <Td>
                    <SvgButton
                      type="button"
                      onClick={() => setUnsave(h)}
                      d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                    />
                  </Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      ) : null}
    </DefaultLayout>
  );
}

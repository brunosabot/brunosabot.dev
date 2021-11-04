import {
  getRGBA,
  RGBToHex,
  RGBToCMYK,
  hexToRGB,
  hexToCMYK,
  CMYKToRGB,
  CMYKToHex,
  hexToName,
} from "./";

it("Get a proper CSS RGBA string", () => {
  const string = getRGBA(0, 0, 0, 50);
  expect(string).toBe("rgba(0, 0, 0, 0.5)");
});

it("Get hexadecimal value from RGB", () => {
  const hex = RGBToHex(255, 255, 255);
  expect(hex).toBe("FFFFFF");
});

it("Get hexadecimal value from 0 RGB", () => {
  const hex = RGBToHex(0, 0, 0);
  expect(hex).toBe("000000");
});

it("Get hexadecimal value from null RGB", () => {
  const hex = RGBToHex(null, null, null);
  expect(hex).toBe("000000");
});

it("Get CMYK value from RGB", () => {
  const cmyk = RGBToCMYK(200, 100, 0);
  expect(cmyk).toEqual([0, 0.5, 1, 0.215686275]);

  const cmykBlack = RGBToCMYK(0, 0, 0);
  expect(cmykBlack).toEqual([0, 0, 0, 1]);
});

it("Get RGB value from hex", () => {
  const rgb = hexToRGB("7f7f7f");
  expect(rgb).toEqual([127, 127, 127]);
  const rgbHash = hexToRGB("#7f7f7f");
  expect(rgbHash).toEqual([127, 127, 127]);
});

it("Get CMYK value from hex", () => {
  const cmyk = hexToCMYK("c86400");
  expect(cmyk).toEqual([0, 0.5, 1, 0.215686275]);
});

it("Get RGB value from CMYK", () => {
  const rgb = CMYKToRGB(0, 0.5, 1, 0.215686275);
  expect(rgb).toEqual([200, 100, 0]);
});

it("Get hex value from CMYK", () => {
  const cmyk = CMYKToHex(0, 0.5, 1, 0.215686275);
  expect(cmyk).toBe("C86400");
});

it("Get name from hex", () => {
  const name = hexToName("f0f8ff");
  expect(name).toBe("AliceBlue");

  const nameUndefined = hexToName("123456");
  expect(nameUndefined).toBe(false);
});

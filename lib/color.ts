export const round = (value: number, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};

type CMYK = [number, number, number, number];
type HEX = string;
type HSL = [number, number, number];
type RGB = [number, number, number];

const intToHex = (h: number) => {
  if (h === null) {
    return "00";
  }

  if (h === 0 || Number.isNaN(h)) {
    return "00";
  }
  h = Math.max(0, h);
  h = Math.min(h, 255);
  h = round(h);

  return (
    "0123456789ABCDEF".charAt((h - (h % 16)) / 16) +
    "0123456789ABCDEF".charAt(h % 16)
  );
};
const hexToR = (h: string) => parseInt(h.substring(0, 2) || "0", 16);
const hexToG = (h: string) => parseInt(h.substring(2, 4) || "0", 16);
const hexToB = (h: string) => parseInt(h.substring(4, 6) || "0", 16);

export const getRGBA = (r: number, g: number, b: number, a: number): string =>
  `rgba(${r}, ${g}, ${b}, ${a / 100})`;

export const RGBToHex = (r: number, g: number, b: number): HEX =>
  "#" + intToHex(r) + intToHex(g) + intToHex(b);

export const RGBToCMYK = (r: number, g: number, b: number): CMYK => {
  let c = 0;
  let m = 0;
  let y = 0;
  let k = 0;

  if (r === 0 && g === 0 && b === 0) {
    return [0, 0, 0, 1];
  }

  c = 1 - r / 255;
  m = 1 - g / 255;
  y = 1 - b / 255;

  const min = Math.min(c, Math.min(m, y));

  c = (c - min) / (1 - min);
  m = (m - min) / (1 - min);
  y = (y - min) / (1 - min);
  k = min;

  c = round(c, 4);
  m = round(m, 4);
  y = round(y, 4);
  k = round(k, 4);

  return [c, m, y, k];
};
export const RGBToHSL = (r: number, g: number, b: number): HSL => {
  r /= 255;
  g /= 255;
  b /= 255;

  const cmax = Math.max(r, g, b);
  const cmin = Math.min(r, g, b);
  const delta = cmax - cmin;
  let h = 0,
    l = 0,
    s = 0;

  if (delta == 0) h = 0;
  else if (cmax == r) h = ((g - b) / delta) % 6;
  else if (cmax == g) h = (b - r) / delta + 2;
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  if (h < 0) h += 360;

  l = (cmax + cmin) / 2;

  s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  s = round(s * 100, 4);
  l = round(l * 100, 4);

  return [h, s, l];
};

export const hexToRGB = (hex: string): RGB => {
  const h = hex.charAt(0) === "#" ? hex.substring(1, 7) : hex;

  return [hexToR(h), hexToG(h), hexToB(h)];
};
export const hexToCMYK = (hex: string): CMYK => {
  const tab = hexToRGB(hex);
  return RGBToCMYK(tab[0], tab[1], tab[2]);
};
export const hexToHSL = (hex: string): HSL => {
  const tab = hexToRGB(hex);
  return RGBToHSL(tab[0], tab[1], tab[2]);
};

export const CMYKToRGB = (c: number, m: number, y: number, k: number): RGB => {
  const colors = 255 * (1 - k);

  const r = round(colors * (1 - c));
  const g = round(colors * (1 - m));
  const b = round(colors * (1 - y));

  return [r, g, b];
};
export const CMYKToHex = (c: number, m: number, y: number, k: number): HEX => {
  const tab = CMYKToRGB(c, m, y, k);
  return RGBToHex(tab[0], tab[1], tab[2]);
};
export const CMYKToHSL = (c: number, m: number, y: number, k: number): HSL => {
  const tab = CMYKToRGB(c, m, y, k);
  return RGBToHSL(tab[0], tab[1], tab[2]);
};

export const HSLToRGB = (h: number, s: number, l: number): RGB => {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let b = 0;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  let g = 0;
  const m = l - c / 2;
  let r = 0;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));

  if (0 <= h && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (60 <= h && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (120 <= h && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (180 <= h && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (240 <= h && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (300 <= h && h < 360) {
    r = c;
    g = 0;
    b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b];
};
export const HSLToCMYK = (h: number, s: number, l: number): CMYK => {
  const tab = HSLToRGB(h, s, l);
  return RGBToCMYK(tab[0], tab[1], tab[2]);
};
export const HSLToHex = (h: number, s: number, l: number): HEX => {
  const tab = HSLToRGB(h, s, l);
  return RGBToHex(tab[0], tab[1], tab[2]);
};

export const hexToName = (hex: string): string => {
  const nameList: Record<string, string> = {
    "00bfff": "DeepSkyBlue",
    "00ced1": "DarkTurquoise",
    "00fa9a": "MediumSpringGreen",
    "00ff00": "Lime",
    "00ff7f": "SpringGreen",
    "00ffff": "Cyan",
    "0000cd": "MediumBlue",
    "0000ff": "Blue",
    "000000": "Black",
    "2f4f4f": "DarkSlateGrey",
    "3cb371": "MediumSeaGreen",
    "4b0082": "Indigo ",
    "5f9ea0": "CadetBlue",
    "6a5acd": "SlateBlue",
    "6b8e23": "OliveDrab",
    "7b68ee": "MediumSlateBlue",
    "7cfc00": "LawnGreen",
    "7fff00": "Chartreuse",
    "7fffd4": "Aquamarine",
    "00008b": "DarkBlue",
    "008b8b": "DarkCyan",
    "8a2be2": "BlueViolet",
    "8b0000": "DarkRed",
    "8b008b": "DarkMagenta",
    "8b4513": "SaddleBrown",
    "8fbc8f": "DarkSeaGreen",
    "9acd32": "YellowGreen",
    "20b2aa": "LightSeaGreen",
    "32cd32": "LimeGreen",
    "40e0d0": "Turquoise",
    "48d1cc": "MediumTurquoise",
    "66cdaa": "MediumAquaMarine",
    "000080": "Navy",
    "87ceeb": "SkyBlue",
    "87cefa": "LightSkyBlue",
    "90ee90": "LightGreen",
    "98fb98": "PaleGreen",
    "228b22": "ForestGreen",
    "483d8b": "DarkSlateBlue",
    "556b2f": "DarkOliveGreen",
    "4682b4": "SteelBlue",
    "006400": "DarkGreen",
    "6495ed": "CornflowerBlue",
    "008000": "Green",
    "008080": "Teal",
    "9370d8": "MediumPurple",
    "9400d3": "DarkViolet",
    "9932cc": "DarkOrchid",
    "4169e1": "RoyalBlue",
    191970: "MidnightBlue",
    696969: "DimGrey",
    708090: "SlateGrey",
    778899: "LightSlateGrey",
    800000: "Maroon",
    800080: "Purple",
    808000: "Olive",
    808080: "Grey",
    "2e8b57": "SeaGreen",
    "1e90ff": "DodgerBlue",
    a9a9a9: "DarkGrey",
    a52a2a: "Brown",
    a0522d: "Sienna",
    add8e6: "LightBlue",
    adff2f: "GreenYellow",
    afeeee: "PaleTurquoise",
    b0c4de: "LightSteelBlue",
    b0e0e6: "PowderBlue",
    b8860b: "DarkGoldenRod",
    b22222: "FireBrick",
    ba55d3: "MediumOrchid",
    bc8f8f: "RosyBrown",
    bdb76b: "DarkKhaki",
    c0c0c0: "Silver",
    c71585: "MediumVioletRed",
    cd5c5c: "IndianRed ",
    cd853f: "Peru",
    d2b48c: "Tan",
    d3d3d3: "LightGrey",
    d8bfd8: "Thistle",
    d2691e: "Chocolate",
    d87093: "PaleVioletRed",
    da70d6: "Orchid",
    daa520: "GoldenRod",
    dc143c: "Crimson",
    dcdcdc: "Gainsboro",
    dda0dd: "Plum",
    deb887: "BurlyWood",
    e0ffff: "LightCyan",
    e6e6fa: "Lavender",
    e9967a: "DarkSalmon",
    ee82ee: "Violet",
    eee8aa: "PaleGoldenRod",
    f0e68c: "Khaki",
    f0f8ff: "AliceBlue",
    f0fff0: "HoneyDew",
    f0ffff: "Azure",
    f4a460: "SandyBrown",
    f5deb3: "Wheat",
    f5f5dc: "Beige",
    f5f5f5: "WhiteSmoke",
    f5fffa: "MintCream",
    f8f8ff: "GhostWhite",
    f08080: "LightCoral",
    fa8072: "Salmon",
    faebd7: "AntiqueWhite",
    faf0e6: "Linen",
    fafad2: "LightGoldenRodYellow",
    fdf5e6: "OldLace",
    ff00ff: "Magenta",
    ff0000: "Red",
    ff7f50: "Coral",
    ff8c00: "Darkorange",
    ff69b4: "HotPink",
    ff1493: "DeepPink",
    ff4500: "OrangeRed",
    ff6347: "Tomato",
    ffa07a: "LightSalmon",
    ffa500: "Orange",
    ffb6c1: "LightPink",
    ffc0cb: "Pink",
    ffd700: "Gold",
    ffdab9: "PeachPuff",
    ffdead: "NavajoWhite",
    ffe4b5: "Moccasin",
    ffe4c4: "Bisque",
    ffe4e1: "MistyRose",
    ffebcd: "BlanchedAlmond",
    ffefd5: "PapayaWhip",
    fff0f5: "LavenderBlush",
    fff5ee: "SeaShell",
    fff8dc: "Cornsilk",
    fffacd: "LemonChiffon",
    fffaf0: "FloralWhite",
    fffafa: "Snow",
    ffff00: "Yellow",
    ffffe0: "LightYellow",
    fffff0: "Ivory",
    ffffff: "White",
  };

  if (nameList[hex.substring(1, 7)]) {
    return nameList[hex.substring(1, 7)];
  }

  return "";
};

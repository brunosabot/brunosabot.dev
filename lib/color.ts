export const round = (value: number, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};

type RGB = [number, number, number];
type CMYK = [number, number, number, number];
type HSL = [number, number, number];
type HEX = string;

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

  let cmin = Math.min(r, g, b),
    cmax = Math.max(r, g, b),
    delta = cmax - cmin,
    h = 0,
    s = 0,
    l = 0;

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

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;

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
    f0f8ff: "AliceBlue",
    faebd7: "AntiqueWhite",
    "7fffd4": "Aquamarine",
    f0ffff: "Azure",
    f5f5dc: "Beige",
    ffe4c4: "Bisque",
    "000000": "Black",
    ffebcd: "BlanchedAlmond",
    "0000ff": "Blue",
    "8a2be2": "BlueViolet",
    a52a2a: "Brown",
    deb887: "BurlyWood",
    "5f9ea0": "CadetBlue",
    "7fff00": "Chartreuse",
    d2691e: "Chocolate",
    ff7f50: "Coral",
    "6495ed": "CornflowerBlue",
    fff8dc: "Cornsilk",
    dc143c: "Crimson",
    "00ffff": "Cyan",
    "00008b": "DarkBlue",
    "008b8b": "DarkCyan",
    b8860b: "DarkGoldenRod",
    a9a9a9: "DarkGrey",
    "006400": "DarkGreen",
    bdb76b: "DarkKhaki",
    "8b008b": "DarkMagenta",
    "556b2f": "DarkOliveGreen",
    ff8c00: "Darkorange",
    "9932cc": "DarkOrchid",
    "8b0000": "DarkRed",
    e9967a: "DarkSalmon",
    "8fbc8f": "DarkSeaGreen",
    "483d8b": "DarkSlateBlue",
    "2f4f4f": "DarkSlateGrey",
    "00ced1": "DarkTurquoise",
    "9400d3": "DarkViolet",
    ff1493: "DeepPink",
    "00bfff": "DeepSkyBlue",
    696969: "DimGrey",
    "1e90ff": "DodgerBlue",
    b22222: "FireBrick",
    fffaf0: "FloralWhite",
    "228b22": "ForestGreen",
    dcdcdc: "Gainsboro",
    f8f8ff: "GhostWhite",
    ffd700: "Gold",
    daa520: "GoldenRod",
    808080: "Grey",
    "008000": "Green",
    adff2f: "GreenYellow",
    f0fff0: "HoneyDew",
    ff69b4: "HotPink",
    cd5c5c: "IndianRed ",
    "4b0082": "Indigo ",
    fffff0: "Ivory",
    f0e68c: "Khaki",
    e6e6fa: "Lavender",
    fff0f5: "LavenderBlush",
    "7cfc00": "LawnGreen",
    fffacd: "LemonChiffon",
    add8e6: "LightBlue",
    f08080: "LightCoral",
    e0ffff: "LightCyan",
    fafad2: "LightGoldenRodYellow",
    d3d3d3: "LightGrey",
    "90ee90": "LightGreen",
    ffb6c1: "LightPink",
    ffa07a: "LightSalmon",
    "20b2aa": "LightSeaGreen",
    "87cefa": "LightSkyBlue",
    778899: "LightSlateGrey",
    b0c4de: "LightSteelBlue",
    ffffe0: "LightYellow",
    "00ff00": "Lime",
    "32cd32": "LimeGreen",
    faf0e6: "Linen",
    ff00ff: "Magenta",
    800000: "Maroon",
    "66cdaa": "MediumAquaMarine",
    "0000cd": "MediumBlue",
    ba55d3: "MediumOrchid",
    "9370d8": "MediumPurple",
    "3cb371": "MediumSeaGreen",
    "7b68ee": "MediumSlateBlue",
    "00fa9a": "MediumSpringGreen",
    "48d1cc": "MediumTurquoise",
    c71585: "MediumVioletRed",
    191970: "MidnightBlue",
    f5fffa: "MintCream",
    ffe4e1: "MistyRose",
    ffe4b5: "Moccasin",
    ffdead: "NavajoWhite",
    "000080": "Navy",
    fdf5e6: "OldLace",
    808000: "Olive",
    "6b8e23": "OliveDrab",
    ffa500: "Orange",
    ff4500: "OrangeRed",
    da70d6: "Orchid",
    eee8aa: "PaleGoldenRod",
    "98fb98": "PaleGreen",
    afeeee: "PaleTurquoise",
    d87093: "PaleVioletRed",
    ffefd5: "PapayaWhip",
    ffdab9: "PeachPuff",
    cd853f: "Peru",
    ffc0cb: "Pink",
    dda0dd: "Plum",
    b0e0e6: "PowderBlue",
    800080: "Purple",
    ff0000: "Red",
    bc8f8f: "RosyBrown",
    "4169e1": "RoyalBlue",
    "8b4513": "SaddleBrown",
    fa8072: "Salmon",
    f4a460: "SandyBrown",
    "2e8b57": "SeaGreen",
    fff5ee: "SeaShell",
    a0522d: "Sienna",
    c0c0c0: "Silver",
    "87ceeb": "SkyBlue",
    "6a5acd": "SlateBlue",
    708090: "SlateGrey",
    fffafa: "Snow",
    "00ff7f": "SpringGreen",
    "4682b4": "SteelBlue",
    d2b48c: "Tan",
    "008080": "Teal",
    d8bfd8: "Thistle",
    ff6347: "Tomato",
    "40e0d0": "Turquoise",
    ee82ee: "Violet",
    f5deb3: "Wheat",
    ffffff: "White",
    f5f5f5: "WhiteSmoke",
    ffff00: "Yellow",
    "9acd32": "YellowGreen",
  };

  if (nameList[hex.substring(1, 7)]) {
    return nameList[hex.substring(1, 7)];
  }

  return "";
};

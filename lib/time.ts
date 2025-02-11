const unitsInSec = [
  60,
  3600,
  86400,
  86400 * 7,
  86400 * 30,
  86400 * 365,
  Infinity,
];

const unitStrings = [
  "second",
  "minute",
  "hour",
  "day",
  "week",
  "month",
  "year",
] as const;

const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

export const getRelativeTime = (date: string) => {
  const secondsDiff = (new Date(date).getTime() - Date.now()) / 1000;
  const index = unitsInSec.findIndex((s) => s > Math.abs(secondsDiff));
  const divisor = index ? unitsInSec[index - 1] : 1;

  return rtf.format(Math.round(secondsDiff / divisor), unitStrings[index]);
};

export const getDate = (date: string) => {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(new Date(date));
};

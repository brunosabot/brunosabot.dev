type MonthDay = {
  month: number;
  day: number;
};

enum Season {
  SPRING = "spring",
  SUMMER = "summer",
  FALL = "fall",
  WINTER = "winter",
}

const monthDay = (month: number, day: number) => ({ month, day });

const SPRING_EQUINOX = monthDay(2, 20);
const SUMMER_SOLSTICE = monthDay(5, 21);
const AUTUMN_EQUINOX = monthDay(8, 23);
const WINTER_SOLSTICE = monthDay(11, 21);
const END_YEAR = monthDay(11, 32);
const NEW_YEAR = monthDay(0, 1);

const seasons: Record<Season, any> = {
  spring: (d: MonthDay) => between(d, SPRING_EQUINOX, SUMMER_SOLSTICE),
  summer: (d: MonthDay) => between(d, SUMMER_SOLSTICE, AUTUMN_EQUINOX),
  fall: (d: MonthDay) => between(d, AUTUMN_EQUINOX, WINTER_SOLSTICE),
  winter: (d: MonthDay) =>
    between(d, WINTER_SOLSTICE, END_YEAR) ||
    between(d, NEW_YEAR, SPRING_EQUINOX),
};

const toMonthDay = (date: Date) => monthDay(date.getMonth(), date.getDate());

const before = (monthDayToCheck: MonthDay, monthDayRef: MonthDay) => {
  if (monthDayToCheck.month < monthDayRef.month) return true;
  if (monthDayToCheck.month > monthDayRef.month) return false;

  return monthDayToCheck.day < monthDayRef.day;
};

const after = (monthDayToCheck: MonthDay, monthDayRef: MonthDay) => {
  if (monthDayToCheck.month > monthDayRef.month) return true;
  if (monthDayToCheck.month < monthDayRef.month) return false;

  return monthDayToCheck.day >= monthDayRef.day;
};

const between = (
  monthDayX: MonthDay,
  monthDayLow: MonthDay,
  monthDayHigh: MonthDay,
) => after(monthDayX, monthDayLow) && before(monthDayX, monthDayHigh);

export const season = (date: Date) => {
  const monthDay = toMonthDay(date);
  const seasonKeys = Object.keys(seasons) as Array<Season>;
  const currentSeason = seasonKeys.find((seasonName: Season) =>
    seasons[seasonName](monthDay),
  );

  return currentSeason ?? "spring";
};

"use client";

import { Calendar, Clock, Hash } from "lucide-react";
import React, { useEffect, useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolTimestamp.module.css";

export default function ToolTimestamp() {
  const [timestamp, setTimestamp] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [day, setDay] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [milliseconds, setMilliseconds] = useState<string>("");

  const onTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const { day, hours, milliseconds, minutes, month, seconds, year } =
      getDate(value);

    setYear(`${year}`);
    setMonth(`${month}`);
    setDay(`${day}`);
    setHours(`${hours}`);
    setMinutes(`${minutes}`);
    setSeconds(`${seconds}`);
    setMilliseconds(`${milliseconds}`);
    setTimestamp(value);
  };

  useEffect(() => {
    const timestamp = Date.now();
    const { day, hours, milliseconds, minutes, month, seconds, year } = getDate(
      `${timestamp}`,
    );

    setYear(`${year}`);
    setMonth(`${month}`);
    setDay(`${day}`);
    setHours(`${hours}`);
    setMinutes(`${minutes}`);
    setSeconds(`${seconds}`);
    setMilliseconds(`${milliseconds}`);
    setTimestamp(`${timestamp}`);
  }, []);

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setYear(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCFullYear(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMonth(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCMonth(+value - 1);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setDay(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCDate(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setHours(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCHours(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMinutes(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCMinutes(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setSeconds(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCSeconds(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  const onMillisecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setMilliseconds(value);
    if (value !== "") {
      const d = timestampToDate(timestamp);
      d.setUTCMilliseconds(+value);
      setTimestamp(`${d.getTime()}`);
    }
  };

  return (
    <div className={classes.Wrapper}>
      <div className={classes.MainInput}>
        <InputWithIcon
          Icon={Hash}
          label="Timestamp"
          onChange={onTimestampChange}
          type="text"
          value={`${timestamp}`}
        />
      </div>

      <div className={classes.Grid}>
        <InputWithIcon
          Icon={Calendar}
          label="Year"
          onChange={onYearChange}
          type="text"
          value={`${year}`}
        />

        <InputWithIcon
          Icon={Calendar}
          label="Month"
          onChange={onMonthChange}
          type="text"
          value={`${month}`}
        />

        <InputWithIcon
          Icon={Calendar}
          label="Day"
          onChange={onDayChange}
          type="text"
          value={`${day}`}
        />

        <InputWithIcon
          Icon={Clock}
          label="Hours"
          onChange={onHoursChange}
          type="text"
          value={`${hours}`}
        />

        <InputWithIcon
          Icon={Clock}
          label="Minutes"
          onChange={onMinutesChange}
          type="text"
          value={`${minutes}`}
        />

        <InputWithIcon
          Icon={Clock}
          label="Seconds"
          onChange={onSecondsChange}
          type="text"
          value={`${seconds}`}
        />

        <InputWithIcon
          Icon={Clock}
          label="Milliseconds"
          onChange={onMillisecondsChange}
          type="text"
          value={`${milliseconds}`}
        />
      </div>

      <div className={classes.Results}>
        <ResultCard>
          <ResultItem
            label="Corresponding ISO Date"
            value={getIsoDate(timestamp)}
          />
        </ResultCard>
        <ResultCard>
          <ResultItem
            label="Corresponding UTC Date"
            value={getUtcDate(timestamp)}
          />
        </ResultCard>
        <ResultCard>
          <ResultItem
            label="Corresponding Local Date"
            value={toLocaleString(timestamp)}
          />
        </ResultCard>
      </div>
    </div>
  );
}

function getDate(timestamp: string) {
  const date = timestampToDate(timestamp);

  return {
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    milliseconds: date.getUTCMilliseconds(),
    minutes: date.getUTCMinutes(),
    month: date.getUTCMonth() + 1,
    seconds: date.getUTCSeconds(),
    year: date.getUTCFullYear(),
  };
}

function getIsoDate(timestamp: string) {
  return timestampToDate(timestamp).toISOString();
}

function getUtcDate(timestamp: string) {
  return timestampToDate(timestamp).toUTCString();
}

function timestampToDate(timestamp: string) {
  if (timestamp === "-") {
    return new Date();
  }

  return new Date(+timestamp);
}

function toLocaleString(timestamp: string) {
  return timestampToDate(timestamp).toLocaleString(undefined, {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "long",
    second: "numeric",
    weekday: "long",
    year: "numeric",
  });
}

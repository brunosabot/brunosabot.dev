"use client";

import React, { useState } from "react";

import SimpleCard from "../../../../../components/card/SimpleCard";
import Columns from "../../../../../components/Columns";
import Dd from "../../../../../components/display/Dd";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";
import { getMetaData } from "../../../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description: "Timestamp and date converter tool by Bruno Sabot",
    title: "Timestamp converter",
  });
}

export default function ToolTimestamp() {
  const [timestamp, setTimestamp] = useState(Date.now());

  const onTimestampChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setTimestamp(parseInt(value || "0", 10));
  };

  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCFullYear(parseInt(value || "1970", 10));
    setTimestamp(d.getTime());
  };

  const onMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCMonth(parseInt(value || "1", 10) - 1);

    setTimestamp(d.getTime());
  };

  const onDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCDate(parseInt(value || "1", 10));
    setTimestamp(d.getTime());
  };

  const onHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCHours(parseInt(value || "0", 10));
    setTimestamp(d.getTime());
  };

  const onMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCMinutes(parseInt(value || "0", 10));
    setTimestamp(d.getTime());
  };

  const onSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCSeconds(parseInt(value || "0", 10));
    setTimestamp(d.getTime());
  };

  const onMillisecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCMilliseconds(parseInt(value || "0", 10));
    setTimestamp(d.getTime());
  };

  const { day, hours, milliseconds, minutes, month, seconds, year } =
    getDate(timestamp);

  return (
    <>
      <Label label="Timestamp">
        <Input
          onChange={onTimestampChange}
          type="number"
          value={`${timestamp}`}
        />
      </Label>

      <Columns cols={3}>
        <Label label="Year">
          <Input onChange={onYearChange} type="number" value={`${year}`} />
        </Label>

        <Label label="Month">
          <Input onChange={onMonthChange} type="number" value={`${month}`} />
        </Label>

        <Label label="Day">
          <Input onChange={onDayChange} type="number" value={`${day}`} />
        </Label>

        <Label label="Hours">
          <Input onChange={onHoursChange} type="number" value={`${hours}`} />
        </Label>

        <Label label="Minutes">
          <Input
            onChange={onMinutesChange}
            type="number"
            value={`${minutes}`}
          />
        </Label>

        <Label label="Seconds">
          <Input
            onChange={onSecondsChange}
            type="number"
            value={`${seconds}`}
          />
        </Label>

        <Label label="Milliseconds">
          <Input
            onChange={onMillisecondsChange}
            type="number"
            value={`${milliseconds}`}
          />
        </Label>
      </Columns>

      <SimpleCard>
        <Dl>
          <Dt>Corresponding ISO Date:</Dt>
          <Dd>{getIsoDate(timestamp)}</Dd>
          <Dt>Corresponding UTC Date:</Dt>
          <Dd>{getUtcDate(timestamp)}</Dd>
          <Dt>Corresponding Local Date:</Dt>
          <Dd>{toLocaleString(timestamp)}</Dd>
        </Dl>
      </SimpleCard>
    </>
  );
}

function getDate(timestamp: number) {
  const date = new Date(timestamp);

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

function getIsoDate(timestamp: number) {
  return new Date(timestamp).toISOString();
}

function getUtcDate(timestamp: number) {
  return new Date(timestamp).toUTCString();
}

function toLocaleString(timestamp: number) {
  return new Date(timestamp).toLocaleString(undefined, {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "long",
    second: "numeric",
    weekday: "long",
    year: "numeric",
  });
}

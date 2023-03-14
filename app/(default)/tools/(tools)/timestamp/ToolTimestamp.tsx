"use client";

import React, { useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Input from "../../../../../components/form/Input";
import Columns from "../../../../../components/Columns";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Dd from "../../../../../components/display/Dd";
import { getMetaData } from "../../../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description: "Timestamp and date converter tool by Bruno Sabot",
    title: "Timestamp converter",
  });
}

function getDate(timestamp: number) {
  const date = new Date(timestamp);

  return {
    year: date.getUTCFullYear(),
    month: date.getUTCMonth() + 1,
    day: date.getUTCDate(),
    hours: date.getUTCHours(),
    minutes: date.getUTCMinutes(),
    seconds: date.getUTCSeconds(),
    milliseconds: date.getUTCMilliseconds(),
  };
}

function getUtcDate(timestamp: number) {
  return new Date(timestamp).toUTCString();
}

function getIsoDate(timestamp: number) {
  return new Date(timestamp).toISOString();
}

function toLocaleString(timestamp: number) {
  return new Date(timestamp).toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
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

  const { year, month, day, hours, minutes, seconds, milliseconds } =
    getDate(timestamp);

  return (
    <>
      <Label label="Timestamp">
        <Input
          type="number"
          onChange={onTimestampChange}
          value={`${timestamp}`}
        />
      </Label>

      <Columns cols={3}>
        <Label label="Year">
          <Input type="number" onChange={onYearChange} value={`${year}`} />
        </Label>

        <Label label="Month">
          <Input type="number" onChange={onMonthChange} value={`${month}`} />
        </Label>

        <Label label="Day">
          <Input type="number" onChange={onDayChange} value={`${day}`} />
        </Label>

        <Label label="Hours">
          <Input type="number" onChange={onHoursChange} value={`${hours}`} />
        </Label>

        <Label label="Minutes">
          <Input
            type="number"
            onChange={onMinutesChange}
            value={`${minutes}`}
          />
        </Label>

        <Label label="Seconds">
          <Input
            type="number"
            onChange={onSecondsChange}
            value={`${seconds}`}
          />
        </Label>

        <Label label="Milliseconds">
          <Input
            type="number"
            onChange={onMillisecondsChange}
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

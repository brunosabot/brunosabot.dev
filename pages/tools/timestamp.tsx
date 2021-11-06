import React, { useCallback, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import NavigationBack from "../../components/header/NavigationBack";
import SimpleCard from "../../components/card/SimpleCard";
import Dt from "../../components/display/Dt";
import Dd from "../../components/display/Dd";
import Columns from "../../components/Columns";
import Dl from "../../components/display/Dl";

export function getDate(timestamp: number) {
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

export function getUtcDate(timestamp: number) {
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

export default function Timestamp() {
  const [timestamp, setTimestamp] = useState(Date.now());

  const onTimestampChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setTimestamp(parseInt(value, 10));
    },
    []
  );

  const onYearChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCFullYear(parseInt(value, 10));

    setTimestamp(d.getTime());
  }, []);

  const onMonthChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const d = new Date(timestamp);
      d.setUTCMonth(parseInt(value, 10) - 1);

      setTimestamp(d.getTime());
    },
    []
  );

  const onDayChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const d = new Date(timestamp);
    d.setUTCDate(parseInt(value, 10));

    setTimestamp(d.getTime());
  }, []);

  const onHoursChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const d = new Date(timestamp);
      d.setUTCHours(parseInt(value, 10));

      setTimestamp(d.getTime());
    },
    []
  );

  const onMinutesChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const d = new Date(timestamp);
      d.setUTCMinutes(parseInt(value, 10));

      setTimestamp(d.getTime());
    },
    []
  );

  const onSecondsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const d = new Date(timestamp);
      d.setUTCSeconds(parseInt(value, 10));

      setTimestamp(d.getTime());
    },
    []
  );

  const onMillisecondsChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      const d = new Date(timestamp);
      d.setUTCMilliseconds(parseInt(value, 10));

      setTimestamp(d.getTime());
    },
    []
  );

  const { year, month, day, hours, minutes, seconds, milliseconds } =
    getDate(timestamp);

  return (
    <DefaultLayout type="short">
      <SEO
        description="Timestamp and date converter tool by Bruno Sabot"
        title="Timestamp converter - Bruno Sabot"
      />
      <PageTitle>Timestamp converter</PageTitle>
      <NavigationBack />
      <SimpleCard>
        This tool is aimed to convert timestamp into datetime values back and
        forward
      </SimpleCard>

      <Label label="Timestamp">
        <Input onChange={onTimestampChange} value={`${timestamp}`} />
      </Label>

      <Columns cols={3}>
        <Label label="Year">
          <Input onChange={onYearChange} value={`${year}`} />
        </Label>

        <Label label="Month">
          <Input onChange={onMonthChange} value={`${month}`} />
        </Label>

        <Label label="Day">
          <Input onChange={onDayChange} value={`${day}`} />
        </Label>

        <Label label="Hours">
          <Input onChange={onHoursChange} value={`${hours}`} />
        </Label>

        <Label label="Minutes">
          <Input onChange={onMinutesChange} value={`${minutes}`} />
        </Label>

        <Label label="Seconds">
          <Input onChange={onSecondsChange} value={`${seconds}`} />
        </Label>

        <Label label="Milliseconds">
          <Input onChange={onMillisecondsChange} value={`${milliseconds}`} />
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
    </DefaultLayout>
  );
}

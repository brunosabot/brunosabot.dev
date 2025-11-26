"use client";

import { Gauge, Timer } from "lucide-react";
import React, { useCallback, useState } from "react";

import Table from "../../../../../../components/table/Table";
import Td from "../../../../../../components/table/Td";
import Tr from "../../../../../../components/table/Tr";
import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolSpeedConvertor.module.css";

const round = (value: number, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};

export default function ToolSpeedConvertor() {
  const [speed, setSpeed] = useState<string>("10");
  const [pace, setPace] = useState<string>("6'");

  const onChangeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(e.target.value);
  };

  const onChangePace = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.match(/([0-9]+)'\s*(([0-9]{1,2})")?/);
    setPace(e.target.value);

    if (result?.[1] === undefined) return;

    const paceMinutes = parseInt(result[1], 10);
    const paceSeconds = parseInt(result?.[3] ?? "0", 10);

    const speed = paceToSpeed(paceMinutes, paceSeconds);

    setSpeed(`${speed}`);
  }, []);

  const finalSpeed = isNaN(Number(speed)) ? 0 : +speed;

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Grid}>
        <InputWithIcon
          Icon={Gauge}
          label="Speed"
          onChange={onChangeSpeed}
          type="number"
          value={`${speed}`}
        />

        <InputWithIcon
          Icon={Timer}
          label={"Pace (format: x' y\" or x')"}
          onChange={onChangePace}
          value={pace}
        />
      </div>

      <ResultCard className={classes.Table}>
        <ResultItem
          label="Percentage from VMA"
          value={
            <Table>
              <tbody>
                {[
                  130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65,
                  60, 55, 50,
                ].map((percentage) => (
                  <Tr key={percentage}>
                    <Td>{percentage}%</Td>
                    <Td>{round((finalSpeed * percentage) / 100, 2)} km/h</Td>
                    <Td>{speedToPace((finalSpeed * percentage) / 100)}</Td>
                  </Tr>
                ))}
              </tbody>
            </Table>
          }
        />
      </ResultCard>
      <ResultCard className={classes.Table}>
        <ResultItem
          label="Percentage to VMA"
          value={
            <Table>
              <tbody>
                {[50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map(
                  (percentage) => (
                    <Tr key={percentage}>
                      <Td>{percentage}%</Td>
                      <Td>{round((finalSpeed * 100) / percentage, 2)} km/h</Td>
                      <Td>{speedToPace((finalSpeed * 100) / percentage)}</Td>
                    </Tr>
                  ),
                )}
              </tbody>
            </Table>
          }
        />
      </ResultCard>
    </div>
  );
}

function paceToSpeed(paceMinute: number, paceSeconds: number) {
  const pace = paceMinute + paceSeconds / 60;
  const speed = 60 / pace;

  return speed;
}

function speedToPace(value: number) {
  const pace = (1 / value) * 60;

  const paceMinute = Math.floor(pace);
  const paceSeconds = Math.floor((pace - paceMinute) * 60);

  if (value === 0) {
    return "";
  }

  return `${paceMinute}'${paceSeconds > 0 ? ` ${paceSeconds}"` : ""}`;
}

"use client";

import React, { useCallback, useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import Input from "../../../../../components/form/Input";
import Table from "../../../../../components/table/Table";
import Tr from "../../../../../components/table/Tr";
import Td from "../../../../../components/table/Td";
import CardTitle from "../../../../../components/card/CardTitle";

const round = (value: number, fix = 0) => {
  const fixFactor = 10 ** fix;
  return Math.round(value * fixFactor) / fixFactor;
};

function speedToPace(value: number) {
  const pace = (1 / value) * 60;

  const paceMinute = Math.floor(pace);
  const paceSeconds = Math.floor((pace - paceMinute) * 60);

  return `${paceMinute}'${paceSeconds > 0 ? ` ${paceSeconds}"` : ""}`;
}

function paceToSpeed(paceMinute: number, paceSeconds: number) {
  const pace = paceMinute + paceSeconds / 60;
  const speed = 60 / pace;

  return speed;
}

export default function ToolSpeedConvertor() {
  const [speed, setSpeed] = useState<number>(10);
  const [pace, setPace] = useState<string>("6'");

  const onChangeSpeed = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(e.target.valueAsNumber);
  };

  const onChangePace = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.match(/([0-9]+)'\s*(([0-9]{1,2})")?/);
    setPace(e.target.value);

    if (result?.[1] === undefined) return;

    const paceMinutes = parseInt(result[1], 10);
    const paceSeconds = parseInt(result?.[3] ?? "0", 10);

    const speed = paceToSpeed(paceMinutes, paceSeconds);

    setSpeed(round(speed, 2));
  }, []);

  return (
    <>
      <Label label="Speed">
        <Input onChange={onChangeSpeed} value={`${speed}`} type="number" />
      </Label>

      <Label label={"Pace (format: x' y\" or x')"}>
        <Input onChange={onChangePace} value={pace} />
      </Label>

      <SimpleCard>
        <CardTitle>Percentage from VMA</CardTitle>
        <Table>
          <tbody>
            {[
              130, 125, 120, 115, 110, 105, 100, 95, 90, 85, 80, 75, 70, 65, 60,
              55, 50,
            ].map((percentage) => {
              return (
                <Tr key={percentage}>
                  <Td>{percentage}%</Td>
                  <Td>{round((speed * percentage) / 100, 2)} km/h</Td>
                  <Td>{speedToPace((speed * percentage) / 100)}</Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </SimpleCard>
      <SimpleCard>
        <CardTitle>Percentage to VMA</CardTitle>
        <Table>
          <tbody>
            {[50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100].map((percentage) => {
              return (
                <Tr key={percentage}>
                  <Td>{percentage}%</Td>
                  <Td>{round((speed * 100) / percentage, 2)} km/h</Td>
                  <Td>{speedToPace((speed * 100) / percentage)}</Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </SimpleCard>
    </>
  );
}

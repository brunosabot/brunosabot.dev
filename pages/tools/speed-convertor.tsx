import React, { useCallback, useEffect, useState } from "react";
import Input from "../../components/form/Input";
import Label from "../../components/form/Label";
import DefaultLayout from "../../components/layout/DefaultLayout";
import SEO from "../../components/Seo";
import PageTitle from "../../components/typography/PageTitle";
import SimpleCard from "../../components/card/SimpleCard";
import NavigationBack from "../../components/header/NavigationBack";
import Table from "../../components/table/Table";
import Tr from "../../components/table/Tr";
import Td from "../../components/table/Td";

export const round = (value: number, fix = 0) => {
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

export default function SpeedConvertor() {
  const [speed, setSpeed] = useState<number>(10);
  const [pace, setPace] = useState<string>("6'");

  const onChangeSpeed = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSpeed(e.target.valueAsNumber);
    },
    []
  );

  const onChangePace = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const result = e.target.value.match(/([0-9]+)'([^0-9]([0-9]+)")?/);
    setPace(e.target.value);

    if (result?.[1] === undefined) return;

    const paceMinutes = parseInt(result[1], 10);
    const paceSeconds = parseInt(result?.[3] ?? "0", 10);

    const speed = paceToSpeed(paceMinutes, paceSeconds);

    setSpeed(round(speed, 2));
  }, []);

  return (
    <DefaultLayout type="short">
      <SEO
        description="Speed convertor tool by Bruno Sabot"
        title="Speed convertor tool - Bruno Sabot"
      />
      <PageTitle>Speed convertor</PageTitle>
      <NavigationBack />
      <SimpleCard>
        This tool is aimed to convert speed into pace and pace into speed
      </SimpleCard>

      <Label label="Speed">
        <Input onChange={onChangeSpeed} value={`${speed}`} type="number" />
      </Label>

      <Label label={"Pace (format: x' y\" or x')"}>
        <Input onChange={onChangePace} value={pace} />
      </Label>

      <SimpleCard>
        <Table>
          <tbody>
            {[100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50].map((percentage) => {
              return (
                <Tr key={percentage}>
                  <Td>{percentage}%</Td>
                  <Td>{round((speed * percentage) / 100)} km/h</Td>
                  <Td>{speedToPace((speed * percentage) / 100)}</Td>
                </Tr>
              );
            })}
          </tbody>
        </Table>
      </SimpleCard>
    </DefaultLayout>
  );
}

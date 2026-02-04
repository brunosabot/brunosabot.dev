"use client";

import { Activity, Heart } from "lucide-react";
import React, { useState } from "react";

import Table from "../../../../../../components/table/Table";
import Td from "../../../../../../components/table/Td";
import Tr from "../../../../../../components/table/Tr";
import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./ToolHeartRateZones.module.css";

const round = (value: number) => Math.round(value);

export default function ToolHeartRateZones() {
  const [maxHeartRate, setMaxHeartRate] = useState<string>("180");
  const [restingHeartRate, setRestingHeartRate] = useState<string>("");

  const maxHr = parseInt(maxHeartRate, 10);
  const restingHr = parseInt(restingHeartRate, 10);
  const isValidMax = !isNaN(maxHr) && maxHr > 0;
  const isValidResting = !isNaN(restingHr) && restingHr > 0 && restingHr < maxHr;

  const percentages = Array.from({ length: 17 }, (_, i) => 100 - i * 5); // 100, 95, ..., 20

  return (
    <div className={classes.Wrapper}>
      <div className={classes.Grid}>
        <InputWithIcon
          Icon={Activity}
          label="Max Heart Rate"
          onChange={(e) => setMaxHeartRate(e.target.value)}
          type="number"
          value={maxHeartRate}
        />

        <InputWithIcon
          Icon={Heart}
          label="Resting Heart Rate (Optional)"
          onChange={(e) => setRestingHeartRate(e.target.value)}
          placeholder="e.g., 60"
          type="number"
          value={restingHeartRate}
        />
      </div>

      <ResultCard className={classes.Table}>
        <ResultItem
          label={
            isValidResting
              ? "Zones (Karvonen Formula)"
              : "Zones (% of Max HR)"
          }
          value={
            <div style={{ overflowX: "auto" }}>
            <Table>
              <thead>
                <Tr>
                  <Td><strong>%</strong></Td>
                  <Td><strong>BPM</strong></Td>
                  <Td><strong>Label</strong></Td>
                </Tr>
              </thead>
              <tbody>
                {isValidMax &&
                  percentages.map((percentage) => {
                    let bpm = 0;
                    if (isValidResting) {
                      // Karvonen: ((Max - Rest) * % / 100) + Rest
                      bpm = ((maxHr - restingHr) * percentage) / 100 + restingHr;
                    } else {
                      // Standard: Max * % / 100
                      bpm = (maxHr * percentage) / 100;
                    }

                    let label = "";
                    if (percentage === 65) label = "~ VT1 (Aerobic)";
                    if (percentage === 85) label = "~ VT2 (Anaerobic)";

                    return (
                      <Tr key={percentage}>
                        <Td>{percentage}%</Td>
                        <Td>{round(bpm)} bpm</Td>
                        <Td>{label}</Td>
                      </Tr>
                    );
                  })}
              </tbody>
            </Table>
            </div>
          }
        />
      </ResultCard>
    </div>
  );
}

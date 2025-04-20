"use client";

import React, { useState } from "react";
import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Dd from "../../../../../components/display/Dd";

import { calculateEnduranceIndex } from "./enduranceIndexUtils";

const ToolEnduranceIndex: React.FC = () => {
  const [mas, setMas] = useState("");
  const [distance, setDistance] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const masNum = parseFloat(mas);
  const distanceNum = parseFloat(distance);
  const hoursNum = hours === "" ? 0 : parseInt(hours, 10);
  const minutesNum = minutes === "" ? 0 : parseInt(minutes, 10);
  const secondsNum = seconds === "" ? 0 : parseInt(seconds, 10);
  const result = calculateEnduranceIndex(
    masNum,
    distanceNum,
    hoursNum,
    minutesNum,
    secondsNum,
  );
  const showResult = result !== null && !isNaN(result);

  return (
    <div className="tool-container">
      <h2>Endurance Index Calculator</h2>
      <form>
        <Label label="MAS (km/h):">
          <Input
            type="number"
            value={mas}
            onChange={(e) => setMas(e.target.value)}
          />
        </Label>
        <Label label="Race Distance (meters):">
          <Input
            type="number"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        </Label>
        <Label label="Race Time:">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5em" }}
          >
            <Input
              type="number"
              placeholder="hours"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />
            <Input
              type="number"
              placeholder="minutes"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
            <Input
              type="number"
              placeholder="seconds"
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />
          </div>
        </Label>
      </form>
      {showResult && (
        <SimpleCard>
          <Dl>
            <Dt>Endurance Index:</Dt>
            <Dd>{result.toFixed(2)}</Dd>
          </Dl>
        </SimpleCard>
      )}
    </div>
  );
};

export default ToolEnduranceIndex;

"use client";

import React, { useState } from "react";

import SimpleCard from "../../../../../components/card/SimpleCard";
import Dd from "../../../../../components/display/Dd";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";
import { calculateRaceDuration } from "./enduranceIndexUtils";
// Given distance (m), MAS (km/h), and endurance index, calculate race duration (h, m, s)
// Formula: enduranceIndex = (raceMAS% - 100) / ln(time_in_minutes/6)
// Rearranged: time_in_minutes = 6 * exp((raceMAS% - 100)/enduranceIndex)
// raceMAS = (distance / 1000) / (duration_in_hours)
// So duration_in_hours = (distance / 1000) / raceMAS

const ToolReverseEnduranceIndex: React.FC = () => {
  const [mas, setMas] = useState("");
  const [distance, setDistance] = useState("");
  const [enduranceIndex, setEnduranceIndex] = useState("");

  const masNum = parseFloat(mas);
  const distanceNum = parseFloat(distance);
  const enduranceIndexNum = parseFloat(enduranceIndex);
  const result =
    !isNaN(masNum) &&
    masNum > 0 &&
    !isNaN(distanceNum) &&
    distanceNum > 0 &&
    !isNaN(enduranceIndexNum) &&
    enduranceIndexNum !== 0
      ? calculateRaceDuration(masNum, distanceNum, enduranceIndexNum)
      : null;
  const showResult =
    result !== null &&
    typeof result.hours === "number" &&
    typeof result.minutes === "number" &&
    typeof result.seconds === "number";

  return (
    <div className="tool-container">
      <h2>Reverse Endurance Index Calculator</h2>
      <form>
        <Label label="MAS (km/h):">
          <Input
            onChange={(e) => setMas(e.target.value)}
            type="number"
            value={mas}
          />
        </Label>
        <Label label="Race Distance (meters):">
          <Input
            onChange={(e) => setDistance(e.target.value)}
            type="number"
            value={distance}
          />
        </Label>
        <Label label="Endurance Index:">
          <Input
            onChange={(e) => setEnduranceIndex(e.target.value)}
            type="number"
            value={enduranceIndex}
          />
        </Label>
      </form>
      {showResult && (
        <SimpleCard>
          <Dl>
            <Dt>Race Duration:</Dt>
            <Dd>
              {result.hours}h {result.minutes}m {result.seconds}s
            </Dd>
          </Dl>
        </SimpleCard>
      )}
    </div>
  );
};

export default ToolReverseEnduranceIndex;

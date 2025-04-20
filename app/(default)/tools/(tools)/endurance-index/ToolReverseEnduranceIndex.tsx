"use client";

import React, { useState } from "react";
import Input from "../../../../../components/form/Input";
import Label from "../../../../../components/form/Label";
import Button from "../../../../../generic/common/Button";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Dl from "../../../../../components/display/Dl";
import Dt from "../../../../../components/display/Dt";
import Dd from "../../../../../components/display/Dd";
import classes from "./ToolEnduranceIndex.module.css";

// Given distance (m), MAS (km/h), and endurance index, calculate race duration (h, m, s)
// Formula: enduranceIndex = (raceMAS% - 100) / ln(time_in_minutes/6)
// Rearranged: time_in_minutes = 6 * exp((raceMAS% - 100)/enduranceIndex)
// raceMAS = (distance / 1000) / (duration_in_hours)
// So duration_in_hours = (distance / 1000) / raceMAS

import { calculateRaceDuration } from "./enduranceIndexUtils";

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
        <Label label="Endurance Index:">
          <Input
            type="number"
            value={enduranceIndex}
            onChange={(e) => setEnduranceIndex(e.target.value)}
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

"use client";

import { Activity, Gauge, Ruler } from "lucide-react";
import React, { useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import { calculateRaceDuration } from "./enduranceIndexUtils";
import classes from "./ToolReverseEnduranceIndex.module.css";

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
    <div className={classes.Wrapper}>
      <div className={classes.Form}>
        <InputWithIcon
          Icon={Activity}
          label="MAS (km/h)"
          onChange={(e) => setMas(e.target.value)}
          type="number"
          value={mas}
        />

        <InputWithIcon
          Icon={Ruler}
          label="Race Distance (meters)"
          onChange={(e) => setDistance(e.target.value)}
          type="number"
          value={distance}
        />

        <InputWithIcon
          Icon={Gauge}
          label="Endurance Index"
          onChange={(e) => setEnduranceIndex(e.target.value)}
          type="number"
          value={enduranceIndex}
        />
      </div>

      {showResult && (
        <ResultCard>
          <ResultItem
            label="Race Duration"
            value={`${result.hours}h ${result.minutes}m ${result.seconds}s`}
          />
        </ResultCard>
      )}
    </div>
  );
};

export default ToolReverseEnduranceIndex;

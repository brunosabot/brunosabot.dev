"use client";

import { Activity, Clock, Ruler } from "lucide-react";
import React, { useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import { calculateEnduranceIndex } from "./enduranceIndexUtils";
import classes from "./ToolEnduranceIndex.module.css";

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

        <div className={classes.TimeInputs}>
          <InputWithIcon
            Icon={Clock}
            label="Hours"
            onChange={(e) => setHours(e.target.value)}
            placeholder="00"
            type="number"
            value={hours}
          />
          <InputWithIcon
            Icon={Clock}
            label="Minutes"
            onChange={(e) => setMinutes(e.target.value)}
            placeholder="00"
            type="number"
            value={minutes}
          />
          <InputWithIcon
            Icon={Clock}
            label="Seconds"
            onChange={(e) => setSeconds(e.target.value)}
            placeholder="00"
            type="number"
            value={seconds}
          />
        </div>
      </div>

      {showResult && (
        <ResultCard>
          <ResultItem label="Endurance Index" value={result.toFixed(2)} />
        </ResultCard>
      )}
    </div>
  );
};

export default ToolEnduranceIndex;

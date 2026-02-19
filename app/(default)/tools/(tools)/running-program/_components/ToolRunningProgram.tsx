"use client";

import { Activity } from "lucide-react";
import { useMemo, useState } from "react";

import ResultCard from "../../../../../../generic/common/ResultCard";
import TextareaWithIcon from "../../../../../../generic/form/TextareaWithIcon";
import { parseProgram, ProgramStats } from "../_utils/parser";
import ProgramBreakdown from "./ProgramBreakdown";
import ProgramStatsSummary from "./ProgramStatsSummary";
import SyntaxGuide from "./SyntaxGuide";
import classes from "./ToolRunningProgram.module.css";

export default function ToolRunningProgram() {
  const [input, setInput] = useState(
    `20' @ 6:30\n2x 12x 30" @ 3:50 r30" @ 6:30 R 3' @ 6:30\n5' @ 6:30`,
  );

  const stats: ProgramStats = useMemo(() => parseProgram(input), [input]);

  return (
    <div className={classes.Wrapper}>
      <TextareaWithIcon
        Icon={Activity}
        label="Running Program"
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. 50' @ 6:30"
        style={{ minHeight: "120px" }}
        value={input}
      />

      <SyntaxGuide />

      <ResultCard>
        <ProgramStatsSummary stats={stats} />
        <ProgramBreakdown stats={stats} />
      </ResultCard>
    </div>
  );
}

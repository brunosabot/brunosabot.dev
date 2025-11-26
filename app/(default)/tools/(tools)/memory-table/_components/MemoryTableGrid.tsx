import { Hash } from "lucide-react";
import React from "react";

import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./MemoryTableGrid.module.css";

interface IMemoryTableGridProps {
  onChange: (index: number, e: React.ChangeEvent<HTMLInputElement>) => void;
  table: string[];
}

export default function MemoryTableGrid({
  onChange,
  table,
}: IMemoryTableGridProps) {
  return (
    <div className={classes.MemoryTableGrid}>
      {table.map((item, i) => {
        return (
          <InputWithIcon
            Icon={Hash}
            key={i}
            label={`${i}`}
            onChange={(e) => onChange(i, e)}
            value={item}
          />
        );
      })}
    </div>
  );
}

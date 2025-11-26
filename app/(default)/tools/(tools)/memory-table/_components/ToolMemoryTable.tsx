"use client";

import React, { useCallback, useEffect, useState } from "react";

import MemoryTableGame from "./MemoryTableGame";
import MemoryTableGrid from "./MemoryTableGrid";
import MemoryTableModeToggle from "./MemoryTableModeToggle";

export default function ToolMemoryTable() {
  const [table, setTable] = useState<string[]>(getDefaultMemoryTable());
  const [play, setPlay] = useState<boolean>(false);

  useEffect(() => {
    const memoryTableStringFromStorage = localStorage.getItem("memory-table");

    if (memoryTableStringFromStorage !== null) {
      setTable(JSON.parse(memoryTableStringFromStorage));
    }
  }, []);

  const onChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newTable = [...table];
      newTable[index] = value;

      localStorage.setItem("memory-table", JSON.stringify(newTable));

      setTable(newTable);
    },
    [table],
  );

  return (
    <>
      <MemoryTableModeToggle play={play} setPlay={setPlay} table={table} />

      {play ? (
        <MemoryTableGame table={table} />
      ) : (
        <MemoryTableGrid onChange={onChange} table={table} />
      )}
    </>
  );
}

function getDefaultMemoryTable() {
  return [...Array.from(new Array(100)).map(() => "")];
}

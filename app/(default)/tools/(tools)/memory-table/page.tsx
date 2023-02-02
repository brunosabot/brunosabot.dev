"use client";

import React, { FormEvent, useCallback, useEffect, useState } from "react";
import SimpleCard from "../../../../../components/card/SimpleCard";
import Label from "../../../../../components/form/Label";
import PageTitle from "../../../../../components/typography/PageTitle";
import Input from "../../../../../components/form/Input";
import Button from "../../../../../components/form/Button";
import classes from "./index.module.css";

function getDefaultMemoryTable() {
  return [...Array.from(new Array(100)).map(() => "")];
}

function getFromMemoryTable(
  isNameMode: boolean,
  memoryTable: string[]
): string {
  const firstInvalid = memoryTable.indexOf("");
  const validCount = firstInvalid === -1 ? 100 : firstInvalid - 1;
  const selectedItem = Math.floor(
    (crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32)) *
      validCount
  );

  if (isNameMode === false) return `${selectedItem}`;
  if (selectedItem in memoryTable) return memoryTable[selectedItem];

  return "";
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function ToolMemoryTablePage() {
  const [table, setTable] = useState<string[]>(getDefaultMemoryTable());
  const [play, setPlay] = useState<boolean>(false);
  const [currentPlay, setCurrentPlay] = useState<string>("");
  const [isPlayModeName, setIsPlayModeName] = useState<boolean>(false);
  const [userValue, setUserValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const pickSomething = useCallback(() => {
    const isNameMode = crypto.getRandomValues(new Uint8Array(1))[0] > 127;

    setIsShowResult(false);
    setCurrentPlay(getFromMemoryTable(isNameMode, table));
    setIsPlayModeName(isNameMode);
    setUserValue("");
    setIsError(false);
  }, [table]);

  useEffect(() => {
    const memoryTableStringFromStorage = localStorage.getItem("memory-table");

    if (memoryTableStringFromStorage) {
      setTable(JSON.parse(memoryTableStringFromStorage));
    }
  }, []);

  useEffect(pickSomething, [pickSomething]);

  const checkResult = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (isPlayModeName) {
        const index = table.indexOf(currentPlay);
        if (`${index}` === userValue) {
          pickSomething();
        } else {
          setIsError(true);
        }
      } else {
        if (normalize(table[+currentPlay]) === normalize(userValue)) {
          pickSomething();
        } else {
          setIsError(true);
        }
      }
    },
    [currentPlay, isPlayModeName, pickSomething, table, userValue]
  );

  const skipResult = useCallback(() => {
    pickSomething();
  }, [pickSomething]);

  const showResult = useCallback(() => {
    setIsShowResult(true);
  }, []);

  const onChange = useCallback(
    (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const newTable = [...table];
      newTable[index] = value;

      localStorage.setItem("memory-table", JSON.stringify(newTable));

      setTable(newTable);
    },
    [table]
  );

  return (
    <>
      <PageTitle>Memory Table Tool</PageTitle>

      {table.every((v) => v === "") ? null : (
        <Button type="button" onClick={() => setPlay(!play)}>
          {play ? "Stop playing" : "Start playing"}
        </Button>
      )}

      {play === false &&
        table.map((item, i) => {
          return (
            <Label label={i} key={i}>
              <Input onChange={(e) => onChange(i, e)} value={item} />
            </Label>
          );
        })}

      {play === true && (
        <form className={classes.memoryTableGame} onSubmit={checkResult}>
          What is the matching value for:{" "}
          <span className={classes.memoryTableGameValue}>{currentPlay}</span>
          <Label label="Answer">
            <Input
              onChange={(e) => setUserValue(e.target.value)}
              value={userValue}
              autoFocus
              className={isError ? classes.memoryTableGameError : ""}
            />
          </Label>
          <div className={classes.memoryTableGameSubmit}>
            <Button type="button" onClick={skipResult} outline>
              Skip
            </Button>
            <Button type="button" onClick={showResult} outline>
              Show Answer
            </Button>
            <Button type="submit" onClick={() => {}}>
              Validate
            </Button>
          </div>
          {isShowResult ? (
            <SimpleCard>
              {isPlayModeName
                ? table.indexOf(currentPlay) + " ↔ " + currentPlay
                : currentPlay + " ↔ " + table[+currentPlay]}
            </SimpleCard>
          ) : null}
        </form>
      )}

      <SimpleCard>
        The tool is a memory association game that creates a table linking
        numbers with objects. The game allows you to play a guessing game based
        on the created table by matching a number with an object or vice versa.
        To play the game, you will be presented with either an object or a
        number, and your task will be to guess the corresponding match. The game
        tracks your progress and provides a score based on how many correct
        matches you make. This tool is a fun and interactive way to improve your
        memory retention, test your knowledge, or just have a little fun.
        Whether you&apos;re looking to challenge yourself, improve your memory
        skills, or simply have a good time, this tool is a great choice.
      </SimpleCard>
    </>
  );
}

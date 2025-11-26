import { HelpCircle } from "lucide-react";
import { FormEvent, useCallback, useEffect, useState } from "react";

import Button from "../../../../../../generic/common/Button";
import ButtonSecondary from "../../../../../../generic/common/ButtonSecondary";
import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import InputWithIcon from "../../../../../../generic/form/InputWithIcon";
import classes from "./MemoryTableGame.module.css";

interface IMemoryTableGameProps {
  table: string[];
}

export default function MemoryTableGame({ table }: IMemoryTableGameProps) {
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
    [currentPlay, isPlayModeName, pickSomething, table, userValue],
  );

  const skipResult = useCallback(() => {
    pickSomething();
  }, [pickSomething]);

  const showResult = useCallback(() => {
    setIsShowResult(true);
  }, []);

  return (
    <ResultCard className={classes.MemoryTableGame}>
      <form className={classes.MemoryTableGameForm} onSubmit={checkResult}>
        What is the matching value for:{" "}
        <span className={classes.MemoryTableGameValue}>{currentPlay}</span>
        <InputWithIcon
          autoFocus
          className={
            isError
              ? classes.MemoryTableGameError
              : classes.MemoryTableGameField
          }
          Icon={HelpCircle}
          label="Answer"
          onChange={(e) => setUserValue(e.target.value)}
          value={userValue}
        />
        <div className={classes.MemoryTableGameSubmit}>
          <ButtonSecondary onClick={skipResult} type="button">
            Skip
          </ButtonSecondary>
          <ButtonSecondary onClick={showResult} type="button">
            Show Answer
          </ButtonSecondary>
          <Button onClick={() => {}} type="submit">
            Validate
          </Button>
        </div>
        {isShowResult ? (
          <ResultItem
            label={
              isPlayModeName ? `${table.indexOf(currentPlay)}` : currentPlay
            }
            value={isPlayModeName ? currentPlay : table[+currentPlay]}
          />
        ) : null}
      </form>
    </ResultCard>
  );
}

function getFromMemoryTable(
  isNameMode: boolean,
  memoryTable: string[],
): string {
  const firstInvalid = memoryTable.indexOf("");
  const validCount = firstInvalid === -1 ? 100 : firstInvalid - 1;
  const selectedItem = Math.floor(
    (crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32)) *
      validCount,
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

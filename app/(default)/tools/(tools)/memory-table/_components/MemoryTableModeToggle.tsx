import Button from "../../../../../../generic/common/Button";
import classes from "./MemoryTableModeToggle.module.css";

interface IMemoryTableModeToggleProps {
  play: boolean;
  setPlay: (play: boolean) => void;
  table: string[];
}

export default function MemoryTableModeToggle({
  play,
  setPlay,
  table,
}: IMemoryTableModeToggleProps) {
  if (table.every((v) => v === "")) {
    return null;
  }

  return (
    <div className={classes.MemoryTableModeToggle}>
      <Button onClick={() => setPlay(!play)} type="button">
        {play ? "Stop playing" : "Start playing"}
      </Button>
    </div>
  );
}

import Table from "../../../../../../components/table/Table";
import Td from "../../../../../../components/table/Td";
import Tr from "../../../../../../components/table/Tr";
import {
  formatDistance,
  formatDuration,
  formatPace,
} from "../_utils/formatters";
import { ProgramStats } from "../_utils/parser";
import classes from "./ProgramBreakdown.module.css";

interface IProgramBreakdownProps {
  stats: ProgramStats;
}

export default function ProgramBreakdown({ stats }: IProgramBreakdownProps) {
  return (
    <div className={classes.Table}>
      <Table>
        <thead>
          <Tr>
            <Td>
              <strong>#</strong>
            </Td>
            <Td>
              <strong>Type</strong>
            </Td>
            <Td>
              <strong>Duration</strong>
            </Td>
            <Td>
              <strong>Pace</strong>
            </Td>
            <Td>
              <strong>Distance</strong>
            </Td>
          </Tr>
        </thead>
        <tbody>
          {stats.steps.map((step, idx) => (
            <Tr key={idx}>
              <Td>{idx + 1}</Td>
              <Td>{step.type === "run" ? "Run" : "Rest"}</Td>
              <Td>{formatDuration(step.duration)}</Td>
              <Td>{formatPace(step.pace || 0)}</Td>
              <Td>{formatDistance(step.distance || 0)}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

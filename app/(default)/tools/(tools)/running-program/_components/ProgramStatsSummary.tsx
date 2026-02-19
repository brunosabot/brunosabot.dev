import ResultItem from "../../../../../../generic/common/ResultItem";
import {
  formatDistance,
  formatDuration,
  formatPace,
} from "../_utils/formatters";
import { ProgramStats } from "../_utils/parser";

interface IProgramStatsSummaryProps {
  stats: ProgramStats;
}

export default function ProgramStatsSummary({
  stats,
}: IProgramStatsSummaryProps) {
  return (
    <div
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
        width: "100%",
      }}
    >
      <ResultItem
        label="Total Distance"
        value={formatDistance(stats.totalDistance)}
      />
      <ResultItem
        label="Total Duration"
        value={formatDuration(stats.totalDuration)}
      />
      <ResultItem label="Average Pace" value={formatPace(stats.avgPace)} />
    </div>
  );
}

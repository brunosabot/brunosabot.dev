import { formatDistanceToNow } from "date-fns";
import { withTooltip } from "../modal/withTooltip";

interface Props {
  date: string;
  label: string;
}

const PostDate: React.FC<Props> = ({ date }) => (
  <span>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
);

export default withTooltip<Props>(PostDate);

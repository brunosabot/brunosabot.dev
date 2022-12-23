import { formatDistanceToNow } from "date-fns";
import { WithATooltip } from "../modal/WithATooltip";

interface Props {
  date: string;
  label: string;
}

const PostDate: React.FC<Props> = ({ label, date }) => (
  <WithATooltip label={label}>
    <span>{formatDistanceToNow(new Date(date), { addSuffix: true })}</span>
  </WithATooltip>
);

export default PostDate;

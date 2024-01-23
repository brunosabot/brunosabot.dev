import { formatDistanceToNow } from "date-fns";
import { WithATooltip } from "../modal/WithATooltip";

interface Props {
  date: string;
  label: string;
}

const PostDate: React.FC<Props> = ({ label, date }) => (
  <WithATooltip label={label}>
    {formatDistanceToNow(new Date(date), { addSuffix: true })}
  </WithATooltip>
);

export default PostDate;

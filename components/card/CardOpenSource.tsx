import { mdiGithub } from "@mdi/js";
import Svg from "../svg/Svg";
import LineCard from "./LineCard";

interface Props {
  name: string;
  url: string;
}

const CardOpensource: React.FC<Props> = ({ name, url }) => (
  <LineCard icon={<Svg d={mdiGithub} />} title={name} to={url} />
);

export default CardOpensource;

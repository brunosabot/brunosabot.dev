import { mdiGithub } from "@mdi/js";
import Svg from "../../../../components/svg/Svg";
import classNames from "./Tool.module.css";

interface IToolProps {
  icon: string;
  name: string;
  url: string;
  description: string;
}

export default function Tool({ name, url, icon, description }: IToolProps) {
  return (
    <a href={url} className={classNames.Tool}>
      <Svg className={classNames.Icon} d={icon} />
      <h2 className={classNames.Title}>{name}</h2>
      <p className={classNames.Description}>{description}</p>
    </a>
  );
}

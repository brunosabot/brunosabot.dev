import Svg from "../../../../components/svg/Svg";
import classNames from "./Tool.module.css";

interface IToolProps {
  description: string;
  icon: string;
  name: string;
  url: string;
}

export default function Tool({ description, icon, name, url }: IToolProps) {
  return (
    <a className={classNames.Tool} href={url}>
      <Svg className={classNames.Icon} d={icon} />
      <h2 className={classNames.Title}>{name}</h2>
      <p className={classNames.Description}>{description}</p>
    </a>
  );
}

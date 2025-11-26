import { LucideIcon, SquareArrowOutUpRight } from "lucide-react";

import classNames from "./Tool.module.css";

interface IToolProps {
  description: string;
  Icon: LucideIcon;
  name: string;
  url: string;
}

export default function Tool({ description, Icon, name, url }: IToolProps) {
  return (
    <a className={classNames.Tool} href={url}>
      <div className={classNames.ToolImageWrapper}>
        <Icon size={40} strokeWidth={1} />
      </div>
      <div className={classNames.ToolContent}>
        <div className={classNames.OpenSourceProjectHeader}>
          <h2 className={classNames.ToolTitle}>{name}</h2>
        </div>

        <p className={classNames.ToolDescription}>{description}</p>

        <div className={classNames.ToolLinks}>
          <button className={classNames.ToolLink}>
            <SquareArrowOutUpRight size={20} strokeWidth={1.25} />
            Use The Tool
          </button>
        </div>
      </div>
    </a>
  );
}

import { mdiGithub } from "@mdi/js";

import Svg from "../../../../components/svg/Svg";
import classNames from "./OpenSourceProject.module.css";

interface IOpenSourceProjectProps {
  description: string;
  name: string;
  role: string;
  slug: string;
  url: string;
}

export default function OpenSourceProject({
  description,
  name,
  role,
  slug,
  url,
}: IOpenSourceProjectProps) {
  return (
    <a className={classNames.OpenSourceProject} href={url}>
      <Svg className={classNames.Icon} d={mdiGithub} />
      <h2 className={classNames.Title}>{name}</h2>
      <div>
        <span className={classNames.Slug}>{slug}</span>-
        <span className={classNames.Role} data-role={role}>
          {role}
        </span>
      </div>
      <p className={classNames.Description}>{description}</p>
    </a>
  );
}

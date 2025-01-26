import { mdiGithub } from "@mdi/js";
import Svg from "../../../../components/svg/Svg";
import classNames from "./OpenSourceProject.module.css";

interface IOpenSourceProjectProps {
  slug: string;
  name: string;
  url: string;
  role: string;
  description: string;
}

export default function OpenSourceProject({
  slug,
  name,
  url,
  role,
  description,
}: IOpenSourceProjectProps) {
  return (
    <a href={url} className={classNames.OpenSourceProject}>
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

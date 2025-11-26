import { Github, SquareArrowOutUpRight } from "lucide-react";

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
  url,
}: IOpenSourceProjectProps) {
  return (
    <div className={classNames.OpenSourceProject}>
      <div className={classNames.OpenSourceProjectImageWrapper}>
        <Github size={40} strokeWidth={1} />
      </div>
      <div className={classNames.OpenSourceProjectContent}>
        <div className={classNames.OpenSourceProjectHeader}>
          <h2 className={classNames.OpenSourceProjectTitle}>{name}</h2>
          <span
            className={classNames.OpenSourceProjectRole}
            data-role={role.toLowerCase()}
          >
            {role}
          </span>
        </div>

        <p className={classNames.OpenSourceProjectDescription}>{description}</p>

        <div className={classNames.OpenSourceProjectLinks}>
          <a
            className={`${classNames.OpenSourceProjectLink} ${classNames.OpenSourceProjectVisit}`}
            href={url}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SquareArrowOutUpRight size={20} strokeWidth={1.25} />
            View Repository
          </a>
        </div>
      </div>
    </div>
  );
}

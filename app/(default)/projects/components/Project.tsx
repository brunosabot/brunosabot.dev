import { SquareArrowOutUpRight } from "lucide-react";
import Image from "next/image";

import classNames from "./Project.module.css";

interface IProjectProps {
  description: string[];
  image?: string;
  priority: boolean;
  title: string;
  to: string;
}

export default function Project(props: IProjectProps) {
  return (
    <div className={classNames.Project}>
      <div className={classNames.ProjectImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.ProjectImage}
            fill
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div className={classNames.ProjectContent}>
        <h2 className={classNames.ProjectTitle}>{props.title}</h2>

        <div className={classNames.ProjectDescription}>
          {props.description.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <div className={classNames.ProjectLinks}>
          <a
            className={`${classNames.ProjectLink} ${classNames.ProjectVisit}`}
            href={props.to}
            rel="noopener noreferrer"
            target="_blank"
          >
            <SquareArrowOutUpRight size={20} strokeWidth={1.25} />
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}

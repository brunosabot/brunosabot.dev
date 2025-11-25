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
    <a className={classNames.Project} href={props.to}>
      <h2 className={classNames.Title}>{props.title}</h2>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            alt=""
            className={classNames.Image}
            fill={true}
            priority={props.priority}
            src={props.image}
          />
        ) : null}
      </div>
      <div className={classNames.DescriptionWrapper}>
        {props.description.map((p) => (
          <p className={classNames.Description} key={p}>
            {p}
          </p>
        ))}
      </div>
    </a>
  );
}

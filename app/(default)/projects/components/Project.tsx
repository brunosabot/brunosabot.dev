import Image from "next/image";
import classNames from "./Project.module.css";

interface IProjectProps {
  to: string;
  image?: string;
  description: string[];
  title: string;
  priority: boolean;
}

export default function Project(props: IProjectProps) {
  return (
    <a className={classNames.Project} href={props.to}>
      <h2 className={classNames.Title}>{props.title}</h2>
      <div className={classNames.ImageWrapper}>
        {props.image ? (
          <Image
            src={props.image}
            alt=""
            fill={true}
            className={classNames.Image}
            priority={props.priority}
          />
        ) : null}
      </div>
      <div className={classNames.DescriptionWrapper}>
        {props.description.map((p) => (
          <p key={p} className={classNames.Description}>
            {p}
          </p>
        ))}
      </div>
    </a>
  );
}

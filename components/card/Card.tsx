import Image from "next/image";

import Flag from "../Flag";
import classes from "./Card.module.css";

interface Props {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  color?: string;
  date: string;
  description: string;
  icon: string;
  image?: string;
  priority?: boolean;
  subtitle?: string;
  tags?: string;
  title: string;
  to?: string;
}

const Card: React.FC<Props> = ({
  actions = null,
  children = null,
  color = undefined,
  date,
  description,
  icon,
  image,
  priority = false,
  subtitle,
  tags = "",
  title,
  to,
}) => {
  const Composant = to ? "a" : "div";

  return (
    <div className={classes["card"]}>
      {image ? (
        <Composant href={to}>
          <Image
            alt={title}
            className={classes["card__image"]}
            height={195}
            priority={priority}
            src={image}
            style={{ backgroundColor: color }}
            width={350}
          />
        </Composant>
      ) : null}
      <Composant className={classes["card__header"]} href={to}>
        <div className={classes["card__header-title-wrapper"]}>
          <span className={classes["card__header-title"]}>{title}</span>
        </div>
      </Composant>
      <div className={classes["card__description"]}>{description}</div>
      {tags ? (
        <div className={classes["card__tags"]}>
          {tags.split(",").map((tag) => (
            <a className={classes["card__tag"]} href={`/tags/${tag}`} key={tag}>
              {tag}
            </a>
          ))}
        </div>
      ) : null}
      {children}
      <div className={classes["card__footer"]}>
        <Flag lang={icon} />
        <span className={classes["card__header-subtitle"]}>{subtitle}</span>
        <span className={classes["card__header-date"]}>{date}</span>
      </div>

      {actions ? (
        <div className={classes["card__header-actions"]}>{actions}</div>
      ) : null}
    </div>
  );
};

export default Card;

import Image from "next/image";
import Flag from "../Flag";
import classes from "./Card.module.css";

interface Props {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  date: string;
  icon: string;
  image?: string;
  color?: string;
  priority?: boolean;
  subtitle?: string;
  title: string;
  description: string;
  to?: string;
  tags?: string;
}

const Card: React.FC<Props> = ({
  actions = null,
  children = null,
  date,
  icon,
  image,
  color = undefined,
  priority = false,
  description,
  subtitle,
  title,
  to,
  tags = "",
}) => {
  const Composant = to ? "a" : "div";

  return (
    <div className={classes["card"]}>
      {image ? (
        <Composant href={to}>
          <Image
            height={195}
            width={350}
            src={image}
            alt={title}
            className={classes["card__image"]}
            priority={priority}
            style={{ backgroundColor: color }}
          />
        </Composant>
      ) : null}
      <Composant href={to} className={classes["card__header"]}>
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

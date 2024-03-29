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
}) => {
  const Composant = to ? "a" : "div";

  return (
    <Composant className={classes["card"]} href={to}>
      {image ? (
        <Image
          height={195}
          width={350}
          src={image}
          alt={title}
          className={classes["card__image"]}
          priority={priority}
          style={{ backgroundColor: color }}
        />
      ) : null}
      <h2 className={classes["card__header"]}>
        <div className={classes["card__header-title-wrapper"]}>
          <span className={classes["card__header-title"]}>{title}</span>
        </div>
        <div className={classes["card__description"]}>{description}</div>
        <div className={classes["card__footer"]}>
          <Flag lang={icon} />
          <span className={classes["card__header-subtitle"]}>{subtitle}</span>
          <span className={classes["card__header-date"]}>{date}</span>
        </div>

        {actions ? (
          <div className={classes["card__header-actions"]}>{actions}</div>
        ) : null}
      </h2>

      {children}
    </Composant>
  );
};

export default Card;

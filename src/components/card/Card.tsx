import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Flag from "../Flag";
import "./Card.css";

interface Fixed {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
  width: number;
}

interface Props {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  date: string;
  icon: string;
  image?: string;
  fixed?: Fixed;
  subtitle: string;
  title: string;
  description: string;
  to?: string;
  timeToRead?: number;
}

const Card: React.FC<Props> = ({
  actions = null,
  children = null,
  date,
  icon,
  image,
  fixed,
  description,
  subtitle,
  title,
  to,
  timeToRead,
}) => {
  const Composant = to ? "a" : "div";

  return (
    <Composant className="card" href={to}>
      {fixed ? <GatsbyImage image={fixed} alt={title} className="card__image" /> : null}
      {image ? (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="card__image"
        />
      ) : null}
      <h3 className="card__header">
        <div className="card__header-title-wrapper">
          <span className="card__header-title">{title}</span>
        </div>
        <div className="card__description">{description}</div>
        <div className="card__footer">
          <Flag lang={icon} />
          <span className="card__header-subtitle">{subtitle}</span>
          <span className="card__header-date">{date}</span>
        </div>

        {actions ? <div className="card__header-actions">{actions}</div> : null}
      </h3>

      {children}
    </Composant>
  );
};

export default Card;

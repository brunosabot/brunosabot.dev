import React from "react";
import "./Card.css";

interface Props {
  actions?: React.ReactNode;
  children?: React.ReactNode;
  date: string;
  icon: React.ReactNode;
  subtitle: string;
  title: string;
  to?: string;
}

const Card: React.FC<Props> = ({
  actions = null,
  children = null,
  date,
  icon,
  subtitle,
  title,
  to,
}) => {
  const Composant = to ? "a" : "div";

  return (
    <Composant className="card" href={to}>
      <h3 className="card__header">
        <span className="card__icon">{icon}</span>
        <div className="card__header-title-wrapper">
          <span className="card__header-subtitle">{subtitle}</span>
          <span className="card__header-title">{title}</span>
        </div>
        <span className="card__header-date">{date}</span>

        {actions ? <div className="card__header-actions">{actions}</div> : null}
      </h3>

      {children}
    </Composant>
  );
};

export default Card;

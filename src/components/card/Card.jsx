import PropTypes from "prop-types";
import React from "react";
import "./Card.css";

const Card = ({ actions, children, date, icon, subtitle, title, to }) => {
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
Card.defaultProps = {
  actions: null,
  children: null,
  to: null
};

Card.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node,
  date: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string
};

export default Card;

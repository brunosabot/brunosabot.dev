import PropTypes from "prop-types";
import React from "react";
import "./CardAction.css";

const CardAction = ({ children, href, name, onClick }) => (
  <a
    href={href}
    className="card-action"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    tabIndex="0"
    onKeyPress={e => e.key === "Enter" && onClick()}
    aria-label={name}
  >
    {children}
  </a>
);

CardAction.defaultProps = {
  href: null,
  onClick: () => {}
};

CardAction.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default CardAction;

import React from "react";
import "./CardAction.css";
import PropTypes from "prop-types";

const CardAction = ({ children, href, onClick }) => (
  <a
    href={href}
    className="card-action"
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    tabIndex="0"
    onKeyPress={e => e.key === "Enter" && onClick()}
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
  onClick: PropTypes.func
};

export default CardAction;

import React from "react";
import PropTypes from "prop-types";
import "./BiographySocial.css";

const Social = ({ children, href, name }) => (
  <a
    className="biography-social"
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    aria-label={`Bruno Sabot on ${name}`}
  >
    {children}
  </a>
);

Social.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Social;

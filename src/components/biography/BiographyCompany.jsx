import React from "react";
import PropTypes from "prop-types";
import "./BiographyCompany.css";

const BiographyCompany = ({ children, href }) => (
  <a className="biography-company" href={href}>
    &nbsp;
    {children}
    &nbsp;
  </a>
);

BiographyCompany.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};

export default BiographyCompany;

import React from "react";
import PropTypes from "prop-types";
import "./BiographyLine.css";

const BiographyLine = ({ children }) => (
  <div className="biography-line">{children}</div>
);

BiographyLine.propTypes = {
  children: PropTypes.node.isRequired
};

export default BiographyLine;

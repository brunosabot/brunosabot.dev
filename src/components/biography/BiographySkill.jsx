import React from "react";
import PropTypes from "prop-types";
import "./BiographySkill.css";

const BiographySkill = ({ children }) => (
  <span className="biography-skill">
    {children}
    &nbsp;
  </span>
);

BiographySkill.propTypes = {
  children: PropTypes.node.isRequired
};

export default BiographySkill;

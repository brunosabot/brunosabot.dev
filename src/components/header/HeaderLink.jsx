import PropTypes from "prop-types";
import React from "react";
import { Link } from "gatsby";
import OpenInNew from "../svg/IconOpenInNew";
import "./HeaderLink.css";

const HeaderLink = ({ children, to }) => {
  const isExternal = to.indexOf("http") === 0;

  return (
    <span className="header-link">
      {isExternal ? (
        <a
          className="header-link__link"
          href={to}
          rel="noopener noreferrer"
          target="_blank"
        >
          <OpenInNew className="header-link__external-icon" />
          {children}
        </a>
      ) : (
        <Link
          activeClassName="header-link__link--active"
          className="header-link__link"
          to={to}
        >
          {children}
        </Link>
      )}
    </span>
  );
};

HeaderLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default HeaderLink;

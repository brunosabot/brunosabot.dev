import { Link } from "gatsby";
import React from "react";
import "./SocialLink.css";

interface Props {
  children: React.ReactNode;
  to: string;
}

const SocialLink: React.FC<Props> = ({ children, to }) => {
  const isExternal = to.indexOf("http") === 0;

  return (
    <span className="header-link">
      {isExternal ? (
        <a
          className="resume-social-link"
          target="_blank"
          rel="noopener noreferrer"
          href={to}
        >
          {children}
        </a>
      ) : (
        <Link className="resume-social-link" to={to}>
          {children}
        </Link>
      )}
    </span>
  );
};

export default SocialLink;

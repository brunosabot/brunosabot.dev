import AniLink from "gatsby-plugin-transition-link/AniLink";
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
        <AniLink fade duration={0.5} className="resume-social-link" to={to}>
          {children}
        </AniLink>
      )}
    </span>
  );
};

export default SocialLink;

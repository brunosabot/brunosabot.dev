import React from "react";
import "./BiographySocial.css";

interface Props {
  children: React.ReactNode;
  href: string;
  name: string;
}

const Social: React.FC<Props> = ({ children, href, name }) => (
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

export default Social;

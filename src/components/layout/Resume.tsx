import React from "react";
import "./Resume.css";

interface Props {
  children: React.ReactNode;
}

const Resume: React.FC<Props> = ({ children }) => {
  return <div className="resume-body">{children}</div>;
};

export default Resume;

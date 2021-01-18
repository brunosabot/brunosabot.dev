import React from "react";
import "./Title.css";

interface Props {
  children: React.ReactNode;
}

const Title: React.FC<Props> = ({ children }) => (
  <h2 className="resume-title">{children}</h2>
);

export default Title;

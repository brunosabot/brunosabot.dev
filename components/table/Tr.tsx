import React from "react";

interface ITrProps {
  children: React.ReactNode;
}

const Tr: React.FC<ITrProps> = ({ children }) => {
  return <tr>{children}</tr>;
};

export default Tr;

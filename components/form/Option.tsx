import React from "react";

interface IOptionProps {
  value: string;
  children: React.ReactNode;
}

const Option: React.FC<IOptionProps> = (props) => {
  return <option {...props} />;
};

export default Option;

import React from "react";
import "./IconFilePresentationBox.css";

interface Props {
  className?: string;
}

const IconFilePresentationBox: React.FC<Props> = (props) => (
  <svg
    className="icon-file-presentation-box"
    style={{
      width: 24,
      height: 24,
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M19,16H5V8H19M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" />
  </svg>
);

export default IconFilePresentationBox;

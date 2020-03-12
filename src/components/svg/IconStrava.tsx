import React from "react";

interface Props {
  className?: string;
}

const IconStrava: React.FC<Props> = props => (
  <svg
    style={{
      width: 24,
      height: 24
    }}
    viewBox="2 2 12 12"
    {...props}
  >
    <g style={{ fillRule: "evenodd" }}>
      <polygon
        points="6.9 8.8 9.4 13.3 11.8 8.8 10.3 8.8 9.4 10.5 8.4 8.8"
        style={{ opacity: 0.6 }}
      />
      <path d="M7.2 2.5L10.3 8.8 4 8.8 7.2 2.5 7.2 2.5ZM7.2 6.3L8.4 8.8 5.9 8.8 7.2 6.3 7.2 6.3Z" />
    </g>
  </svg>
);

export default IconStrava;

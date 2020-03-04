import React from "react";
import "./BiographyAvatar.css";

interface Props {
  alt: string;
  src: string;
}

const BiographyAvatar: React.FC<Props> = ({ alt, src }) => (
  <img className="biography-avatar" src={src} alt={alt} />
);

export default BiographyAvatar;

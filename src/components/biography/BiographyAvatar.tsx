import Img from "gatsby-image";
import React from "react";
import "./BiographyAvatar.css";

interface Fixed {
  base64: string;
  height: number;
  src: string;
  srcSet: string;
  srcSetWebp: string;
  srcWebp: string;
  width: number;
}

interface Props {
  alt: string;
  fixed: Fixed;
}

const BiographyAvatar: React.FC<Props> = ({ alt, fixed }) => (
  <Img className="biography-avatar" fixed={fixed} alt={alt} />
);

export default BiographyAvatar;

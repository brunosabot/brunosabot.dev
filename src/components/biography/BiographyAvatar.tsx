import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React from "react";
import "./BiographyAvatar.css";

interface Props {
  alt: string;
  fixed: IGatsbyImageData;
}

const BiographyAvatar: React.FC<Props> = ({ alt, fixed }) => (
  <GatsbyImage image={fixed} className="biography-avatar" alt={alt} />
);

export default BiographyAvatar;

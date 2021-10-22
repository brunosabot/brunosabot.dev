import React from "react";
import "./LineCard.css";

interface Props {
  icon: React.ReactNode;
  title: string;
  to?: string;
}

const LineCard: React.FC<Props> = ({ icon, title, to }) => {
  const Composant = to ? "a" : "div";

  return (
    <Composant
      className="line-card"
      href={to}
      target={to ? "_blank" : undefined}
    >
      {icon}
      {title}
    </Composant>
  );
};

export default LineCard;

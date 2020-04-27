import React from "react";
import "./Flag.css";
import france from "./svg/france.svg";
import usa from "./svg/united-states-of-america.svg";

interface Props {
  lang: string;
}

const Flag: React.FC<Props> = ({ lang }) => {
  if (lang === "fr") {
    return <img className="flag" src={france} alt="Français" />;
  }
  if (lang === "en") {
    return <img className="flag" src={usa} alt="English" />;
  }

  return null;
};

export default Flag;

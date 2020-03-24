import React from "react";
import "./Flag.css";
import france from "./svg/france.svg";
import usa from "./svg/united-states-of-america.svg";

interface Props {
  lang: string;
}

const Flag: React.FC<Props> = ({ lang }) => {
  if (lang === "fr") {
    return <img className="flag" src={france} />;
  }
  if (lang === "en") {
    return <img className="flag" src={usa} />;
  }

  return null;
};

export default Flag;

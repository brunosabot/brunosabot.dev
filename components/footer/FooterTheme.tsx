"use client";

import { useEffect } from "react";
import Svg from "../svg/Svg";
import classNames from "./FooterTheme.module.css";
import { season, seasons } from "../../lib/season";

interface IContentProps {
  theme: string;
  icon: string;
  name: string;
}

export default function FooterTheme({ name, theme, icon }: IContentProps) {
  const onClick = () => {
    localStorage.setItem("theme", theme);
    updateTheme();
  };

  const updateTheme = () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === theme) {
      Object.keys(seasons).forEach((season) => {
        document.body.classList.remove(season);
      });
      if (theme) {
        document.body.classList.add(theme);
      } else {
        document.body.classList.add(season(new Date()));
      }
    }
  };

  useEffect(updateTheme);

  return (
    <button
      type="button"
      data-theme={theme}
      onClick={onClick}
      className={classNames.FooterTheme}
    >
      <Svg d={icon} className={classNames.Icon} />
      {name}
    </button>
  );
}

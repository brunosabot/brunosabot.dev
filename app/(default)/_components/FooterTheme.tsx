"use client";

import { useEffect } from "react";

import { season, seasons } from "../../../lib/season";
import classNames from "./FooterTheme.module.css";
import Svg from "./Svg";

interface IContentProps {
  icon: string;
  name: string;
  theme: string;
}

export default function FooterTheme({ icon, name, theme }: IContentProps) {
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
      aria-label={name}
      className={classNames.FooterTheme}
      data-theme={theme}
      onClick={onClick}
      type="button"
    >
      <Svg className={classNames.Icon} d={icon} size={24} />
    </button>
  );
}

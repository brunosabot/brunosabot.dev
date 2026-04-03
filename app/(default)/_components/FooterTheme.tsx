"use client";

import { useEffect } from "react";

import { season, seasons } from "../../../lib/season";
import classNames from "./FooterTheme.module.css";

interface IContentProps {
  children: React.ReactNode;
  name: string;
  theme: string;
}

export default function FooterTheme({ children, name, theme }: IContentProps) {
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

  const classes = [classNames.FooterTheme];

  if (theme) {
    classes.push(classNames[theme]);
  }

  return (
    <button
      aria-label={name}
      className={classes.join(" ")}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

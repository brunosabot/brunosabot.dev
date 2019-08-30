import React from "react";
import useSeo from "../hooks/useSeo";
import Talk from "../ui/talks/Talk";
import styles from "./Talks.module.css";

const Talks = () => {
  useSeo("Talks - Bruno Sabot", "All the conference talks given by Bruno Sabot. Check it out!");

  const talks = [
    {
      id: "jnxkdHo8OEk",
      conference: "Breizh Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2019-03-21"
    },
    {
      id: "H2KWVDH64EY",
      conference: "Jug Summer Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2018-09-14"
    },
    {
      id: "h0MAi-1GdZQ",
      conference: "BDX I/O",
      language: "🇫🇷",
      title: "Les nouveautés de React 16 - Fiber",
      date: "2017-11-10"
    }
  ];

  return (
    <div className={styles.Talks}>
      {talks.map(talk => (
        <Talk key={talk.id} talk={talk} />
      ))}
    </div>
  );
};

Talks.propTypes = {};

export default Talks;

import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import styles from "./Talks.module.css";

const Talks = () => {
  const { values } = useContext(AppContext);

  const talks = [
    { id: "h0MAi-1GdZQ", title: "BDX I/O 2017 - Les nouveautés de React 16 - Fiber" },
    { id: "H2KWVDH64EY", title: "Jug Summer Camp 2018 - UX : les formulaires" },
    { id: "jnxkdHo8OEk", title: "Breizh Camp 2019 - UX : les formulaires" }
  ];

  return values.page === "talks" ? (
    <div className={styles.Talks}>
      {talks.map(talk => (
        <iframe
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={styles.Talk}
          frameBorder="0"
          height="315"
          key={talk.id}
          src={"https://www.youtube.com/embed/" + talk.id}
          title={talk.title}
          width="560"
        ></iframe>
      ))}
    </div>
  ) : null;
};

Talks.propTypes = {};

export default Talks;

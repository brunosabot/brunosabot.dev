import React from "react";
import useSeo from "../hooks/useSeo";
import Talk from "../ui/talks/Talk";
import styles from "./Talks.module.css";

const Talks = () => {
  useSeo("Talks - Bruno Sabot", "All the conference talks given by Bruno Sabot. Check it out!");

  const talks = [
    {
      id: 1,
      conference: "Snowcamp",
      language: "🇫🇷",
      title: "L'intégration, ce purgatoire",
      date: "2020-01-23",
      slides: "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE"
    },
    {
      id: "jnxkdHo8OEk",
      conference: "Breizh Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2019-03-21",
      slides: "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA"
    },
    {
      id: "H2KWVDH64EY",
      conference: "Jug Summer Camp",
      language: "🇫🇷",
      title: "UX : les formulaires",
      date: "2018-09-14",
      slides: "https://drive.google.com/open?id=1S2RmcMKZ74Bhc4IQUMm7-xDjVwD-_UCFc5iWCEdy5S8"
    },
    {
      id: "h0MAi-1GdZQ",
      conference: "BDX I/O",
      language: "🇫🇷",
      title: "Les nouveautés de React 16 - Fiber",
      date: "2017-11-10",
      slides: "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po"
    }
  ];

  return (
    <main className={styles.Talks}>
      {talks.map(talk => (
        <Talk key={talk.id} talk={talk} />
      ))}
    </main>
  );
};

Talks.propTypes = {};

export default Talks;

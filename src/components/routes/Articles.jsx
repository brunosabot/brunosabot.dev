import React from "react";
import useSeo from "../hooks/useSeo";
import styles from "./Articles.module.css";

const Articles = () => {
  useSeo(
    "Articles - Bruno Sabot",
    "All articles publicated by Bruno Sabot on various plateforms. Check it out!"
  );

  const articles = [
    {
      title: "🇫🇷 Learning expedition Zenika: Ce qu'en pensent les devs",
      href:
        "https://blog.zenika.com/2019/07/30/learning-expedition-zenika-ce-quen-pensent-les-devs/",
      date: "2019-07-30"
    },
    {
      title: "🇺🇸 How I dropped Redux for the Context API",
      href: "https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179",
      date: "2019-07-25"
    }
  ];

  return (
    <div className={styles.Articles}>
      {articles.map(article => (
        <a
          className={styles.Article}
          href={article.href}
          key={article.href}
          rel="noopener noreferrer"
          target="_blank"
        >
          <span className={styles.Title}>{article.title}</span>
          <span className={styles.Date}>{article.date}</span>
        </a>
      ))}
    </div>
  );
};

Articles.propTypes = {};

export default Articles;

import React, { useContext } from "react";
import { AppContext } from "../providers/AppProvider";
import styles from "./Articles.module.css";

const Articles = () => {
  const { values } = useContext(AppContext);

  const articles = [
    {
      title: "How I dropped Redux for the Context API",
      href: "https://medium.com/@brunosabot/how-i-dropped-redux-for-the-context-api-7338d481e179",
      date: "2019-07-25"
    }
  ];

  return values.page === "articles" ? (
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
  ) : null;
};

Articles.propTypes = {};

export default Articles;

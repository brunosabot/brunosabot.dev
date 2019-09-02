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
      title: "🇺🇸 Deploy Your ZEIT Now App With GitHub Actions",
      href: "https://medium.com/better-programming/deploy-your-zeit-now-app-with-github-actions-ca3977806b40",
      date: "2019-09-02"
    },
    {
      title: "🇺🇸 A Complete Pre-Commit Workflow",
      href: "https://medium.com/better-programming/a-complete-pre-commit-workflow-cea6e34f0032",
      date: "2019-08-21"
    },
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

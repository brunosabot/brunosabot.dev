import React, { useContext } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { AppContext } from "../components/providers/AppProvider";
import About from "../components/routes/About";
import Articles from "../components/routes/Articles";
import Projects from "../components/routes/Projects";
import Talks from "../components/routes/Talks";
import styles from "./Pages.module.css";

const Pages = ({ Props }) => {
  const { values } = useContext(AppContext);

  return (
    <ReactCSSTransitionGroup
      component={React.Fragment}
      transitionName="page"
      transitionEnterTimeout={300}
      transitionLeaveTimeout={300}
    >
      {values.page === "about" ? (
        <main className={styles.Main}>
          <About />
        </main>
      ) : null}
      {values.page === "articles" ? (
        <main className={styles.Main}>
          <Articles />
        </main>
      ) : null}
      {values.page === "projects" ? (
        <main className={styles.Main}>
          <Projects />
        </main>
      ) : null}
      {values.page === "talks" ? (
        <main className={styles.Main}>
          <Talks />
        </main>
      ) : null}
    </ReactCSSTransitionGroup>
  );
};

Pages.propTypes = {};

export default Pages;

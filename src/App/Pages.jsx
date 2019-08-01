import React, { useContext } from "react";
import { AppContext } from "../components/providers/AppProvider";
import About from "../components/routes/About";
import Articles from "../components/routes/Articles";
import Projects from "../components/routes/Projects";
import Talks from "../components/routes/Talks";

const Pages = ({ Props }) => {
  const { values } = useContext(AppContext);

  return (
    <>
      {values.page === "about" ? <About /> : null}
      {values.page === "articles" ? <Articles /> : null}
      {values.page === "projects" ? <Projects /> : null}
      {values.page === "talks" ? <Talks /> : null}
    </>
  );
};

Pages.propTypes = {};

export default Pages;

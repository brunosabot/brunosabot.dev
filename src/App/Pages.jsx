import React, { useContext } from "react";
import { animated, useTransition } from "react-spring";
import { AppContext } from "../components/providers/AppProvider";
import About from "../components/routes/About";
import Articles from "../components/routes/Articles";
import Projects from "../components/routes/Projects";
import Talks from "../components/routes/Talks";

let reduceMotion = false;

(function() {
  const updateReduceMotion = () => {
    reduceMotion = mediaQuery.matches;
  };

  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", updateReduceMotion);
  updateReduceMotion();
})();

const Pages = () => {
  const { values } = useContext(AppContext);
  const transitions = useTransition(values.page, null, {
    config: {
      duration: reduceMotion ? 1 : undefined
    },
    initial: { opacity: 1, transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)" },
    from: { opacity: 0, transform: "scale3d(0.9, 0.9, 0.9) translate3d(0, 0, 0)" },
    enter: { opacity: 1, transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "scale3d(1.75, 1.75, 1.75) translate3d(0, 25%, 0)" }
  });

  if (["about", "articles", "projects", "talks"].indexOf(values.page) === -1) {
    window.location.href = "/about";
  }

  return transitions.map(({ item, key, props, state }) => (
    <animated.div
      style={{
        ...props,
        position: state === "update" ? null : "absolute",
        height: "calc(100% - 108px)",
        width: "100%",
        padding: "16px"
      }}
      key={key}
    >
      {item === "about" ? <About /> : null}
      {item === "articles" ? <Articles /> : null}
      {item === "projects" ? <Projects /> : null}
      {item === "talks" ? <Talks /> : null}
    </animated.div>
  ));
};

Pages.propTypes = {};

export default Pages;

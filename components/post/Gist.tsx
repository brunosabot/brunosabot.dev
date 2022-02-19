import React, { useEffect, useMemo, useState } from "react";
import classes from "./Post.module.css";
import PrismAsyncLight from "react-syntax-highlighter/dist/cjs/prism-async-light";
import darkStyle from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import lightStyle from "react-syntax-highlighter/dist/cjs/styles/prism/material-light";

interface IGistProps {
  lang: string;
  file?: string;
  code: string;
}

const Gist: React.FC<IGistProps> = ({ lang, file, code }) => {
  const [isReady, setIsReady] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (lang === "text") {
      setIsReady(true);
    } else {
      import(`react-syntax-highlighter/dist/cjs/languages/prism/${lang}`).then(
        (module) => {
          PrismAsyncLight.registerLanguage(lang, module.default);
          setIsReady(true);
        }
      );
    }
  }, [lang]);

  useEffect(() => {
    setIsDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  if (isReady === false) return null;

  return (
    <>
      {file ? (
        <div className={classes["blog-post-gist-filename"]}>{file}</div>
      ) : null}

      <PrismAsyncLight
        language={lang === "" ? "text" : lang}
        showLineNumbers={lang !== "text"}
        wrapLines
        wrapLongLines={lang === "text"}
        style={isDarkMode ? darkStyle : lightStyle}
      >
        {code}
      </PrismAsyncLight>
    </>
  );
};

export default Gist;

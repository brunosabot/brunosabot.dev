import classNames from "./Title.module.css";

export default function Title() {
  return (
    <h1 className={classNames.Title}>
      Hi, I'm <span className={classNames.Text}>Bruno</span>,<br />a Staff
      Software Engineer at{" "}
      <a
        className={classNames.Text}
        target="_blank"
        href="https://playplay.com/"
      >
        PlayPlay
      </a>{" "}
      and <span className={classNames.Text}>Bordeaux</span>-based home
      automation enthusiast
    </h1>
  );
}

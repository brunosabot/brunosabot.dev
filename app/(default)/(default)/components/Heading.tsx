import classNames from "./Heading.module.css";

export default function Heading() {
  return (
    <h1 className={classNames.Heading}>
      Hi, I&apos;m <span className={classNames.Text}>Bruno</span>,<br />a Staff
      Software Engineer at{" "}
      <a
        className={classNames.Text}
        target="_blank"
        href="https://playplay.com/"
        rel="noopener noreferrer"
      >
        PlayPlay
      </a>{" "}
      and <span className={classNames.Text}>Bordeaux</span>-based home
      automation enthusiast
    </h1>
  );
}

import classes from "./Intro.module.css";

export default async function Intro() {
  return (
    <div className={classes.Intro}>
      <h2 className={classes.IntroTitle}>
        Engineering Manager & Staff Software Engineer
      </h2>
      <h1 className={classes.IntroHeading}>Hello there, I&apos;m Bruno.</h1>
      <p className={classes.IntroDescription}>
        I am an Engineering Manager and Staff Software Engineer at{" "}
        <a
          href="https://playplay.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          PlayPlay
        </a>{" "}
        and Bordeaux-based home automation enthusiast
      </p>
    </div>
  );
}

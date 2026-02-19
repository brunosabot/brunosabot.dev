import List from "../../../../../../generic/typography/List";
import ListItem from "../../../../../../generic/typography/ListItem";
import ParagraphSecondary from "../../../../../../generic/typography/ParagraphSecondary";
import TitleSecondary from "../../../../../../generic/typography/TitleSecondary";
import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.Wrapper}>
      <TitleSecondary>About Heart Rate Zones</TitleSecondary>
      <ParagraphSecondary>
        This tool helps you define your training zones based on your Maximum
        Heart Rate (HRmax). Training in specific zones allows you to target
        different physiological adaptations.
      </ParagraphSecondary>

      <List>
        <ListItem>
          <strong>~ 65% (VT1 - Aerobic Threshold):</strong> The intensity where
          lactate begins to accumulate but can still be cleared effectively.
          Allows for long-duration effort.
        </ListItem>
        <ListItem>
          <strong>~ 85% (VT2 - Anaerobic Threshold):</strong> The intensity
          closely related to your critical speed. Efforts above this threshold
          are sustainable for much shorter durations.
        </ListItem>
        <ListItem>
          If you provide your <strong>Resting Heart Rate</strong>, the tool uses
          the <strong>Karvonen Formula</strong> (Heart Rate Reserve), which is
          generally considered more accurate as it takes your fitness level into
          account.
        </ListItem>
      </List>
    </section>
  );
}

import List from "../../../../../../generic/typography/List";
import ListItem from "../../../../../../generic/typography/ListItem";
import ParagraphSecondary from "../../../../../../generic/typography/ParagraphSecondary";
import Subtitle from "../../../../../../generic/typography/Subtitle";
import TitleSecondary from "../../../../../../generic/typography/TitleSecondary";
import classes from "./About.module.css";

export default function About() {
  return (
    <section className={classes.Wrapper}>
      <TitleSecondary>
        Endurance Index Calculator: Optimize Your Race Strategy
      </TitleSecondary>

      <ParagraphSecondary>
        The Endurance Index Tool is built for runners, endurance athletes, and
        coaches who want to unlock deeper insights into race performance and
        training. Effortlessly calculate your endurance index or estimate race
        duration—using science-backed formulas trusted by professionals. Whether
        you’re training for a marathon, half-marathon, or any distance, this
        tool helps you plan smarter and perform better.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Endurance Index Calculator:</strong> Determine your endurance
          capacity by entering your Maximal Aerobic Speed (MAS), race distance,
          and race time.
        </ListItem>
        <ListItem>
          <strong>Reverse Endurance Index Calculator:</strong> Predict your race
          duration for any distance based on your MAS and known endurance index.
        </ListItem>
        <ListItem>
          <strong>Personalized Insights:</strong> Benchmark your endurance,
          track progress, and tailor your training plan for maximum results.
        </ListItem>
        <ListItem>
          <strong>Coach-Friendly:</strong> Analyze and compare athletes’
          endurance profiles for more precise, individualized coaching.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All calculations are performed locally
          in your browser—your data never leaves your device.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>Setting realistic race goals and pacing strategies.</ListItem>
        <ListItem>
          Tracking endurance improvements over a season or training cycle.
        </ListItem>
        <ListItem>
          Comparing performance across different race distances.
        </ListItem>
        <ListItem>
          Coaches analyzing athletes’ strengths and weaknesses.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Take your training to the next level—use the Endurance Index Tool to
        make data-driven decisions, optimize performance, and achieve your
        running goals.
      </ParagraphSecondary>
    </section>
  );
}

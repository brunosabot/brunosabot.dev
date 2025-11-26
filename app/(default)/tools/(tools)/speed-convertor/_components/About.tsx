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
        Speed Converter Tool: Instantly Convert and Compare Speed Units
      </TitleSecondary>

      <ParagraphSecondary>
        The Speed Converter Tool is designed for athletes, travelers, engineers,
        and anyone who needs to convert speed or pace units quickly and
        accurately. Effortlessly switch between kilometers per hour (km/h),
        miles per hour (mph), meters per second (m/s), and pace formats like
        minutes per mile or kilometer. This tool eliminates the hassle of manual
        calculations, ensuring you always have the right conversion at your
        fingertips.
      </ParagraphSecondary>

      <Subtitle>Why Use a Speed Converter?</Subtitle>
      <List>
        <ListItem>
          <strong>Versatile Unit Support:</strong> Instantly convert between
          km/h, mph, m/s, min/km, min/mile, and more, covering all common speed
          and pace measurements.
        </ListItem>
        <ListItem>
          <strong>Accurate, Real-Time Results:</strong> See conversions update
          immediately as you enter your values, with no waiting or page reloads.
        </ListItem>
        <ListItem>
          <strong>Customizable Output:</strong> Choose your preferred units for
          both input and output, making the tool adaptable to your needs.
        </ListItem>
        <ListItem>
          <strong>User-Friendly Interface:</strong> The intuitive design ensures
          anyone can use the tool, from professional athletes to casual users.
        </ListItem>
        <ListItem>
          <strong>Privacy and Convenience:</strong> All calculations happen in
          your browser, so your data is never sent to a server.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Runners and cyclists comparing training speeds across different units.
        </ListItem>
        <ListItem>
          Travelers converting speed limits between metric and imperial systems.
        </ListItem>
        <ListItem>
          Engineers and students needing quick conversions for calculations or
          reports.
        </ListItem>
        <ListItem>
          Anyone tracking progress or setting goals in their preferred speed or
          pace format.
        </ListItem>
      </List>

      <ParagraphSecondary>
        With the Speed Converter Tool, you can convert and compare speeds in
        seconds, making it an essential resource for anyone working with speed
        or pace data.
      </ParagraphSecondary>
    </section>
  );
}

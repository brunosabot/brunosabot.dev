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
        Timestamp Converter: Effortlessly Convert UNIX Timestamps to Readable
        Dates
      </TitleSecondary>

      <ParagraphSecondary>
        The Timestamp Converter Tool is your go-to solution for translating UNIX
        timestamps into human-readable date and time formats—and vice versa.
        Designed for developers, analysts, and anyone working with time data,
        this tool simplifies the process of converting epoch time, making it
        accessible and understandable for all users. Instantly see the exact
        moment a timestamp represents, or generate a UNIX timestamp from any
        standard date and time.
      </ParagraphSecondary>

      <Subtitle>Why Use a Timestamp Converter?</Subtitle>
      <List>
        <ListItem>
          <strong>Bidirectional Conversion:</strong> Seamlessly convert UNIX
          timestamps to standard date formats and convert dates back to UNIX
          time in one place.
        </ListItem>
        <ListItem>
          <strong>Accurate and Instant Results:</strong> Get immediate feedback
          as you enter your timestamp or date, with no waiting or page reloads.
        </ListItem>
        <ListItem>
          <strong>Time Zone Support:</strong> Choose your preferred time zone to
          ensure conversions match your requirements.
        </ListItem>
        <ListItem>
          <strong>User-Friendly Interface:</strong> The clean and intuitive
          design makes converting time data easy for everyone—from experienced
          developers to those new to UNIX time.
        </ListItem>
        <ListItem>
          <strong>Copy Results Quickly:</strong> Copy converted dates or
          timestamps with a single click for use in your code, reports, or
          documentation.
        </ListItem>
        <ListItem>
          <strong>Privacy-Focused:</strong> All conversions happen locally in
          your browser, ensuring your data stays private and secure.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Debugging server logs and API responses that use UNIX timestamps.
        </ListItem>
        <ListItem>
          Analyzing time-series data for research or reporting.
        </ListItem>
        <ListItem>
          Learning about time representations in computing and web development.
        </ListItem>
        <ListItem>
          Converting historical dates to UNIX time for programming or database
          storage.
        </ListItem>
      </List>

      <ParagraphSecondary>
        With the Timestamp Converter Tool, you can confidently interpret and
        generate UNIX timestamps for any purpose. Bookmark this page for quick
        access whenever you need to decode or encode time!
      </ParagraphSecondary>
    </section>
  );
}

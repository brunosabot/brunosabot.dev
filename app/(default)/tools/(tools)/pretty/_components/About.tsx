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
        JSON Formatter & Pretty Print Tool: Instantly Beautify and Debug Your
        Data
      </TitleSecondary>

      <ParagraphSecondary>
        The JSON Pretty Tool makes it easy to format, beautify, and inspect your
        JSON data for enhanced readability and error detection. Instantly
        transform compact or minified JSON into a clean, indented
        structure—perfect for developers, data analysts, and anyone working with
        APIs or configuration files. Whether you’re debugging, reviewing, or
        sharing JSON, this tool ensures your data is always clear and
        accessible.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Instant JSON Formatting:</strong> Paste your minified or messy
          JSON and see it instantly beautified with proper indentation and
          structure.
        </ListItem>
        <ListItem>
          <strong>Error Highlighting:</strong> Quickly spot syntax errors and
          invalid JSON with real-time feedback.
        </ListItem>
        <ListItem>
          <strong>Copy & Export:</strong> Easily copy the formatted JSON or
          export it for use in your projects or documentation.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly Interface:</strong> Clean, intuitive UI
          designed for productivity and ease of use.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All formatting happens locally in your
          browser—your data never leaves your device.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Debugging and reviewing API responses in web development.
        </ListItem>
        <ListItem>
          Beautifying configuration files for easier editing and collaboration.
        </ListItem>
        <ListItem>
          Teaching and learning JSON structure in coding classrooms or
          tutorials.
        </ListItem>
        <ListItem>
          Sharing readable JSON with teammates, clients, or stakeholders.
        </ListItem>
        <ListItem>
          Validating JSON before deploying to production systems.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Experience effortless JSON formatting and error detection—streamline
        your workflow and make your data more readable with the JSON Pretty
        Tool.
      </ParagraphSecondary>
    </section>
  );
}

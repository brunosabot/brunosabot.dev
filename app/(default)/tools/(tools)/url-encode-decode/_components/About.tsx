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
        URL Encode & Decode Tool: Instantly Prepare and Read Web Data Safely
      </TitleSecondary>

      <ParagraphSecondary>
        The URL Encode & Decode Tool makes it easy to convert text to and from
        safe, web-ready URL formats. Instantly encode special characters or
        decode encoded URLs for seamless web communication, data sharing, and
        debugging. Whether you’re a developer, marketer, or student, this tool
        ensures your links and data are always valid, readable, and secure—all
        with privacy in mind.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Instant Encoding & Decoding:</strong> Convert URLs or text
          with special characters in real time for fast, accurate results.
        </ListItem>
        <ListItem>
          <strong>Error Handling:</strong> Automatically detects and manages
          malformed input, ensuring reliable conversions every time.
        </ListItem>
        <ListItem>
          <strong>Copy & Export:</strong> Easily copy encoded or decoded output
          for use in web apps, APIs, or documentation.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly Interface:</strong> Simple, intuitive
          design for quick adoption by any user.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All operations happen locally in your
          browser—no data is sent to any server.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Preparing URLs for safe transmission in APIs, forms, or web apps.
        </ListItem>
        <ListItem>
          Debugging and inspecting encoded URLs in web development.
        </ListItem>
        <ListItem>
          Teaching and learning about URL encoding standards and web safety.
        </ListItem>
        <ListItem>
          Sharing links in emails, chats, or documentation without breaking
          formatting.
        </ListItem>
        <ListItem>
          Ensuring compliance with web standards for internationalization and
          special characters.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Simplify your workflow and guarantee safe, readable URLs every time with
        the URL Encode & Decode Tool—your essential resource for web data
        preparation and debugging.
      </ParagraphSecondary>
    </section>
  );
}

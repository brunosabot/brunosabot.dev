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
        Base64 Text Converter: Instantly Encode & Decode Strings
      </TitleSecondary>

      <ParagraphSecondary>
        The Base64 Text Converter is a simple, efficient tool for encoding and
        decoding text using the Base64 standard. Whether you’re a developer
        debugging an API, a data analyst handling encoded strings, or just need
        to convert text for web or email, this tool offers fast, accurate
        transformations—right in your browser, with no data ever sent to a
        server.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Instant Text Conversion:</strong> Convert plain text to and
          from Base64 format in real time.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly:</strong> Perfect for handling API tokens,
          configuration strings, and debugging encoded data.
        </ListItem>
        <ListItem>
          <strong>Copy & Paste Ready:</strong> Quickly copy results for use in
          your code, terminal, or documentation.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All operations happen locally in your
          browser—your text never leaves your device.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Encoding credentials or API keys for HTTP headers (Basic Auth).
        </ListItem>
        <ListItem>
          Decoding Base64 strings found in logs, URLs, or configuration files.
        </ListItem>
        <ListItem>
          Obfuscating simple text data for transmission or storage.
        </ListItem>
        <ListItem>
          Learning about data encoding and how Base64 representation works.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Streamline your workflow and ensure safe, efficient text handling with
        the Base64 Text Converter—your trusted resource for quick string
        transformations.
      </ParagraphSecondary>
    </section>
  );
}

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
        UUID Generation Tool: Instantly Create Unique Identifiers
      </TitleSecondary>

      <ParagraphSecondary>
        The UUID Generation Tool provides a fast, secure, and
        standards-compliant way to generate Universally Unique Identifiers
        (UUIDs) for your applications, databases, and development workflows.
        Whether you need a single UUID or a batch for bulk operations, this tool
        ensures you always get collision-resistant, globally unique
        values—essential for distributed systems, database keys, session tokens,
        and more.
      </ParagraphSecondary>

      <Subtitle>Why Use a UUID Generator?</Subtitle>
      <List>
        <ListItem>
          <strong>Instant Generation:</strong> Create one or multiple UUIDs with
          a single click—no waiting or page reloads.
        </ListItem>
        <ListItem>
          <strong>Standards-Compliant:</strong> Generates UUIDs according to RFC
          4122, ensuring compatibility with modern systems and libraries.
        </ListItem>
        <ListItem>
          <strong>Multiple Versions Supported:</strong> Choose from UUID v1, v4,
          and other versions as needed for your specific use case.
        </ListItem>
        <ListItem>
          <strong>Privacy and Security:</strong> All generation happens locally
          in your browser, so your data and generated UUIDs are never sent to a
          server.
        </ListItem>
        <ListItem>
          <strong>Easy Copy and Export:</strong> Quickly copy UUIDs to your
          clipboard or export them for use in code, databases, or documentation.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly Interface:</strong> The simple, intuitive
          design makes generating and managing UUIDs effortless for developers
          and non-developers alike.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Assigning unique keys to database records or distributed data.
        </ListItem>
        <ListItem>
          Generating session tokens and authentication credentials.
        </ListItem>
        <ListItem>
          Creating unique identifiers for files, devices, or transactions.
        </ListItem>
        <ListItem>
          Ensuring uniqueness in microservices, APIs, and cloud architectures.
        </ListItem>
        <ListItem>
          Testing and prototyping applications that require unique IDs.
        </ListItem>
      </List>

      <ParagraphSecondary>
        With the UUID Generation Tool, you can generate secure, unique
        identifiers in seconds—no setup or registration required. Streamline
        your development process and guarantee uniqueness across all your
        systems.
      </ParagraphSecondary>
    </section>
  );
}

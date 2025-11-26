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
        SHA Hash Generator: Instantly Secure and Verify Your Data
      </TitleSecondary>

      <ParagraphSecondary>
        The SHA Hash Generation Tool empowers you to create secure,
        cryptographic hashes for any string or file. Instantly generate SHA-1,
        SHA-256, SHA-384, or SHA-512 hashes to protect sensitive information,
        verify data integrity, and support security best practices. Whether
        you’re a developer, IT professional, or security enthusiast, this tool
        delivers fast, reliable hashing—all within your browser for maximum
        privacy.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Multiple SHA Algorithms:</strong> Choose from SHA-1, SHA-224,
          SHA-256, SHA-384, and SHA-512 for flexible security options.
        </ListItem>
        <ListItem>
          <strong>Instant Hashing:</strong> Input your data and receive
          cryptographic hashes instantly—no waiting or page reloads.
        </ListItem>
        <ListItem>
          <strong>Copy & Export:</strong> Easily copy your hash values for use
          in code, documentation, or verification workflows.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly Interface:</strong> Simple, intuitive
          design for effortless hashing and quick adoption.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All hashing is performed locally in
          your browser—your data never leaves your device.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>Password hashing and secure storage.</ListItem>
        <ListItem>Verifying file integrity and detecting tampering.</ListItem>
        <ListItem>
          Generating digital signatures and authentication tokens.
        </ListItem>
        <ListItem>
          Data verification for APIs, backups, and distributed systems.
        </ListItem>
        <ListItem>
          Educational purposes: teaching cryptography and security concepts.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Strengthen your data security and streamline your workflow with the SHA
        Hash Generation Tool—your trusted solution for fast, private, and
        reliable cryptographic hashing.
      </ParagraphSecondary>
    </section>
  );
}

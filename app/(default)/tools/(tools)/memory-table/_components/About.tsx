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
        Memory Table: Master the Major System and Improve Your Memory
      </TitleSecondary>

      <ParagraphSecondary>
        The Memory Table tool is designed to help you practice and master the
        Major System, a powerful mnemonic technique used to memorize numbers. By
        associating numbers with specific sounds and words, you can create vivid
        mental images that make recalling long sequences of digits effortless.
        Use this tool to build your own peg list (0-99) and test your recall in
        a fun, interactive way.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Customizable Peg List:</strong> Create and save your own
          associations for numbers 0-99.
        </ListItem>
        <ListItem>
          <strong>Interactive Practice Mode:</strong> Test your memory by
          matching numbers to your keywords and vice versa.
        </ListItem>
        <ListItem>
          <strong>Instant Feedback:</strong> Get immediate validation to
          reinforce your learning.
        </ListItem>
        <ListItem>
          <strong>Persistent Storage:</strong> Your table is saved locally in
          your browser, so you can pick up where you left off.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All data remains on your device.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Memorizing phone numbers, dates, and credit card numbers.
        </ListItem>
        <ListItem>
          Learning the Major System for mental feats and competitions.
        </ListItem>
        <ListItem>Improving general memory and cognitive function.</ListItem>
        <ListItem>
          Students and professionals needing to recall numerical data quickly.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Unlock the full potential of your memory—start building your Memory
        Table today and turn numbers into unforgettable images.
      </ParagraphSecondary>
    </section>
  );
}

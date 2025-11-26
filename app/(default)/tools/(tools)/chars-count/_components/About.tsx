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
        Character Counter: Real-Time Text Analysis
      </TitleSecondary>

      <ParagraphSecondary>
        The Character Counter is a simple yet powerful tool for analyzing your
        text in real-time. Whether you're writing a tweet, a blog post, or an
        essay, instantly track your word count, character count, and estimated
        reading time to ensure your content hits the mark.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Word Count:</strong> Track the total number of words in your
          text.
        </ListItem>
        <ListItem>
          <strong>Character Count:</strong> See the total number of characters,
          including spaces.
        </ListItem>
        <ListItem>
          <strong>Non-Whitespace Characters:</strong> Get a precise count of
          characters excluding spaces, useful for specific formatting
          requirements.
        </ListItem>
        <ListItem>
          <strong>Reading Time:</strong> Estimate how long it will take for an
          average reader to consume your text.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Drafting social media posts within character limits (e.g., Twitter/X).
        </ListItem>
        <ListItem>
          Writing essays or articles with strict word count requirements.
        </ListItem>
        <ListItem>
          Optimizing blog posts for reading time and engagement.
        </ListItem>
        <ListItem>
          Checking text length for SMS or other messaging platforms.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Streamline your writing process with the Character Counter—your instant
        feedback loop for text length and readability.
      </ParagraphSecondary>
    </section>
  );
}

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
        Cubic-Bezier Generator: Visualize & Create Custom Animations
      </TitleSecondary>

      <ParagraphSecondary>
        The Cubic-Bezier Generator is a precise tool for creating custom CSS
        transition timing functions. By adjusting the X and Y coordinates of the
        two control points (P1 and P2), you can define exactly how your
        animation accelerates and decelerates. Instantly visualize the curve and
        copy the generated code to create smooth, natural motion for your web
        projects.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Precise Control:</strong> Manually input X and Y coordinates
          for both control points to fine-tune your curve.
        </ListItem>
        <ListItem>
          <strong>Visual Comparison:</strong> Compare your custom curve against
          standard timing functions like linear, ease-in, ease-out, and
          ease-in-out.
        </ListItem>
        <ListItem>
          <strong>Instant Feedback:</strong> See the animation play out in real
          time as you adjust the values.
        </ListItem>
        <ListItem>
          <strong>CSS Ready:</strong> The tool generates the exact
          cubic-bezier() function needed for your CSS
          `transition-timing-function` or `animation-timing-function`.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Creating bouncy or elastic animations that standard keywords can't
          achieve.
        </ListItem>
        <ListItem>
          Matching animation timing to specific brand guidelines or motion
          design specs.
        </ListItem>
        <ListItem>
          Understanding how the cubic-bezier curve affects animation speed over
          time.
        </ListItem>
        <ListItem>
          Debugging jerky or unnatural animations by visualizing their timing
          function.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Master the art of motion on the web with the Cubic-Bezier Generator—your
        essential utility for crafting perfect CSS animations.
      </ParagraphSecondary>
    </section>
  );
}

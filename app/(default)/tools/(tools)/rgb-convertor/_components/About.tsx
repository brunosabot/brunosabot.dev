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
        Color Converter Tool: Effortlessly Convert Between RGB, HEX, and More
      </TitleSecondary>

      <ParagraphSecondary>
        The Color Converter Tool is your essential resource for converting
        colors between popular formats such as RGB, HEX, HSL, and CMYK. Perfect
        for designers, developers, and anyone working with digital color, this
        tool enables you to seamlessly translate color codes for web design,
        graphic projects, and application development. Say goodbye to manual
        calculations and ensure color accuracy every time.
      </ParagraphSecondary>

      <Subtitle>Why Use a Color Converter?</Subtitle>
      <List>
        <ListItem>
          <strong>Multi-Format Support:</strong> Instantly convert colors
          between RGB, HEX, HSL, and CMYK, covering all your design and
          development needs.
        </ListItem>
        <ListItem>
          <strong>Real-Time Conversion:</strong> See your color values update
          immediately as you enter or adjust inputs, streamlining your workflow.
        </ListItem>
        <ListItem>
          <strong>Precision and Consistency:</strong> Eliminate guesswork and
          ensure your colors match perfectly across different platforms and
          tools.
        </ListItem>
        <ListItem>
          <strong>User-Friendly Design:</strong> The intuitive interface makes
          color conversion accessible for everyone, from professionals to
          hobbyists.
        </ListItem>
        <ListItem>
          <strong>Privacy and Security:</strong> All conversions are handled
          locally in your browser, so your color data stays private.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Web designers converting brand colors between HEX and RGB for
          consistent site styling.
        </ListItem>
        <ListItem>
          Developers ensuring accurate color representation in CSS, SVG, and
          graphic assets.
        </ListItem>
        <ListItem>
          Artists and illustrators managing palettes across different digital
          formats.
        </ListItem>
        <ListItem>
          Anyone needing to quickly check or convert a color value for digital
          projects.
        </ListItem>
      </List>

      <ParagraphSecondary>
        With the Color Converter Tool, you can achieve perfect color consistency
        and streamline your creative process—no more manual conversions or
        mismatched hues.
      </ParagraphSecondary>
    </section>
  );
}

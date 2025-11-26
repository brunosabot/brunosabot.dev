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
        Bridging Design: Effortlessly Convert Photoshop Shadows to CSS with
        Visualization
      </TitleSecondary>

      <ParagraphSecondary>
        The Photoshop Shadow Tool empowers designers and developers to create
        stunning, realistic drop shadows for web projects—no Photoshop required!
        Instantly preview, customize, and copy CSS shadow code that mimics the
        look and feel of professional design tools. Perfect for buttons, cards,
        images, and UI elements, all in your browser with zero hassle.
      </ParagraphSecondary>

      <Subtitle>Key Features</Subtitle>
      <List>
        <ListItem>
          <strong>Live Shadow Preview:</strong> See your shadow updates in real
          time as you tweak parameters.
        </ListItem>
        <ListItem>
          <strong>Full Customization:</strong> Adjust offset, blur, spread,
          color, and opacity for pixel-perfect results.
        </ListItem>
        <ListItem>
          <strong>Copy-Ready CSS:</strong> Instantly copy the generated CSS code
          for use in any project.
        </ListItem>
        <ListItem>
          <strong>Designer & Developer Friendly:</strong> Intuitive interface
          for rapid prototyping and handoff.
        </ListItem>
        <ListItem>
          <strong>Privacy First:</strong> All calculations and previews happen
          locally—your designs stay private.
        </ListItem>
      </List>

      <Subtitle>Common Use Cases</Subtitle>
      <List>
        <ListItem>
          Designing beautiful buttons, cards, and UI elements with professional
          shadows.
        </ListItem>
        <ListItem>
          Enhancing web layouts with subtle or dramatic shadow effects.
        </ListItem>
        <ListItem>
          Quickly generating and sharing CSS with teammates or clients.
        </ListItem>
        <ListItem>
          Learning about shadow properties and CSS best practices.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Elevate your web design instantly—use the Photoshop Shadow Tool to
        create eye-catching, professional shadows with ease.
      </ParagraphSecondary>
    </section>
  );
}

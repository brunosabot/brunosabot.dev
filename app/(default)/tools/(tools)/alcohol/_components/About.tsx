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
        Alcohol Content Calculator: Instantly Know What’s in Your Drink
      </TitleSecondary>

      <ParagraphSecondary>
        The Alcohol Content Calculator is a simple tool designed to help you
        understand exactly how much alcohol is in your beverage. By inputting
        the volume and alcohol percentage (ABV), you can instantly calculate the
        quantity of pure alcohol and the number of standard drink units.
      </ParagraphSecondary>

      <Subtitle>How It Works</Subtitle>
      <List>
        <ListItem>
          <strong>Input Volume:</strong> Enter the total amount of liquid in
          milliliters (ml).
        </ListItem>
        <ListItem>
          <strong>Input Strength:</strong> Enter the alcohol by volume (ABV)
          percentage.
        </ListItem>
        <ListItem>
          <strong>Get Results:</strong> The tool calculates the pure alcohol
          content (displayed in ml/grams) and the relative drink quantity in
          standard units.
        </ListItem>
      </List>

      <Subtitle>Understanding the Results</Subtitle>
      <List>
        <ListItem>
          <strong>Pure Alcohol Quantity:</strong> This value represents the
          actual amount of ethanol in your drink.
        </ListItem>
        <ListItem>
          <strong>Relative Drink Quantity:</strong> This converts the pure
          alcohol amount into standard "units" (based on ~12.7g of alcohol per
          unit), helping you compare different drinks regardless of their size
          or strength.
        </ListItem>
      </List>

      <ParagraphSecondary>
        Whether you're tracking your intake or just curious, this calculator
        provides a clear, objective measure of alcohol content, removing the
        guesswork from mixing different volumes and strengths.
      </ParagraphSecondary>
    </section>
  );
}

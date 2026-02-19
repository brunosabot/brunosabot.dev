import ResultCard from "../../../../../../generic/common/ResultCard";
import ResultItem from "../../../../../../generic/common/ResultItem";
import List from "../../../../../../generic/typography/List";
import ListItem from "../../../../../../generic/typography/ListItem";

export default function SyntaxGuide() {
  return (
    <ResultCard>
      <ResultItem
        label="Syntax Guide"
        unit=""
        value={
          <List>
            <ListItem>
              <strong>Run:</strong> <code>50' @ 6:30</code> (50 mins at 6:30/km)
            </ListItem>
            <ListItem>
              <strong>Format:</strong> <code>MM:SS</code> for pace,{" "}
              <code>X' Y"</code> for duration.
            </ListItem>
            <ListItem>
              <strong>Separator:</strong> Uses <code>+</code> or{" "}
              <code>newline</code> to join blocks.
            </ListItem>
            <ListItem>
              <strong>Repeats:</strong> <code>Nx ...</code> (e.g.{" "}
              <code>5x 1' @ 4:00 r1'</code>)
            </ListItem>
            <ListItem>
              <strong>Recovery:</strong> <code>r</code> (reps) and{" "}
              <code>R</code> (series).
            </ListItem>
            <ListItem>
              <strong>Nested:</strong> <code>2x 5x ...</code> supported.
            </ListItem>
          </List>
        }
      />
    </ResultCard>
  );
}

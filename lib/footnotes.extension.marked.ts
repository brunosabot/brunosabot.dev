import { MarkedExtension, Tokens } from "marked";

const footnoteMatch = /^\(\^([^\)]+)\):([\s\S]*)$/;
const referenceMatch = /\[\^([^\]]+)\](?!\()/g;
const referencePrefix = "footnotes-ref";
const footnotePrefix = "footnotes";

const footnoteTemplate = (ref: string, text: string) => {
  return `<span id="${footnotePrefix}:${ref}">
    <a href="#${referencePrefix}:${ref}" style="text-decoration: none">${ref}↩</a>
    ${text}
  </span>`;
};
const referenceTemplate = (ref: string) => {
  return `<sup id="${referencePrefix}:${ref}"><a href="#${footnotePrefix}:${ref}">${ref}</a></sup>`;
};
const interpolateReferences = (text: string) => {
  return text.replace(referenceMatch, (_, ref) => {
    return referenceTemplate(ref);
  });
};
const interpolateFootnotes = (text: string) => {
  const found = text.match(footnoteMatch);
  if (!found) {
    return text;
  }
  return text.replace(footnoteMatch, (_, value, text) => {
    return footnoteTemplate(value, text);
  });
};

const footnotesExtension: MarkedExtension = {
  renderer: {
    paragraph(token: Tokens.Paragraph) {
      const text = this.parser.parseInline(token.tokens);
      const paragraphWithRef = interpolateReferences(
        interpolateFootnotes(text),
      );

      return `<p>${paragraphWithRef}</p>`;
    },
    text(token: Tokens.Escape | Tokens.Tag | Tokens.Text) {
      if ("tokens" in token) {
        if (token.tokens === undefined) {
          return "";
        }

        if (token.tokens.length === 0) {
          return "";
        }
        const text = this.parser.parseInline(token.tokens);
        return interpolateReferences(interpolateFootnotes(text));
      } else {
        return interpolateReferences(interpolateFootnotes(token.text));
      }
    },
  },
};

export default footnotesExtension;

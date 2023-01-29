import { marked } from "marked";

const footnoteMatch = /^\(\^([^\)]+)\):([\s\S]*)$/;
const referenceMatch = /\[\^([^\]]+)\](?!\()/g;
const referencePrefix = "footnotes-ref";
const footnotePrefix = "footnotes";

const footnoteTemplate = (ref: string, text: string) => {
  return `<span id="${footnotePrefix}:${ref}">
    <a href="#${referencePrefix}:${ref}" style="text-decoration: none">${ref}↩</a>
    ${marked.parseInline(text)}
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

const footnotes: Partial<Omit<marked.Renderer<false>, "options">> = {
  paragraph(text) {
    // @ts-ignore
    return marked.Renderer.prototype.paragraph.apply(null, [
      interpolateReferences(interpolateFootnotes(text)),
    ]);
  },
  text(text) {
    // @ts-ignore
    return marked.Renderer.prototype.text.apply(null, [
      interpolateReferences(interpolateFootnotes(text)),
    ]);
  },
};

export default footnotes;

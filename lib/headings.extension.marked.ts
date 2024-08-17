import { MarkedExtension, Tokens } from "marked";

const headingsExtension: MarkedExtension = {
  renderer: {
    heading({ text, tokens, depth, ...rest }: Tokens.Heading) {
      const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");

      return `
      <h${depth + 2} class="anchor-target">
        <a name="${escapedText}" aria-label="Get an anchor to this title" class="anchor" href="#${escapedText}">
          <svg viewBox="0 0 24 24" height="24px" width="24px"><use xlink:href="#linkVariant" /></svg>
        </a>
        ${text}
      </h${depth + 2}>`;
    },
  },
};

export default headingsExtension;

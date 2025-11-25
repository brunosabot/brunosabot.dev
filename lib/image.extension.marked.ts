import { MarkedExtension, Tokens } from "marked";

const imageExtension: MarkedExtension = {
  renderer: {
    image({ href, text, title }: Tokens.Image) {
      return `<img src="${href}" alt="${text}" title="${title}" decoding="async" loading="lazy" />`;
    },
  },
};

export default imageExtension;

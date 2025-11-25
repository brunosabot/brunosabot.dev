import { MarkedExtension, Tokens } from "marked";
import Prism from "prismjs";

import { MAP_LANGUAGE } from "./code";

const codeExtension: MarkedExtension = {
  renderer: {
    code({ lang, text }: Tokens.Code) {
      const language = lang ? lang.toLowerCase() : "text";
      const html = text;

      const grammar = Object.values(MAP_LANGUAGE).find(
        (l) => l.name === language,
      )?.prism;
      const output = Prism.highlight(
        html,
        grammar ?? Prism.languages.text,
        language ?? "text",
      );

      return `<div class="hljs-filename"></div><pre><code class="language-${language}">${output}</code></pre>`;
    },
  },
};

export default codeExtension;

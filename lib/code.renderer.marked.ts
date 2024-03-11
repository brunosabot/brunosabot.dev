import { MAP_LANGUAGE } from "./code";
import Prism from "prismjs";

const renderer = {
  code(html: string, language?: string) {
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
};

export default renderer;

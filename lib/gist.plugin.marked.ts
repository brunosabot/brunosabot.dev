import { MarkedExtension } from "marked";
import Prism from "prismjs";

import { MAP_LANGUAGE } from "./code";

type GistToken = {
  data: {
    file: string;
    html: string;
    language: string;
  }[];
  raw: string;
  type: "gist";
  url: string;
};

function getLanguage(inputLanguage: string | undefined) {
  if (inputLanguage === undefined) return "text";
  if (inputLanguage === "") return "text";

  if (inputLanguage in MAP_LANGUAGE) {
    return MAP_LANGUAGE[inputLanguage as keyof typeof MAP_LANGUAGE].name;
  }

  return "text";
}

async function loadGist(id: string): Promise<[string[], { files: string[] }]> {
  const url = `https://gist.github.com/${id}`;
  const jsonResponse = await fetch(`${url}.json`, {
    next: { revalidate: 3600 },
  });

  const jsonData = await (jsonResponse.json() as Promise<{ files: string[] }>);

  const data = await Promise.all(
    jsonData.files.map((file) =>
      fetch(`${url}/raw/?file=${file}`, {
        next: { revalidate: 3600 },
      }).then((r) => r.text()),
    ),
  );

  return [data, jsonData];
}

const gistPlugin: MarkedExtension = {
  async: true,
  extensions: [
    {
      level: "block",
      name: "gist",
      renderer(token) {
        return (token as GistToken).data.reduce(
          (acc, { file, html, language }) => {
            const grammar = Object.values(MAP_LANGUAGE).find(
              (l) => l.name === language,
            )?.prism;
            const output = Prism.highlight(
              html,
              grammar ?? Prism.languages.text,
              language,
            );
            let newAcc = acc;
            if (file) {
              newAcc += `<div class="hljs-filename">${file}</div>`;
            }
            newAcc += `<pre><code class="language-${language}">${output}</code></pre>`;
            return newAcc;
          },
          "",
        );
      },
      start(src) {
        return src.indexOf("`gist:");
      },
      tokenizer(src) {
        const rule = /^`gist:\s*([a-z0-9]+\/[0-9a-f]+)`/;
        const match = rule.exec(src);
        if (match) {
          return {
            data: [],
            raw: match[0],
            type: "gist",
            url: match[1],
          };
        }
      },
    },
  ],
  async walkTokens(token) {
    if (token.type === "gist") {
      const [data, jsonData] = await loadGist(token.url);
      token.data = data.map((d, i) => {
        const ext = jsonData.files[i].split(".");
        const language = getLanguage(
          ext.length ? ext[ext.length - 1] : undefined,
        );
        return {
          file: jsonData.files[i],
          html: d.trim(),
          language: language,
        };
      });
    }
  },
};

export default gistPlugin;

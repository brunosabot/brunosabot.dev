import { MarkedExtension, marked } from "marked";
import Prism from "prismjs";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-json";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-nginx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-yaml";
import "prismjs/themes/prism-dark.css";

type GistToken = {
  type: "gist";
  raw: string;
  url: string;
  data: {
    file: string;
    html: string;
    language: string;
  }[];
};

const MAP_LANGUAGE = {
  yml: { name: "yaml", prism: Prism.languages.yaml },
  Dockerfile: { name: "docker", prism: Prism.languages.docker },
  eslintrc: { name: "json", prism: Prism.languages.json },
  js: { name: "javascript", prism: Prism.languages.javascript },
  ts: { name: "typescript", prism: Prism.languages.typescript },
  tsx: { name: "tsx", prism: Prism.languages.tsx },
  stylelintrc: { name: "json", prism: Prism.languages.json },
  prettierrc: { name: "json", prism: Prism.languages.json },
  json: { name: "json", prism: Prism.languages.json },
  md: { name: "markdown", prism: Prism.languages.markdown },
  nginx: { name: "nginx", prism: Prism.languages.nginx },
};

async function loadGist(id: string): Promise<[string[], { files: string[] }]> {
  const url = `https://gist.github.com/${id}`;
  const jsonResponse = await fetch(`${url}.json`);

  const jsonData = await (jsonResponse.json() as Promise<{ files: string[] }>);

  const data = await Promise.all(
    jsonData.files.map((file) =>
      fetch(`${url}/raw/?file=${file}`).then((r) => r.text()),
    ),
  );

  return [data, jsonData];
}

function getLanguage(inputLanguage: string | undefined) {
  if (inputLanguage === undefined) return "text";
  if (inputLanguage === "") return "text";

  if (inputLanguage in MAP_LANGUAGE) {
    return MAP_LANGUAGE[inputLanguage as keyof typeof MAP_LANGUAGE].name;
  }

  return "text";
}

const gistPlugin: MarkedExtension = {
  extensions: [
    {
      name: "gist",
      level: "block",
      start(src) {
        return src.indexOf("`gist:");
      },
      tokenizer(src) {
        const rule = /^`gist:\s*([a-z0-9]+\/[0-9a-f]+)`/;
        const match = rule.exec(src);
        if (match) {
          return {
            type: "gist",
            raw: match[0],
            url: match[1],
            data: [],
          };
        }
      },
      renderer(token) {
        return (token as GistToken).data.reduce(
          (acc, { html, language, file }) => {
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
    },
  ],
  async: true,
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

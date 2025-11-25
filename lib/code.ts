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

export const MAP_LANGUAGE = {
  Dockerfile: { name: "docker", prism: Prism.languages.docker },
  eslintrc: { name: "json", prism: Prism.languages.json },
  js: { name: "javascript", prism: Prism.languages.javascript },
  json: { name: "json", prism: Prism.languages.json },
  md: { name: "markdown", prism: Prism.languages.markdown },
  nginx: { name: "nginx", prism: Prism.languages.nginx },
  prettierrc: { name: "json", prism: Prism.languages.json },
  stylelintrc: { name: "json", prism: Prism.languages.json },
  ts: { name: "typescript", prism: Prism.languages.typescript },
  tsx: { name: "tsx", prism: Prism.languages.tsx },
  yaml: { name: "yaml", prism: Prism.languages.yaml },
  yml: { name: "yaml", prism: Prism.languages.yaml },
};

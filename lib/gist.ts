import fetch from "node-fetch";
import visit from "async-unist-util-visit";

interface IPosition {
  line: number;
  column: number;
  offset: number;
}

interface IAST {
  children?: IAST[];
  depth?: number;
  meta?: string | null;
  lang?: string;
  type: string;
  value?: string;
  name?: string;
  attributes?: IAST[];
  position?: {
    start: IPosition;
    end: IPosition;
  };
}

interface GistJsonResponse {
  files: string[];
}

const MAP_LANGUAGE = {
  yml: "yaml",
  Dockerfile: "docker",
  eslintrc: "json",
  js: "javascript",
  ts: "typescript",
  stylelintrc: "json",
  prettierrc: "json",
  md: "markdown",
};

async function loadGist(id: string): Promise<[string[], GistJsonResponse]> {
  const url = `https://gist.github.com/${id}`;
  const jsonResponse = await fetch(`${url}.json`);
  const jsonData = await (jsonResponse.json() as Promise<GistJsonResponse>);

  const data = await Promise.all(
    jsonData.files.map((file) =>
      fetch(`${url}/raw/?file=${file}`).then((r) => r.text())
    )
  );

  return [data, jsonData];
}

function getLanguage(inputLanguage: string | undefined) {
  if (inputLanguage === undefined) return "text";
  if (inputLanguage === "") return "text";

  if (inputLanguage in MAP_LANGUAGE) {
    return MAP_LANGUAGE[inputLanguage as keyof typeof MAP_LANGUAGE];
  }

  return inputLanguage;
}

function getGistAST(value: string, type: string, file?: string): IAST {
  if (file === undefined) return { type };

  console.log(typeof file, file);

  return {
    type: "mdxJsxFlowElement",
    name: "Gist",
    attributes: [
      { type: "mdxJsxAttribute", name: "file", value: file },
      { type: "mdxJsxAttribute", name: "code", value: value.trim() },
      {
        type: "mdxJsxAttribute",
        name: "lang",
        value: getLanguage(file.split(".").at(-1)),
      },
    ],
    children: [],
  };
}

async function loadAndTransformGist(parent: IAST, item: IAST): Promise<IAST> {
  if (item.value === undefined) return item;

  const gist = item.value.substring(5).trim();
  const [data, jsonData] = await loadGist(gist);

  if (data.length === 1) {
    return getGistAST(data[0], parent.type, jsonData.files[0]);
  }

  return {
    type: parent.type,
    children: data.map((file, index) =>
      getGistAST(file, parent.type, jsonData.files[index])
    ),
  };
}

const gist = () => async (ast: IAST) => {
  const promises: Promise<void>[] = [];

  const createGist = (node: IAST) => {
    if (node.children === undefined) return;
    if (node.children.length === 0) return;

    const hasGist = node.children.some(
      ({ type, value }) =>
        type === "inlineCode" && value?.startsWith("gist:") && value?.length > 5
    );

    if (hasGist) {
      const promise = loadAndTransformGist(node, node.children[0]).then(
        (newNode) => {
          Object.assign(node, newNode);

          if (node.children?.length === 0) {
            delete node.children;
          }
        }
      );

      promises.push(promise);
    }
  };

  await visit(ast, "paragraph", createGist);
  await Promise.all(promises);

  return;
};

export default gist;

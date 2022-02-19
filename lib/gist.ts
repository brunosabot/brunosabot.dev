import fetch from "node-fetch";
import visit from "async-unist-util-visit";

interface IAST {
  children?: IAST[];
  type: string;
  value?: string;
  name?: string;
  attributes?: IAST[];
}

interface GistJsonResponse {
  files: string[];
}

function buildUrl(value: string) {
  if (value.includes("/") === false) {
    throw new Error("Invalid format");
  }

  const [username, id] = value.split("/");

  return `https://gist.github.com/${username}/${id}`;
}

const MAP_LANGUAGE = {
  yml: "yaml",
  Dockerfile: "docker",
  eslintrc: "json",
  js: "javascript",
  ts: "typescript",
  stylelintrc: "json",
  prettierrc: "json",
};

function getLanguage(inputLanguage: string | undefined) {
  if (inputLanguage === undefined) return "text";

  if (inputLanguage in MAP_LANGUAGE) {
    return MAP_LANGUAGE[inputLanguage as keyof typeof MAP_LANGUAGE];
  }

  return inputLanguage;
}

function getGistAST(file: string, value: string): IAST {
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

async function parseGist(parent: IAST, item: IAST): Promise<IAST> {
  if (item.value === undefined) return item;

  const gist = item.value.substring(5).trim();
  const url = buildUrl(gist);

  const jsonResponse = await fetch(url + ".json");
  const jsonContent = await (jsonResponse.json() as Promise<GistJsonResponse>);

  const data = await Promise.all(
    jsonContent.files.map((file) =>
      fetch(url + "/raw/?file=" + file).then((r) => r.text())
    )
  );

  if (data.length === 1) {
    return getGistAST(jsonContent.files[0], data[0]);
  }

  return {
    type: parent.type,
    children: data.map((file, index) =>
      getGistAST(jsonContent.files[index], file)
    ),
  };
}

const gist = () => async (ast: IAST) => {
  const promises: Promise<void>[] = [];

  const createGist = (node: IAST) => {
    if (node.children === undefined) return;
    if (node.children.length === 0) return;

    const hasGist = node.children.some(
      ({ type, value }) => type === "inlineCode" && value?.startsWith("gist")
    );

    if (hasGist) {
      const promise = parseGist(node, node.children[0]).then((newNode) => {
        Object.assign(node, newNode);

        if (node.children?.length === 0) {
          delete node.children;
        }
      });

      promises.push(promise);
    }
  };

  await visit(ast, "paragraph", createGist);
  await Promise.all(promises);

  return;
};

export default gist;

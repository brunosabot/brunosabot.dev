import querystring from "querystring";

import cheerio from "cheerio";
import parse from "parse-numeric-range";
import fetch from "node-fetch";
import visit from "async-unist-util-visit";

// default base url
const baseUrl = "https://gist.github.com";

/**
 * @typedef {object} PluginOptions
 * @property {string} username the default gist user.
 * @property {boolean} includeDefaultCss a flag indicating the default css should be included
 */

/**
 * @typedef {object} GistQuery
 * @property {string} file the file name.
 * @property {string|Array<number>} highlights the numbers to be highlighted.
 */

/**
 * Validates the query object is valid.
 * @param {GistQuery} query the query to be validated.
 * @returns {boolean} true if the query is valid; false otherwise.
 */
function isValid(query) {
  if (query == null) return false;
  if (query.file == null && query.highlights == null && query.lines == null) {
    return false;
  }

  // leaving this for future enhancements to the query object

  return true;
}

/**
 * Builds the query object.
 * This methods looks for anything that is after ? or # in the gist: directive.
 * ? is interpreted as a query string.
 * # is interpreted as a filename.
 * @param {string} value the value of the inlineCode block.
 * @returns {object} the query object.
 */
function getQuery(value) {
  const hash = value.includes("#");

  // this will give us
  // a) qs with length 0 - no file, no querystring
  // b) qs with length 1 - either a #file or a ?querystring
  // c) qs with length 2 - a #file and a ?querystring
  // d) qs with length > 2 - malformed
  const [, ...qs] = value.split(/[?#]/);

  // a) and d) are easy
  if (qs.length === 0) return { highlights: [], lines: [] };
  if (qs.length > 2) {
    throw new Error("Malformed query. Check your 'gist:' imports");
  }

  let query;

  // b) is tricky, could be a #file or a ?querystring
  if (qs.length === 1) {
    if (hash) {
      query = { file: qs[0] };
    } else if (qs[0].includes("=")) {
      query = querystring.parse(qs[0]);
    } else {
      throw new Error("Malformed query. Check your 'gist:' imports");
    }
  } else {
    query = { file: qs[0], ...querystring.parse(qs[1]) };
  }

  // at this point we have an object such as
  // {
  //   file?: string,
  //   highlights?: string || string[],
  //   lines?: string || string[]
  // }
  // so we validate
  if (!isValid(query)) {
    throw new Error("Malformed query. Check your 'gist:' imports");
  }

  // get the range of highlights to render
  let highlights = [];
  if (typeof query.highlights === "string") {
    highlights = parse(query.highlights);
  } else if (Array.isArray(query.highlights)) {
    highlights = query.highlights;
  }
  query.highlights = highlights;

  // get the range of lines to display
  let lines = [];
  if (typeof query.lines === "string") {
    lines = parse(query.lines);
  } else if (Array.isArray(query.lines)) {
    lines = query.lines;
  }
  query.lines = lines;

  return query;
}

/**
 * Builds the gist url.
 * @param {string} value the value of the inlineCode block.
 * @param {PluginOptions} options the options of the plugin.
 * @param {string} file the file to be loaded.
 * @returns {string} the gist url.
 */
function buildUrl(value, options, file) {
  const [gist] = value.split(/[?#]/);

  const [inlineUsername, id] =
    gist.indexOf("/") > 0 ? gist.split("/") : [null, gist];

  // username can come from inline code or options
  const username = inlineUsername || options.username;

  // checks for a valid username
  if (username == null || username.trim().length === 0) {
    throw new Error("Missing username information");
  }

  // checks for a valid id
  if (id == null || id.trim().length === 0) {
    throw new Error("Missing gist id information");
  }

  // builds the url and completes it with the file if any
  let url = `${baseUrl}/${username}/${id}`;
  if (file != null) {
    url += `?file=${file}`;
  }

  return url;
}

async function parseGist(item) {
  const newNode = {};
  const gist = item.value.substring(5).trim();
  const query = getQuery(gist);
  const url = buildUrl(gist, {}, query.file);

  const jsonResponse = await fetch(url + ".json");
  const jsonContent = await jsonResponse.json();
  console.log(jsonContent.files);
  const data = await Promise.all(
    jsonContent.files.map((file) => {
      return fetch(url + "/raw/?file" + file).then((r) => r.text());
    })
  );

  if (data.length === 1) {
    newNode.lang = jsonContent.files[0].split(".").at(-1);
    newNode.type = "code";
    newNode.meta = jsonContent.files[0];
    newNode.value = data[0].trim();
    newNode.children = [];

    return newNode;
  } else {
    newNode.children = data.map((f, i) => {
      return {
        lang: jsonContent.files[i].split(".").at(-1),
        type: "code",
        meta: jsonContent.files[i],
        value: f.trim(),
      };
    });
  }

  return newNode;
}

/**
 * Handles the markdown AST.
 * @param {{ markdownAST }} markdownAST the markdown abstract syntax tree.
 * @param {PluginOptions} options the options of the plugin.
 * @returns {*} the markdown ast.
 */
const gist = () => async (ast) => {
  const promises = [];

  const createGist = (node) => {
    const hasGist = node.children.some(
      (child) => child.type === "inlineCode" && child.value.startsWith("gist")
    );

    if (hasGist) {
      const promise = parseGist(node.children[0]).then((newNode) => {
        Object.assign(node, newNode);
      });

      promises.push(promise);
    }
  };

  await visit(ast, "paragraph", createGist);
  await Promise.all(promises);

  return;
};

export default gist;

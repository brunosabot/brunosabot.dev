import { marked } from "marked";
import codeExtension from "./code.extension.marked";
import footnotesExtension from "./footnotes.extension.marked";
import imageExtension from "./image.extension.marked";
import gistPlugin from "./gist.plugin.marked";
import headingsExtension from "./headings.extension.marked";

marked.use(codeExtension);
marked.use(footnotesExtension);
marked.use(imageExtension);
marked.use(headingsExtension);
marked.use(gistPlugin);

export default async function getMarkdown(content: string) {
  return marked.parse(content);
}

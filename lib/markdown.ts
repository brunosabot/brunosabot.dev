import { marked } from "marked";
import footnotes from "./footnotes.renderer.marked";
import image from "./image.renderer.marked";
import headings from "./headings.renderer.marked";
import gistPlugin from "./gist.plugin.marked";

marked.use({ renderer: footnotes });
marked.use({ renderer: image });
marked.use({ renderer: headings });
marked.use(gistPlugin);

export default async function getMarkdown(content: string) {
  return marked.parse(content);
}

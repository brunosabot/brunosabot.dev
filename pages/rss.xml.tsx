import path from "path";
import matter from "gray-matter";
import fs from "fs";

const POSTS_PATH = path.join(process.cwd(), "posts");
const getTemplate = (children: string) =>
  `<rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Bruno Sabot RSS Feed]]></title>
    <description><![CDATA[I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.]]></description>
    <link>https://brunosabot.dev/</link>
    <generator>NextJS</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://brunosabot.dev/rss.xml" rel="self" type="application/rss+xml" />
    ${children}
  </channel>
</rss>`;

function createRss() {
  const items = fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((path) => fs.readFileSync(POSTS_PATH + "/" + path))
    .map((source) => matter(source))
    .map((page) => {
      var encodedStr = page.content.replace(
        /[\u00A0-\u9999<>\&]/g,
        function (i) {
          return "&#" + i.charCodeAt(0) + ";";
        }
      );

      return `<item>
        <title><![CDATA[${page.data.title}]]></title>
        <description><![CDATA[${page.data.subtitle}]]></description>
        <link>https://brunosabot.dev${page.data.path}</link>
        <guid isPermaLink="false">https://brunosabot.dev${page.data.path}</guid>
        <pubDate>${page.data.date.toUTCString()}</pubDate>
        <content:encoded><![CDATA[${encodedStr.trim()}]]></content:encoded>
      </item>
`;
    });

  return items.join("");
}

export async function getServerSideProps({ res }: any) {
  res.setHeader("Content-Type", "text/xml");
  res.write(getTemplate(await createRss()));
  res.end();

  return { props: {} };
}

export default function Rss() {
  return null;
}

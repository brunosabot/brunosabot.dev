import { SITE_METADATA } from "../../lib/metadata";
import { getNotionPost, getNotionPosts } from "../../lib/notion-posts";

function getTemplate(children: string) {
  return `
  <rss xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title><![CDATA[Bruno Sabot RSS Feed]]></title>
    <description><![CDATA[I am Bruno Sabot, a Front-end developer currently living in Bordeaux, France.]]></description>
    <link>${SITE_METADATA.siteUrl}/</link>
    <generator>NextJS</generator>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${
      SITE_METADATA.siteUrl
    }/rss.xml" rel="self" type="application/rss+xml" />
    ${children}
  </channel>
  </rss>`;
}

async function createRss() {
  const posts = await getNotionPosts();

  const items = posts.map(async (post) => {
    const page = await getNotionPost(post.path);

    if (page === undefined) return "";

    var encodedStr = page.content.replace(/[\u00A0-\u9999<>\&]/g, function (i) {
      return "&#" + i.charCodeAt(0) + ";";
    });

    return `
      <item>
        <title><![CDATA[${page.data.title}]]></title>
        <description><![CDATA[${page.data.subtitle}]]></description>
        <link>${SITE_METADATA.siteUrl}${page.data.path}</link>
        <guid isPermaLink="false">${SITE_METADATA.siteUrl}${
          page.data.path
        }</guid>
        <pubDate>${new Date(page.data.date).toUTCString()}</pubDate>
        <content:encoded><![CDATA[${encodedStr.trim()}]]></content:encoded>
      </item>`;
  });

  return Promise.all(items).then((rssArray) => rssArray.join(""));
}

export async function GET() {
  const rssItems = await createRss();
  const rssFull = getTemplate(rssItems);

  return new Response(rssFull, {
    status: 200,
    headers: { "Content-Type": "text/xml" },
  });
}

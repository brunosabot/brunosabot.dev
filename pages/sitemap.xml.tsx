import globby from "globby";
import { getStaticPaths as PostsYearSlugResolver } from "../components/pages/posts/[year]/[slug]";

const now = new Date().toISOString();
const DOMAIN = "https://brunosabot.dev";

function getTemplate(children: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
  >${children}
  </urlset>`;
}

function getUrlTemplate(path: string) {
  return `
    <url>
      <loc>${DOMAIN}/${path}</loc>
      <lastmod>${now}</lastmod>
    </url>`;
}

function getPathWithParams(path: string, params: any) {
  let finalPath = path;

  Object.keys(params).forEach((param) => {
    finalPath = finalPath.replace("[" + param + "]", params[param]);
  });

  return finalPath;
}

const resolvers = {
  "posts/[year]/[slug]": PostsYearSlugResolver,
};

async function createSitemap() {
  const pages = await globby([
    "./pages/**/*.tsx",
    "./pages/*.tsx",
    "!./pages/_*.tsx",
    "!./pages/404.tsx",
    "!./pages/rss.xml.tsx",
    "!./pages/sitemap.xml.tsx",
  ]);

  const pagesData = await Promise.all(
    pages.map(async (page: string) => {
      const pagePath = page
        .replace("./pages/", "")
        .replace(".tsx", "")
        .replace(/\/index/g, "");

      const routePath = pagePath === "index" ? "" : pagePath;

      if (routePath.indexOf("[") === -1) {
        return getUrlTemplate(routePath);
      }

      const resolver = (resolvers as any)[routePath];
      const getStaticPaths = await resolver();

      return (getStaticPaths.paths as any[])
        .map((path) =>
          getUrlTemplate(getPathWithParams(routePath, path.params))
        )
        .join("");
    })
  );

  return pagesData.join("");
}

export async function getServerSideProps({ res }: any) {
  res.setHeader("Content-Type", "text/xml");
  res.write(getTemplate(await createSitemap()));
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}

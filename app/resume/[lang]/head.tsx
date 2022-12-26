import Seo, { SITE_METADATA } from "../../../components/Seo";
import Resume from "../../../types/Resume";
import { RouteParams } from "./types";

async function getResume(lang: string): Promise<Resume | undefined> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/resume?lang=${lang}`
  );

  if (!res.ok) {
    return undefined;
  }

  return res.json();
}

export default async function ResumeHead({ params: { lang } }: RouteParams) {
  const resume = await getResume(lang);

  if (resume === undefined) return null;

  return (
    <>
      <link
        rel="alternate"
        hrefLang={resume.seo.alternate}
        href={`${SITE_METADATA.siteUrl}/resume/${resume.seo.alternate}/`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_METADATA.siteUrl}/resume/en/`}
      />
      <Seo
        description={resume.seo.description}
        title={resume.seo.title}
        lang={lang}
      />
    </>
  );
}

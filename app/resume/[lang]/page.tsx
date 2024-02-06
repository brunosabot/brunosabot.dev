import Link from "next/link";
import Job from "../../../components/resume/Job";
import SocialLink from "../../../components/resume/SocialLink";
import Title from "../../../components/resume/Title";
import JobType from "../../../types/Job";
import Resume from "../../../types/Resume";
import Training from "../../../types/Training";
import classes from "./resume.module.css";
import { RouteParams } from "./types";
import { notFound } from "next/navigation";
import { getMetaData, SITE_METADATA } from "../../../lib/metadata";

export async function generateMetadata({ params: { lang } }: RouteParams) {
  const resume = await getResume(lang);

  if (resume === undefined) return null;

  return {
    ...getMetaData({
      description: resume.seo.description,
      title: resume.seo.title,
      lang,
    }),
    alternates: {
      canonical: "/resume/en/",
      languages: {
        [resume.seo.alternate]:
          `${SITE_METADATA.siteUrl}/resume/${resume.seo.alternate}/`,
        "x-default": `${SITE_METADATA.siteUrl}/resume/en/`,
      },
    },
  };
}

async function getJobs(lang: string): Promise<JobType[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/jobs/?lang=${lang}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getTrainings(lang: string): Promise<Training[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/trainings/?lang=${lang}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getResume(lang: string): Promise<Resume> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/resume/?lang=${lang}`,
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ResumePage({ params: { lang } }: RouteParams) {
  if (["en", "fr"].includes(lang) === false) {
    notFound();
  }

  const [jobs, trainings, resume] = await Promise.all([
    getJobs(lang),
    getTrainings(lang),
    getResume(lang),
  ]);

  return (
    <>
      <aside className={classes["resume"]}>
        <section className={classes["resume-social"]}>
          <div className={classes["resume-social__heading"]}>
            {resume.follow}
          </div>
          <div className={classes["resume-social__links"]}>
            <SocialLink to="https://twitter.com/brunosabot">Twitter</SocialLink>
            <SocialLink to="https://github.com/brunosabot">Github</SocialLink>
            <SocialLink to="https://www.linkedin.com/in/brunosabot">
              LinkedIn
            </SocialLink>
            <SocialLink to="/">Web</SocialLink>
          </div>
        </section>

        <h1 className={classes["resume-heading__1"]}>{resume.intro}</h1>

        <section className={classes["resume-heading__2"]}>
          {resume.subIntro}
        </section>

        <section className={classes["resume-heading__3"]}>
          {resume.about}
        </section>

        <section className={classes["resume-contact"]}>
          <a
            className={classes["resume-contact__phone"]}
            href="tel:+33627918922"
          >
            (+33) 6 27 91 89 22
          </a>
          <a
            className={classes["resume-contact__mail"]}
            href="mailto:bruno@sabot.me"
          >
            bruno@sabot.me
          </a>
        </section>
      </aside>

      <section className={classes["resume-life-experiences"]}>
        <Link
          href={`/resume/${resume.seo.alternate}/`}
          className={classes["resume-language-tag"]}
        >
          {resume.seo.alternateLabel}
        </Link>
        <article className={classes["resume-professional-experiences"]}>
          <Title>{resume.titleJobs}</Title>

          {jobs.map((job) => (
            <Job
              companyName={job.companyName}
              companyWebsite={job.companyWebsite}
              details={job.details}
              endDate={job.endDate}
              startDate={job.startDate}
              job={job.job}
              subtitles={job.subtitles}
              key={job.companyName}
            />
          ))}
        </article>

        <article className={classes["training"]}>
          <Title>{resume.titleTraining}</Title>

          {trainings.map((training) => (
            <Job
              companyName={training.schoolName}
              companyWebsite={training.schoolWebsite}
              details={training.details}
              endDate={training.endDate}
              startDate={training.startDate}
              job={training.diploma}
              subtitles={training.subtitles}
              key={training.diploma}
            />
          ))}
        </article>
      </section>
    </>
  );
}

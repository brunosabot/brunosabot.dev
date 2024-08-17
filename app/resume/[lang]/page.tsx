import Link from "next/link";
import Job from "../../../components/resume/Job";
import SocialLink from "../../../components/resume/SocialLink";
import Title from "../../../components/resume/Title";
import classes from "./resume.module.css";
import { RouteParams } from "./types";
import { notFound } from "next/navigation";
import { getMetaData, SITE_METADATA } from "../../../lib/metadata";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getJobsByLang } from "../../actions/jobs";
import { getTrainingsByLang } from "../../actions/trainings";
import { getResumeByLang } from "../../actions/resume";

type Lang = "fr" | "en";
export function isValidLang(lang: string): lang is Lang {
  return ["fr", "en"].includes(lang);
}

export async function generateMetadata({ params: { lang } }: RouteParams) {
  if (isValidLang(lang) === false) {
    notFound();
  }

  const resume = await getResumeByLang(lang);

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

export async function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ResumePage({ params: { lang } }: RouteParams) {
  if (isValidLang(lang) === false) {
    notFound();
  }

  const [jobs, trainings, resume] = await Promise.all([
    getJobsByLang(lang),
    getTrainingsByLang(lang),
    getResumeByLang(lang),
  ]);

  return (
    <>
      <aside className={classes["resume"]}>
        <section className={classes["resume-social"]}>
          <div className={classes["resume-social__heading"]}>
            {resume.follow}
          </div>
          <div className={classes["resume-social__links"]}>
            <SocialLink to="https://x.com/brunosabot">X</SocialLink>
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

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Resume", `/resume/${lang}`],
        ]}
      />
    </>
  );
}

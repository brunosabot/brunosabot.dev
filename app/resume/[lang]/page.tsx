import Link from "next/link";
import { notFound } from "next/navigation";

import Job from "../../../components/resume/Job";
import SocialLink from "../../../components/resume/SocialLink";
import Title from "../../../components/resume/Title";
import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import { getMetaData, SITE_METADATA } from "../../../lib/metadata";
import { getJobsByLang } from "../../actions/jobs";
import { getResumeByLang } from "../../actions/resume";
import { getTrainingsByLang } from "../../actions/trainings";
import classes from "./resume.module.css";

type Lang = "en" | "fr";

type Params = Promise<{ lang: string }>;
export async function generateMetadata({ params }: { params: Params }) {
  const { lang } = await params;

  if (isValidLang(lang) === false) {
    notFound();
  }

  const resume = await getResumeByLang(lang);

  return {
    ...getMetaData({
      description: resume.seo.description,
      lang,
      title: resume.seo.title,
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

export default async function ResumePage({ params }: { params: Params }) {
  const { lang } = await params;

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
          className={classes["resume-language-tag"]}
          href={`/resume/${resume.seo.alternate}/`}
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
              job={job.job}
              key={job.companyName}
              startDate={job.startDate}
              subtitles={job.subtitles}
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
              job={training.diploma}
              key={training.diploma}
              startDate={training.startDate}
              subtitles={training.subtitles}
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

function isValidLang(lang: string): lang is Lang {
  return ["en", "fr"].includes(lang);
}

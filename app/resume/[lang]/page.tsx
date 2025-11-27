import { Github, Linkedin, Mail, Phone, X } from "lucide-react";
import { notFound } from "next/navigation";

import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphAccent from "../../../generic/typography/ParagraphAccent";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import TitleSecondary from "../../../generic/typography/TitleSecondary";
import { getMetaData, SITE_METADATA } from "../../../lib/metadata";
import { getJobsByLang } from "../../actions/jobs";
import { getResumeByLang } from "../../actions/resume";
import { getTrainingsByLang } from "../../actions/trainings";
import BlockList from "./_components/BlockList";
import Contact from "./_components/Contact";
import ContactItem from "./_components/ContactItem";
import Content from "./_components/Content";
import Header from "./_components/Header";
import HeaderLinks from "./_components/HeaderLinks";
import HeaderLogo from "./_components/HeaderLogo";
import Hello from "./_components/Hello";
import Job from "./_components/Job";
import Lang from "./_components/Lang";

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

  if (isValidLang(lang) === false) notFound();

  const [jobs, trainings, resume] = await Promise.all([
    getJobsByLang(lang),
    getTrainingsByLang(lang),
    getResumeByLang(lang),
  ]);

  return (
    <>
      <Header>
        <HeaderLogo />
        <HeaderLinks>
          <Lang label={resume.seo.alternateLabel} lang={resume.seo.alternate} />
          <Hello />
        </HeaderLinks>
      </Header>

      <Content>
        <Title>{resume.intro}</Title>

        <ParagraphSecondary>{resume.subIntro}</ParagraphSecondary>

        <ParagraphAccent>{resume.about}</ParagraphAccent>

        <Contact>
          <ContactItem href="mailto:bruno@sabot.me" Icon={Mail}>
            bruno@sabot.me
          </ContactItem>
          <ContactItem href="tel:+33627918922" Icon={Phone}>
            +33 (0) 6 27 91 89 22
          </ContactItem>
          <ContactItem href="https://x.com/brunosabot" Icon={X} />
          <ContactItem href="https://github.com/brunosabot" Icon={Github} />
          <ContactItem
            href="https://www.linkedin.com/in/brunosabot"
            Icon={Linkedin}
          />
        </Contact>

        <article>
          <TitleSecondary>{resume.titleJobs}</TitleSecondary>
          <ParagraphSecondary>{resume.subtitleJobs}</ParagraphSecondary>

          <BlockList>
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
          </BlockList>
        </article>

        <article>
          <TitleSecondary>{resume.titleTraining}</TitleSecondary>
          <ParagraphSecondary>{resume.subtitleTraining}</ParagraphSecondary>

          <BlockList>
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
          </BlockList>
        </article>
      </Content>

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

import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout/ResumeLayout";
import Job from "../../components/resume/Job";
import SocialLink from "../../components/resume/SocialLink";
import Title from "../../components/resume/Title";
import SEO from "../../components/Seo";
import classes from "./resume.module.css";

interface Job {
  id: string;
  language: string;
  companyName: string;
  companyWebsite: string;
  job: string;
  details: string[];
  endDate: string;
  startDate: string;
  subtitles: string[];
}

interface Training {
  id: string;
  language: string;
  schoolName: string;
  schoolWebsite: string;
  diploma: string;
  details: string[];
  endDate: string;
  startDate: string;
  subtitles: string[];
}

interface Props {
  jobs: Job[];
  trainings: Training[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      jobs: [
        {
          companyName: "Cdiscount",
          companyWebsite: "https://www.cdiscount.com/",
          details: [
            "Website performance monitoring and analysis",
            "Team support on the web performance topics",
            "Internal tool development (TypeScript, React)",
          ],
          endDate: "Currently",
          startDate: "September 2020",
          job: "Consultant",
          subtitles: ["Skill delegation for Zenika"],
        },
        {
          companyName: "FATEC Group",
          companyWebsite: "https://www.fatec-group.com/",
          details: [
            "Implementation of the requested features for the company product (Vue.js)",
            "Architecture, code quality and tests recommendations",
            "Training and helping the dev team on Front-end technologies",
          ],
          endDate: "January 2020",
          startDate: "December 2018",
          job: "Consultant",
          subtitles: ["Skill delegation for Zenika"],
        },
        {
          companyName: "Zenika (Bordeaux)",
          companyWebsite: "https://zenika.com",
          details: [
            "Consulting missions for Banque Casino, Dotic, FATEC, NP6, Cdiscount.",
            "Code quality and Performance audits for Asphalte",
            "Zenika events animation (NightClazz React).",
            "JavaScript development, conferences, training, AI.",
          ],
          endDate: "Currently",
          startDate: "August 2017",
          job: "Consultant",
        },
        {
          companyName: "NETINTERACTIVE",
          companyWebsite: "http://www.netinteractive.fr/",
          details: [
            "Company Front-end product development (Vanilla JS, CSS)",
            "Local and offshore Front-office team management",
            "Administration implementation with React",
            "Ergonomy advising, user experience advising",
          ],
          endDate: "February 2017",
          startDate: "September 2013",
          job: "Front-end Lead",
        },
        {
          companyName: "OWLIENT",
          companyWebsite: "http://owlient.eu/",
          details: [
            "Webapp implementation and development for the game Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
            "Back-office update to support the webapp needs (PHP)",
            "Adiving and dialogue on the mobile ergonomy",
          ],
          endDate: "June 2013",
          startDate: "October 2011",
          job: "Webapp developer",
          subtitles: ["Skill delegation for GLOBALIS media system"],
        },
        {
          companyName: "WEBEDIA",
          companyWebsite: "http://www.webedia.fr/",
          details: [
            "Integration of the websites Puremedias and Pureshopping",
            "Administration implementation of the websites Puremedias and Pureshopping",
            "Technological advising (prototypeJS to jQuery migration)",
          ],
          endDate: "September 2011",
          startDate: "March 2011",
          job: "PHP developer, Integrator",
          subtitles: ["Skill delegation for GLOBALIS media system"],
        },
        {
          companyName: "UBIQUS",
          companyWebsite: "http://www.ubiqus.fr/",
          details: [
            "Back-office developments for the company (PHP, MySQL)",
            "Front-office developments for the event websites sold by the company (HTML, jQuery)",
          ],
          endDate: "October 2010",
          startDate: "March 2010",
          job: "PHP developer",
          subtitles: ["Skill delegation for GLOBALIS media system"],
        },
        {
          companyName: "GLOBALIS media systems",
          companyWebsite: "http://globalis-ms.com/",
          details: [
            "Skill delegation for : Institut Curie, Ubiqus (6 month), Webedia (7 month), Owlient (21 month)",
            "Fixed-price contracts for : Marketshot, CNRS, GUINOT",
            "Performance audits for : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information",
          ],
          endDate: "May 2013",
          startDate: "September 2009",
          job: "Web developer",
        },
      ],
      trainings: [
        {
          schoolName: "Université de Reims Champagne Ardenne",
          schoolWebsite: "https://www.univ-reims.fr/",
          details: ["With honors", "Head of the class"],
          endDate: "2009",
          startDate: "2008",
          diploma: "Licence professionnelle CMSII",
          subtitles: ["Intranet Internet service conception and maintenance"],
        },
        {
          schoolName: "IUT Valence",
          schoolWebsite: "https://www.iut-valence.fr/",
          details: [],
          endDate: "2008",
          startDate: "2005",
          diploma: "DUT R&T",
          subtitles: ["Network and Telecommunications"],
        },
        {
          schoolName: "Lycée Boissy D'Anglas",
          schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
          details: ["Engineering option", "Maths field", "With honors"],
          endDate: "2005",
          startDate: "2003",
          diploma: "Baccalauréat",
          subtitles: ["Scientific Baccalauréat"],
        },
      ],
    },
  };
};

const Resume: React.FC<Props> = ({ jobs, trainings }) => (
  <Layout>
    <SEO
      description="Bruno Sabot, a Front-end developer"
      title="Bruno Sabot, Front-end developer"
      lang="en"
    />

    <aside className={classes["resume"]}>
      <section className={classes["resume-social"]}>
        <div className={classes["resume-social__heading"]}>
          Subscribe to these social medias for updates
        </div>
        <div className={classes["resume-social__links"]}>
          <SocialLink to="https://twitter.com/brunosabot">Twitter</SocialLink>
          <SocialLink to="https://github.com/brunosabot">Github</SocialLink>
          <SocialLink to="https://www.linkedin.com/in/brunosabot">
            LinkedIn
          </SocialLink>
          <SocialLink to="/">Website</SocialLink>
        </div>
      </section>

      <h1 className={classes["resume-heading__1"]}>
        I am Bruno Sabot, a Front-end developer currently living in Bordeaux,
        France.
      </h1>

      <section className={classes["resume-heading__2"]}>
        I had the privilege of working with companies such as Cdiscount,
        Webedia, Owlient, L’Oréal group, De Beers, Saint Gobain, Natura Brasil
        &amp; more.
      </section>

      <section className={classes["resume-heading__3"]}>
        IT Consultant at Zenika, former lead Front-end at Netinteractive group,
        I&apos;m looking for new opportunities.
      </section>

      <section className={classes["resume-contact"]}>
        <a className={classes["resume-contact__phone"]} href="tel:+33627918922">
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
      <Link passHref href="/resume/fr/">
        <a className={classes["resume-language-tag"]}>FR</a>
      </Link>
      <article className={classes["resume-professional-experiences"]}>
        <Title>Professional experiences</Title>

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
        <Title>Training</Title>

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
  </Layout>
);

export default Resume;

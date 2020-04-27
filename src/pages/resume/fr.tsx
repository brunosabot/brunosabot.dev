import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";
import Layout from "../../components/layout/Resume";
import Job from "../../components/resume/Job";
import SocialLink from "../../components/resume/SocialLink";
import Title from "../../components/resume/Title";
import SEO from "../../components/Seo";

interface Jobs {
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

interface JobNode {
  nodes: Jobs[];
}

interface TrainingNode {
  nodes: Training[];
}

interface Query {
  allJobs: JobNode;
  allTrainings: TrainingNode;
}

interface Props {
  data: Query;
}

export const query = graphql`
  query ResumeFrQuery {
    allJobs(filter: { language: { eq: "fr" } }) {
      nodes {
        id
        language
        companyName
        companyWebsite
        job
        details
        endDate
        startDate
        subtitles
      }
    }
    allTrainings(filter: { language: { eq: "fr" } }) {
      nodes {
        id
        language
        schoolName
        schoolWebsite
        diploma
        details
        endDate
        startDate
        subtitles
      }
    }
  }
`;

const About: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO
        description="Bruno Sabot, un développeur Front-end"
        title="Bruno Sabot, développeur Front-end"
        lang="fr"
      />

      <aside className="resume">
        <section className="resume-social">
          <div className="resume-social__heading">
            Suivez-moi sur ces réseaux sociaux
          </div>
          <div className="resume-social__links">
            <SocialLink to="https://twitter.com/brunosabot">Twitter</SocialLink>
            <SocialLink to="https://github.com/brunosabot">Github</SocialLink>
            <SocialLink to="https://www.linkedin.com/in/brunosabot">
              LinkedIn
            </SocialLink>
            <SocialLink to="/">Site web</SocialLink>
          </div>
        </section>

        <section className="resume-heading__1">
          Je suis Bruno Sabot, un développeur Front-end résidant à Bordeaux, en
          France.
        </section>

        <section className="resume-heading__2">
          J&apos;ai eu le privilège de travailler avec des sociétés comme
          Webedia, Owlient, L’Oréal group, De Beers, Saint Gobain, Natura
          Brasil.
        </section>

        <section className="resume-heading__3">
          Je suis actuellement consultant chez Zenika Bordeaux et ne suis pas à
          la recherche de nouvelles opportunités.
        </section>

        <section className="resume-contact">
          <a className="resume-contact__phone" href="tel:+33627918922">
            (+33) 6 27 91 89 22
          </a>
          <a className="resume-contact__mail" href="mailto:bruno@sabot.me">
            bruno@sabot.me
          </a>
        </section>
      </aside>

      <section className="resume-life-experiences">
        <AniLink
          fade
          duration={0.5}
          className="resume-language-tag"
          to="/resume/en"
        >
          EN
        </AniLink>
        <article className="resume-professional-experiences">
          <Title>Expériences professionnelles</Title>

          {data.allJobs.nodes.map((job) => (
            <Job
              companyName={job.companyName}
              companyWebsite={job.companyWebsite}
              details={job.details}
              endDate={job.endDate}
              startDate={job.startDate}
              job={job.job}
              subtitles={job.subtitles}
              key={job.id}
            />
          ))}
        </article>

        <article className="training">
          <Title>Formation</Title>

          {data.allTrainings.nodes.map((training) => (
            <Job
              companyName={training.schoolName}
              companyWebsite={training.schoolWebsite}
              details={training.details}
              endDate={training.endDate}
              startDate={training.startDate}
              job={training.diploma}
              subtitles={training.subtitles}
              key={training.id}
            />
          ))}
        </article>
      </section>
    </Layout>
  );
};

export default About;

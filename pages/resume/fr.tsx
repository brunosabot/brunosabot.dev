import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/layout/ResumeLayout";
import Job from "../../components/resume/Job";
import SocialLink from "../../components/resume/SocialLink";
import Title from "../../components/resume/Title";
import SEO, { SITE_METADATA } from "../../components/Seo";
import classes from "./resume.module.css";
import Head from "next/head";

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
            "Suivi et analyse des performances du site",
            "Support aux équipes sur les sujets web performance",
            "Développement de produits internes (TypeScript, React)",
          ],
          endDate: "Juin 2022",
          startDate: "Septembre 2020",
          job: "Consultant",
          subtitles: ["Régie pour Zenika"],
        },
        {
          companyName: "FATEC Group",
          companyWebsite: "https://www.fatec-group.com/",
          details: [
            "Implémentation des fonctionnalités sur le produit applicatif (Vue.js)",
            "Recommandations sur l'architecture, la qualité de code et les tests",
            "Formation et encadrement des équipes de dev sur les technologies Front-end",
          ],
          endDate: "Janvier 2020",
          startDate: "Décembre 2018",
          job: "Consultant",
          subtitles: ["Régie pour Zenika"],
        },
        {
          companyName: "Zenika (Bordeaux)",
          companyWebsite: "https://zenika.com",
          details: [
            "Mission de consulting pour Banque Casino, Dotic, FATEC, NP6, Cdiscount.",
            "Audits qualité de code et performance pour Asphalte",
            "Animation d'évènements Zenika (NightClazz React).",
            "Développement JavaScript, Conférences, Formations, IA.",
          ],
          endDate: "Juin 2022",
          startDate: "Août 2017",
          job: "Consultant",
        },
        {
          companyName: "NETINTERACTIVE",
          companyWebsite: "http://www.netinteractive.fr/",
          details: [
            "Développement de la partie Front-office des produits de la société (Vanilla JS, CSS).",
            "Management des équipes Front-office locales et à l'étranger.",
            "Mise en place de l'administration sous React.",
            "Conseils ergonomiques, Conseils expérience utilisateur.",
          ],
          endDate: "Février 2017",
          startDate: "Septembre 2013",
          job: "Lead Front-end",
        },
        {
          companyName: "OWLIENT",
          companyWebsite: "http://owlient.eu/",
          details: [
            "Mise en place et développement de la webapp du jeu Equideow (HTML5, CSS3, jQuery, jQuery mobile)",
            "Mise à jour de la partie Back-office pour supporter la webapp (PHP)..",
            "Réflexions et concertation sur l'ergonomie mobile.",
          ],
          endDate: "Juin 2013",
          startDate: "Octobre 2011",
          job: "Développeur Webapp",
          subtitles: ["Régie pour GLOBALIS media system"],
        },
        {
          companyName: "WEBEDIA",
          companyWebsite: "http://www.webedia.fr/",
          details: [
            "Intégration des sites Puremedias et Pureshopping",
            "Mise en place de l'administration des sites Puremedias et Pureshopping",
            "Conseils technologiques (migration prototypeJS vers jQuery).",
          ],
          endDate: "Septembre 2011",
          startDate: "Mars 2011",
          job: "Développeur PHP, Intégrateur",
          subtitles: ["Régie pour GLOBALIS media system"],
        },
        {
          companyName: "UBIQUS",
          companyWebsite: "http://www.ubiqus.fr/",
          details: [
            "Développements Back-office pour la société (PHP, MySQL).",
            "Développements Front-office de sites événementiels pour la société (HTML, jQuery).",
          ],
          endDate: "Octobre 2010",
          startDate: "Mars 2010",
          job: "Développeur PHP",
          subtitles: ["Régie pour GLOBALIS media system"],
        },
        {
          companyName: "GLOBALIS media systems",
          companyWebsite: "http://globalis-ms.com/",
          details: [
            "Régies pour : Institut Curie, Ubiqus (6 mois), Webedia (7 mois), Owlient (21 mois).",
            "Forfaits pour : Marketshot, CNRS, GUINOT.",
            "Audits de performance pour : Owlient, Smart Agence, Solly Azar, Gaya, Reed Business Information.",
          ],
          endDate: "Mai 2013",
          startDate: "Septembre 2009",
          job: "Développeur web",
        },
      ],
      trainings: [
        {
          schoolName: "Université de Reims Champagne Ardenne",
          schoolWebsite: "https://www.univ-reims.fr/",
          details: ["Mention Bien", "Major de promotion"],
          endDate: "2009",
          startDate: "2008",
          diploma: "Licence professionnelle CMSII",
          subtitles: ["Conception et Maintenance de Service Intranet Internet"],
        },
        {
          schoolName: "IUT Valence",
          schoolWebsite: "https://www.iut-valence.fr/",
          details: [],
          endDate: "2008",
          startDate: "2005",
          diploma: "DUT R&T",
          subtitles: ["Réseaux et Télécommunications"],
        },
        {
          schoolName: "Lycée Boissy D'Anglas",
          schoolWebsite: "https://boissy-anglas.ent.auvergnerhonealpes.fr/",
          details: [
            "Option Sciences de l'ingénieur",
            "Spécialité Mathématiques",
            "Mention Assez Bien",
          ],
          endDate: "2005",
          startDate: "2003",
          diploma: "Baccalauréat",
          subtitles: ["Baccalauréat Scientifique SI"],
        },
      ],
    },
  };
};

const Resume: React.FC<Props> = ({ jobs, trainings }) => (
  <Layout>
    <SEO
      description="Bruno Sabot, un développeur Front-end"
      title="Bruno Sabot, développeur Front-end"
      lang="fr"
    />

    <Head>
      <link
        rel="alternate"
        hrefLang="en"
        href={`${SITE_METADATA.siteUrl}/resume/en/`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${SITE_METADATA.siteUrl}/resume/en/`}
      />
    </Head>

    <aside className={classes["resume"]}>
      <section className={classes["resume-social"]}>
        <div className={classes["resume-social__heading"]}>
          Suivez-moi sur ces réseaux sociaux
        </div>
        <div className={classes["resume-social__links"]}>
          <SocialLink to="https://twitter.com/brunosabot">Twitter</SocialLink>
          <SocialLink to="https://github.com/brunosabot">Github</SocialLink>
          <SocialLink to="https://www.linkedin.com/in/brunosabot">
            LinkedIn
          </SocialLink>
          <SocialLink to="/">Site web</SocialLink>
        </div>
      </section>

      <h1 className={classes["resume-heading__1"]}>
        Je suis Bruno Sabot, un développeur Front-end résidant à Bordeaux, en
        France.
      </h1>

      <section className={classes["resume-heading__2"]}>
        J&apos;ai eu le privilège de travailler avec des sociétés comme
        Cdiscount, Webedia, Owlient, L’Oréal group, De Beers, Saint Gobain,
        Natura Brasil.
      </section>

      <section className={classes["resume-heading__3"]}>
        Consultant chez Zenika, anciennement lead Front-end chez Netinteractive
        group, je suis à la recherche de nouvelles opportunités.
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
      <Link passHref href="/resume/en/">
        <a className={classes["resume-language-tag"]}>EN</a>
      </Link>
      <article className={classes["resume-professional-experiences"]}>
        <Title>Expériences professionnelles</Title>

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
        <Title>Formation</Title>

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

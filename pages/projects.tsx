import { GetStaticProps } from "next";
import React from "react";
import DetailCard from "../components/card/DetailCard";
import DefaultLayout from "../components/layout/DefaultLayout";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface Project {
  description: string[];
  id: string;
  image: string;
  title: string;
  url: string;
}

interface Props {
  projects: Project[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      projects: [
        {
          id: "answwr",
          url: "https://www.answwr.com",
          image: "/images/answwr.png",
          title:
            "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
          description: [
            "Answwr is a cool and modern decision maker, so cool that you’d think there is an AI managing the thing.",
            "With Answwr you’ll be able to decide between choices in the most elegant ways, meaning you’ll have to fill a bunch of forms, hit a green button and generate a totally fair and unbiased random result.",
            "It's important to precise the result will be totally fair and unbiased, that's why we made the Redo button.",
          ],
        },
      ],
    },
  };
};

const Projects: React.FC<Props> = ({ projects }) => (
  <DefaultLayout>
    <SEO
      description="Projects imaginated and created by Bruno Sabot. Check it out!"
      title="Projects - Bruno Sabot"
    />
    <main className="content">
      <PageTitle>Project list</PageTitle>
      {projects.map((project) => (
        <DetailCard
          image={project.image}
          title={project.title}
          description={project.description}
          url={project.url}
          key={project.id}
        />
      ))}
    </main>
  </DefaultLayout>
);

export default Projects;

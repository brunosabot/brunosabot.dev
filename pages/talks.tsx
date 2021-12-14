import { GetStaticProps } from "next";
import React from "react";
import CardTalk from "../components/card/CardTalk";
import DefaultLayout from "../components/layout/DefaultLayout";
import SEO from "../components/Seo";
import PageTitle from "../components/typography/PageTitle";

interface ITalk {
  id: number;
  youtubeId?: string;
  conferenceName: string;
  language: string;
  title: string;
  date: string;
  slides: string;
  description: string;
  image: string;
}

interface Props {
  talks: ITalk[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      talks: [
        {
          id: 4,
          conferenceName: "Snowcamp",
          language: "fr",
          title: "L'intégration, ce purgatoire",
          date: "2020-01-23",
          slides:
            "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE",
          description:
            "Vous avez déjà connu cette situation où vous commencez à travailler sur votre CSS, vous vous sentez en totale maitrise et le chef de projet arrive avec plein d'écrans à intégrer avec son lot de…",
          image:
            "https://lh3.googleusercontent.com/oqNVvVVjAXfblJtAJpeSCxqS12yrkAKp7pouKfu99BMO5-OPhakNYEKN8sZEkLtr-_tco26MALvYWtM2luaSf_7fdGHYPVI7tGcpsBb_Bymgnrg4SbLMIZaQHFcVF8hmcQAYPeVYfJI=w800",
        },
        {
          id: 3,
          youtubeId: "jnxkdHo8OEk",
          conferenceName: "Breizh Camp",
          language: "fr",
          title: "UX : les formulaires (Breizh Camp)",
          date: "2019-03-21",
          slides:
            "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA",
          description:
            "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
          image:
            "https://dodgemsandfloss.com/wp-content/uploads/2018/06/Ketchup.png",
        },
        {
          id: 2,
          youtubeId: "H2KWVDH64EY",
          conferenceName: "Jug Summer Camp",
          language: "fr",
          title: "UX : les formulaires (Jug Summer Camp)",
          date: "2018-09-14",
          slides:
            "https://drive.google.com/open?id=1S2RmcMKZ74Bhc4IQUMm7-xDjVwD-_UCFc5iWCEdy5S8",
          description:
            "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
          image:
            "https://preview.redd.it/6i8oiq3iyxd41.jpg?width=640&height=360&crop=smart&auto=webp&s=79ea73ed139da4c1227f8649213bc18711dd8c66",
        },
        {
          id: 1,
          youtubeId: "h0MAi-1GdZQ",
          conferenceName: "BDX I/O",
          language: "fr",
          title: "Les nouveautés de React 16 - Fiber",
          date: "2017-11-10",
          slides:
            "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po",
          description:
            "Tout le monde connait React, ce framework est de plus en plus utilisé dans le domaine professionnel. Après de longs mois, bloqués à la version 15, une nouvelle version majeure va bientôt arriver que…",
          image: "http://i3.ytimg.com/vi/h0MAi-1GdZQ/maxresdefault.jpg",
        },
      ],
    },
  };
};

const Talks: React.FC<Props> = ({ talks }) => (
  <DefaultLayout type="columns">
    <SEO
      description="All the conference talks given by Bruno Sabot. Check it out!"
      title="Talks"
    />
    <PageTitle>Talk list</PageTitle>
    {talks.map((talk, index) => (
      <CardTalk
        image={talk.image ? talk.image : undefined}
        description={talk.description}
        language={talk.language}
        title={talk.title}
        conferenceName={talk.conferenceName}
        date={talk.date}
        id={`${talk.id}`}
        key={talk.id}
        slides={talk.slides}
        youtubeId={talk.youtubeId}
        priority={index === 0}
      />
    ))}
  </DefaultLayout>
);

export default Talks;

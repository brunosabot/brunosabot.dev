import PageTitle from "../../../components/typography/PageTitle";
import CardTalk from "../../../components/card/CardTalk";
import { getMetaData } from "../../../lib/metadata";

export async function generateMetadata() {
  return getMetaData({
    description: "All the conference talks given by Bruno Sabot. Check it out!",
    title: "Talks",
  });
}

const getTalks = async () => {
  const talkPromises = [
    {
      id: "snowcamp-integration",
      conferenceName: "Snowcamp",
      language: "fr",
      title: "L'intégration, ce purgatoire",
      date: "2020-01-23",
      slides:
        "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE",
      description:
        "Vous avez déjà connu cette situation où vous commencez à travailler sur votre CSS, vous vous sentez en totale maitrise et le chef de projet arrive avec plein d'écrans à intégrer avec son lot de…",
      image: "https://storage.googleapis.com/brunosabot.dev/img/DSC_0887.jpeg",
    },
    {
      id: "breizhcamp-ux-formulaire",
      youtubeId: "jnxkdHo8OEk",
      conferenceName: "Breizh Camp",
      language: "fr",
      title: "UX : les formulaires (Breizh Camp)",
      date: "2019-03-21",
      slides:
        "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA",
      description:
        "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
      image: "https://storage.googleapis.com/brunosabot.dev/img/Ketchup.png",
    },
    {
      id: "jugsummercamp-ux-formulaire",
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
        "https://storage.googleapis.com/brunosabot.dev/img/6i8oiq3iyxd41.jpeg",
    },
    {
      id: "bdxio-react16",
      youtubeId: "h0MAi-1GdZQ",
      conferenceName: "BDX I/O",
      language: "fr",
      title: "Les nouveautés de React 16 - Fiber",
      date: "2017-11-10",
      slides:
        "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po",
      description:
        "Tout le monde connait React, ce framework est de plus en plus utilisé dans le domaine professionnel. Après de longs mois, bloqués à la version 15, une nouvelle version majeure va bientôt arriver que…",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/h0MAi-1GdZQ.jpeg",
    },
  ];

  return Promise.all(talkPromises);
};

export default async function ContactPage() {
  const talks = await getTalks();

  return (
    <>
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
    </>
  );
}

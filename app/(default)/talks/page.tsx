import SeoBreadcrumb from "../../../components/seo/Breadcrumb";
import ParagraphSecondary from "../../../generic/typography/ParagraphSecondary";
import Title from "../../../generic/typography/Title";
import { getMetaData } from "../../../lib/metadata";
import List from "./components/List";
import Talk from "./components/Talk";

export async function generateMetadata() {
  return getMetaData(
    {
      description:
        "Learn with Bruno Sabot! Watch inspiring talks on web tech & gain insights. Connect with this passionate expert!",
      title: "Talks",
    },
    "/talks/",
  );
}

const getTalks = async () => {
  const talkPromises = [
    {
      conferenceName: "Snowcamp",
      date: "2020-01-23",
      description:
        "Vous avez déjà connu cette situation où vous commencez à travailler sur votre CSS, vous vous sentez en totale maitrise et le chef de projet arrive avec plein d'écrans à intégrer avec son lot de…",
      id: "snowcamp-integration",
      image: "https://storage.googleapis.com/brunosabot.dev/img/DSC_0887.jpeg",
      language: "fr",
      slides:
        "https://drive.google.com/open?id=18gLNemp9mcsmx-RIh2RMHWFjiv4uvXu54ouW05BjGQE",
      title: "L'intégration, ce purgatoire",
    },
    {
      conferenceName: "Breizh Camp",
      date: "2019-03-21",
      description:
        "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
      id: "breizhcamp-ux-formulaire",
      image: "https://storage.googleapis.com/brunosabot.dev/img/Ketchup.png",
      language: "fr",
      slides:
        "https://drive.google.com/open?id=1tCwdzIdwu8jYX4Y0dej_u6pmc1oUx9Y4NPUaTBSWluA",
      title: "UX : les formulaires (Breizh Camp)",
      youtubeId: "jnxkdHo8OEk",
    },
    {
      conferenceName: "Jug Summer Camp",
      date: "2018-09-14",
      description:
        "Et si on parlait d'UX ? Nos pages sont truffées de formulaires, pourtant, connaissons-nous les erreurs à éviter lorsque nous ajoutons un formulaire à une page ? La validation de mot de passes, les…",
      id: "jugsummercamp-ux-formulaire",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/6i8oiq3iyxd41.jpeg",
      language: "fr",
      slides:
        "https://drive.google.com/open?id=1S2RmcMKZ74Bhc4IQUMm7-xDjVwD-_UCFc5iWCEdy5S8",
      title: "UX : les formulaires (Jug Summer Camp)",
      youtubeId: "H2KWVDH64EY",
    },
    {
      conferenceName: "BDX I/O",
      date: "2017-11-10",
      description:
        "Tout le monde connait React, ce framework est de plus en plus utilisé dans le domaine professionnel. Après de longs mois, bloqués à la version 15, une nouvelle version majeure va bientôt arriver que…",
      id: "bdxio-react16",
      image:
        "https://storage.googleapis.com/brunosabot.dev/img/h0MAi-1GdZQ.jpeg",
      language: "fr",
      slides:
        "https://drive.google.com/open?id=1aMy3Szz-A-6hoTFuGvdVqoTZOEhc07W6j8emIcNb3Po",
      title: "Les nouveautés de React 16 - Fiber",
      youtubeId: "h0MAi-1GdZQ",
    },
  ];

  return Promise.all(talkPromises);
};

export default async function ContactPage() {
  const talks = await getTalks();

  return (
    <>
      <Title>My Speaking Gigs</Title>
      <ParagraphSecondary>
        Sharing what I've learned about software, design, and building cool
        things, one conference at a time.
      </ParagraphSecondary>

      <List>
        {talks.map((talk, index) => (
          <Talk
            conference={talk.conferenceName}
            date={new Date(talk.date)}
            description={talk.description}
            image={talk.image ? talk.image : undefined}
            key={talk.id}
            lang={talk.language}
            priority={index === 0}
            slides={talk.slides}
            title={talk.title}
            youtubeId={talk.youtubeId}
          />
        ))}
      </List>

      <SeoBreadcrumb
        items={[
          ["Home", "/"],
          ["Talks", "/talks/"],
        ]}
      />
    </>
  );
}

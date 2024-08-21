"use client";

import { useState } from "react";
import classes from "./Projects.module.css";
import galaxieBadge from "../../../public/nonow-consulting/galaxie-badges.jpg";
import galaxieDashboard from "../../../public/nonow-consulting/galaxie-dashboard.jpg";
import galaxieParcours from "../../../public/nonow-consulting/galaxie-parcours.jpg";
import galaxiePopular from "../../../public/nonow-consulting/galaxie-popular.jpg";
import Image from "next/image";
import Svg from "../../../components/svg/Svg";
import { mdiClose } from "@mdi/js";

export default function Galaxie() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        className={classes.Button}
        onClick={() => setIsVisible(!isVisible)}
      >
        Galaxie Les 2 Alpes Trail
      </button>

      {isVisible ? (
        <div className={classes.PopUpWrapper}>
          <div className={classes.PopUp}>
            <button
              className={classes.PopUpCloseButton}
              onClick={() => setIsVisible(false)}
            >
              <Svg className={classes.PopUpClose} d={mdiClose} />
            </button>
            <div className={classes.PopUpTitle}>Galaxie Les 2 Alpes Trail</div>
            <div className={classes.PopUpContent}>
              <div className={classes.PopUpDescription}>
                <p>
                  Création d&apos;une application web dynamique pour
                  l&apos;association Les 2 Alpes Trail, offrant une expérience
                  utilisateur complète et personnalisée :
                </p>
                <ul>
                  <li>
                    <b>Plateforme communautaire :</b> Découverte d&apos;une
                    multitude de parcours et de segments, suivi personnalisé
                    grâce à l&apos;intégration de Strava, collection de badges
                    et classement des aventures.
                  </li>
                  <li>
                    <b>Espace d&apos;administration :</b> Gestion flexible des
                    parcours, des badges, des utilisateurs et des événements par
                    les administrateurs de l&apos;association.
                  </li>
                  <li>
                    <b>
                      Système d&apos;événements &quot;Parcours de la
                      Muzelle&quot; :
                    </b>{" "}
                    Création d&apos;un événement spécifique avec des
                    fonctionnalités dédiées (participants, classements, etc.).
                  </li>
                  <li>
                    <b>Intégration Strava :</b> Synchronisation automatique des
                    activités des utilisateurs, calcul des performances et
                    génération de statistiques personnalisées.
                  </li>
                </ul>

                <p>
                  Ce projet a nécessité le développement d&apos;une architecture
                  robuste combinant un front-end réactif (Next.js) et un
                  back-end performant (Next.js) pour gérer les différentes
                  fonctionnalités de l&apos;application.
                </p>
                <p>
                  Une base de données PostgreSQL a été utilisée pour stocker les
                  informations relatives aux utilisateurs, aux parcours, aux
                  événements et aux badges.
                </p>
                <p>
                  L&apos;intégration de l&apos;API Strava a permis de récupérer
                  les données d&apos;activité des utilisateurs et de les
                  enrichir avec les informations de l&apos;application.
                </p>
                <p>
                  <a
                    href="https://galaxie.les2alpestrail.com/"
                    target="_blank"
                    rel="noreferrer"
                    className={classes.Link}
                  >
                    Visiter le site
                  </a>
                </p>
              </div>
              <Image
                className={classes.PopUpImage}
                src={galaxieDashboard}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={galaxiePopular}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={galaxieBadge}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={galaxieParcours}
                alt=""
                width={1008}
                height={2244}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

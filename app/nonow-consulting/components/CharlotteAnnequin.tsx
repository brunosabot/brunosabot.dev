"use client";

import { useState } from "react";
import classes from "./Projects.module.css";
import charlotteAnnequinHome from "../../../public/nonow-consulting/charlotte-annequin-home.jpg";
import charlotteAnnequinMariage from "../../../public/nonow-consulting/charlotte-annequin-mariage.jpg";
import charlotteAnnequinGrossesse from "../../../public/nonow-consulting/charlotte-annequin-grossesse.jpg";
import charlotteAnnequinMenu from "../../../public/nonow-consulting/charlotte-annequin-menu.jpg";
import Image from "next/image";
import Svg from "../../../components/svg/Svg";
import { mdiClose } from "@mdi/js";

export default function CharlotteAnnequin() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button
        className={classes.Button}
        onClick={() => setIsVisible(!isVisible)}
      >
        Charlotte Annequin Photographe
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
            <div className={classes.PopUpTitle}>
              Charlotte Annequin Photographe
            </div>
            <div className={classes.PopUpContent}>
              <div className={classes.PopUpDescription}>
                <p>
                  J&apos;ai conçu et développé un site web sur mesure pour
                  Charlotte Annequin, Photographe, en utilisant les technologies
                  Next.js pour la partie frontend et Strapi pour la gestion de
                  contenu.
                </p>

                <p>Techniquement, ce projet a impliqué :</p>

                <ul>
                  <li>
                    <b>Création d&apos;une architecture robuste:</b> Séparation
                    nette entre la couche présentation (Next.js) et la couche
                    données (Strapi).
                  </li>
                  <li>
                    <b>Développement d&apos;un connecteur automatisé:</b> Pour
                    permettre une personnalisation avancée du contenu des pages,
                    des textes et des images
                  </li>
                  <li>
                    <b>Optimisation des performances:</b> Chargement rapide des
                    pages pour une expérience utilisateur fluide.
                  </li>
                  <li>
                    <b>Personnalisation de l&apos;interface:</b> Création
                    d&apos;un design unique et intuitif reflétant l&apos;univers
                    de la photographe.
                  </li>
                </ul>
                <p>
                  Le choix de Next.js et Strapi a permis de gagner en
                  productivité et de bénéficier d&apos;une solution évolutive et
                  maintenable.
                </p>

                <p>
                  <a
                    href="https://charlotteannequin.com/"
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
                src={charlotteAnnequinHome}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={charlotteAnnequinMariage}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={charlotteAnnequinGrossesse}
                alt=""
                width={1008}
                height={2244}
              />
              <Image
                className={classes.PopUpImage}
                src={charlotteAnnequinMenu}
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

import Image from "next/image";
import { getMetaData } from "../../lib/metadata";
import logo from "../../public/images/nonow-consulting.jpg";
import classes from "./page.module.css";
import Contact from "./components/Contact";
import Galaxie from "./components/Galaxie";
import CharlotteAnnequin from "./components/CharlotteAnnequin";

export async function generateMetadata() {
  return getMetaData({ description: "Nonow Consulting Webperf, Development" });
}

export default async function ResumePage() {
  return (
    <div className={classes.Page}>
      <Image
        src={logo}
        className={classes.Logo}
        alt=""
        width={200}
        height={200}
      />
      <div className={classes.Title}>
        <span className={classes.TitleAccent}>Nonow</span> Consulting
      </div>

      <div className={classes.Skills}>
        <div className={classes.Skill}>Webperf</div>
        <div className={classes.Skill}>Développement web</div>
      </div>

      <div className={classes.Projects}>
        <div className={classes.ProjectsTitle}>Mes Réalisations</div>
        <Galaxie />
        <CharlotteAnnequin />
      </div>

      <Contact />
    </div>
  );
}

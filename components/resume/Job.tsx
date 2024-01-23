import classes from "./Job.module.css";

interface Props {
  companyName: string;
  companyWebsite: string;
  job: string;
  startDate?: string;
  endDate?: string;
  details: string[];
  subtitles?: string[];
}

function getCompany(companyName: string) {
  return companyName;
}
function getDate(startDate: string, endDate: string) {
  return `${startDate} - ${endDate}`;
}

const Job: React.FC<Props> = ({
  companyName,
  companyWebsite,
  job,
  startDate,
  endDate,
  details = [],
  subtitles = [],
}) => (
  <section className={classes["resume-job"]}>
    <h3 className={classes["resume-job__name"]}>
      {job}&nbsp;@&nbsp;
      <a
        className={classes["resume-job__name-link"]}
        target="_blank"
        rel="noopener noreferrer"
        href={companyWebsite}
      >
        {getCompany(companyName)}
      </a>
    </h3>

    {subtitles &&
      subtitles.map((subtitle) => (
        <div className={classes["resume-job__subtitle"]} key={subtitle}>
          {subtitle}
        </div>
      ))}

    {startDate && endDate ? (
      <div className={classes["resume-job__subtitle"]}>
        {getDate(startDate, endDate)}
      </div>
    ) : null}

    {details && details.length > 0 ? (
      <ul className={classes["resume-job__detail"]}>
        {details.map((detail) => (
          <li className={classes["resume-job__detail-item"]} key={detail}>
            {detail}
          </li>
        ))}
      </ul>
    ) : null}
  </section>
);

export default Job;

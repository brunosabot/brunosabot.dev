import classes from "./Job.module.css";

interface Props {
  companyName: string;
  companyWebsite: string;
  details: string[];
  endDate?: string;
  job: string;
  startDate?: string;
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
  details = [],
  endDate,
  job,
  startDate,
  subtitles = [],
}) => (
  <section className={classes.Job}>
    <h3 className={classes.JobTitle}>
      {job}&nbsp;@&nbsp;
      <a
        className={classes.JobTitleLink}
        href={companyWebsite}
        rel="noopener noreferrer"
        target="_blank"
      >
        {getCompany(companyName)}
      </a>
      {subtitles &&
        subtitles.map((subtitle) => (
          <span className={classes.JobSubtitle} key={subtitle}>
            &nbsp;-&nbsp;{subtitle}
          </span>
        ))}
    </h3>

    {startDate && endDate ? (
      <div className={classes.JobDates}>{getDate(startDate, endDate)}</div>
    ) : null}

    {details && details.length > 0 ? (
      <ul className={classes.JobDetail}>
        {details.map((detail) => (
          <li className={classes.JobDetailItem} key={detail}>
            {detail}
          </li>
        ))}
      </ul>
    ) : null}
  </section>
);

export default Job;

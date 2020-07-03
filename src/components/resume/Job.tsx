import React from "react";
import "./Job.css";

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
  return `@${companyName}`;
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
  <section className="resume-job">
    <h3 className="resume-job__name">
      {job}
      <a
        className="resume-job__name-link"
        target="_blank"
        rel="noopener noreferrer"
        href={companyWebsite}
      >
        {getCompany(companyName)}
      </a>
    </h3>

    {subtitles &&
      subtitles.map((subtitle) => (
        <div className="resume-job__subtitle" key={subtitle}>
          {subtitle}
        </div>
      ))}

    {startDate && endDate ? (
      <div className="resume-job__subtitle">{getDate(startDate, endDate)}</div>
    ) : null}

    <ul className="resume-job__detail">
      {details &&
        details.map((detail) => (
          <li className="resume-job__detail-item" key={detail}>
            {detail}
          </li>
        ))}
    </ul>
  </section>
);

export default Job;

import jobs from "./jobs";
import resume from "../../files/resume.pdf";

const JobSection = () => {
  const jobsList = jobs();

  return (
    <div className="job-section">
      <div className="job-title">
        <h2>
          My <span>Journey</span>
        </h2>
      </div>
      <div className="job-life">
        {jobsList.map((job) => (
          <Experience
            dateInit={job.dateInit}
            dateEnd={job.dateEnd}
            job={job.job}
            company={job.company}
            description={job.description}
            isLast={job.isLast}
            key={job.id}
          />
        ))}
      </div>
      <form method="get" action={resume}>
        <button className="job-button" type="submit">
          Resume
        </button>
      </form>
    </div>
  );
};

const Experience = ({
  dateInit,
  dateEnd,
  job,
  company,
  description,
  isLast,
}) => {
  return (
    <div className="experience-row">
      <div className={`${isLast ? "experience-date-last" : "experience-date"}`}>
        <h5>{dateInit}</h5>
        <h5>{dateEnd}</h5>
      </div>
      <div className="experience-box ">
        <h4>{job}</h4>
        <h5>{company}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default JobSection;

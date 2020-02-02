import React, { useState } from "react";
import JobCard from "../../components/job-card/jobCard";
import * as constants from "./common/constant";

const PostedJobHistory = props => {
  const [showJob, setShowJob] = useState(true);

  const showCandidateHandler = (jobDetails, btn, event) => {
    setShowJob(false);
    console.log("job details", jobDetails);
  }

  const downloadResumeHandler = () => {
    alert("downloading..")
  }
  return (
    <div className="job-history">
      {showJob ? (
      <JobCard
        list={constants.JOB_LIST}
        actionButtonList={constants.ACTION_BUTTONS}
        showCandidates={showCandidateHandler}
      />
      ): (<JobCard
        list={constants.CANDIDATE_LIST}
        actionButtonList={constants.DOWNLOAD_RESUME}
        downloadResume={downloadResumeHandler}
      />)}
    </div>
  );
};

export default PostedJobHistory;

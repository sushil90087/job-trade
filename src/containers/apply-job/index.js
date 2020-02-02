import React from "react";
import JobCard from "../../components/job-card/jobCard";
import * as constants from "./common/constant";

const AppliedJobs = props => {
    return(
        <div className="applied-job">
            <JobCard list={constants.JOB_LIST} downloadJd/>
        </div>
    )
}

export default AppliedJobs;
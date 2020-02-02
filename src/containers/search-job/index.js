import React from "react";
import JobCard from "../../components/job-card/jobCard";
import * as constants from "./common/constant";

const SearchJob = props => {
    return(
        <div className="search-job">
            <JobCard list={constants.JOB_LIST} applyJob downloadJd/>
        </div>
    )
}

export default SearchJob;
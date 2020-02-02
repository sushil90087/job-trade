import React from "react";
import * as constants from "./common/constant";
import DynamicForm from "../../components/dynamic-form/dynamicForm";

const JobPost = props => {
  return (
    <div className="section-conatiner job-post">
      <div className="form-section">
        <DynamicForm
          fieldList={constants.FORM_CONTROL_LIST}
          actionButton={constants.ACTION_BUTTON}
        />
      </div>
    </div>
  );
};

export default JobPost;

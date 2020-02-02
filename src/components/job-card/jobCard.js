import React from "react";
import "./style.scss";
import GetIcons from "../../common/utility/iconSelector";
import { Button } from "@material-ui/core";

const JobCard = props => {
  const { list, downloadJd, applyJob, actionButtonList } = { ...props };

  const applyJobHandler = (card, event) => {
    alert("Applied");
  };
  const downloadJdHanlder = (card, event) => {};

  const buttonHandler = (jobDetails, btn, event) => {
    if (props[btn.functionName])
      props[btn.functionName](jobDetails, btn, event);
  };

  return (
    <div className="card-container">
      {list
        ? list.map((card, index) => (
            <div className="job-card">
              <div className="job-title job-field">{card.introduction}</div>
              <div className=" job-field company-name">{card.companyName}</div>
              <div className=" job-field package">
                {GetIcons("salary")}
                <span className="min-package package">
                  {card.minimumPackage ? card.minimumPackage : 0}
                </span>
                <span className="max-package package">
                  <span> - </span>
                  {card.maximumPackage ? card.maximumPackage : "Not Disclosed"}
                </span>
                <span className="job-text package"> LPA</span>
              </div>
              <div className=" job-field exp-loc">
                <div className="exp">
                  {GetIcons("star")}
                  <span className="min-package package">
                    {card.minimumExp ? card.minimumExp : 0}
                  </span>
                  <span className="max-package package">
                    <span> - </span>
                    {card.maximumExp ? card.maximumExp : 0}
                  </span>
                  <span className="job-text package"> Years</span>
                </div>
                <div className="loc">
                  {GetIcons("location")}
                  {card.jobLocation}
                </div>
              </div>
              <div className=" job-field skillset align-field">
                <span className="bold">Notice Period : </span>
                <span className="job-text">{card.noticePeriod} months</span>
              </div>
              <div className=" job-field skillset align-field">
                <span className="bold">Number of Vacanicies : </span>
                <span className="job-text">{card.numberOfVacancy}</span>
              </div>
              <div className=" job-field description align-field">
                {card.description}
              </div>
              <div className=" job-field skillset align-field">
                <span className="bold">Skillset : </span>
                <span className="job-text">{card.skillset}</span>
              </div>
              <div className=" job-field align-field action-button">
                {downloadJd ? (
                  <Button
                    variant="contained"
                    color="primary"
                    name="applyJobSubmit"
                    onClick={e => {
                      downloadJdHanlder(card, e);
                    }}
                  >
                    Download JD
                  </Button>
                ) : null}
                {applyJob ? (
                  <Button
                    variant="contained"
                    color="primary"
                    name="applyJobSubmit"
                    onClick={e => {
                      applyJobHandler(card, e);
                    }}
                  >
                    Apply Job
                  </Button>
                ) : null}
                {actionButtonList
                  ? actionButtonList.map((btn, index) => (
                      <Button
                        variant="contained"
                        color="primary"
                        name={btn.name}
                        onClick={e => {
                          buttonHandler(card, btn, e);
                        }}
                      >
                        {btn.label}
                      </Button>
                    ))
                  : null}
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default JobCard;

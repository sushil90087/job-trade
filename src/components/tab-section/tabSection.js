import React from "react";
import "./style.scss";
import { Tabs, Tab, Typography, Box, makeStyles } from "@material-ui/core";
import * as constants from "./constant";
import JobPost from "../../containers/job-post";
import SearchJob from "../../containers/search-job";
import AppliedJobs from "../../containers/apply-job";
import PostedJobHistory from "../../containers/posted-job-history";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    minHeight: "calc(100vh - 151px)"
  },
  selected: {
    backgroundColor: "#ddf0f8",
    fontFamily: "Roboto-Medium"
  },
  tabRoot: {
    fontSize: "14px",
    textTransform: "none",
    textAlign: "left"
  },
  wrapper: {
    alignItems: "flex-start"
  },
  indicator: {
    backgroundColor: "#1976d2"
  }
}));

const TabSection = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="content-container">
      <div className={classes.root}>
        <div className="tab-container">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs"
            className={classes.tabs}
            classes={{ indicator: classes.indicator }}
          >
            {constants.tabList.map((tab, index) => (
              <Tab
                label={tab.label}
                {...a11yProps(index)}
                classes={{
                  root: classes.tabRoot,
                  selected: classes.selected,
                  wrapper: classes.wrapper
                }}
              />
            ))}
          </Tabs>
        </div>
        <div className="panel-container">
          <TabPanel value={value} index={0}>
            <SearchJob />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <AppliedJobs />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <JobPost />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <PostedJobHistory />
          </TabPanel>
        </div>
      </div>
    </div>
  );
};

export default TabSection;

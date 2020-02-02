import React from "react";
import Header from "../../components/header/header";
import SubHeader from "../../components/sub-header/subHeader";
import TabSection from "../../components/tab-section/tabSection";

const Home = props => {
  return (
    <div className="page-container">
      <Header />
      <div className="page-section">
        <SubHeader />
      </div>
      <div className="page-section">
        <TabSection />
      </div>
    </div>
  );
};

export default Home;

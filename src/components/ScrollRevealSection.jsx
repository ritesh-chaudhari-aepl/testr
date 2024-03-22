import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Hero from "@/pages/Hero";
import AboutFilm from "@/pages/AboutFilm";
import Crowdfunding from "@/pages/Crowdfunding";
import MeetTrustees from "@/pages/MeetTrustees";
import IssuesImportance from "@/pages/IssuesImportance";
import Updates from "@/pages/Updates";
import ContactUs from "@/pages/ContactUs";

const ScrollRevealSection = () => (
  <ReactFullpage
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Hero />
          </div>
          <div className="section">
            <AboutFilm />
          </div>
          <div className="section">
            <Crowdfunding />
          </div>
          <div className="section">
            <MeetTrustees />
          </div>
          <div className="section">
            <IssuesImportance />
          </div>
          <div className="section">
            <Updates />
          </div>
          <div className="section">
            <ContactUs />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default ScrollRevealSection;

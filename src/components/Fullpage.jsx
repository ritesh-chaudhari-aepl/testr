import React from "react";
import Hero from "@/pages/Hero copy";
import AboutFilm from "@/pages/AboutFilm";
import Crowdfunding from "@/pages/Crowdfunding";
import MeetTrustees from "@/pages/MeetTrustees";
import IssuesImportance from "@/pages/IssuesImportance";
import Updates from "@/pages/Updates";
import ContactUs from "@/pages/ContactUs";
import ScrollRevealSection from "./ScrollRevealSection";
import { FullPage, Slide } from "react-full-page";

const Fullpage = () => {
  return (
    <>
      <FullPage>
        <Slide>
          <Hero
            onScrollToSection={() => {
              scrollToSection();
            }}
          />
        </Slide>
        <Slide>
          <AboutFilm />
        </Slide>
        <Slide>
          <Crowdfunding />
        </Slide>
        <Slide>
          <MeetTrustees />
        </Slide>
        <Slide>
          <IssuesImportance />
        </Slide>
        <Slide>
          <Updates />
        </Slide>
        <Slide>
          <ContactUs />
        </Slide>
      </FullPage>
      {/* <div style={{ minHeight: "100vh", overflow: "hidden" }}>
        <ScrollRevealSection>
          <Hero />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <AboutFilm />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <Crowdfunding />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <MeetTrustees />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <IssuesImportance />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <Updates />
        </ScrollRevealSection>
        <ScrollRevealSection>
          <ContactUs />
        </ScrollRevealSection>
      </div> */}
    </>
  );
};

export default Fullpage;

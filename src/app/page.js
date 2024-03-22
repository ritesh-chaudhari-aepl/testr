"use client";
import Hero from "../pages/Hero";
import AboutFilm from "../pages/AboutFilm";
import Crowdfunding from "../pages/Crowdfunding";
import MeetTrustees from "../pages/MeetTrustees";
import IssuesImportance from "../pages/IssuesImportance";
import Updates from "../pages/Updates";
import ContactUs from "../pages/ContactUs";
import Footer from "../pages/Footer";
import Header from "@/components/header/Header";
import Fullpage from "@/components/Fullpage";
import { useEffect } from "react";
import useIsLargerDevice from "@/hooks/useIsLargerDevice";
import ScrollRevealSection from "@/components/ScrollRevealSection";

export default function Home() {
  const scrollToSection = () => {
    const sessionsElement = document.getElementById("about");
    if (sessionsElement) {
      sessionsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const isLargerDevice = useIsLargerDevice();

  return (
    <>
      {/* <Header /> */}
      {/* <Header headerBg="bg-transparent" /> */}
      {/* <Hero
        onScrollToSection={() => {
          scrollToSection();
        }}
      />
      <AboutFilm />
      <Crowdfunding />
      <MeetTrustees />
      <IssuesImportance />
      <Updates />
      <ContactUs />
      <Footer /> */}
      {isLargerDevice ? (
        <>
          <ScrollRevealSection />
        </>
      ) : (
        <div className="regular-content">
          <Hero
            onScrollToSection={() => {
              scrollToSection();
            }}
          />
          <AboutFilm />
          <Crowdfunding />
          <MeetTrustees />
          <IssuesImportance />
          <Updates />
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  );
}

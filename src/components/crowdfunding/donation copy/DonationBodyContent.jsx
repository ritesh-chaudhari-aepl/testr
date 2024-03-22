"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import filmImage from "@/assets/hero-bg.webp";
import investmentGraphics from "@/assets/crowdfund/investment_graphic.webp";
import Investors from "../common/Investors";
import user from "@/assets/actor.png";
import FAQ from "../common/FAQ";
import Offerings from "../common/Offerings";
import Sidebar from "./Sidebar";
import Modals from "./tiers/Modals";

const DonationBodyContent = ({ href }) => {
  const donorsRef = useRef(null);
  const faqRef = useRef(null);
  // const offeringsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("donors");
  const [showPopup, setShowPopup] = useState(false);

  const handleTabClick = (ref, tabName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabName);
  };

  const getTabStyles = (tabName) => {
    return `text-xl cursor-pointer uppercase border-b-2 py-3 px-4 transition-colors focus:outline-none ${
      activeTab === tabName
        ? "text-yellow-dark border-yellow-dark"
        : "text-gray-600 border-transparent"
    }`;
  };

  const handleBackToProject = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <>
      <div
        className="scrollbar tab-container sticky top-0 bg-white z-20 pt-4 flex justify-center"
        style={{ boxShadow: "rgba(0, 0, 0, 0.25) 1px 1px 5px" }}
      >
        <div
          className="whitespace-nowrap"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            title="Donors"
            name="Donors"
            aria-label="Donors"
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(donorsRef, "donors")}
            className={getTabStyles("donors")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="true"
            tabIndex="0"
            dataheadlessui-state="selected"
          >
            Donors
          </button>
          <button
            title="FAQ"
            name="FAQ"
            aria-label="FAQ"
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(faqRef, "faq")}
            className={getTabStyles("faq")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            dataheadlessui-state
          >
            FAQ
          </button>
          {/* <button
            data-cy="page-nav-tabs"
            onClick={() => handleTabClick(faqRef, "offerings")}
            className={getTabStyles("offerings")}
            id="headlessui-tabs-tab-:rf:"
            role="tab"
            type="button"
            aria-selected="false"
            tabIndex="-1"
            dataheadlessui-state
          >
            Offerings
          </button> */}
        </div>
      </div>
      <div className="h-full w-full flex flex-col-reverse xl:flex-row lg:mx-auto px-6 xl:px-0 max-w-[960px] xl:max-w-[1264px]">
        <div className="flex flex-col xl:w-2/3">
          <div className="mb-6">
            <div
              ref={donorsRef}
              id="section-donors"
              data-title="donors"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <Investors usertypes="Donors" />
            </div>
            <div
              ref={faqRef}
              id="section-faq"
              data-title="FAQ"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <FAQ />
            </div>
            {/* <div
              ref={offeringsRef}
              id="section-offerings"
              data-title="Offerings"
              className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
            >
              <Offerings />
            </div> */}
          </div>
        </div>
        <div className="hidden xl:block w-1/3 pl-8">
          <div className="sticky top-24 my-6">
            <h3 className="text-lg font-semibold mb-4">Choose your Perk</h3>
            <Sidebar href={href} />
          </div>
        </div>
      </div>
      <div
        className="bg-white lg:hidden sticky bottom-0 left-0 px-6 py-4 right-0 text-center "
        style={{ boxShadow: "rgba(106, 115, 129, 0.12) 0px -8px 8px" }}
      >
        <button
          title="Donate Now"
          name="Donate Now"
          aria-label="Donate Now"
          onClick={handleBackToProject}
          data-cy="project-cta-button"
          className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded max-w-[420px] text-sm w-full bg-yellow-dark hover:bg-yellow-dark focus-visible:ring-yellow-dark active:bg-yellow-dark disabled:saturate-50 text-white disabled:text-gray-500 uppercase"
        >
          Donate
        </button>
      </div>
      {/* Popup */}
      {showPopup && <Modals btnCloseClick={closePopup} />}
    </>
  );
};

export default DonationBodyContent;

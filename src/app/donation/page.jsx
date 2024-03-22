"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import filmImage from "@/assets/hero-bg.webp";
import user from "@/assets/actor.png";
import "./style.css";
import DonationBannerVideo from "@/components/crowdfunding/donation/DonationBannerVideo";
import Header from "@/components/header/Header";
import Footer from "@/pages/Footer";
import DonationBodyContent from "@/components/crowdfunding/donation/DonationBodyContent";
import youtube from "@/assets/crowdfund/1.webp";
import TiersCards from "@/components/crowdfunding/donation/tiers/TiersCards";
import { cardData } from "@/data/nav2";
import Investors from "@/components/crowdfunding/common/Investors";
import FAQ from "@/components/crowdfunding/common/FAQ";
import Modals from "@/components/crowdfunding/donation/tiers/Modals";
import { useRouter } from "next/navigation";
import AboutDonation from "@/components/crowdfunding/donation/tabs/AboutDonation";
import Comment from "@/components/crowdfunding/donation/tabs/Comment";
// import DefaultModal from "@/components/crowdfunding/donation/tiers/DefaultModal";
import DefaultModal from "@/components/modals/DefaultModal";
import Sidebar from "@/components/crowdfunding/donation/Sidebar";

const Page = () => {
  // const donorsRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);
  // const commentRef = useRef(null);
  // const offeringsRef = useRef(null);
  const [activeTab, setActiveTab] = useState("about");
  const [showPopup, setShowPopup] = useState(false);

  const handleTabClick = (ref, tabName) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveTab(tabName);
  };

  const getTabStyles = (tabName) => {
    return `md:text-xl uppercase border-b-2 py-3 px-4 transition-colors focus:outline-none ${
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
  const router = useRouter();

  // const handleButtonClick = (value) => {
  //   // Example using query parameters

  //   router.push
  //   ({
  //     pathname: `/donation/perks?tierNo=${value.tierNo}&Inr=${value.Inr}`, // Replace with the actual destination page
  //     query: { cardData: JSON.stringify(cardData) },
  //   });

  //   // Example using state
  //   // router.push('/destinationPage', undefined, { shallow: true, state: { cardData } });
  // };

  // const handleButtonClick = (value) => {
  //   router.push({
  //     pathname: `/donation/perks`, // Replace with the actual destination page
  //     query: value, // Pass the card data as query parameters
  //   });
  // };
  // if (!router?.query?.cardData.id || !router?.query?.id) {
  //   return <div>loading...</div>;
  // } else {
  //   let projectId = router.query.projectId;
  //   let id = router.query.id;
  //   console.log("projectId", projectId);
  //   console.log("id", id);
  // }
  return (
    <>
      <Header headerBg="bg-black" position="relative" />

      {/* <div className="flex-1 font-WhitneySemibold mt-20"> */}
      <div className="flex-1 font-WhitneySemibold">
        <div className="font-WhitneySemibold">
          <DonationBannerVideo />
          <div
            className=" tab-container sticky top-0 bg-white z-20 pt-4 flex justify-center"
            style={{ boxShadow: "rgba(0, 0, 0, 0.25) 1px 1px 5px" }}
          >
            <div
              className="whitespace-nowrap cursor-pointer"
              role="tablist"
              aria-orientation="horizontal"
            >
              {/* <button
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
              </button> */}
              <button
                title="Heartfelt Messages from Supporters"
                name="Heartfelt Messages from Supporters"
                aria-label="Heartfelt Messages from Supporters"
                data-cy="page-nav-tabs"
                onClick={() => handleTabClick(aboutRef, "about")}
                className={getTabStyles("about")}
                id="headlessui-tabs-tab-:rf:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex="-1"
                dataheadlessui-state
              >
                Messages from Supporters
              </button>
              {/* <button
                data-cy="page-nav-tabs"
                onClick={() => handleTabClick(commentRef, "comment")}
                className={getTabStyles("comment")}
                id="headlessui-tabs-tab-:rf:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex="-1"
                dataheadlessui-state
              >
                Comment
              </button> */}
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
            </div>
          </div>
          <div className="h-full w-full flex flex-col-reverse xl:flex-row lg:mx-auto px-6 xl:px-0 max-w-[960px] xl:max-w-[1264px]">
            <div className="flex flex-col xl:w-2/3">
              <div className="mb-6">
                {/* <div
                  ref={donorsRef}
                  id="section-donors"
                  data-title="donors"
                  className="flex flex-col justify-center pt-20 first:pt-0 first:mt-6"
                >
                  <Investors usertypes="Donors" />
                </div> */}
                <div
                  ref={aboutRef}
                  id="section-about"
                  data-title="About"
                  className="flex flex-col justify-center pt-16 first:pt-0 first:mt-6 pb-6 border-b border-gray-8 "
                >
                  <AboutDonation />
                </div>
                {/* <div
                  ref={commentRef}
                  id="section-comment"
                  data-title="Comment"
                  className="flex flex-col justify-center pt-16 first:pt-0 first:mt-6 pb-6 border-b border-gray-8 "
                >
                  <Comment />
                </div> */}
                <div
                  ref={faqRef}
                  id="section-faq"
                  data-title="FAQ"
                  className="flex flex-col justify-center pt-16 first:pt-0 first:mt-6 pb-6 border-b border-gray-8 "
                >
                  <FAQ />
                </div>
              </div>
            </div>
            {/* sidebar */}
            <div className="hidden xl:block w-1/3 pl-8">
              <div className="sticky top-24 my-6">
                {/* <h3 className="text-lg font-semibold mb-4">Contribute Now</h3> */}
                {/* <div className="flex flex-col gap-6 overflow-y-auto h-screen pr-3">
                  {cardData.map((d) => (
                    <TiersCards
                      key={d.id}
                      imagesrc={d.imagesrc}
                      tierNo={d.tierNo}
                      Inr={d.Inr}
                      redLine={d.redLine}
                      offpercent={d.offpercent}
                      CadAmount={d.CadAmount}
                      Cad={d.Cad}
                      desc={d.desc}
                      includedItems={d.includedItems}
                      claim={d.claim}
                      href={`/donation/perks?tierNo=${d.tierNo}&Inr=${d.Inr}`}
                      onClick={() => handleButtonClick(d)}
                    />
                  ))}
                </div> */}
                <Sidebar />
              </div>
            </div>
          </div>
          <div
            className="bg-white lg:hidden sticky bottom-0 left-0 px-6 py-4 right-0 text-center "
            style={{ boxShadow: "rgba(106, 115, 129, 0.12) 0px -8px 8px" }}
          >
            <button
              onClick={handleBackToProject}
              data-cy="project-cta-button"
              className="focus:outline-none focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded max-w-[420px] text-sm w-full bg-yellow-dark hover:bg-yellow-dark focus-visible:ring-yellow-dark active:bg-yellow-dark disabled:saturate-50 text-white disabled:text-gray-500 uppercase cursor-pointer"
            >
              Donate
            </button>
          </div>
        </div>
      </div>

      <Footer />

      {/* Popup */}
      {showPopup && <DefaultModal btnCloseClick={closePopup} />}
    </>
  );
};

export default Page;

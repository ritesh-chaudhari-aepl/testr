import React, { useState } from "react";
import TiersCards from "./tiers/TiersCards";
import { cardData } from "@/data/nav2";
import ShareBtn from "../common/ShareBtn";
import { GiTrophyCup } from "react-icons/gi";
import DonorsCard from "@/components/cards/DonorsCard";
import TopContributors from "@/components/cards/sidebar/TopContributors";
import SocialSharing from "@/components/cards/sidebar/SocialSharing";
import TotalSupporters from "@/components/cards/sidebar/TotalSupporters";
import DefaultModal from "@/components/modals/DefaultModal";
import DonateBox from "./DonateBox";
// import DefaultModal from "./tiers/DefaultModal";

const Sidebar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleBackToProject = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col gap-3 overflow-y-auto">
      <h3 className="text-lg font-semibold ">
        Share this Donation Opportunity
      </h3>
      <ShareBtn />

      <h3 className="text-lg font-semibold mt-4">Contribute Now</h3>
      <div className="p-6 border border-gray-8 rounded bg-gradient-to-br from-[#f5f5f5] to-[#f1f1f1]">
        <div>
          <div className="w-full h-2 relative rounded-lg bg-white bg-opacity-30">
            <div
              role="progressbar"
              className="w-full bg-gray-300 rounded-lg bg-opacity-80 h-2 relative"
            >
              <span
                role="progressbar"
                // className="w-3 bg-green-dark rounded-lg bg-opacity-80 h-2 absolute"
                className="w-3 bg-yellow-dark rounded-lg bg-opacity-80 h-2 absolute"
              ></span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-between text-black">
          <div className="w-full flex md:block pr-1">
            <div>
              <div className="lg:mt-1">
                <div className="flex flex-col">
                  <div
                    className="text-2xl font-semibold leading-normal tracking-tighter sm:text-4xl sm:font-medium"
                    data-cy="capital-amount"
                  >
                    Rs.0
                  </div>
                  {/* <div className="text-sm leading-relaxed tracking-none font-medium">
                    of Rs.618,000 max *
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex flex-row items-center text-sm md:text-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="mr-1"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
              </svg>
              <div className="capitalize caption-md sm:caption-lg whitespace-nowrap">
                0 People*
              </div>
            </div>
          </div>
          {/* <div className="lg:mt-1 w-full pl-1">
            <div className="flex flex-col items-end">
              <div className="text--2xl font-semibold leading-normal tracking-tighter md:text-4xl md:font-medium">
                4
              </div>
              <div className="capitalize text-sm leading-relaxed tracking-none whitespace-nowrap text-right">
                Days Left *
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <button
            title="Donate Now"
            name="Donate Now"
            aria-label="Donate Now"
            onClick={handleBackToProject}
            data-cy="project-cta-button"
            className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded block w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
          >
            Donate
          </button>
        </div>
        <div className="text-black">
          <p className="text-xl leading-relaxed tracking-none mt-3 text-center font-light capitalize">
            Rs.1000 Minimum Donation
          </p>
        </div>
        <div className="mt-4 mb-2"></div>
        {/* <div className="mt-4 px-1 mx-auto text-[11px] leading-tight tracking-none text-gray-600 font-medium">
          *People includes all persons who have submitted subscription
          materials. Amount raised is an estimate that includes subscriptions,
          however not all such amounts have been accepted or closed, & some
          subscriptions may not be accepted.
        </div> */}
      </div>
      <DonateBox />
      <TopContributors />
      {/* <SocialSharing /> */}
      <TotalSupporters />

      {/* {cardData.map((d) => (
        <TiersCards
          key={d.id}
          tierNo={d.tierNo}
          Inr={d.Inr}
          Cad={d.Cad}
          desc={d.desc}
          includedItems={d.includedItems}
          claim={d.claim}
          href={`/donation/perks-contribution?tierNo=${d.tierNo}&Inr=${d.Inr}`}
        />
      ))} */}

      {/* Popup */}
      {showPopup && <DefaultModal btnCloseClick={closePopup} />}
    </div>
  );
};

export default Sidebar;

import React, { useState } from "react";
import { GiTrophyCup } from "react-icons/gi";
import DonorsCard from "@/components/cards/DonorsCard";
import { topContributors } from "@/data/nav2";
// import DefaultModal from "@/components/crowdfunding/donation/tiers/DefaultModal";
import DonationForm from "@/components/modals/DonationForm";
import DefaultModal from "@/components/modals/DefaultModal";

const TopContributors = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showAllContributors, setShowAllContributors] = useState(false);

  const handleToggleReadMore = () => {
    setShowAllContributors((prev) => !prev);
  };

  const handleBackToProject = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const visibleContributors = showAllContributors
    ? topContributors
    : topContributors.slice(0, 2);

  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold mt-4 flex gap-2 items-center">
        <span className="text-2xl text-gray-800">
          <GiTrophyCup />
        </span>
        Top Contributers / Donors
      </h3>
      <div className="py-6 top-donors px-8 border grid gap-4 border-gray-8 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1]">
        {visibleContributors.map((supporter, index) => (
          <DonorsCard
            key={supporter.nameShort}
            nameShort={supporter.nameShort}
            name={supporter.name}
            amount={supporter.amount}
          />
        ))}
        <button
          title="read more/less"
          name="read more/less"
          aria-label="read more/less"
          onClick={handleToggleReadMore}
          className="mt-4 text-blue-500 underline cursor-pointer"
        >
          {showAllContributors ? "Read Less" : "Read More"}
        </button>
        <div>
          <button
            title="Donation"
            name="Donation"
            aria-label="Donation"
            onClick={handleBackToProject}
            data-cy="project-cta-button"
            className="focus:outline-none cursor-pointer focus-visible:ring-1 leading-tight tracking-wide disabled:pointer-events-none transition-all duration-150 h-12 px-6 rounded block w-full mt-2 mx-auto bg-yellow-dark hover:bg-green-dark focus-visible:ring-yellow-dark active:bg-green-dark disabled:bg-copper-disabled text-white disabled:text-gray-500"
          >
            Donation
          </button>
        </div>
      </div>
      {showPopup && <DefaultModal btnCloseClick={closePopup} />}
      {/* {showPopup && <DefaultModal btnCloseClick={closePopup} />} */}
    </div>
  );
};

export default TopContributors;

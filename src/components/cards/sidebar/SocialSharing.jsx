import React, { useState } from "react";
import DonorsCard from "../DonorsCard";
import ShareBtn from "@/components/crowdfunding/common/ShareBtn";
import { GiTrophyCup } from "react-icons/gi";
import { socialSharing } from "@/data/nav2";

const SocialSharing = () => {
  const [showAllContributors, setShowAllContributors] = useState(false);

  const handleToggleReadMore = () => {
    setShowAllContributors((prev) => !prev);
  };

  const visibleContributors = showAllContributors
    ? socialSharing
    : socialSharing.slice(0, 2);

  return (
    <div className="grid gap-4">
      <h3 className="text-lg font-semibold mt-4 flex gap-2 items-center">
        <span className="text-2xl text-gray-800">
          <GiTrophyCup />
        </span>
        Most Raised from Social Sharing
      </h3>

      <div className="py-6 social-sharing px-8 border grid gap-4 border-gray-8 rounded bg-gradient-to-br from-[#f4f4f4] to-[#f1f1f1]">
        {visibleContributors.map((supporter, index) => (
          <DonorsCard
            key={supporter.nameShort}
            nameShort={supporter.nameShort}
            name={supporter.name}
            amount={supporter.amount}
          />
        ))}
        <button
          title="read more/less btn"
          name="read more/less btn"
          aria-label="read more/less btn"
          onClick={handleToggleReadMore}
          className="mt-4 text-blue-500 underline cursor-pointer"
        >
          {showAllContributors ? "Read Less" : "Read More"}
        </button>

        <ShareBtn />
      </div>
    </div>
  );
};

export default SocialSharing;

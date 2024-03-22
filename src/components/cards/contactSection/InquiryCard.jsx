import InquiryForm from "@/components/form/InqiuryForm";
import InquiryPopup from "@/components/updates-video/InquiryPopup";
import VideoPopup from "@/components/updates-video/VideoPopup";
import React, { useState } from "react";

const InquiryCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleVideoPopup = () => {
    // Show the popup
    setShowPopup(true);
  };

  const closePopup = () => {
    // Close the popup
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col p-12 xl:p-24 justify-center items-start rounded-xl bg-clip backdrop-filter backdrop-blur-lg">
      <div className="flex flex-col items-center gap-11">
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-white font-WorkSans text-2xl not-italic font-semibold capitalize leading-9">
            Inquiry Form
          </h3>
          <p className="text-white text-center font-WorkSans text-lg not-italic font-normal leading-7">
            Your thoughts, suggestions, and inquiries are invaluable to us.
            Reach out and become a part of Radha&apos;s great adventure!
          </p>
        </div>
        <button
          onClick={handleVideoPopup}
          name="connect with us"
          title="Connect With Us"
          aria-label="Connect with Us btn"
          className="cursor-pointer capitalize px-6 py-3 items-center rounded-full bg-yellow-dark text-textDark font-WorkSans text-lg not-italic font-medium leading-7"
        >
          connect with us
        </button>
      </div>
      {/* Popup */}
      {showPopup && <InquiryPopup btnCloseClick={closePopup} />}
    </div>
  );
};

export default InquiryCard;
